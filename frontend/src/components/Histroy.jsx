import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const History = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchRequests = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get("http://localhost:5000/api/history", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.data.success) {
        setRequests(res.data.requests);
      } else {
        toast.error("Failed to fetch requests");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Error fetching requests");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  return (
    <div className="container mt-4">
      <h2>Your Pickup Request History</h2>
      {loading ? (
        <p>Loading...</p>
      ) : requests.length === 0 ? (
        <p>You have not made any pickup requests yet.</p>
      ) : (
        <table className="table table-bordered mt-3">
          <thead>
            <tr>
              <th>e-Waste Type</th>
              <th>Description</th>
              <th>Pickup Time</th>
              <th>Address</th>
              <th>District</th>
              <th>Image</th>
              <th>Requested On</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((req) => (
              <tr key={req._id}>
                <td>{req.eWasteType}</td>
                <td>{req.otherDescription || "-"}</td>
                <td>{new Date(req.pickupTime).toLocaleString()}</td>
                <td>{req.address}</td>
                <td>{req.district}</td>
                <td>
                  {req.image ? (
                    <img
                      src={`http://localhost:5000/${req.image}`}
                      alt="e-waste"
                      style={{ width: "100px" }}
                    />
                  ) : (
                    "-"
                  )}
                </td>
                <td>{new Date(req.createdAt).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default History;
