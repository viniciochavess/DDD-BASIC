import type { Address } from "./VO/Address.js";

export class Customer {
    _id: string;
    _name: string;
    _active: boolean = false;
    _address?: Address;


    validate() {
        if (this._id.length === 0) {
            throw new Error("Id is required");
        }
        if (this._name.length >= 3 && this._name.length <= 255) {
            throw new Error("Name must be between 3 and 255 characters");
        }
    }

    constructor(id: string, name: string) {
        this._id = id;
        this._name = name;
        this.validate();
    }

    set Address(address: Address) {
        this._address = address;
    }

    activate() {}
    deactivate() {}
}