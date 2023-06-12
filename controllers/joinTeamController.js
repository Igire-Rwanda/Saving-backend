import Team from "../Models/teamsModel.js"

const joinTeam=async(req,res)=>{
    
    try{
       const data=req.body
        // const teamName=req.body.teamName;
        const username=data.username
        const amount=req.body.amount;

        const currentTeam=await Team.findOne({ name: data.teamName })
           
        if(!currentTeam){
            res.status(400).json({error:"team not found"})
        }

        else{
             if(currentTeam.members.includes(username)){
                res.status(400).json({message:"looks that you have already joined"})
             }
             else if(amount < currentTeam.requiredAmount){
                res.status(400).json({message:"insuffiecinet amount"})
            }
            else{
           console.log(currentTeam.wallet +=amount)
           console.log(currentTeam.wallet)
           
           
            currentTeam.members.push(username);
            await currentTeam.save()
            res.status(200).json({message:"now you joined team a"});
            }
            
        }

    }catch(error){
        console.log(error)
        res.status(500).json({message:"some error occured while joing team"})



    }
}


export default joinTeam;