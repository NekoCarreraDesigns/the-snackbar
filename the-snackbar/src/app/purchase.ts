export class Purchase {
    constructor(
        public firstName: string,
        public lastName: string,
        public cardNumber: number,
        public expiration: string,
        public cvv: number,
        public quantities: string,
        public flavors: string
    ) {}
}