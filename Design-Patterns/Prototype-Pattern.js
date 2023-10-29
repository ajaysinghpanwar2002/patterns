// Prototype Pattern - Share properties among many objects of the same type

/**
 * @prototype
 * The prototype pattern is a useful way to share properties among many objects of the same type. The prototype is an object that's native to JavaScript, and can be accessed by objects through the prototype chain.
 */

class Dog {
    constructor(name) {
        this.name = name;
    }
    bark() {
        return `woof!`;
    }
}

const dog1 = new Dog("Daisy");
const dog2 = new Dog("Max");
const dog3 = new Dog("Spot");


console.log(Dog.prototype)

console.log(dog1.__proto__);

/**
 * Say that our dogs shouldn't only be able to bark, but they should also be able to play! We can make this possible by adding a play property to the prototype.
 */

Dog.prototype.play = () => console.log("Playing now!");

dog1.play();

/**
 * @prototype_chain
 * The term prototype chain indicates that there could be more than one step. Indeed! So far, we've only seen how we can access properties that are directly available on the first object that __proto__ has a reference to. However, prototypes themselves also have a __proto__ object!
 */

// Let's create another type of dog, a super dog! This dog should inherit everything from a normal Dog, but it should also be able to fly. We can create a super dog by extending the Dog class and adding a fly method.

class SuperDog extends Dog {
    constructor(name) {
        super(name);
    }
    fly() {
        return "Flying!";
    }
}

const dog4 = new SuperDog("Daisy");
dog4.bark();
dog4.fly();

// It gets clear why it's called a prototype chain: when we try to access a property that's not directly available on the object, JavaScript recursively walks down all the objects that __proto__ points to, until it finds the property!

/**
 * @Object.create
 * The Object.create method lets us create a new object, to which we can explicitly pass the value of its prototype
 */

const dog = {
    bark(){
        return `Woof!`;
    }
}

const pet1 = Object.create(dog);
pet1.bark(); // Woof!
console.log("Direct properties on pet1: ", Object.keys(pet1));
console.log("Properties on pet1's prototype: ", Object.keys(pet1.__proto__))