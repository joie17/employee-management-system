import React, { useState, useEffect, useContext } from "react";
import Login from "./components/auth/login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashBoard from "./components/Dashboard/AdminDashBoard";
import { AuthContext } from "./context/AuthProvider";
import { DataContext } from "./context/Usercontext";

const App = () => {
  const data = useContext(DataContext); // ✅ correct usage
  console.log(data); // logs "jainil"

  const [user, setUser] = useState(null);
  const [LoggedInUser, setLoggedInUser] = useState(null);
  const authData = useContext(AuthContext);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (storedUser) {
      setUser(storedUser);
      if (storedUser.role === "employee") {
        setLoggedInUser(storedUser);
      }
    }
  }, []);

  const handleLogin = (email, password) => {
    if (email === "admin@example.com" && password === "123") {
      const adminUser = { role: "admin", name: "Admin" };
      setUser(adminUser);
      localStorage.setItem("loggedInUser", JSON.stringify(adminUser));
    } else if (authData) {
      const employee = authData.employees.find(
        (e) => email === e.email && e.password === password
      );

      if (employee) {
        const employeeUser = { role: "employee", ...employee };
        setUser(employeeUser);
        setLoggedInUser(employeeUser);
        localStorage.setItem("loggedInUser", JSON.stringify(employeeUser));
      } else {
        alert("Invalid credentials");
      }
    }
  };

  return (
    <>
      {/* <h1 className="text-black">this is me {data.username}</h1> */}
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user.role === "admin" ? (
        <AdminDashBoard changeUser={setUser} />
      ) : user.role === "employee" ? (
        <EmployeeDashboard data={LoggedInUser} changeUser={setUser} />
      ) : null}
    </>
  );
};

export default App;
