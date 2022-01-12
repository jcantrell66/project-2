const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const expenseSchema = new mongoose.Schema({
    price: Number,
    item: String
})

const incomeSchema = new mongoose.Schema({
    amount: Number,
    item: String
})

const businessSchema = new mongoose.Schema({
    name: String,
    expenses: [expenseSchema],
    incomes: [incomeSchema],
    customers: [{type: Schema.Types.ObjectId, ref: 'Customer'}],
    employee: {type: Schema.Types.ObjectId, ref: 'User'}
})




module.exports = mongoose.model('Business', businessSchema);