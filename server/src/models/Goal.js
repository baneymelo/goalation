import { model, Schema } from 'mongoose'

const goalSchema = new Schema({
    name: String,
    period: String,
    category: String,
    expire_date: Date,
    status: {type: String, default: 'In progress'},
    transaction_id: { type: Schema.Types.ObjectId, ref: 'Transaction' }
})

export default model('goal', goalSchema);