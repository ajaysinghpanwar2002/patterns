// Command Pattern - Decouple methods that execute tasks by sending commands to a commander

/**
 * @Command
 * With the Command Pattern, we can decouple objects that execute a certain task from the object that calls the method.
 */

// Let's say we have an online food delivery platform. Users can place, track, and cancel orders.

class OrderManager {
    constructor() {
        this.orders = []
    }

    placeOrder(order, id) {
        this.orders.push(id)
        return `You have successfully ordered ${order} (${id})`;
    }

    trackOrder(id) {
        return `Your order ${id} will arrive in 20 minutes.`
    }

    cancelOrder(id) {
        this.orders = this.orders.filter(order => order.id !== id)
        return `You have canceled your order ${id}`
    }
}
// On the OrderManager class, we have access to the placeOrder, trackOrder and cancelOrder methods. It would be totally valid JavaScript to just use these methods directly!

const manager = new OrderManager();

manager.placeOrder("Pad Thai", "1234");
manager.trackOrder("1234");
manager.cancelOrder("1234");

// However, there are downsides to invoking the methods directly on the manager instance. It could happen that we decide to rename certain methods later on, or the functionality of the methods change.

// Say that instead of calling it placeOrder, we now rename it to addOrder! This would mean that we would have to make sure that we don't call the placeOrder method anywhere in our codebase, which could be very tricky in larger applications. Instead, we want to decouple the methods from the manager object, and create separate command functions for each command!

// Let's refactor the OrderManager class: instead of having the placeOrder, cancelOrder and trackOrder methods, it will have one single method: execute. This method will execute any command it's given.

// Each command should have access to the orders of the manager, which we'll pass as its first argument.

class OrderManager {
    constructor() {
        this.orders = [];
    }

    execute(command, ...args) {
        return command.execute(this.orders, ...args);
    }
}


class Command {
    constructor(execute) {
        this.execute = execute;
    }
}

function PlaceOrderCommand(order, id) {
    return new Command((orders) => {
        orders.push(id);
        return `You have successfully ordered ${order} (${id})`;
    });
}

function CancelOrderCommand(id) {
    return new Command((orders) => {
        orders = orders.filter((order) => order.id !== id);
        return `You have canceled your order ${id}`;
    });
}

function TrackOrderCommand(id) {
    return new Command(() => `Your order ${id} will arrive in 20 minutes.`);
}

// Perfect! Instead of having the methods directly coupled to the OrderManager instance, they're now separate, decoupled functions that we can invoke through the execute method that's available on the OrderManager.

