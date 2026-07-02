import { describe, expect, it } from '@jest/globals';
import { OrderItem } from '../domain/entities/ordem_item/order_item.js';
import { Order } from '../domain/entities/order/Order.js';
import { OrderService } from './orderService.js';
import { Customer } from '../domain/entities/customer/Customer.js';

describe('OrderService', () => {
    it("should place an order", () => {
        const customer = new Customer('1', 'John Doe');
        const item1 = new OrderItem('1', 'Item 1', 100, '1', 1);
        const order = OrderService.placeOrder(customer, [item1]);

        expect(customer.rewardPoints).toBe(50);
        expect(order.total()).toBe(100);
    })
    
    it('should be able calc total ordem items quantity', () => {
       const ordemItem1 = new OrderItem('1', 'Item 1', 100, '1', 1);
       const ordemItem2 = new OrderItem('2', 'Item 2', 200, '2', 2);
       const orders = [new Order('1', '1', [ordemItem1, ordemItem2]), new Order('2', '2', [ordemItem1, ordemItem2])];
       const total = OrderService.totalOrderItemsQuantity(orders);
       expect(total).toBe(6);
    });
});