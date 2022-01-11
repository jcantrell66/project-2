const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const expenseSchema = new mongoose.Schema({
    amount: Number,
    type: String
})


const businessSchema = new mongoose.Schema({
    income: Number,
    name: String,
    expenses: [expenseSchema],
    customers: [{type: Schema.Types.ObjectId, ref: 'Customer'}],
    employee: {type: Schema.Types.ObjectId, ref: 'User'}
})




module.exports = mongoose.model('Business', businessSchema)