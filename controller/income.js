import incomeSchema from "../Models/income.js"

const createIncome =async (req, res) =>{
    try{
      const bodyData = {
        IncomeName: req.body.IncomeName,
        Amount: req.body.Amount
        }
    
    const data = new incomeSchema({
        IncomeName: req.body.IncomeName,
        Amount: req.body.Amount
        });
    let result=await data.save()
    res.status(200).json({
    message: "Income account saved successfully",
    data: result
    
    })  
    }catch(error){
        console.log("error occured:",error)
        res.status(500).json({
            message:"error occured ",
            error:error,
            data:null
        })
    }
    
  }
  export default createIncome;
