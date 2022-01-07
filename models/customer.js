const mongoose = require('mongoose');


const customerSchema = new mongoose.Schema({
    sale: Number,
    name: String
})


module.exports = mongoose.model('Customer', customerSchema)