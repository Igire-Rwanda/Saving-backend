
import Expense from "../Models/ExpenseModel.js"


const createExpense = async (req, res) => {
     try {
          const expense = new Expense({
               user_id: req.body.user_id,
               category: req.body.category,
               date: req.body.date,
               amount: req.body.amount,
          });
          const expenseCreated = await expense.save()
          res.status(201).json({
               message: "Expense Saved Successfully",
               expense: expenseCreated
          })
     } catch (error) {
          res.status(400).json({
               message: ("Error Occured While Saving Expense" + error)

          })
     }



}


const readExpense = async (req, res) => {
     try {
          const expenses = await Expense.find({});
          if (expenses.length == 0) {
               res.status(404).json({
                    message: "No Expense Found"
               });


          } else {
               res.status(200).json({
                    message: "expenses retreived successfully",
                    success: false,
                    expenses: expenses

               })
          }

     }


     catch (err) {
          console.log(err)
          res.status(500).json({
               success: false,
               error: "Server Error"
          })
     }
}
export { readExpense, createExpense };






