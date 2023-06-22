import Team from "../Models/teamsModel.js"

const joinTeam=async(req,res)=>{
    
    try{
       const data=req.body
       const name=data.name
       const email=data.email 
       const userName=data.userName
       const amount=req.body.amount;

        const currentTeam=await Team.findOne({ name: data.name})
           
        if(!currentTeam){
            res.status(400).json({error:"team not found"})
        }

        else{
            const Memberarr=currentTeam.members;

            for(let i=0;i<Memberarr.length;i++){
                console.log(Memberarr[i])
                const foundEmail=Memberarr[i].email
                if(email===foundEmail){
                 return   res.status(400).json({message:"looks that you have already joined"})
                }
            }
            if(amount < currentTeam.requiredAmount){
                res.status(400).json({message:"insuffiecient amount to join this team"})
            }else{
            
                const createMember={
                    

                };
                //This is about adding name and email of new members 
                
                createMember.email=email;
                createMember.name=userName
                currentTeam.members.push(createMember);
                //This is about adding and checking if amount to team wallet 
                currentTeam.wallet +=amount;
    
                await currentTeam.save();
            

          return   res.status(200).json({message:"now you joined team a"}) 

        }
    }


    } catch(error){
        console.log(error)
        res.status(500).json({ message: "some error occured while joing team" })



    }
}


export default joinTeam;