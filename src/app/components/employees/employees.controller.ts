import { Employee } from "src/app/shared/interfaces/employee";
import { environment } from "src/environments/environment";

const endpoint = `${environment.serverURL}/employees`
const access_token = localStorage.getItem('access_token')

export const fetchEmployees = async (businessId: number): Promise<Employee[]> => {
    try {
      const response = await fetch(`${endpoint}/${businessId}`, {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${access_token}`
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

  export const insertEmployee = async (data: Employee): Promise<void> => {
    try {
      const response = await fetch(`${endpoint}/`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${access_token}`
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

  export const deleteEmployee = async (id: number): Promise<void> => {
    try {
      const response = await fetch(`${endpoint}/${id}`, {
        method: 'DELETE',
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${access_token}`
        }        
      });

      if (!response.ok) {
        throw new Error(`Failed to delete employee. Status: ${response.status}`)
      }

    } catch (error) {
      console.error('Error deleting employee: ', error.message)
    }
  };

  export const updateEmployee = async (data: Employee, id: number): Promise<void> => {
    try {
      const response = await fetch(`${endpoint}/${id}`, {
        method: 'PUT',
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${access_token}`
        },
        body: JSON.stringify(data)
      });

      if(!response.ok) {
        throw new Error(`Failed to update employee. Status: ${response.status}`)
      }

    } catch (error) {
      console.error('Error updating employee: ', error.message)
    }
  }
  