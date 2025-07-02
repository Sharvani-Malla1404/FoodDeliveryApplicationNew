// localStorageUtils.js

// Save user on registration
export const saveUser = (user) => {
  const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

  // Check if username or email already exists
  const alreadyExists = existingUsers.some(
    (u) => u.username === user.username || u.email === user.email
  );

  if (alreadyExists) return false;

  // Save full user list (with password)
  existingUsers.push(user);
  localStorage.setItem("users", JSON.stringify(existingUsers));

  // Save current user details (without password) for Profile
  const { username, email, phone, address, dob, gender } = user;
  const currentUser = { username, email, phone, address, dob, gender };
  localStorage.setItem("currentUser", JSON.stringify(currentUser));

  return true;
};

// Validate user on login
export const validateUser = ({ username, password }) => {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const validUser = users.find(
    (u) => u.username === username && u.password === password
  );

  if (validUser) {
    // Also set current user (excluding password)
    const { username, email, phone, address, dob, gender } = validUser;
    const currentUser = { username, email, phone, address, dob, gender };
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
  }

  return validUser;
};
