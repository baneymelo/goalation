import User from "../models/User";
import Goal from "../models/Goal";


export const getGoal = async (req, res)=>{
    
    try {
        const goals_id = await User.findOne({goals_id: req.user})
        if(!goals_id) return res.status(200).json(0)
        console.log(goals_id);    
    } catch (error) {
        return res.status(400)
    }   
}

export const createGoal = async (req, res)=>{

    try {
        const { name, period, category, expire_date } = req.body;
        const user = await User.findById(req.user)

        const goal = new Goal({
            name,
            period,
            category,
            expire_date
        })

        await goal.save();
        await user.goals_id.push(goal._id)
        await user.save();

        res.status(201).json('Goal successfully created')

    } catch (error) {
        return res.status(400)
    }
}

export const editGoal = async (req, res)=>{

    try {
        const { name, period, category, expire_date } = req.body;
        await Goal.findByIdAndUpdate(req.user, {name, period, category, expire_date})

        res.status(201).json('Goal successfully modified')

    } catch (error) {
        return res.status(400)
    }
}