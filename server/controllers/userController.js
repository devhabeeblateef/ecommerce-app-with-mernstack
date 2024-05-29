import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js';

// Create User Profile -- POST
const registerUser =  asyncHandler( async(req, res) => {
    res.json({message: "Success"});
});

// Login and authenticate user -- POST
const authUser = asyncHandler( async (req, res) => {
    res.json({message: "Success"});
});

// Update User Profile -- PUT
const updateUser = asyncHandler ( async (req, res) => {
    res.json({message: "Success"});
});

// Logout User -- POST
const logoutUser =  asyncHandler( async (req, res) => {
    res.json({message: "Success"});
});

const getUser = asyncHandler( async (req, res) => {
    res.json({message: "Success"});
});

export { authUser, registerUser, updateUser, logoutUser, getUser }