import  express  from "express";
import mongoose from "mongoose";
import signupModel from "./models/signupModel";

const connectToMongoDb=()=>{
    mongoose.connect('mongodb+srv://mysaving2023:Ourfuture!@cluster0.vvdet8p.mongodb.net/?retryWrites=true&w=majority')
    .then(()=>{
        console.log("database connected succesfully");
    }).catch(()=>{
        console.log("failed to connect to the database")
    })
}

const app =express();
const port = 5500;

app.listen(port,()=>{
    console.log('server is running on port 5500')
    connectToMongoDb();
});