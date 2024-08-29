import { timeStamp } from "console";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username : {
        type: String,
        required: true,
        unique : true,    
    },
    email : {
        type : String,
        required : true,
        unique : true,
        lowercase : true,
        match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Please provide a valid email address']
    },
    password : {
        type : String,
        required : true,
    } 
},{timestamps : true}
)

const User = mongoose.model('User' , userSchema);

export default User;