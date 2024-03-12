//creating a node server
const express=require('express');
const server=express();


const emprouter=require('./router/router-employer');
const mongoose= require('mongoose');

//connecting mongoose
main().catch((err)=>console.log(err))

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/empdb')
    console.log('connected')
}

//middleware-body parser
server.use(express.json())
//middleware-router
server.use('/',emprouter.router);


//starting server by assigning a port
server.listen(8080,()=>{
    console.log("server started")
});