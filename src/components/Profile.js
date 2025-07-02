// Profile.js
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../utils/UserContext";

const Profile = () => {
  const { loggedInUser } = useContext(UserContext);
  const [userDetails, setUserDetails] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("currentUser");
    if (storedUser) {
      setUserDetails(JSON.parse(storedUser));
    }
  }, []);

  const bgUrl = "https://images.unsplash.com/photo-1504674900247-0877df9cc836";

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center px-4"
      style={{ backgroundImage: `url(${bgUrl})` }}
    >
      <div className="bg-white bg-opacity-90 p-8 rounded shadow-md w-full max-w-md relative">
        
        {/* Back Button */}
        <button
          onClick={() => navigate("/home")}
          className="absolute top-4 left-4 text-sm bg-gray-200 px-3 py-1 rounded shadow hover:bg-gray-300"
        >
          ← Back to Home
        </button>

        {/* Edit Profile Button */}
        <button
          onClick={() => navigate("/home/edit-profile")}
          className="absolute top-4 right-4 text-sm bg-blue-200 px-3 py-1 rounded shadow hover:bg-blue-300"
        >
          ✏️ Edit Profile
        </button>

        <h1 className="text-2xl font-bold mb-6 text-center text-green-600">User Profile</h1>

        {userDetails ? (
          <>
            <p className="mb-3 text-lg">👤 Username: <strong>{userDetails.username}</strong></p>
            <p className="mb-2 text-lg">📧 Email: <strong>{userDetails.email}</strong></p>
            <p className="mb-2 text-lg">📱 Phone: <strong>{userDetails.phone}</strong></p>
            <p className="mb-2 text-lg">🏠 Address: <strong>{userDetails.address}</strong></p>
            <p className="mb-2 text-lg">🎂 Date of Birth: <strong>{userDetails.dob}</strong></p>
            <p className="mb-2 text-lg">🚻 Gender: <strong>{userDetails.gender}</strong></p>
          </>
        ) : (
          <p className="text-red-500 text-center mt-4">
            User details not found in local storage.
          </p>
        )}
      </div>
    </div>
  );
};

export default Profile;
