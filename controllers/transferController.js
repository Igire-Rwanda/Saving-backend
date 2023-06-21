
import bankAccounts from "../Models/bankModel.js"
import savingAccount from "../Models/savingModel.js"


const transfer = async (req, res) => {

    try {

        const amount = req.body.amount;
        const email = req.body.email;

        const bankAccount = await bankAccounts.findOne({ bankHolder: email })
        if (!bankAccount) {
            return res.status(400).json({ message: "Bank account not found" });
        }
        else if (bankAccount.Amount < amount) {
           return res.status(200).json({ message: "inssufient balance" })
        }

        else {
            await bankAccounts.findOneAndUpdate(
                { bankHolder: email },
                { $inc: { Amount: -amount } }
            )

        }

        ///THis section is about updating saving account based on the amount
        const saving = savingAccount.findOne({ accountHolder: email })
        if (!saving) {
            res.status(400).json({ message: "you do not have saving wallet" })
        }
        else {
            const currentSaving = await savingAccount.findOneAndUpdate(
                { accountHolder: email },
                { $inc: { amount: + amount } },
                { new: true }
            )
          await  currentSaving.save()
            res.status(200).json(currentSaving.amount)
            console.log(bankAccount.Amount)
            console.log(currentSaving.amount)
        }

    }
    catch (err) {
        console.log("err:", err),
            res.status(500).json({ message: "some error occured when accessing bank account" })

    }







    



    
}

export default transfer;