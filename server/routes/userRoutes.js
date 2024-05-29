import express from 'express'
const router = express.Router();
import { registerUser, authUser, updateUser, getUser, logoutUser } from '../controllers/userController.js';


// Login Route
router.route('/auth').post(authUser);

// Register Route
router.route('/').post(registerUser);

// Update Router and Get Router
router.route('/profile').put(updateUser).get(getUser);

// Logout Router
router.route('/logout').post(logoutUser);

export default router;