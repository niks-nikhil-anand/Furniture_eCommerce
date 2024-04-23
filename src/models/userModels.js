import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        trim:true
    },
   
},{timestamps : true})

const User = mongoose.models.User || mongoose.model('Product', userSchema);

export default User;
