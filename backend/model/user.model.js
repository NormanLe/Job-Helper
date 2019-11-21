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
    email: {type: String},
    password: {type: String},
    Date: {type: Date}
}, {
    timestamps: true
});

const User = mongoose.model('User', userSchema);
module.exports = User;