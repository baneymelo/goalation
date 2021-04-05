import { model, Schema } from 'mongoose'

const transactionSchema = new Schema({
    amount: { type: Number, min: 5},
    status: { type: String, default: 'bet' }
}) 

export default model('transaction', transactionSchema);