import { describe, expect, it } from '@jest/globals';
import { Customer } from './Customer.js';
import { Address } from './VO/Address.js';

describe('Customer', () => {
    it('should be able to create a customer', () => {
        const customer = new Customer('1', 'John Doe');
        expect(customer).toBeDefined();
    });

    it('should not be able to create a customer with invalid id', () => {
        expect(() => new Customer('', 'John Doe'))
            .toThrow('Id is required');
    });

    it('should not be able to create a customer with invalid name', () => {
        expect(() => new Customer('1', ''))
            .toThrow('Name is required');
    });

    it('should not be able to create a customer with invalid name length', () => {
        expect(() => new Customer('1', 'Jo'))
            .toThrow('Name must be between 3 and 255 characters');
    });

    it('should be able to change the name of a customer', () => {
        const customer = new Customer('1', 'John Doe');
        customer.changeName('Jane Doe');
        expect(customer._name).toBe('Jane Doe');
    });

    it('should not be able to change the name of a customer with invalid name', () => {
        const customer = new Customer('1', 'John Doe');
        expect(() => customer.changeName(''))
            .toThrow('Name is required');
    });

    it('should not be able to change the name of a customer with invalid name length', () => {
        const customer = new Customer('1', 'John Doe');
        expect(() => customer.changeName('Jo'))
            .toThrow('Name must be between 3 and 255 characters');
    });

    it('should be able add address to customer', () => {
        const customer = new Customer('1', 'John Doe');
        const address = new Address(
          '123 Main St',
          '123',
          '12345',
          'Anytown',
          'CA',
          'USA'
        );
        customer.Address = address;
    });
    it('should not be able to activate customer without address', () => {
        const customer = new Customer('1', 'John Doe');
        expect(() => customer.activate())
            .toThrow('Address is required');
    });
    it('should be able to deactivate customer', () => {
        const customer = new Customer('1', 'John Doe');
        customer.deactivate();
        expect(customer._active).toBe(false);
    });
    it('should not be able to activate customer without address', () => {
        const customer = new Customer('1', 'John Doe');
        
        expect(() => customer.activate())
            .toThrow('Address is required');
    });
   
});