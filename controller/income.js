import incomeSchema from "../models/income.js"

const createIncome = (req, res) =>{
    const bodyData = {
        IncomeName: req.body.IncomeName,
        Amount: req.body.Amount
        }
    console.log(bodyData)
    const data = new incomeSchema(bodyData);
    let result= data.save()
    res.status(200).json({
    message: "Income account saved successfully",
    data: data
    
    })
  }
  export default createIncome;
