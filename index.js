import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import dostenv from "dotenv";
import { CreateEmployee, DeleteEmployee, GetEmployees, UpdateEmployee } from "./Controllers/Employee.js";
dostenv.config();

const app =express();
app.use(express.json());
app.use(cors());
//http:localhost:8801/employee
app.post("/employee",CreateEmployee);
app.put("/employee",UpdateEmployee);
app.delete("/employee",DeleteEmployee);
app.get("/employee",GetEmployees);


mongoose
.connect(process.env.DB_URL)
.then(()=>{
    console.log("database connected");
    app.listen(process.env.PORT,()=>{
        console.log("server running at port : "+process.env.PORT);
    });

})

.catch((error)=>{
    console.log("database connection error", error.message);

});