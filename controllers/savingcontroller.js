import savingSchema from "../Models/savingModel.js"

const createSaving = async(req, res) => {
  try{
    const bodyData = {
        savingName: req.body.savingName,
        amount: req.body.amount
    } 
  //console.log(bodyData)
    const data = new savingSchema({
      userId:req.body.userId,
      accountNumber: req.body.accountNumber,
      balance: req.body.balance
  });
    let result= await data.save()
    res.status(200).json({
      message: "Data saved successfully",
      data: data
    });
  }catch(error){
    console.log("error occured",error)
    res.status(500).json({
      message:"error ocuured",
      error:error,
      data:null
    })
  }
    
  };
  
  export default createSaving;
  