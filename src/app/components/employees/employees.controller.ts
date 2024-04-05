import { Employee } from "src/app/shared/interfaces/employee";

export const fetchEmployees = async (): Promise<Employee[]> => {
    try {
      const response = await fetch('http://localhost:8080/employees/', {
        method: 'GET',
        headers: {
          "Content-Type": "application/json"
        }
      });
  
      if (!response.ok) {
        throw new Error(`Failed to fetch employees. Status: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
      
    } catch (error) {
      console.error('Error fetching employees:', error.message);
      return []; 
    }
  };

  export const insertEmployee = async (data): Promise<void> => {
    try {
      const response = await fetch('http://localhost:8080/employees/', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error(`Failed to insert employee. Status: ${response.status}`)
      }   

    } catch (error) {
      console.error('Error inserting employee: ', error.message)
      
    }
  };

  export const deleteEmployee = async (data): Promise<void> => {
    try {
      const response = await fetch('http://localhost:8080/employees/', {
        method: 'DELETE',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error(`Failed to delete employee. Status: ${response.status}`)
      }

    } catch (error) {
      console.error('Error deleting employee: ', error.message)
    }
  };
  