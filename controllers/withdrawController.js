import RequestsHistory from "../Models/requestModel.js"
import savingAccount from "../Models/savingModel.js"
import Team from "../Models/teamsModel.js"
const withdraw = async (req, res) => {
     const data = req.body;
     const name = data.name;
     const amount = data.amount;
     const found = await Team.findOne({ name: name })
     if (!found) {
          res.send("team not found")

     } else {

          await Team.findOneAndUpdate(
               { name: name },
               { $inc: { wallet: -amount } }

          )

     }

     res.send("hellgfdsdfghj")
}
export default withdraw;