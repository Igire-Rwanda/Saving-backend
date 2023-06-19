import mongoose from "mongoose";



const requestSchema = new mongoose.Schema({
     name: {
          type: String,
          required: "team name is required"
     },
     email: {
          type: String,
          required: "your email is required"
     },
     amount: {

          type: Number,
          required: true

     }

});
export default mongoose.model("RequestsHistory", requestSchema);