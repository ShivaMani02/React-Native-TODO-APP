import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true   
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minlenght: [8, 'Password must be of at least 8 Characters'],
        select:false
    },
    avatar:{
        public_id:String,
        url:String,
    },
    createdAt:{
        type:Date,
        default:Date.now,
    },
    tasks:[{
        title:String,
        description:String,
        completed:Boolean,
        createdAt:Date,
    }],
    otp:Number,
    otp_expiry:Date,
});

export const User = mongoose.model('User', userSchema);