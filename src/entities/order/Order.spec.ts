import { describe, expect, it } from '@jest/globals';
import { Order } from './Order.js';
import { OrderItem } from '../ordem_item/order_item.js';

describe('Order', () => {
    it('should be able to create an order', () => {
        const order = new Order('1', '1', [new OrderItem('1', 'Item 1', 100)]);
        expect(order).toBeDefined();
    });
    it('should be able to calculate the total of an order', () => {
        const order = new Order('1', '1', [new OrderItem('1', 'Item 1', 100), new OrderItem('2', 'Item 2', 200)]);
        expect(order.total()).toBe(300);
    });
    it('should not be able to calculate the total of an order with invalid items', () => {
        expect(() => new Order('1', '1', [new OrderItem('1', 'Item 1', -100)]))
            .toThrow('Price must be greater than 0');
    });
});