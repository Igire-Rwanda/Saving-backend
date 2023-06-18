import confirmation from "../Models/confirmation.js";
import teamsSchema from "../Models/teamsModel.js";

const vote = async (req, res) => {
  try {
    const data = req.body;

    // Find the team that the user's email belongs to
    const team = await teamsSchema.findOne({
       "members.email": data.email 
      });
    if (!team) {
      return res.status(404).json({
         message: "User's email not found in any team" 
        });
    }

    // Check if the email has already voted
    let existingUser = await confirmation.findOne({ 
      team:data.name,
      email: data.email 
    });
    if (existingUser) {
      return res.status(409).json({
         message: "Email has already voted" 
        });
    }

    if (typeof data.vote !== 'boolean') {
      return res.status(400).json({ message: "Invalid vote value" });
    }

    let voteInstance = new confirmation({
     
      email: data.email,
      vote: data.vote,
    });

    let result = await voteInstance.save();
const TeamName= team.name
    res.status(200).json({
      TeamName,
      message: "Data saved successfully",
    
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
