// Profile.js
import React, { useContext } from "react";
import UserContext from "../utils/UserContext";

const Profile = () => {
  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center text-green-600">User Profile</h1>
        <p className="mb-2 text-lg">👤 Username: <strong>{loggedInUser}</strong></p>
        <p className="mb-2 text-lg">📧 Email: yourmail@example.com</p>
        <p className="mb-2 text-lg">📱 Phone: 123-456-7890</p>
        {/* Add more profile details as needed */}
      </div>
    </div>
  );
};

export default Profile;
