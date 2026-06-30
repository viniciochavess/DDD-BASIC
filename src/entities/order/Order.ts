import type { OrderItem } from "../ordem_item/order_item.js";

export class Order {
    private _id: string;
    private _customerId: string;
    private _items: OrderItem[] = [];
    private _total: number = 0;

    constructor(id: string, customerId: string, items: OrderItem[]) {
        this._id = id;
        this._customerId = customerId;
        this._items = items;
        this._total = this.total();
        this.validate();
    }

    total(): number {
      
        if (this._items.some(item => item.getPrice() <= 0)) {
            throw new Error('Price must be greater than 0');
        }
        
        return this._items.reduce((total, item) => total + item.getPrice() * item.getQuantity(), 0);
    }

    validate() {
        if (this._items.length === 0) {
            throw new Error('Order must have at least one item');
        }
        if (this._items.some(item => item.getPrice() <= 0)) {
            throw new Error('Price must be greater than 0');
        }
        if (this._customerId.length === 0) {
            throw new Error('Customer ID is required');
        }
        if (this._id.length === 0) {
            throw new Error('ID is required');
        }
        if (this._total <= 0) {
            throw new Error('Total must be greater than 0');
        }
    }
}