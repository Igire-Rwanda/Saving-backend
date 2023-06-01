import expenseSchema from "../models/expence.js"

const createExpense =(req,res)=>{
    const bodyData={
        expenseName:req.body.expenseSchema,
        amount:req.body.amount
    }

    console.log(bodyData)
    const data= new expenseSchema (bodyData);
    let result= data.save()
    res.status(200).json({
        message:"message saved succesfully",
        data:data
    })

}

export default expenseSchema;
