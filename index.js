import  express  from "express";
import mongoose from "mongoose";
import savingroute from "./routes/savingroute.js";
import bankroute from "./routes/bankroute.js"



const connectToMongoDb=()=>{
    mongoose.connect('mongodb+srv://mysaving2023:Ourfuture2023@cluster0.vvdet8p.mongodb.net/?retryWrites=true&w=majority')
    .then(()=>{
        console.log("database connected succesfully");
    }).catch(()=>{
        console.log("failed to connect to the db")
    })
};
const app =express();
app.use('/api/v1',savingroute)
app.use('/api/v1',bankroute)




const port = 5500;

app.listen(port,()=>{
    console.log('server is running on port 5500')
    connectToMongoDb();
});