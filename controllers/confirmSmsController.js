import nodemailer from 'nodemailer'
import teamSchema from "../Models/teamsModel.js"



const confirmSms = async (req, res) => {
    try {
        //let array = [{ name: "Marquise", email: "marquineza10@gmail.com" }, { name: "patrick", email: "munyeshurimanzi@gmail.com" }];
        //let team = req.y.team;
       const data = req.body;
       const email=data.email;

        const confirm = await teamSchema.findOne({ teamName: data.name });

        if (!confirm) {
            return res.status(404).json({
                message: "Team not found"
            });

        }else{

            const member = confirm.members;
        for (let i = 0; i < member.length; i++) {
            let receiver = member[i].email;
            console.log(receiver);

            if(!(receiver==email)){
                  return res.status(404).json({
                    message:"your email not found"
                })
            }else{
                const confirmation = nodemailer.createTransport({
                    service: 'gmail',
                    host: 'smtp.gmail.com',
                    port: 465,
                    secure: true,
                    auth: {
                        user: 'transportcode2023@gmail.com  ',
                        pass: ' hcycpozjyailjeiu',
                    },
                });
    
                var mailOptions = {
                    from: 'transportcode2023@gmail.com ',
    
                    to: receiver,
    
                    subject: ' Ask for Withdraw ',
                    text: 'Hey there, it’s our first message sent with Nodemailer 😉 ',
                    html: '<b>Hey there! </b><br> hope this email finds you well. I am writing to inform you that marquise in TeckCode want to withdraw 5000',
                };
    
                confirmation.sendMail(mailOptions, (error, info) => {
                    if (error) {
                        console.log(error);
                    } else {
                        console.log('Message sent: %s', info.messageId);
                    }
                });
            }

            
        }
        }
    } catch (error) {
        res.status(500).json({
            message: error.message || "Some error occurred while creating the income."
        })
    }

}

export default confirmSms

