import  User from "../models/userModel.js";
import {generateToken} from "../utils/generateToken.js";
import bcrypt from "bcryptjs";

export const Register = async (req, res) => {
    try {
        
        const { name, email, password ,role} = req.body;

        // Check if user already exists
        const user=await User.findOne({email:email});
       if(user) return res.status(201).json({message: "You have already have account"});
       bcrypt.genSalt(10,(err,salt)=>{
        bcrypt.hash(password,salt,async(err,hash)=>{
             if(err) return res.status(401).json({message: err.message});
             else{
                let user=await User.create({
                    name,
                    email,
                    password: hash,
                    role
                })
                let token=generateToken(user);
                res.cookie("token",token);
                  res.status(201).json({
                        token: token,
                        success: true,
                        message: "User Created Successfully"
                    })
             }
        })
       })


    } catch (error) {
          console.log("Error in register User", error);
        res.status(400).json({
            success: false,
            message: "Failed to register"
        })
    }
}


export const Login = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log("Login request received:", email, password);
       
        const user = await User.findOne({ email: email });
        if (!user) return res.status(404).json({ message: "User not found" });

       
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

        console.log("ismatch",isMatch);
        const token = generateToken(user);
        res.cookie("token", token);

        res.status(200).json({
            success: true,
            message: "Login successful",
            token: token,
            user: {
                name: user.name,
                email: user.email,
                role: user.role
            }
        });
    } catch (error) {
        console.log("Error in login User", error);
        res.status(400).json({
            success: false,
            message: "Failed to login"
        });
    }
}   