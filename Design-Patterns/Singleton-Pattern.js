// Singleton Pattern - Share a single global instance throughout our application

/**
 * @Singleton
 * Singletons are classes which can be instantiated once, and can be accessed globally. This single instance can be shared throughout our application, which makes Singletons great for managing global state in an application.
 */

/**
let counter = 0;

class Counter {
    getInstance() {
        return this;
    }
    getCount() {
        return counter;
    }
    increment() {
        return ++counter;
    }
    decrement() {
        return --counter;
    }
}
 */

// However, this class doesn't meet the criteria for a Singleton! A Singleton should only be able to get instantiated once. Currently, we can create multiple instances of the Counter class.

/**
    const counter1 = new Counter();
    const counter2 = new Counter();
    console.log(counter1.getInstance() === counter2.getInstance()); // false
 */

// By calling the new method twice, we just set counter1 and counter2 equal to different instances. The values returned by the getInstance method on counter1 and counter2 effectively returned references to different instances: they aren't strictly equal!


// One way to make sure that only one instance can be created, is by creating a variable called instance. In the constructor of Counter, we can set instance equal to a reference to the instance when a new instance is created. We can prevent new instantiations by checking if the instance variable already had a value. If that's the case, an instance already exists. This shouldn't happen: an error should get thrown to let the user know

let instance;
let counter = 0;

class Counter {
    constructor() {
        if(instance){
            throw new Error("You can create one instance!")
        }
        instance = this;
    }
    getInstance() {
        return this;
    }
    getCount() {
        return counter;
    }
    increment() {
        return ++counter;
    }
    decrement() {
        return --counter;
    }
}

const singletonCounter = Object.freeze(new Counter());
export default singletonCounter;

// Tradeoffs

/**
 * @OverKill
 * In many programming languages, such as Java or C++, it's not possible to directly create objects the way we can in JavaScript. In those object-oriented programming languages, we need to create a class, which creates an object. That created object has the value of the instance of the class, just like the value of instance in the JavaScript example.

However, the class implementation shown in the examples above is actually overkill. Since we can directly create objects in JavaScript, we can simply use a regular object to achieve the exact same result. Let's cover some of the disadvantages of using Singletons!
 */

/**
 * @Regular_Object
    let count = 0;
    const counter = {
        increment() {
            return ++count;
        },
        decrement() {
            return --count;
        }
    };
    Object.freeze(counter);
    export { counter };
 */

/**
 * @Testing
 * Testing code that relies on a Singleton can get tricky. Since we can't create new instances each time, all tests rely on the modification to the global instance of the previous test. The order of the tests matter in this case, and one small modification can lead to an entire test suite failing. After testing, we need to reset the entire instance in order to reset the modifications made by the tests.
 */

/**
 * @dependency_Hiding
 * When importing another module, superCounter.js in this case, it may not be obvious that module is importing a Singleton. In other files, such as index.js in this case, we may be importing that module and invoke its methods. This way, we accidentally modify the values in the Singleton. This can lead to unexpected behavior, since multiple instances of the Singleton can be shared throughout the application, which would all get modified as well.
 */

/**
 * @Global_behavior
Having global variables is generally considered as a bad design decision. Global scope pollution can end up in accidentally overwriting the value of a global variable, which can lead to a lot of unexpected behavior.

In ES2015, creating global variables is fairly uncommon. The new let and const keyword prevent developers from accidentally polluting the global scope, by keeping variables declared with these two keywords block-scoped. The new module system in JavaScript makes creating globally accessible values easier without polluting the global scope, by being able to export values from a module, and import those values in other files.
 */

/**
 * @State_management_in_React
In React, we often rely on a global state through state management tools such as Redux or React Context instead of using Singletons. Although their global state behavior might seem similar to that of a Singleton, these tools provide a read-only state rather than the mutable state of the Singleton. When using Redux, only pure function reducers can update the state, after a component has sent an action through a dispatcher.

Although the downsides to having a global state don't magically disappear by using these tools, we can at least make sure that the global state is mutated the way we intend it, since components cannot update the state directly.
 */