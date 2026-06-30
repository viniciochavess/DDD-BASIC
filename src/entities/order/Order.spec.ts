import { describe, expect, it } from '@jest/globals';
import { Order } from './Order.js';
import { OrderItem } from '../ordem_item/order_item.js';

describe('Order', () => {
    it('should be able to create an order', () => {
        const order = new Order('1', '1', [new OrderItem('1', 'Item 1', 100, '1', 1)]);
        expect(order).toBeDefined();
    });
    it('should be able to calculate the total of an order', () => {
        const order = new Order('1', '1', [new OrderItem('1', 'Item 1', 100, '1', 1), new OrderItem('2', 'Item 2', 200, '2', 2)]);
        expect(order.total()).toBe(500);
    });
    it('should not be able to calculate the total of an order with invalid items', () => {
        expect(() => new Order('1', '1', [new OrderItem('1', 'Item 1', -100, '1', 1)]))
            .toThrow('Price must be greater than 0');
    });
    it('should total items price by quantity', () => {
        const orderItem = new OrderItem('1', 'Item 1', 100, '1', 2);
        const orderItem2 = new OrderItem('2', 'Item 2', 200, '2', 2);
        const order = new Order('1', '1', [orderItem, orderItem2]);
        expect(order.total()).toBe(600);
    });
});