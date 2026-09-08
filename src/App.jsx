import { useContext, useState } from "react";
import "./App.css";
import Login from "./components/auth/login";
import AdminDashBoard from "./components/Dashboard/adminDashBoard";
import EmployeeDashBoard from "./components/Dashboard/employeeDashBoard";
import { AuthContext } from "./context/Context";

function App() {
  const [user, setUser] = useState(null);
  const authData = useContext(AuthContext);
  console.log(authData);

  const handleLogin = (email, password) => {
    if (
      authData &&
      authData.admin.find((e) => e.email === email && e.password === password)
    ) {
      setUser("admin");
    } else if (
      authData &&
      authData.employees.find(
        (e) => e.email === email && e.password === password,
      )
    ) {
      setUser("employee");
    } else {
      alert("Invalid Credentials");
    }
  };
  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : user == "admin" ? (
        <AdminDashBoard setUser={setUser} />
      ) : (
        <EmployeeDashBoard setUser={setUser} />
      )}
    </>
  );
}

export default App;
