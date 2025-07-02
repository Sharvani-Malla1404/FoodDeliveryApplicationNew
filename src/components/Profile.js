// Profile.js
import React, { useContext, useEffect, useState } from "react";
import UserContext from "../utils/UserContext";

const Profile = () => {
  const { loggedInUser } = useContext(UserContext);
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("currentUser");
    if (storedUser) {
      setUserDetails(JSON.parse(storedUser));
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center text-green-600">User Profile</h1>

        {userDetails ? (
          <>
            <p className="mb-2 text-lg">👤 User Name: <strong>{userDetails.username}</strong></p>
            <p className="mb-2 text-lg">📧 Email: <strong>{userDetails.email}</strong></p>
            <p className="mb-2 text-lg">📱 Phone: <strong>{userDetails.phone}</strong></p>
            <p className="mb-2 text-lg">🏠 Address: <strong>{userDetails.address}</strong></p>
            <p className="mb-2 text-lg">🎂 Date of Birth: <strong>{userDetails.dob}</strong></p>
            <p className="mb-2 text-lg">🚻 Gender: <strong>{userDetails.gender}</strong></p>
          </>
        ) : (
          <p className="text-red-500 text-center mt-4">User details not found in local storage.</p>
        )}
      </div>
    </div>
  );
};

export default Profile;
