import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js';

export const protect = asyncHandler(async (req, res, next) => {
    let token;

    token = req.cookies.jwt

    if (token){
        try{
            const decode = jwt.verify(token, process.env.JWT_SECRET);
            req.user = User.findById(decode.userId).select('-password')  

            next()
        }catch (error) {
            res.status(401);
            throw new Error("Invalid Credentials");
        }
    }else{  
        res.status(401);
        throw new Error("No Token");
    }
})
