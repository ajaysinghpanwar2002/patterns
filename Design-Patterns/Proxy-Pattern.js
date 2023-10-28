// Proxy Pattern - Intercept and control interactions to target objects

/**
 * @Proxy
 * With a Proxy object, we get more control over the interactions with certain objects. A proxy object can determine the behavior whenever we're interacting with the object, for example when we're getting a value, or setting a value.

 * Generally speaking, a proxy means a stand-in for someone else. Instead of speaking to that person directly, you'll speak to the proxy person who will represent the person you were trying to reach. The same happens in JavaScript: instead of interacting with the target object directly, we'll interact with the Proxy object.
 */

// let's create a person object

const person = {
    name: 'John',
    age: 34,
    nationality: 'American'
};

// Instead of interacting with this object directly, we want to interact with a proxy object. In JavaScript, we can easily create a new proxy by creating a new instance of Proxy.

/**
 * @personProxy
    const personProxy = new Proxy(person, {});
 */

// the second object of Proxy is an object that represents the handler. In the handler we can define the specific behavior based on the type of interaction. The most common ones are get and set:

/**
 * @get : Gets invoked when trying to access the property
 * @set : Gets invoked when trying to modify the property
 */

// Instead of interacting with person object directly, we will be interacting with personProxy

const personProxy = new Proxy(person, {
    get: (obj, prop) => {
        console.log(`The value of ${prop} is ${obj[prop]}`);
    },
    set: (obj, prop, value) => {
        console.log(`Changed ${prop} from ${obj[prop]} to ${value}`);
        obj[prop] = value;
    }
})

// Perfect! Let's see what happens when we're trying to modify or retrieve a property.

personProxy.name; // The value of name is John
personProxy.age = 43; // Changed age from 34 to 43

/**
 * @Reflect
1. JavaScript provides a built-in object called Reflect, which makes it easier for us to manipulate the target object when working with proxies.
2. Instead of accessing properties through obj[prop] or setting properties through obj[prop] = value, we can access or modify properties on the target object through Reflect.get() and Reflect.set(). The methods receive the same arguments as the methods on the handler object.
 */

const personProxyUsingReflect = new Proxy(person, {
    get: (obj, prop) => {
        console.log(`The value of ${prop} is ${Reflect.get(obj, prop)}`);
    },
    set: (obj, prop, value) => {
        console.log(`Changes ${prop} from ${obj[prop]} to ${value}`)
        Reflect.set(obj, prop, value)
    }
});
personProxyUsingReflect.name; // The value of name is John
personProxyUsingReflect.age = 44; // Changes age from 43 to 44
personProxyUsingReflect.name = "Raju"; // Changes name from John to Raju

// Tradeoffs

/**
 * @negative_performance
 * Overusing the Proxy object or performing heavy operations on each handler method invocation can easily affect the performance of your application negatively. It's best to not use proxies for performance-critical code.
 */