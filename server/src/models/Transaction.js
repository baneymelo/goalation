import { Model, model, Schema } from 'mongoose'

const transactionSchema = new Schema({
    date: String,
    amount: Number,
    status: [{ type: String}],
})

export default Model('goal', transactionSchema);