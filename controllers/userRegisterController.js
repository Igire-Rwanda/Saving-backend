import signUpModel from "../Models/signUpModel.js"
import bcrypt  from "bcrypt"

const SignUp=async(req,res)=>{
    try{ 
        const data=req.body
        const salt= await bcrypt.genSalt(8);
        const hashedPassword= await bcrypt.hash(data.Password,salt);
        data.Password=hashedPassword

        const existinguser= await signUpModel.findOne({Email: data.Email})
        if(existinguser){
            res.status(200).json({
                message:"email already in use"
            })
            
        }
        else{
            let userInfo=new signUpModel({
                Firstname:data.Firstname,
                Lastname:data.Lastname,
                Email:data.Email,
                Username: data.Username,
                Password: data.Password
           })
           const savedData = await userInfo.save();
            res.send(savedData)
        



        }
        
        }
        catch(err){
            console.log("some error:",err)
            res.send("some error occured")
        }
    
        
}
const Login=async(req,res)=>{
    try{ 
        const data=req.body
        const existingUserEmail=await signUpModel.findOne({Email: data.Email})
       
        if(existingUserEmail ){
            const existingUserEmailPassword= await bcrypt.compare(data.Password,existingUserEmail.Password)

            if(existingUserEmailPassword){
                res.status(200).json({
                    message:"Account is real"
                   })
            }
            
          
        }
        else{
           
            res.send("Create your account ,or check your credentials")
        



        }
        
        }
        catch(err){
            console.log("some error:",err)
            res.send("some error occured")
        }
    
        
}

export {SignUp,Login};