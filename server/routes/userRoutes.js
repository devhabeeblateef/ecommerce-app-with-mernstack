import express from 'express'
const router = express.Router();
import { registerUser, authUser, updateUser, getUser, logoutUser } from '../controllers/userController.js';


// Login Route
router.post('/auth', authUser);

// Register Route
router.post('/', registerUser);

// Update Router and Get Router
router.route('/profile').put(updateUser).get(getUser);

// Logout Router
router.post('/logout', logoutUser)

export default router;