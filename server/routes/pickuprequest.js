import express from 'express';
import upload from '../middlewares/upload.js';
import { createPickupRequest, getPickupRequests } from '../controllers/pickuprequest.js';
import { get } from 'mongoose';
import { isAuth } from '../middlewares/isAuth.js';
const router = express.Router();

router.post('/requestpickup',isAuth, upload.single('image'), createPickupRequest);
router.get('/history',isAuth,getPickupRequests);
export default router;
