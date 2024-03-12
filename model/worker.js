import mongoose, { model } from 'mongoose';
const { Schema } = mongoose;

const workerSchema = new Schema({
  worker_name: {type:String,required:true}, 
  worker_email: {type:String,required:true}, 
  worker_phone: {type:Number,required:true}, 
  worker_city: {type:String,required:true}, 
  worker_password: {type:String,required:true}
});

const Worker=mongoose.model('Employer',workerSchema);