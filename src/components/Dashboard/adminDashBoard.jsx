import AllTask from "../others/AllTask";
import CreateTask from "../others/CreateTask";
import Header from "../others/Header";

const AdminDashBoard = ({ setUser, setLoggedInUser, data }) => {
  return (
    <div className="min-h-screen w-full bg-[#1c1c1c] p-6 text-white md:p-10">
      <Header setUser={setUser} setLoggedInUser={setLoggedInUser} data={data} />
      <CreateTask />
      <AllTask />
    </div>
  );
};

export default AdminDashBoard;
