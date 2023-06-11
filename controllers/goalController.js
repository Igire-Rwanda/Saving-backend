import Item from "../Models/goalModel.js"
import bankAccouts from "../Models/bankModel.js"
const createGoal = async (req, res) => {
     try {
          const itemName = req.body.itemName;
          const amount = req.body.amount;
          const timeline = req.body.timeline;
          const email = req.body.email
          const bankAccount = await bankAccouts.findOne({ bankHolder: email })
          if (!bankAccount) {
               return res.status(400).json({ message: "Bank account not found" });
          }
          else{
             const savingNeeded= amount/timeline ;
          //    const goalCreated = await goalModel.save()
             res.status(200).json({
               message:"the amount needed to achieve your goal is" ,
             savingNeeded:savingNeeded
          })
             console.log("the amount needed to achieve your goal is",+savingNeeded )
          }

     } catch (err) {
          console.log(err)
          res.status(500).json({
               success: false,
               error: "Server Error"
          });

     }
}

export default createGoal;