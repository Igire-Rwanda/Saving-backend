import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors"


// import bankroute from "./routes/bankroute.js";
import expenseRoute from "./Routes/expenseRoute.js";
// import incomeRoute from "./Routes/incomeRoute.js";

import dotenv from "dotenv";

import member from "./Routes/userRegisterRoutes.js"
import savingroute from "./routes/savingroute.js";
import welcome from "./Controllers/welcome.js"

import expenseRoute from "./Routes/expenseRoute.js";

import incomeRoute from "./Routes/incomeRoute.js";
import goalRoute from "./Routes/goalRoute.js"

import teamsRoute from "./Routes/teamsRoute.js";





import dotenv from "dotenv";
dotenv.config();
const app = express();
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true })); // THis will help us to access data from form 
app.use('/api/v1', readUser)
app.use('/api/v1',savingroute)
app.use('/api/v1',bankroute)
app.use('/api/v1', expenseRoute)
app.use('/api/v1', incomeRoute)
app.use("/api/v1/user", member)
app.use("/api/v1", goalRoute)


const port = 5500;
const connectToMongoDb = () => {
    mongoose.connect(process.env.MONGOPASS)
        .then(() => {
            console.log("database connected succesfully");
        }).catch((err) => {
            console.log("failed to connect to the database", err)
        })
}
app.listen(port, () => {
    console.log('server is running on port'+port)
    connectToMongoDb();
});



app.use('/api/v1', savingroute)
app.use('/api/v1', bankroute)
app.use('/api/v1', expenseRoute)
app.use('/api/v1', incomeRoute)
app.use('/api/v1', teamsRoute)
=======
app.get("/",(req, res) => {
    res.send("Welcome in our deployment page saving mentor! ")
});



// app.use('/api/v1',savingroute)
// app.use('/api/v1',bankroute)
app.use('/api/v1', expenseRoute)
// app.use('/api/v1', incomeRoute)










