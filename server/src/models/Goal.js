import { model, Schema } from 'mongoose'

const goalSchema = new Schema({
    name: String,
    category: String,
    period: String,
    expire_date: Date,
    amount: Number,

    status: {type: String, default: 'In progress'},
    user_id: { type: Schema.Types.ObjectId, ref: 'User' },
    transaction_id: { type: Schema.Types.ObjectId, ref: 'Transaction' }
})



goalSchema.statics.verifyDate = async ed => {
    let date = new Date();

    if(ed === '') return date.setDate(date.getDate()+365)
    return ed;
}

export default model('goal', goalSchema);