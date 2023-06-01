import  express  from "express";
import mongoose from "mongoose";
import expense from "./routes/expense.js"
import income from "./routes/income.js"

const connectToMongoDb=()=>{
    mongoose.connect('mongodb+srv://mysaving2023:Ourfuture2023@cluster0.vvdet8p.mongodb.net/?retryWrites=true&w=majority')
    .then(()=>{
        console.log("database connected succesfully");
    }).catch(()=>{
        console.log("failed to connect to the database")
    })
}

const app =express();
app.use("/api/v1",expense)
app.use("api/s",income)

const port = 5500;

app.listen(port,()=>{
    console.log('server is running on port 5500')
    connectToMongoDb();
});
