import { Product } from "src/app/shared/interfaces/product"
import { environment } from "src/environments/environment";

const endpoint = `${environment.serverURL}/products`
const access_token = localStorage.getItem('access_token')

export const fetchProducts = async (businessId: number): Promise<Product[]> => {
    try {
        const response = await fetch(`${endpoint}/${businessId}`, {
            method: 'GET',
            headers: {
                "Content-Type": 'application/json',
                "Authorization": `Bearer ${access_token}`
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

export const insertProduct = async (data: Product): Promise<void> => {
    try {
        const response = await fetch(`${endpoint}/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${access_token}`
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error(`Failed to insert product. Status: ${response.status}`);
        }

    } catch (error) {
        console.error('Error inserting product: ', error.message);
    }
}



export const deleteProduct = async (id: number): Promise<void> => {
    try {
        const response = await fetch(`${endpoint}/${id}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": 'application/json',
                "Authorization": `Bearer ${access_token}`
            }
        });

        if (!response.ok) {
            throw new Error(`Failed to delete product. Status: ${response.status}`);
        }

    } catch (error) {
        console.error('Error deleting product: ', error.message);
    }
}

export const updateProduct = async (data: Product, id: number): Promise<void> => {
    try {
        const response = await fetch(`${endpoint}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${access_token}`
        },
        body: JSON.stringify(data)
    });

    if(!response.ok) {
        throw new Error(`Failed to update product. Status: ${response.status}`);
    }

    } catch (error) {
        console.error('Error updating product: ', error.message)
    }

}