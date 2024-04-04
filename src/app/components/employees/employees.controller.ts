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
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      return data;
      
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      return []; 
    }
  };
  