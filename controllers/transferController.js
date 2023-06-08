import bankAccouts  from "../Models/bankModel.js"


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
        res.status(200).json(bankAccount.Amount)   
        

    }
    catch(err){
        console.log("err:",err),
        res.status(500).json({message:"some error occured when accessing bank account"})

    }







    // res.send("this is transfer")
}

export default transfer;