import bankModel from "../Models/bankModel.js";
import bankSchema from "../Models/bankModel.js";

const createBank = async (req, res) => {
  try {
    const bodyData = {
      userId: req.body.userId,
      accountNumber: req.body.accountNumber,
      balance: req.body.balance
    };

    const data = new bankSchema({
      userId: req.body.userId,
      accountNumber: req.body.accountNumber,
      balance: req.body.balance
    });
    let result = await data.save();
    if (result) {
      res.status(200).json({
        message: "Bank account saved successfully",
        data: result
      });
    }
  } catch (error) {
    console.log("Error occurred:", error);
    res.status(500).json({
      message: "Error occurred",
      error: error,
      data: null
    });
  }
};

const getBank = async (req, res) => {
  try {
    let found = await bankModel.find({});
    if (found.length === 0) {
      res.status(404).json({
        message: "No bank accounts found",
        error: null,
        data: null
      });
    } else {
      res.status(200).json({
        message: "Bank accounts retrieved successfully",
        error: null,
        data: found
      });
    }
  } catch (error) {
    console.log("Error occurred:", error);
    res.status(500).json({
      message: "Error occurred",
      error: error,
      data: null
    });
  }
};

export { createBank, getBank };
