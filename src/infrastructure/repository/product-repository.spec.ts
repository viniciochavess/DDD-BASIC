import 'reflect-metadata';
import { describe, it, expect, beforeEach, afterEach } from '@jest/globals';
import { Sequelize } from 'sequelize-typescript';
import ProductModel from '../db/sequelize/model/productModel.js';
import { Product } from '../../domain/entities/product/product.js';
import { ProductRepository } from './product-repository.js';
describe('product repository test', () => {
    let sequelize: Sequelize;

    beforeEach(async () => {
        sequelize = new Sequelize({
            dialect: 'sqlite',
            storage: ':memory:',
            logging: false,
            sync: { force: true },
        });
         sequelize.addModels([ProductModel]);
         await sequelize.sync();
    });

   


    afterEach(async () => {
        await sequelize.close();
    });

    it('should be able to create a product', async () => {
        const productRepository = new ProductRepository();

        const product = new Product('1', 'Product 1', 100);
        await productRepository.create(product);
        const productAlreadyCreated = await ProductModel.findOne({ where: { id:"1" } });
      
        expect(productAlreadyCreated.toJSON()).toEqual({
            id: '1',
            name: 'Product 1',
            price: 100,
        });
      
    });

    it('should be able to update a product', async () => {
        const productRepository = new ProductRepository();
        const product = new Product('1', 'Product 1', 100);
    
        await productRepository.create(product);
    
        product.changeName('Product 2');
    
        await productRepository.update(product);
    
        const productAlreadyUpdated = await ProductModel.findOne({
            where: { id: '1' }
        });
    
        expect(productAlreadyUpdated?.name).toBe('Product 2');
    });

    it('should be able to find a product', async () => {
        const productRepository = new ProductRepository();
        const product = new Product('1', 'Product 1', 100);
        await productRepository.create(product);
        const productAlreadyFound = await productRepository.findById('1');
        expect(productAlreadyFound.getName()).toBe('Product 1');
        expect(productAlreadyFound.getPrice()).toBe(100);
    });

    it('should be able to find all products', async () => {
        const productRepository = new ProductRepository();
        const product = new Product('1', 'Product 1', 100);
        const product2 = new Product('2', 'Product 2', 200);    
        await productRepository.create(product);
        await productRepository.create(product2);
        const productAlreadyFound = await productRepository.findAll();
        expect(productAlreadyFound.length).toBe(2);
        expect(productAlreadyFound[0].getName()).toBe('Product 1');
        expect(productAlreadyFound[0].getPrice()).toBe(100);
        expect(productAlreadyFound[1].getName()).toBe('Product 2');
        expect(productAlreadyFound[1].getPrice()).toBe(200);
    });

});