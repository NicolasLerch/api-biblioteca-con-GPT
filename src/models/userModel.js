const mongoose = require("mongoose");
require('dotenv').config();

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
}, { collection: 'users'});

const User = mongoose.model("User", UserSchema);

module.exports = User;