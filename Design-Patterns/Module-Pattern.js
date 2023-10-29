// Module Pattern - Split up your code into smaller, reusable pieces

// Dynamic import

// When importing all modules on the top of a file, all modules get loaded before the rest of the file. In some cases, we only need to import a module based on a certain condition. With a dynamic import, we can import modules on demand.

button.addEventListener("click", () => {
    import("./math.js").then((module) => {
        console.log("Add: ", module.add(1, 2));
        console.log("Multiply: ", module.multiply(3, 2));

        const button = document.getElementById("btn");
        button.innerHTML = "Check the console";
    });
});

// Or with async/await 
button.addEventListener("click", async () => {
    const module = await import("./math.js");
    console.log("Add: ", module.add(1, 2));
    console.log("Multiply: ", module.multiply(3, 2));
});

//By dynamically importing modules, we can reduce the page load time. We only have to load, parse, and compile the code that the user really needs, when the user needs it.

