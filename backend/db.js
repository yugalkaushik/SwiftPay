const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://admin:4ypi7QwTTYQElbJB@cluster0.laay3py.mongodb.net/Easypay");

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim:true, //trims whitespace from beginning and end
        lowercase:true,
        minlength:3
    },
    password:{
        type: String,
        required:true,
        minlength: 6,
        trim:true
    },
    firstName: {
        type:String,
        required:true,
        trim:true
    },
    lastName:{
        type:String,
        required:true,
        trim:true
    },
})

const User = mongoose.model("User", userSchema);

module.exports = {User}