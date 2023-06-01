import  express  from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors"
import member from "./Routes/userRegisterRoutes.js"


const connectToMongoDb=()=>{
    mongoose.connect('mongodb+srv://mysaving2023:Ourfuture2023@cluster0.vvdet8p.mongodb.net/?retryWrites=true&w=majority')
    .then(()=>{
        console.log("database connected succesfully");
    }).catch((err)=>{
        console.log("failed to connect to the database",err)
    })
}

const app =express();
app.use(cors())
const port = 5500;
app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: true })); // THis will help us to access data from form 

app.use("/api/v1/user",member)

app.listen(port,()=>{
    console.log('server is running on port 5500')
    connectToMongoDb();
});