

export const deleteProduct = async (id): Promise<void> => {
    try {
        const response = await fetch(`http://localhost:8080/products/${id}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`Failed to delete product. Status: ${response.status}`);
        }

    } catch (error) {
        console.error('Error deleting product: ', error.message);
    }
}