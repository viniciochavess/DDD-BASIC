import { Product } from "../domain/entities/product/product.js";

export class ProductService {
    static increasePrice(product: Product[], percentage: number): Product[] {
        return product.map(product => {
            product.changePrice(Math.round(product.getPrice() * (1 + percentage / 100)) as number);
            return product;
        });
    }
}