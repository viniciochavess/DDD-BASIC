import { describe, expect, it } from '@jest/globals';
import { Product } from './product.js';

describe('Product', () => {
    it('should be able to create a product', () => {
        const product = new Product('1', 'Product 1', 100);
        expect(product).toBeDefined();
    });
    it('should not be able to create a product with invalid id', () => {
        expect(() => new Product('', 'Product 1', 100))
            .toThrow('Id is required');
    });
    it('should not be able to create a product with invalid name', () => {
        expect(() => new Product('1', '', 100))
            .toThrow('Name is required');
    });
    it('should not be able to create a product with invalid price', () => {
        expect(() => new Product('1', 'Product 1', -100))
            .toThrow('Price must be greater than 0');
    });
    it('should not be able to change the name of a product to the same name', () => {
        const product = new Product('1', 'Product 1', 100);
        expect(() => product.changeName('Product 1'))
            .toThrow('Name is the same');
    });
    it('should not be able to change the name of a product to a name with less than 3 characters', () => {
        const product = new Product('1', 'Product 1', 100);
        expect(() => product.changeName('Pr'))
            .toThrow('Name must be between 3 and 255 characters');
    });
    it('should not be able to change the name of a product to a name with more than 255 characters', () => {
        const product = new Product('1', 'Product 1', 100);
        expect(() => product.changeName('Product 12345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890'))
            .toThrow('Name must be between 3 and 255 characters');
    });
  
});