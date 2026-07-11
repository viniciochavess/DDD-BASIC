import 'reflect-metadata';
import { describe, it, expect, beforeEach, afterEach } from '@jest/globals';
import { Sequelize } from 'sequelize-typescript';
import ProductModel from '../db/sequelize/model/productModel.js';
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
})