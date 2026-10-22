import  { Product } from "../../domain/entities/product/product.js";
import type { ProductRepositoryInterface } from "../../domain/repository/repository-interface/product-repository-interface.js";
import ProductModel from "../db/sequelize/model/productModel.js";

export class ProductRepository implements ProductRepositoryInterface {
    async create(entity: Product): Promise<void> {
        await ProductModel.create({
            id: entity.getId(),
            name: entity.getName(),
            price: entity.getPrice(),
        });
    }
    async update(entity: Product): Promise<void> {
        await ProductModel.update(
            {
                name: entity.getName(),
                price: entity.getPrice(),
            }
            
            , { where: { id: entity.getId() } });
    }
    async findById(id: string): Promise<Product> {
        const productModel = await ProductModel.findOne({ where: { id } });
        return new Product(productModel.id, productModel.name, productModel.price);
    }
    async findAll(): Promise<Product[]> {
        const productModels = await ProductModel.findAll();
        return productModels.map(productModel => new Product(productModel.id, productModel.name, productModel.price));
    }
    async delete(id: string): Promise<void> {
        await ProductModel.destroy({ where: { id } });
    }
}