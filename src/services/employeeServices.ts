import { Department, Employee } from '../models/employees';
import { RequestHandler } from 'express';


const Employees: Employee[] = [{
  id: 0,
  name: "string",
  salary: 0,
  department: Department.HR,
}
];


const getAllEmployee = (): Employee[] => {
    return Employees;
};
    

export const getSingleEmployee = ( params: string) =>{
    const id: number = parseInt(params);

    const index = Employees.findIndex((employee) => employee.id === id);
    return Employees[index]
  };
    
  
  
  export const createEmployee = ( id: number, body: Employee) =>{
      const updatedEmployee: Employee = {  ...body, id }
      
      //check if the type of input is valid
      if((typeof body.name !== "string") || (typeof body.salary !== "number" || (typeof body.department !== "string") )){
          return 
        }
        else{
            return Employees.push(updatedEmployee);       
        }
        
        
    };
    
    
    export const getOrg = (params: string, body: Employee) => {
        const id: number = parseInt(params);
        
        const index = Employees.findIndex((employee) => employee.id === id);
        //check if the type of input is valid or if bad request
        //if not found
        if (index < 0) {
            //if index is not found, throw Error 404
            return { status: 404, errorMessage: "Not found" };
        }
        
        if ((typeof body.name !== "string") || (typeof body.salary !== "number" || (typeof body.department !== "string"))) {
            //if found but the input is incorrect, throw 400
            let errorMessage = "";
            
            
            if (typeof body.name !== "string") {
                errorMessage += "name is invalid";
            } else if (typeof body.salary !== "number") {
                errorMessage += "salary is invalid";
            } else if (typeof body.department !== "string") {
                errorMessage += "department is invalid";
            } else {
                errorMessage = "string"
            }
            
            return { status: 400, errorMessage: errorMessage };
            
        } else {
            //return updated item
            return Employees[index] = { ...body, id }
        }
        
        
    };
    
    
    export const deleteEmployee = ( params: string) =>{
        const id: number = parseInt(params);
    
        const index = Employees.findIndex((employee) => employee.id === id);
    
        if (index !== -1) {
            const deletedItem =  Employees.splice(index,1)
            return deletedItem;
        }
        return undefined;
    };
        
    
    export default {
        getAllEmployee,
        getSingleEmployee,
        createEmployee,
        getOrg,
        deleteEmployee
    }
