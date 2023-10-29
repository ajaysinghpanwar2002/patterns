// Mediator/Middleware Pattern - Use a central mediator object to handle communication between components

/**
 * @mediator_pattern
 * The mediator pattern makes it possible for components to interact with each other through a central point: the mediator. Instead of directly talking to each other, the mediator receives the requests, and sends them forward! In JavaScript, the mediator is often nothing more than an object literal or a function.
 */

// A good use case for the mediator pattern is a chatroom! The users within the chatroom won't talk to each other directly. Instead, the chatroom serves as the mediator between the users.

class ChatRoom {
    logMessage(user, message) {
        const time = new Date();
        const sender = user.getName();

        console.log(`${time} [${sender}]: ${message}`);
    }
}

class User {
    constructor(name, ChatRoom) {
        this.name = name;
        this.chatroom = this.chatroom;
    }

    getName() {
        return this.name;
    }

    send(message) {
        this.chatroom.logMessage(this, message);
    }
}

// We can create new users that are connected to the chat room. Each user instance has a send method which we can use in order to send messages.

const chatroom = new ChatRoom();

const user1 = new User("John Doe", chatroom);
const user2 = new User("Raj", chatroom);

user1.send("Hi there!");
user2.send("Hey!");