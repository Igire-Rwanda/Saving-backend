import mongoose from "mongoose";

const goalSchema = new mongoose.Schema({
     Email:{
          type:String,
          required:"the name of item is required"
     },

     Title:{
          type:String,
          required:"the name of item is required"
     },
     amount:{
          type:Number,
          required:"the cost of the item is required "
     },
     startTime:{
          type: Number,
          required:"the time to start is required"
     },
     endTime:{
          type: Number,
          required:"the time is required"
     },
     detailsGoals:{
          type: String,
          required:"details are needed for this goals"

     }

})
export default mongoose.model("Goals" ,goalSchema )