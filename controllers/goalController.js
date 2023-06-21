import Goals from "../Models/goalModel.js"
import Users from "../Models/signUpModel.js"
const createGoal = async (req, res) => {
     try {

          const userGoals= new Goals({
           Email:req.body.Email,
           Title:req.body.Title,
           amount:req.body.amount,
           startTime : req.body.startTime,
           endTime : req.body.endTime,
           detailsGoals : req.body.detailsGoals

          })


          const found=await Users.findOne({Email:req.body.Email,})
          if (!found) {
               return res.status(400).json({ message: "user not registered" });
          }
          else{
               const time2= userGoals.endTime -userGoals.startTime
               const amount=userGoals.amount/time2
               console.log(amount)
               userGoals.save()
               res.status(200).json({message:"Your required to save "+" "+amount+"rwf"+" "+"to achive your goals"})
          }
            

     } catch (err) {
          console.log(err)
          res.status(500).json({
               success: false,
               error: "Server Error"
          });

     }
}

const readGoal = async (req,res)=>{
     try {
          const response = await Goals.find({})
          if (response.length == 0) {
               res.status(409).json({
                   message: "No data Found",
                   data: response,
                   error: "Data not found",
               })
           } else {
               res.status(200).json({
                   message: "Found successfully",
                   error: null,
                   data: response
               })
           }
     } catch (error) {
          console.log("error catched", error)
          res.status(500).json({
              message: "failed find data",
              error: "failed"
          })
          
     }
}
export {readGoal,createGoal} ;