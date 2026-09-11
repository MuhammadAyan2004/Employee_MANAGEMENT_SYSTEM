import Header from "../others/Header"
import TaskListNumber from "../others/TaskListNumber"
import Tasklist from "../TaskList.jsx/Tasklist";

const EmployeeDashBoard = ({ setUser , setLoggedInUser, data}) => {
  return (
    <div className="p-10 bg-[#1c1c1c] h-screen w-full">
      <Header setUser={setUser} setLoggedInUser={setLoggedInUser} data={data} />
      <TaskListNumber data={data} />
      <Tasklist data={data} />
    </div>
  );
};

export default EmployeeDashBoard
