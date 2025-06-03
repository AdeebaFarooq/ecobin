import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const RequestPickup = () => {
  const [eWasteType, setEWasteType] = useState("Laptop");
  const [otherDescription, setOtherDescription] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [address, setAddress] = useState("");
  const [district, setDistrict] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (eWasteType === "Other" && otherDescription.trim() === "") {
      return toast.error("Please describe the e-waste type.");
    }

    setLoading(true);

    try {
      const token = localStorage.getItem("token");

      // Build form data for multipart/form-data
      const formData = new FormData();
      formData.append("eWasteType", eWasteType);
      formData.append("otherDescription", otherDescription);
      formData.append("pickupTime", pickupTime);
      formData.append("address", address);
      formData.append("district", district);
      if (image) {
        formData.append("image", image);  // key "image" matches multer's single("image")
      }

      const response = await axios.post(
        "http://localhost:5000/api/requestpickup",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`, // if your API uses token auth
          },
        }
      );

      toast.success(response.data.message);
      // Reset form fields
      setEWasteType("Laptop");
      setOtherDescription("");
      setPickupTime("");
      setAddress("");
      setDistrict("");
      setImage(null);
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to submit pickup request.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Request Pickup</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>e-Waste Type</label>
          <select
            className="form-select"
            value={eWasteType}
            onChange={(e) => setEWasteType(e.target.value)}
            required
          >
            <option value="Laptop">Laptop</option>
            <option value="Mobile">Mobile</option>
            <option value="Tablet">Tablet</option>
            <option value="TV">TV</option>
            <option value="Fridge">Fridge</option>
            <option value="AC">AC</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {eWasteType === "Other" && (
          <div className="mb-3">
            <label>Other Description</label>
            <input
              type="text"
              className="form-control"
              value={otherDescription}
              onChange={(e) => setOtherDescription(e.target.value)}
              required
            />
          </div>
        )}

        <div className="mb-3">
          <label>Upload Image (optional)</label>
          <input
            type="file"
            accept="image/*"
            className="form-control"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>

        <div className="mb-3">
          <label>Pickup Time</label>
          <input
            type="datetime-local"
            className="form-control"
            value={pickupTime}
            onChange={(e) => setPickupTime(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label>Address</label>
          <textarea
            className="form-control"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label>District</label>
          <input
            type="text"
            className="form-control"
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-success" disabled={loading}>
          {loading ? "Submitting..." : "Submit Request"}
        </button>
      </form>
    </div>
  );
};

export default RequestPickup;
