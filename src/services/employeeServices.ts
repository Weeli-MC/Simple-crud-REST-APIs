import { Department, Employee } from '../models/employees';
import { RequestHandler } from 'express';


const initial = 0
const Employees: Employee[] = [{
  id: 0,
  name: "string",
  salary: 0,
  department: Department.HR,
}
];


const GetAllEmployee = (): Employee[] => {
    return Employees;
};
    

export const GetSingleEmployee = ( id: number) =>{

    const index = Employees.findIndex((employee) => employee.id === id);
    return Employees[index]
  };
    
export const deleteEmployee = ( id: number) =>{
    const index = Employees.findIndex((employee) => employee.id === id);

    if (index !== -1) {
        const deletedItem =  Employees.splice(index,1)
        return deletedItem;
    }
    return undefined;
};
    



export const CreateEmployee = ( id: number, body: Employee) =>{
    const updatedEmployee: Employee = {  ...body, id }
    
    //check if the type of input is valid
    if((typeof body.name !== "string") || (typeof body.salary !== "number" || (typeof body.department !== "string") )){
        return 
    }
    else{
        return Employees.push(updatedEmployee);
        
    }
    
    
};



export const getOrg = ( id: number, body: Employee) =>{      
    const index = Employees.findIndex((employee) => employee.id === id);

//check if the type of input is valid or if bad request
  //if not found
    if (index < 0) {
    //if index is not found, throw Error 404
        return 404
    }else {
        //if found but the input is incorrect, throw 400
        if((typeof body.name !== "string") || (typeof body.salary !== "number" || (typeof body.department !== "string") )){
            return 400
    }
    else{
        //return updated item
        return Employees[index] = {...body, id}
    }

}   
    
};



export default {
GetAllEmployee,
GetSingleEmployee,
CreateEmployee,
getOrg,
deleteEmployee
}
