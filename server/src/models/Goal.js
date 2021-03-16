import { Model, model, Schema } from 'mongoose'

const goalSchema = new Schema({
    name: String,
    period: String,
    category: String,
    transaction_id: { type: Schema.Types.ObjectId, ref: 'Transaction' }
})

export default Model('goal', goalSchema);