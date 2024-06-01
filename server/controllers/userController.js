import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js';
import generateToken from '../utils/generateToken.js';
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
        generateToken(res, user._id);
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
    const {email, password} = req.body;

    const user = await User.findOne({ email })

    if (user && (await user.comparePasswords(password))){
      generateToken(res, user._id);

      res.status(200).json({
        id: user._id,
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        password: user.password
      })
    }else{
      res.status(401);
      throw new Error("Invalid Credentials")
    }

});

// Update User Profile -- PUT
const updateUser = asyncHandler ( async (req, res) => {
    res.json({message: "Success"});
});

// Logout User -- POST
const logoutUser =  asyncHandler( async (req, res) => {
    res.cookie('jwt', ' ', {
      httpOnly: true,
      expires: new Date(0),
    })

    res.status(200).json({
      message: 'Logged Out Successfully'
    })
});

const getUser = asyncHandler( async (req, res) => {
    res.json({message: "Success"});
});

export { authUser, registerUser, updateUser, logoutUser, getUser }