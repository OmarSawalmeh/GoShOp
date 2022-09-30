import express from 'express'
const router = express.Router()
import { authUser, registerUser, getUserProfile, updateUserProfile, getUsers, deletUsers, getUserByID, updateUser } from '../controllers/userController.js'
// MIDLLEWARE
import {protect, admin} from '../middleware/authMiddleware.js'

router.route('/').post(registerUser ).get(protect, admin, getUsers)
router.post('/login', authUser)
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile)
router.route('/:id').delete(protect, admin, deletUsers).get(protect, admin, getUserByID).put(protect, admin, updateUser)


export default router
