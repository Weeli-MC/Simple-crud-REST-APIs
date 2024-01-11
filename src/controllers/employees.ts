import { RequestHandler, Request, Response } from 'express';
import employeeServices from "../services/employeeServices"


//1. use enums
//2. Track params in services
//3. camel case function
//4. consistent returns
//5. more detailed/specific errors


const employee = employeeServices.GetAllEmployee()


export const GetAllEmployee: RequestHandler = (req: Request, res: Response) => {
  res.status(200).json({"employees": employee});
};



export const GetSingleEmployee: RequestHandler = (req: Request, res: Response) => {

  const id: number = parseInt(req.params.id);
  const employeeById = employeeServices.GetSingleEmployee(id)
  res.status(200).json(employeeById);

};

export const CreateEmployee: RequestHandler = (req: Request, res: Response) => {

  const id = employee.length;
  const updatedEmployee= employeeServices.CreateEmployee(id, req.body)
  
  //check if the type of input is valid
  if((!updatedEmployee )){
    res.status(400).json({ "errorMessage": "string" });
  }
 

  res.status(200).json(req.body);

};



export const deleteEmployee: RequestHandler = (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id);
  const deletedEmployee = employeeServices.deleteEmployee(id)
  if (!deletedEmployee) {
    res.status(404).json({ "errorMessage": "string" });
  }

  res.status(204).json(deletedEmployee);
};

export const getOrg: RequestHandler = (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id);
  const edited = employeeServices.getOrg(id, req.body)


  switch(edited) {
    case 400:
      res.status(400).json({ "errorMessage": "string" });
      break;
    case 404:
      res.status(404).json({ "errorMessage": "string" });
      break;
    default:
      res.status(200).json(edited)
  }
  

  
 

};

