
import teamsSchema from "../Models/teamsModel.js"


const createTeams = async (req, res) => {
    try {
        const bodyData = {
            name: req.body.name,
            members: req.body.members,
            requiredAmount: req.body.requiredAmount,
            wallet: req.body.wallet

        }

        if (req.body.members.length < 3) {
            return res.status(400).json({
                error: 'A team must have at least three members.'
            });
        }

        const data = new teamsSchema({
            name: req.body.name,
            members: req.body.members,
            requiredAmount: req.body.requiredAmount,
            wallet: req.body.wallet

        });
        let result = await data.save();
        if (result) {
            res.status(200).json({
                message: "team created successfully",
                data: result
            });
        }
    } catch (error) {
        console.log("error occured", error);

        res.status(500).json({
            message: "error occured",
            error: error,
            data: null
        });
    }
};

export default createTeams;
