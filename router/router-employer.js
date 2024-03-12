const express=require('express')
const router=express.Router()
const employerController=require('../controller/controller-employer')

router
.post('/employer',employerController.createEmployer)
.get('/employers',employerController.getAllemployers)
.get('/employer/:id',employerController.getEmployer)
.put('/employer/:id',employerController.replaceEmployer)
.patch('/employer/:id',employerController.updateEmployer)
.delete('/employer/:id',employerController.deleteEmployer);
exports.router=router;