import { Product } from "src/app/shared/interfaces/product"

export const fetchProducts = async (): Promise<Product[]> => {
    try {
        const response = await fetch('http://localhost:8080/products/', {
            method: 'GET',
            headers: {
                "Content-Type": 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch products. Status: ${response.status}`);
        }

        const data = await response.json();
        return data;

    } catch (error) {
        console.error('Error fetching products: ', error.message);
        return [];
    }
}