const mongoose = require('mongoose');
const Schema = mongoose.Schema

const create_user = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: email,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

const User = mongoose.model("User", create_user) 