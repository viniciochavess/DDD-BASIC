import type { Address } from "./VO/Address.js";

export class Customer {
    _id: string;
    _name: string;
    _active: boolean = false;
    _address?: Address;
    private _rewardPoints: number = 0;


    validate() {
        if (!this._id || this._id.trim().length === 0) {
            throw new Error("Id is required");
        }
    
        if (!this._name || this._name.trim().length === 0) {
            throw new Error("Name is required");
        }
    
        if (this._name.length < 3 || this._name.length > 255) {
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


    changeName(name: string) {
        this._name = name;
        this.validate();
    }
    activate() {
        if (this._address === undefined) {
            throw new Error("Address is required");
        }
        this._active = true;
    }
    deactivate() {
        this._active = false;
    }

    addRewardPoints(points: number) {
        if (points < 0) {
            throw new Error("Reward points must be greater than 0");
        }
        this._rewardPoints += points;
    }
    get rewardPoints(): number {
        return this._rewardPoints;
    }
}