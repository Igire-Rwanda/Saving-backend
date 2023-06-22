import incomes from "../Models/incomeModel.js"

const createIncome = async (req, res) => {
     try {
          const income = new incomes({
               email: req.body.email,
               incomeAmount: req.body.incomeAmount,
               Period: req.body.Period,
               incomeType: req.body.incomeType

          });
          const incomeSaved = await income.save()
          res.status(201).json({
               message: "Income created successfully",
               data: incomeSaved
          })
     } catch (error) {
          res.status(500).json({
               message: error.message || "Some error occurred while creating the income."
          })
     }

}


const readIncome = async (req, res) => {
     try {
const income = await incomes.find({})
          if (income.length ==0){
               res.status(409).json({
                    message: "No data Found",
                    data: income,
                    error: "Data not found",
                })
          }
          else{res.status(200).json({
               message: "Incomes fetched successfully",
               data: income
          })
     }
          
     } catch (error) {
          res.status(500).json({
               message: error.message || "Some error occurred while fetching incomes."
          })
     }

}
export {createIncome , readIncome } ;
