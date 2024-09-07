const mongoose = require('mongoose');
const Schema = mongoose.Schema

const create_user = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validate: {
            validator: function (v) {
              return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v);
            },
            message: props => `${props.value} is not a valid email address!`
          }
    },
    phone: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    terms_condition: {
        type: Boolean,
        required: true,
        default: false
    },
    is_active: {
        type: Boolean,
        default: false
    },
    joining_date:{
        type: Date,
        default: new Date()
    }
})

const User = mongoose.model("User", create_user) 
module.exports = {User}