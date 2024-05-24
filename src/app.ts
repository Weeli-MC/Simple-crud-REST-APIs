import express, { Request, Response, NextFunction } from "express";
import { json } from "body-parser";

import employeeRoutes from "./routes/employees";

const app = express();

app.use(json());

app.use("/employee", employeeRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ errorMessage: "string" });
});

app.listen(3000, () => console.log("omgg"));
