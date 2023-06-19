
import confirmation from "../Models/confirmation.js"
const vote = async (req, res) => {
    try {
      const data = req.body;
  
      if (typeof data.vote !== 'boolean') {
        return res.status(400).json({ message: "Invalid vote value" });
      }
  
      let existingUser = await confirmation.findOne({ email: data.email });
      if (existingUser) {
        return res.status(409).json({ message: "Email is already voted" });
      }
  
      let voteInstance = new confirmation({
        email: data.email,
        vote: data.vote,
      });
      
  
      let result = await voteInstance.save();
  
      res.status(200).json({
        message: "Data saved successfully",
        error: null,
        data: result,
      });
    } catch (err) {
      console.log("Error caught:", err);
      res.status(500).json({
        message: "Failed to save the data",
        error: "Failed"
      });
    }
  };
  
  export default vote;
  