import { describe, expect, it } from '@jest/globals';
import { ProductService } from './productService.js';
import { Product } from '../entities/product/product.js';

describe('ProductService', () => {
    it('should be able to increase the price of a product', () => {
        const product1 = new Product('1', 'Product 1', 100);
        const product2 = new Product('2', 'Product 2', 200);
        ProductService.increasePrice([product1, product2], 10);
        expect(product1.getPrice()).toBe(110);
        expect(product2.getPrice()).toBe(220);
    });
});