const mongoose = require('mongoose');


const expenseSchema = new mongoose.Schema({
    amount: Number,
    type: String
})


const businessSchema = new mongoose.Schema({
    income: Number,
    email: String,
    googleId: String,
    expenses: [expenseSchema],
    customers: [{type: Schema.Types.ObjectId, ref: 'Customer'}],
    employees: [{type: Schema.Types.ObjectId, ref: 'User'}]
})




module.exports = mongoose.model('Business', businessSchema)