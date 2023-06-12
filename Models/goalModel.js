import mongoose from "mongoose";

const goalSchema = new mongoose.Schema({
     itemName:{
          type:String,
          required:"the name of item is required"
     },
     amount:{
          type:String,
          required:"the cost of the item is required "
     },
     timeline:{
          type: String,
          required:"the time is required"
     }

})
export default mongoose.model("Goals" ,goalSchema )