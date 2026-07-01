import type { Customer } from "../entities/customer/Customer.js";
import type { OrderItem } from "../entities/ordem_item/order_item.js";
import { Order } from "../entities/order/Order.js";
import { randomUUID } from "node:crypto";

export class OrderService {
    static totalOrderItemsQuantity(order: Order[]): number {
        return order.reduce((total: number, order: Order) => total + order.totalItemsQuantity(), 0);
    }
    static placeOrder(customer: Customer, items: OrderItem[]): Order {
        if (items.length === 0) {
            throw new Error("Order must have at least one item");
        }
        if (items.some(item => item.getPrice() <= 0)) {
            throw new Error("Price must be greater than 0");
        }
        if (customer._id.length === 0) {
            throw new Error("Customer ID is required");
        }
        if (customer._name.length === 0) {
            throw new Error("Customer name is required");
        }
        const order = new Order(randomUUID(), customer._id, items);
        customer.addRewardPoints(order.total() * 0.5); // 50% of the order total
        return order;
    }
}