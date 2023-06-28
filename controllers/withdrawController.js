import RequestsHistory from "../Models/requestModel.js"
import savingAccount from "../Models/savingModel.js"
import Team from "../Models/teamsModel.js"
const withdraw = async (req, res) => {
     const data = req.body;
     const name = data.name;
     const email = data.email;
     const amount = data.amount;
     const found = await Team.findOne({ teamName: name })

     try {
          if (!found) {
               return res.status(409).json({
                    message: "teamName not found"

               })
               
          } else {

               let members = found.members;

               let memberFound = false
               for (let i = 0; i < members.length; i++) {
                    const foundEmail = members[i].email
                    
                    if (email === foundEmail) {

                         memberFound = true
                           
                    }
               }
               if(memberFound){
                    const foundSaving=await savingAccount.findOne({accountHolder:email})
                    if(foundSaving){
                         await Team.findOneAndUpdate(

                               { teamName: name },
                               { $inc: { wallet: - amount } },
                               { new: true }
                          )
                          await savingAccount.findOneAndUpdate(

                              { accountHolder: email },
                              { $inc: { amount: + amount } },
                              { new: true }
                         )
                         return  res.status(200).json(
                              
                              {message:foundSaving.amount}
                              )
                    }else{
                         return res.status(409).json({message:"not available in saving"})
                    }

                  
                   
               }else{
                  return  res.status.json({message:"your email not found in specified team"})
               }






          }



     } catch (error) {
          console.log(error)
          return res.status(500).json({
               message: "some error occured",
               error: "failed"

          })

     }

}
export default withdraw;