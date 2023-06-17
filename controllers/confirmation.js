import confirmation from "../Models/confirmation.js";

const checkVotes = async (req, res) => {
  try {
    const users = await confirmation.find().limit(100);

    const trueVotes = users.filter(user => user.vote === true);
    const falseVotes = users.filter(user => user.vote === false);

    res.status(200).json({
      message: "Vote check completed",
      trueVotes: trueVotes.length,
      falseVotes: falseVotes.length,

    });
   
  } catch (err) {
    console.log("Error caught:", err);
    res.status(500).json({
      message: "Failed to check votes",
      error: "Failed",
    });
  }
};

export default checkVotes;
