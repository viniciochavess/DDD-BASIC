import { Customer } from "./entities/customer/Customer.js";
import { Address } from "./entities/customer/VO/Address.js";
import { OrderItem } from "./entities/ordem_item/order_item.js";
import { Order } from "./entities/order/Order.js";

console.log("Hello World");

const customer = new Customer("1", "John Doe");
const addressCustomer = new Address("123 Main St", "123", "12345", "Anytown", "CA", "USA");
customer.Address = addressCustomer;


const item1 = new OrderItem("1", "Item 1", 100);
const item2 = new OrderItem("2", "Item 2", 200);
const item3 = new OrderItem("3", "Item 3", 300);
const order = new Order("1", "1", [item1, item2, item3]);
