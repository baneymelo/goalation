import User from "../models/User";
import Goal from "../models/Goal";
import Transaction from "../models/Transaction";


export const getGoals = async (req, res)=>{
    
    try {
        const goals = await Goal.find({user_id: req.userId},{_id: 0, user_id: 0, transaction_id: 0, __v: 0})
    
        if(!goals) return res.status(400).json(0)
        
        if(!goals.length) return res.status(200).send({goals:false})
        return res.status(200).send({goals})

    } catch (error) {
        return res.status(400)
    }   
}

export const createGoal = async (req, res)=>{

    try {
        const { name, category, period, expire_date, amount } = req.body;
        /* const user = await User.findById(req.userId) */

        const transaction = new Transaction({
            amount
        })

        await transaction.save()

        const goal = new Goal({
            name,
            period,
            category,
            amount,
            expire_date: await Goal.verifyDate(expire_date),
            user_id: await req.userId,
            transaction_id: await transaction._id
        })

        await goal.save();

        res.status(201).send({ msg: 'Goal created successfully' })

    } catch (error) {
        return res.status(400)
    }
}

export const editGoal = async (req, res)=>{

    try {
        const { name, period, category, expire_date } = req.body;
        await Goal.findByIdAndUpdate(req.userId, {name, period, category, expire_date})

        res.status(201).json('Goal successfully modified')

    } catch (error) {
        return res.status(400)
    }
}

