export class Purchase {
    constructor(
        public firstName: string,
        public lastName: string,
        public cardNumber: number,
        public expiration: number,
        public cvv: number
    ) {}
}