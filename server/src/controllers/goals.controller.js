const User = require("../models/User");
const Goal = require("../models/Goal");
const Transaction = require("../models/Transaction");


module.exports.getGoals = async (req, res)=>{
    
    try {
        const goals = await Goal.find({ user_id: req.userId},{ user_id: 0, transaction_id: 0, __v: 0 })
    
        if(!goals) return res.status(400).send(0)
        
        if(!goals.length) return res.status(200).send({ goals:false })
        return res.status(200).send([...goals])

    } catch (error) {
        return res.status(400)
    }   
}

module.exports.createGoal = async (req, res)=>{

    try {
        const { name, category, period, expire_date, amount } = req.body;
        
        const user = await User.findById(req.userId)

        const transaction = new Transaction({
            amount
        })

        await transaction.save()

        const goal = new Goal({
            name,
            category,
            period,
            amount,
            expire_date: await Goal.verifyDate(expire_date),

            user_id: await req.userId,
            transaction_id: await transaction._id
        })

        await goal.save();
        console.log(goal);
        res.status(201).send({})

    } catch (error) {
        return res.status(400)
    }
}

module.exports.editGoal = async (req, res)=>{

    try {
        const { name, period, category, expire_date } = req.body;
        await Goal.findByIdAndUpdate(req.userId, {name, period, category, expire_date})

        res.status(201).json('Goal successfully modified')

    } catch (error) {
        return res.status(400)
    }
}

