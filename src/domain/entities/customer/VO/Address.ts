export class Address {
    _street: string;
    _number: string;
    _zip: string;
    _city: string;
    _state: string;
    _country: string;

    validate() {
        if (this._street.length === 0) {
            throw new Error("Street is required");
        }
        if (this._number.length === 0) {
            throw new Error("Number is required");
        }
        if (this._zip.length === 0) {
            throw new Error("Zip is required");
        }
    }
    constructor(street: string, number: string, zip: string, city: string, state: string, country: string) {
        this._street = street;
        this._number = number;
        this._zip = zip;
        this._city = city;
        this._state = state;
        this._country = country;
        this.validate();
    }
}