import savingSchema from "../Models/savingModel.js"

const createSaving = (req, res) => {
    const bodyData = {
        savingName: req.body.savingName,
        amount: req.body.amount
    } 
  console.log(bodyData)
    const data = new savingSchema(bodyData);
    let result= data.save()
    res.status(200).json({
      message: "Data saved successfully",
      data: data
    });
  };
  
  export default createSaving;
  