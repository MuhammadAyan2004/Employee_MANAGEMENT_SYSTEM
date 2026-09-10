import { useContext } from "react";
import Tasks from "./Tasks";
import { AuthContext } from "../../context/Context";

const AllTask = () => {
    const userData = useContext(AuthContext)
    console.log(userData.employees)
  return (
    <div className="w-full rounded-3xl bg-[#111111] p-5 text-white shadow-[0_0_30px_rgba(0,0,0,0.35)] md:p-6">
      <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
        <div>
          <p className="text-xs tracking-[0.25em] text-zinc-400">OVERVIEW</p>
          <h2 className="mt-2 text-2xl font-bold text-white">All Tasks</h2>
        </div>

        <span className="rounded-full border border-[#fbbf24]/30 bg-[#fbbf24]/10 px-3 py-1 text-xs font-medium text-[#fbbf24]">
          5 Active
        </span>
      </div>

      <div className="space-y-4">
        {userData.employees.map((task, index) => (
          <Tasks task={task} key={index} />
        ))}
      </div>
    </div>
  );
};

export default AllTask;
