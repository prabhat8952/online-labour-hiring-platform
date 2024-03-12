const express=require('express')

const model=require('../model/employer')
const Employer=model.Employer;
exports.createEmployer=async (req,res)=>{
    const employer=new Employer(req.body);
    console.log(employer);
    try{
        await employer.save();
    }
    catch(err){
        if(err)
        {
            res.status(400).json(err);
            console.log(err);
        }
        else{
            res.json(employer);
        }
    }
}
exports.getAllemployers=async (req,res)=>{
    const employers= await Employer.find();
    res.json(employers);
}
exports.getEmployer=async (req,res)=>{
    const id=req.params.id;
   try{
    const employer=await Employer.findById(id);
    res.status(201).json(employer);
   }
   catch(err){
      res.status(400).json(err)
   }
}
exports.replaceEmployer=async (req,res)=>{
    const id=req.params.id;
   try{
    const employer=await Employer.findOneAndReplace({_id:id},req.body,{new:true})
    res.status(201).json(employer)
   }
   catch(err){
    res.status(400).json(err)
    console.log(err)
   }
}
exports.updateEmployer=async (req,res)=>{
    const id=req.params.id;
    try{
        const employer=await Employer.findOneAndUpdate({_id:id},req.body,{new:true})
        res.status(201).json(employer)
       }
       catch(err){
        res.status(400).json(err)
        console.log(err)
       }
}
exports.deleteEmployer=async (req,res)=>{
    const id=req.params.id;
    try{
        const employer=await Employer.findOneAndDelete({_id:id})
        res.status(201).json(employer)
       }
       catch(err){
        res.status(400).json(err)
        console.log(err)
       }
}