import EmployeeModel from "../Models/Employee.js";
export const CreateEmployee =async(req,res)=>{
    try{
        const empData = await EmployeeModel.create({
            name:req.body.name,
            address:req.body.address,
            salary:req.body.salary,
        });
        if(empData) res.status(201).send({message:"Emolyee Created!!!"});
        else res.status(404).send({message:"unable to create employee"});
    }catch(error){
        console.log("fail to submit data!!!");
    }
};
    export const UpdateEmployee =async(req,res)=>{
        try{
            const empData = await EmployeeModel.findByIdAndUpdate(
               {_id:req.body._id},
                {
                name:req.body.name,
                address:req.body.address,
                salary:req.body.salary,
            
            }
            );
            if(empData) res.status(201).send({message:"Emolyee Updated!!!"});
            else res.status(404).send({message:"unable to Updated employee"});
        }catch(error){
            console.log("fail to submit data!!!");
        }
};
export const DeleteEmployee =async(req,res)=>{
    try{
        const empData = await EmployeeModel.deleteOne(  {_id:req.body._id} );
        if(empData) res.status(201).send({message:"data deleted"});
        else res.status(404).send({message:"data not deleted+"});
    }catch(error){
        console.log("fail to submit data!!!");
    }
};
export const GetEmployees=async(req,res)=>{
    try{
        const empData =await EmployeeModel.find();
        res.status(200).send({empData});
    }catch(error){
        console.log("fail to submit data!!!");
    }
};