import express from 'express';
import upload from '../middlewares/upload.js';
import { createPickupRequest, getPickupRequests } from '../controllers/pickuprequest.js';
import { get } from 'mongoose';

const router = express.Router();

router.post('/requestpickup', upload.single('image'), createPickupRequest);
router.get('/history',getPickupRequests);
export default router;
