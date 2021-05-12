const { model, Schema} = require('mongoose');
const bcrypt = require("bcryptjs");

const userSchema = new Schema({
    email:
    {
        type: String,
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        unique: true,
        required: true
    },
    password:
    {
        type: String,
        min: 4,
        required: true
    },
    fullname: 
    {
        type: String,
        required: true
    },
    goals_id: [{ type: Schema.Types.ObjectId, ref: 'Goal' }],
    rewards: [{ type: String }],
    user_type: String,
    /* wallet_balance: Number */

})

userSchema.statics.encryptPassword = async (psw) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(psw, salt)
}

const User = model('user', userSchema);

module.exports = User;