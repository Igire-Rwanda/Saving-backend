import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors"





import member from "./Routes/userRegisterRoutes.js"

import teamsRoute from "./Routes/teamsRoute.js"
import joinTeam from "./Routes/joinTeamRoute.js"







import Home from "./Routes/homeRoute.js";
import expenseRoute from "./Routes/expenseRoute.js";
import incomeRoute from "./Routes/incomeRoute.js";
import transferRoute from "./Routes/transferRoute.js"
import addExpense from "./Routes/expenseRoute.js"
import incomeRoute from "./Routes/incomeRoute.js"

import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true })); // THis will help us to access data from form 


app.use('/api/v1', expenseRoute)
app.use("/", Home)
app.use("/api/v1/user", member)
app.use("/api/v1/user", teamsRoute)
app.use("/api/v1/user",joinTeam )
app.use('/api/v1', addExpense)
app.use('/api/v1', expenseRoute)
app.use('/api/v1', incomeRoute)
app.use('/api/v1', teamsRoute)
app.use('/api/v1/user', transferRoute)

app.use(express.json());
app.use(express.urlencoded({ extended: true }))




const connectToMongoDb = () => {
    mongoose.connect(process.env.MONGOPASS)
        .then(() => {
            console.log("database connected succesfully");
        }).catch((err) => {
            console.log("failed to connect to the database", err)
        })
}
const port = 5500;
app.listen(port, () => {
    console.log('server is running on port' + port)
    connectToMongoDb();
});








app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: true })); // THis will help us to access data from form 
app.use("/api/v1/res", response)
app.use("/api/v1/user", member)
// app.use("/", Home)



