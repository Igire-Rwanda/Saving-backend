import Team from "../Models/teamsModel.js"

const joinTeam=async(req,res)=>{
    
    try{

        const teamName=req.body.teamName;
        const username=req.body.username;
        const amount=req.body.amount;

        const currentTeam=await Team.findOne({teamName})
        if(!currentTeam){
            res.status(400).json("team not found")
        }

        else{
            if(amount<currentTeam.requiredAmount){
                res.status(400).json("insuffiecinet amount")
            }
            currentTeam.members.push(username);
            await currentTeam.save()
        }

    }catch(error){
        console.log(error)
        res.status(500).json({message:"some error occured while joing team"})



    }
}


export default joinTeam;