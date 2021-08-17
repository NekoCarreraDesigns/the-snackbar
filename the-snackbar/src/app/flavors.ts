export interface Flavors {
    type: string,
    flavor: string,
    description: string,
    quantity: number,
    quantityOne: string,
    availability: string,
    price: number,
    priceOne: number
}

export class Purchase {
    constructor(
        public firstName: string,
        public lastName: string,
        public cardNumber: number,
        public expiration: number,
        public cvv: number
    ) {}
}