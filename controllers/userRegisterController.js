import signUpModel from "../Models/signUpModel.js"

const signUp=async(req,res)=>{
    try{
        const data=req.body
        
        if(data){
            res.status(404).json({
            
                message:"same credentials in our website"
            })
        }
        let signUpInstance= new signUpModel({
            username: data.username,
            password: data.password
        });
        
        signUpInstance.save()
        .then((data)=>{
            res.send(data)
    
        })
    
     }
     
     catch(err){
        console.log("some error foiund")
        res.send("collect your error")
     }
    
}

export default signUp;