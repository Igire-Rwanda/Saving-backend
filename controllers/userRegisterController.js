import signUpModel from "../Models/signUpModel.js"
import bcrypt  from "bcrypt"

const signUp=async(req,res)=>{
    try{ 
        const data=req.body
        const salt= await bcrypt.genSalt(8);
        const hashedPassword= await bcrypt.hash(data.Password,salt);
        data.Password=hashedPassword

        const existinguser= await signUpModel.findOne({Username: data.Username})
        if(existinguser){
            res.send("your user name account alread exing")
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
        const existinguser=await signUpModel.findOne({username: data.username})
        if(existinguser){
            res.send("welcome to our home page")
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

export {signUp,Login};