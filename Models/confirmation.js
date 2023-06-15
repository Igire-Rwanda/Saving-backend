import mongoose from "mongoose"

const Votes = new mongoose.Schema({
    vote: {
      type: Boolean,
      required: true, 
    },
    email: {
      type: String,
      required: true, 
    },
  });
  
export default mongoose.model("comfirmation", Votes)