// src/services/itemService.ts
import { Item } from '../models/Item';
import { RequestHandler } from 'express';
import { Employee } from '../models/employees';


const initial = 0
const Employees: Employee[] = [{
  id: 0,
  name: "string",
  salary: 0,
  department: "HR"
}
];


export const GetAllEmployee = () =>{
    return Employees
};

// export const GetAllEmployee: RequestHandler = (req, res, next) => {

//     return Employees
//   res.status(200).json({"employees": Employees});

// };

export const GetSingleEmployee = (id: number) =>{
    return Employees
};

// export const GetSingleEmployee: RequestHandler = (req, res, next) => {

//   const id: number = parseInt(req.params.id);
//   const index = Employees.findIndex((employee) => employee.id === id);

//   res.status(200).json(Employees[index]);

// };


export const CreateEmployee: RequestHandler = (req, res, next) => {
  const id = Employees.length;
  const updatedEmployee: Employee = { id, ...req.body }
  


  //check if the type of input is valid
  if((typeof req.body.name !== "string") || (typeof req.body.salary !== "number" || (typeof req.body.department !== "string") )){
    console.log("NO")
    res.status(400).json({ "errorMessage": "string" });
  }
  else{
    console.log("YES")
    Employees.push(updatedEmployee);

  }

  res.status(200).json(req.body);

};



export const getOrg: RequestHandler = (req, res, next) => {
  const id: number = parseInt(req.params.id);
  const index = Employees.findIndex((employee) => employee.id === id);


    //check if the type of input is valid or if bad request
    if((typeof req.body.name !== "string") || (typeof req.body.salary !== "number" || (typeof req.body.department !== "string") )){
      res.status(400).json({ "errorMessage": "string" });
    }
    else{
      Employees[index] = {id, ...req.body}
  
    }
  console.log("Employees", Employees[index])


  //if index is not found, throw Error 404
  if (index < 0) {
    res.status(404).json({ "errorMessage": "string" });
  }

  
  res.status(200).json(Employees[index])

 
  // IF NO CHANGE:
  if(req.body === Employees[id]){
    console.log("not updated")
  }else{
    console.log(req.body, Employees[id])
    console.log("updated")
  }


};

export const deleteEmployee: RequestHandler = (req, res, next) => {
  const id: number = parseInt(req.params.id);
  const index = Employees.findIndex((employee) => employee.id === id);
  if (index < 0) {
    res.status(404).json({ "errorMessage": "string" });
  }

  
  Employees.splice(index,1)


  res.status(204).json();
};






/////////

// Temporary hardcoded data
const items: Item[] = [
    { id: 1, name: 'Item 1', description: 'Description for Item 1' },
    { id: 2, name: 'Item 2', description: 'Description for Item 2' },
];

const getAllItems = (): Item[] => {
    return items;
};

const getItemById = (id: number): Item | undefined => {
    return items.find((item) => item.id === id);
};

const createItem = (newItem: Item): Item => {
    const id = items.length + 1;
    const createdItem: Item = { ...newItem, id }; // Assign id separately
    items.push(createdItem);
    return createdItem;
};

const updateItem = (id: number, updatedItem: Item): Item | undefined => {
    const index = items.findIndex((item) => item.id === id);
    if (index !== -1) {
        const itemToUpdate = items[index];
        const updatedItemWithId: Item = { ...updatedItem, id }; // Assign id separately
        items[index] = updatedItemWithId;
        return updatedItemWithId;
    }
    return undefined;
};

const deleteItem = (id: number): Item | undefined => {
    const index = items.findIndex((item) => item.id === id);
    if (index !== -1) {
        const deletedItem = items.splice(index, 1)[0];
        return deletedItem;
    }
    return undefined;
}



export default {
    getAllItems,
    getItemById,
    createItem,
    updateItem,
    deleteItem,
};