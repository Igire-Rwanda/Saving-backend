import mongoose from "mongoose";

const memberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
});

const teamSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    members: {
        type: [memberSchema],
        validate: {
            validator: function (members) {
                return members.length >= 3;
            },
            message: 'A team must have at least three members.',
        },
    },
    requiredAmount: {
        type: Number,
        required: true,
    },
    wallet: {
        type: Number,
    }
});

export default mongoose.model('Team', teamSchema);
