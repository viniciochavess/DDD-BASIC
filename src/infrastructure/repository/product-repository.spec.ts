import { describe, it, expect, beforeEach, afterEach } from '@jest/globals';
import { Sequelize } from 'sequelize';
describe('product repository test', () => {
    let sequelize: Sequelize;

    beforeEach(async () => {
        sequelize = new Sequelize({
            dialect: 'sqlite',
            storage: ':memory:',
            logging: false,
            sync: { force: true },
        });
    });

    afterEach(async () => {
        await sequelize.close();
    });
})