
import teamsSchema from "../Models/teamsModel.js"


const createTeams = async (req, res) => {
    try {
        const bodyData = {
            teamName: req.body.teamName,
            members: req.body.members,
            requiredAmount: req.body.requiredAmount,
            wallet: req.body.wallet

        }

        if (req.body.members.length < 3) {
            return res.status(400).json({
                error: 'A team must have at least three members.'
            });
        }

        const validEmails = req.body.members.filter((member) =>
            (member.email)
        );

        if (validEmails.length < 3) {
            return res.status(400).json({
                error: 'Please provide at least three valid email addresses.'
            });
        }

        const data = new teamsSchema({
            teamName: req.body.teamName,
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

const getAllTeams = async (req, res) => {
    try {
        const teams = await teamsSchema.find();
        res.status(200).json({
            message: "All teams retrieved successfully",
            data: teams
        });
    } catch (error) {
        console.log("Error occurred", error);
        res.status(500).json({
            message: "Error occurred",
            error: error,
            data: null
        });
    }
};

export { createTeams, getAllTeams };
