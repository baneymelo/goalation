const { model, Schema } = require('mongoose');

const transactionSchema = new Schema({
    amount: { type: Number, min: 5},
    status: { type: String, default: 'bet' }
}) 

const Transaction = model('transaction', transactionSchema);

module.exports = Transaction;