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
              // Regular expression to validate email format
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
    }
})

const User = mongoose.model("User", create_user) 
module.exports = {User}