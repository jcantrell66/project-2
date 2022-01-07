const mongoose = require('mongoose');

// Create your User Model
//must include googleId like in passport example

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    googleId: String
})




module.exports = mongoose.model('User', userSchema)