import { RequestHandler, Request, Response } from 'express';
import employeeServices from "../services/employeeServices"
import { json } from 'body-parser';


//1. use enums
//2. Track params in services
//3. camel case function
//4. consistent returns
//5. more detailed/specific errors


const employee = employeeServices.getAllEmployee()


export const getAllEmployee: RequestHandler = (req: Request, res: Response) => {
  res.status(200).json({"employees": employee});
};



export const getSingleEmployee: RequestHandler = (req: Request, res: Response) => {

  const employeeById = employeeServices.getSingleEmployee(req.params.id)
  res.status(200).json(employeeById);

};

export const createEmployee: RequestHandler = (req: Request, res: Response) => {

  const id = employee.length;
  const updatedEmployee= employeeServices.createEmployee(id, req.body)
  
  //check if the type of input is valid
  if((!updatedEmployee )){
    res.status(400).json({ "errorMessage": "string" });
  }
 

  res.status(200).json(req.body);

};



export const deleteEmployee: RequestHandler = (req: Request, res: Response) => {
  const deletedEmployee = employeeServices.deleteEmployee(req.params.id)
  if (!deletedEmployee) {
    res.status(404).json({ "errorMessage": "string" });
  }

  res.status(204).json(deletedEmployee);
};

export const getOrg: RequestHandler = (req: Request, res: Response) => {
  const edited = employeeServices.getOrg(req.params.id, req.body)


  switch(edited.status) {
    case 400:
      res.status(400).json({ "errorMessage": edited.errorMessage });
      break;
    case 404:
      res.status(404).json({ "errorMessage": edited.errorMessage });
      break;
    default:
      res.status(200).json(edited)
  }
};

