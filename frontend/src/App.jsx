import { useContext, useEffect, useState } from "react";
import "./App.css";
import Login from "./components/auth/login";
import AdminDashBoard from "./components/Dashboard/adminDashBoard";
import EmployeeDashBoard from "./components/Dashboard/employeeDashBoard";
import { AuthContext } from "./context/Context";

function App() {
  const [user, setUser] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const authData = useContext(AuthContext);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedInUser(userData.data);
    }
  }, []);

  const handleLogin = (email, password) => {
    if (authData) {
      const employee = authData.employees.find((e) => e.email === email && e.password === password);
      const admin = authData.admin.find((e) => e.email === email && e.password === password);

      if (employee) {
        setUser("employee");
        setLoggedInUser(employee);
        localStorage.setItem("loggedInUser",JSON.stringify({ role: "employee", data:employee }));
      }else if (admin){
        setUser("admin");
        setLoggedInUser(admin);
        localStorage.setItem("loggedInUser",JSON.stringify({ role: "admin", data: admin }));
      }

    } else {
      alert("Invalid Credentials");
    }
  };
  return (
    <>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user == "admin" ? (
        <AdminDashBoard
          setUser={setUser}
          setLoggedInUser={setLoggedInUser}
          data={loggedInUser}
        />
      ) : (
        <EmployeeDashBoard
          setUser={setUser}
          setLoggedInUser={setLoggedInUser}
          data={loggedInUser}
        />
      )}
    </>
  );
}

export default App;
