// Mixin Pattern - Add functionality to objects or classes without inheritance

/**
 * @Mixin
 * A mixin is an object that we can use in order to add reusable functionality to another object or class, without using inheritance. We can't use mixins on their own: their sole purpose is to add functionality to objects or classes without inheritance.
 */

class Dog {
    constructor(name) {
        this.name = name;
    }
}

// A dog should be able to do more than just have a name. It should be able to bark, wag its tail, and play! Instead of adding this directly to the Dog, we can create a mixin that provides the bark, wagTail and play property for us.

const dogFunctionality = {
    bark: () => console.log("Woof!"),
    wagTail: () => console.log("Wagging my tail!"),
    play: () => console.log("Playing!"),
};

// we can add the dogFunctionality mixin to the dog prototype with the Obejct.assign method. This method let us add properties to the target object: Dog.prototype in this case. Each new instance of Dog will have access to the properties of dogFunctionality , as they're added to the Dog's prototype!

Object.assign(Dog.prototype, dogFunctionality);

const pet1 = new Dog("Daisy");

pet1.name; // Daisy
pet1.bark(); // Woof!
pet1.play(); // Playing!

// Although we can add functionality with mixins without inheritance, mixins themselves can use inheritance!

// Let's create a animalFunctionality mixin that adds the walk and sleep properties.

const animalFunctionality = {
    walk: () => console.log("Walking!"),
    sleep: () => console.log("Sleeping!"),
};


// We can add these properties to the dogFunctionality prototype, using Object.assign. In this case, the target object is dogFunctionality.

Object.assign(dogFunctionality, animalFunctionality);
Object.assign(Dog.prototype, dogFunctionality);

/**
 * @index.js
    class Dog {
    constructor(name) {
    this.name = name;
    }
}

const animalFunctionality = {
    walk: () => console.log("Walking!"),
    sleep: () => console.log("Sleeping!")
};

const dogFunctionality = {
    __proto__: animalFunctionality,
    bark: () => console.log("Woof!"),
    wagTail: () => console.log("Wagging my tail!"),
    play: () => console.log("Playing!"),
    walk() {
    super.walk();
    },
    sleep() {
    super.sleep();
    }
};

Object.assign(Dog.prototype, dogFunctionality);

const pet1 = new Dog("Daisy");

console.log(pet1.name);
pet1.bark();
pet1.play();
pet1.walk();
pet1.sleep();

 */

// An example of a mixin in the real world is visible on the Window interface in a browser environment. The Window object implements many of its properties from the WindowOrWorkerGlobalScope and WindowEventHandlers mixins, which allow us to have access to properties such as setTimeout and setInterval, indexedDB, and isSecureContext.

// Since it's a mixin, thus is only used to add functionality to objects, you won't be able to create objects of type WindowOrWorkerGlobalScope.

/**
    @React (pre ES6)
Mixins were often used to add functionality to React components before the introduction of ES6 classes. The React team discourages the use of mixins as it easily adds unnecessary complexity to a component, making it hard to maintain and reuse. The React team encouraged the use of higher order components instead, which can now often be replaced by Hooks.
 */