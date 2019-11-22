const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Users Table: ID, Name, Email, Password, Account creation date, status (banned)
const userSchema = new Schema({
    username: {
        type: String,
        required: true, 
        unique: true,
        trim: true
    },
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    date: {type: Date, default: Date.now}
}, {
    timestamps: true
});

const User = mongoose.model('User', userSchema);
module.exports = User;