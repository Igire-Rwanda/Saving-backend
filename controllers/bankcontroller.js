import bankSchema from "../Models/bankModel.js"

const createBank = (req, res) => {
    const bodyData = {
      accountNumber: req.body.accountNumber,
      amount: req.body.amount
    };
    console.log(bodyData)
    const data = new bankSchema(bodyData);
    let result= data.save()
    res.status(200).json({
    message: "bank account saved successfully",
    data: data
    
    });
  };
  
  export default createBank;