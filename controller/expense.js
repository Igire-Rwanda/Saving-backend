import expenseSchema from "../Models/expence.js"

const createExpense =async (req,res)=>{
try{
    const bodyData={
        expenseName:req.body.expenseName,
        amount:req.body.amount
    }

    // console.log(bodyData)
    const data= new expenseSchema ({
        ExpenseName:req.body.ExpenseName,
        Amount:req.body.Amount
    });
    let result=await data.save()
    res.status(200).json({
        message:"Expense saved succesfully",
        data:result
    })
}catch(error){
console.log('Error occured: ', error)
res.status(500).json({
    message:'Error occured ',
    error:error,
    data:null
    
})
}
    

}

export default createExpense;
