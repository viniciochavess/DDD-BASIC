export class Product {
    private _id: string;
    private _name: string;
    private _price: number;

    constructor(id: string, name: string, price: number) {
        this._id = id;
        this._name = name;
        this._price = price;
        this.validate();
    }
    changeName(name: string) {
        if(name === this._name) {
            throw new Error("Name is the same");
        }
        if(name.length < 3 || name.length > 255) {
            throw new Error("Name must be between 3 and 255 characters");
        }
        this._name = name;
        this.validate();
    }
    validate(): boolean {
        if (this._id.length === 0) {
            throw new Error("Id is required");
        }
        if (this._name.length === 0) {
            throw new Error("Name is required");
        }
        if (this._price <= 0) {
            throw new Error("Price must be greater than 0");
        }
        return true;
    }
}