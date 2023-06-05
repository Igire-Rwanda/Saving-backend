
import Expense from "../Models/ExpenseModel.js"


const createExpense = async (req , res) =>{
     try{
          const expense = new Expense({
               user_id: req.body.user_id,
               category: req.body.category,
               date: req.body.date,
               amount: req.body.amount,
          });
          const expenseCreated = await expense.save()
          res.status(201).json({
               message : "Expense Saved Successfully",
               expense : expenseCreated
               })
               }catch(error){
                    res.status(400).json({
                         message :("Error Occured While Saving Expense" +error) 
                       
                         })
                         }

     

}


const readExpense = async (req, res) => {
     try {
          let id = req.params.reqId;
          let query = {_id:id};
          const expenses = await Expense.find(query);
          if (expenses) {
               return res.status(200).json({
                    success: true,
                    data: expenses
               })

          } else {
               return res.status(404).json({
                    message: "No expenses found",
                    success: false,
                    
               })
          }

     }


     catch (err) {
          console.log(err)
          return res.status(500).json({
               success: false,
               error: "Server Error"
          })
     }
}
export{readExpense , createExpense} ;






