import React, { useEffect, useState } from "react";

const Header = (props) => {
  const [username, setUsername] = useState("User");

  // Get the username from localStorage when the component mounts
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (storedUser) {
      if (storedUser.role === "admin") {
        setUsername("Admin");
      } else {
        setUsername(storedUser.firstName || "Employee");
      }
    }
  }, []);

  // Logout the user by removing "loggedInUser" from localStorage and refreshing the page
  const logoutUser = () => {
    localStorage.removeItem("loggedInUser"); // Remove the logged-in user from localStorage
    // window.location.reload(); // Reload the page to redirect to the login screen'
    console.log(props.changeUser)
    props.changeUser("");
  };

  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium">
        HELLO <br />
        <span className="text-3xl font-semibold ">{username} 👋🏻</span>
      </h1>
      <button
        onClick={logoutUser}
        className="bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-sm"
      >
        Log out
      </button>
    </div>
  );
};

export default Header;
