import { User } from "../models/users.js";

export const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const {avatar} = req.files;
        
        const user = await User.findOne({email});

        if(user){
            return res.status(400).json({error:'User Already Exists'})
        }

    } catch (error) {
        
    }
}