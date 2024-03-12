const mongoose=require('mongoose');
const { Schema } = mongoose;

const employerSchema = new Schema({
  employer_name: {type:String,required:true}, 
  employer_email: {type:String,required:true}, 
  employer_phone: {type:Number,required:true}, 
  employer_city: {type:String,required:true}, 
  employer_password: {type:String,required:true}, 
  
});

 exports.Employer=mongoose.model('Employer',employerSchema);
