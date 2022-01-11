const mongoose = require('mongoose');


const customerSchema = new mongoose.Schema({
    address: String,
    name: String
})


module.exports = mongoose.model('Customer', customerSchema)