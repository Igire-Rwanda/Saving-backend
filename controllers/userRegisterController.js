import signUpModel from "../Models/signUpModel.js"

const signUp=async(req,res)=>{
    try{ 
        const data=req.body
        const existinguser=await signUpModel.findOne({username: data.username})
        if(existinguser){
            res.send("your user name account alread exing")
        }
        else{
            let userInfo=new signUpModel({
                username: data.username,
                password: data.password
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
            let userInfo=new signUpModel({
                username: data.username,
                password: data.password
           })
           const savedData = await userInfo.save();
            res.send("Create your account ,or check your credentials")
        



        }
        
        }
        catch(err){
            console.log("some error:",err)
            res.send("some error occured")
        }
    
        
}

export {signUp,Login};