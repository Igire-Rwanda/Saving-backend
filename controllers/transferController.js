
import bankAccouts  from "../Models/bankModel.js"
import savingAccount from "../Models/savingModel.js"


const transfer=async(req,res)=>{

    try{
      
        const amount = req.body.amount;
        const email = req.body.email;

        const bankAccount=await bankAccouts.findOne({bankHolder:email})
        if (!bankAccount) {
            return res.status(400).json({ message: "Bank account not found" });
          }
        if(bankAccount.Amount <amount){
            res.status(200).json({message:"inssufient balance"})
        }
      
        else{
            await bankAccouts.findOneAndUpdate(
                {bankHolder:email},
                {$inc:{Amount:-amount}}
            )
        
        }

        ///THis ection is about updating saving account based on the amount
        const saving=savingAccount.findOne({accountHolder:email})
        if(!saving){
            res.status(400).json({message:"you do not have saving wallet"})
        }
        else{
        const currentSaving=await savingAccount.findOneAndUpdate(
            {accountHolder:email},
            {$inc:{amount:+amount}},
            {new :true}
        )
        res.status(200).json(currentSaving.amount)
        console.log(currentSaving.amount)
        }

    }
    catch(err){
        console.log("err:",err),
        res.status(500).json({message:"some error occured when accessing bank account"})

    }







    // res.send("this is transfer")



const transfer=(req,res)=>{
    res.send("this is transfer")

}
}

export default transfer;