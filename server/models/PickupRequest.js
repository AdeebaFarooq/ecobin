import mongoose from 'mongoose';

const pickupRequestSchema = new mongoose.Schema({
  email :{
    type: String,
    required:true 
  },
  eWasteType: {
    type: String,
    enum: ['Laptop', 'Mobile', 'Tablet', 'TV', 'Fridge', 'AC', 'Other'],
    required: true
  },
  otherDescription: {
    type: String,
    default: '',
    trim: true
  },
  image: {
    type: String, // Store the image URL or path
    required: false
  },
  pickupTime: {
    type: Date,
    required: true
  },
  address: {
    type: String,
    required: true,
    trim: true
  },
  district: {
    type: String,
    required: true,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const PickupRequest = mongoose.model('PickupRequest', pickupRequestSchema);

export default PickupRequest;
