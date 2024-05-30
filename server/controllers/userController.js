import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js';

// Create User Profile -- POST
const registerUser = asyncHandler(async (req, res) => {

    const { firstname, lastname, email, password } = req.body;
  
    const userExists = await User.findOne({ email });
  
    if (userExists) {
      res.status(400);
      throw new Error('User already exists');
    }
  
    const user = await User.create({
      firstname,
      lastname,
      email,
      password,
    });
  
    if (user) {
      res.status(201).json({
        _id: user._id,
        firstname: user.firstname,
        lastname: user.lastname,
      });
    } else {
      res.status(400);
      throw new Error('Invalid user data');
    }
  });


// Login and authenticate user -- POST
const authUser = asyncHandler( async (req, res) => {
    console.log(req.body)
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