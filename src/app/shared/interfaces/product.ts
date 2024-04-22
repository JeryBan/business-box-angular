import { Business } from "./business";

export interface Product {
    id: number,
    category: string,
    name: string,
    description: string,
    quantity: number,
    price: number,
    business: Business
}
