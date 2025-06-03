import PickupRequest from '../models/pickupRequest.js';

// Create pickup request (already perfect)
export const createPickupRequest = async (req, res) => {
  try {
    const {
      eWasteType,
      otherDescription,
      pickupTime,
      address,
      district
    } = req.body;

    const imagePath = req.file ? req.file.path : null;
console.log(req.user);
    const newRequest = new PickupRequest({
      userId: req.user._id, // ✅ Correct: tie request to logged-in user
      eWasteType,
      otherDescription,
      image: imagePath,
      pickupTime,
      address,
      district
    });

    await newRequest.save();

    res.status(201).json({ message: 'Pickup request successful', request: newRequest });
  } catch (error) {
    console.error('Error saving pickup request:', error);
    res.status(500).json({ message: 'Server error, please try again later.' });
  }
};

// ✅ FIX: get pickup requests only for the logged-in user
export const getPickupRequests = async (req, res) => {
  try {
    const requests = await PickupRequest.find({ userId: req.user._id }).sort({ createdAt: -1 });

    res.status(200).json(requests);
  } catch (error) {
    console.error('Error fetching pickup requests:', error);
    res.status(500).json({ message: 'Server error, please try again later.' });
  }
};
