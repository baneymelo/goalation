import { model, Schema } from 'mongoose'

const transactionSchema = new Schema({
    date: String,
    amount: Number,
    status: [{ type: String}],
})

export default model('goal', transactionSchema);