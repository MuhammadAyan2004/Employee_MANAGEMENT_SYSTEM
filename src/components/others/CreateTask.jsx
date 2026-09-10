import { useRef, useState } from "react";
import {
  FaCalendarAlt,
  FaClipboardList,
  FaPenNib,
  FaTag,
  FaUserTie,
} from "react-icons/fa";

const CreateTask = () => {
  const taskTitleElem = useRef("");
  const DescriptionElem = useRef("");
  const dateElem = useRef("");
  const assignToElem = useRef("");
  const categoryElem = useRef("");
  
  const submitHandler = async (e) => {
    e.preventDefault();
    const title = taskTitleElem.current.value;
    const description = DescriptionElem.current.value;
    const date = dateElem.current.value;
    const category = categoryElem.current.value;
    const taskAssignTo = assignToElem.current.value;
  
    const newFile = { newTask:true, completed:false, failed:false, active:false, title, description, date, category};

    const data = JSON.parse(localStorage.getItem("employees"))

    await data.forEach((elem)=>{
      if (taskAssignTo == elem.email) {
        elem.tasks.push(newFile)
      }
    })
    
    localStorage.setItem("employees",JSON.stringify(data))
    console.log(data)
  };

  return (
    <div className="mx-auto mt-8 max-w-5xl rounded-3xl bg-[#111111] p-6 md:p-8 shadow-[inset_-6px_-6px_5px_rgba(255,255,255,0.3),inset_6px_6px_20px_rgba(255,255,255,0.3)]">
      <div className="mb-8 flex items-center gap-3">
        <FaClipboardList className="text-xl" />
        <h1 className="text-3xl font-bold tracking-wide text-white">
          Create Task
        </h1>
      </div>

      <form className="grid gap-6 md:grid-cols-2" onSubmit={submitHandler}>
        <label
          htmlFor="title"
          className="flex flex-col gap-2 text-sm text-zinc-300 md:col-span-1"
        >
          <span className="flex items-center gap-2 font-medium text-zinc-200">
            <FaPenNib className="text-[#fbbf24]" />
            Task Title
          </span>
          <input
            type="text"
            placeholder="make a banner for youtube..."
            ref={taskTitleElem}
            id="title"
            className="rounded-xl border border-white/10 bg-[#181818] px-4 py-3 text-white placeholder:text-zinc-500 outline-none transition focus:border-[#fbbf24]/60 focus:ring-2 focus:ring-[#fbbf24]/20"
          />
        </label>

        <label
          htmlFor="Description"
          className="flex flex-col gap-2 text-sm text-zinc-300 md:col-span-2"
        >
          <span className="flex items-center gap-2 font-medium text-zinc-200">
            <FaClipboardList className="text-[#f59e0b]" />
            Description
          </span>
          <input
            type="text"
            placeholder="Describe the task in detail here..."
            ref={DescriptionElem}
            id="Description"
            className="rounded-xl border border-white/10 bg-[#181818] px-4 py-3 text-white placeholder:text-zinc-500 outline-none transition focus:border-[#fbbf24]/60 focus:ring-2 focus:ring-[#fbbf24]/20"
          />
        </label>

        <label
          htmlFor="date"
          className="flex flex-col gap-2 text-sm text-zinc-300"
        >
          <span className="flex items-center gap-2 font-medium text-zinc-200">
            <FaCalendarAlt className="text-[#60a5fa]" />
            Date
          </span>
          <input
            type="date"
            ref={dateElem}
            id="date"
            className="rounded-xl border border-white/10 bg-[#181818] px-4 py-3 text-white outline-none transition focus:border-[#60a5fa]/60 focus:ring-2 focus:ring-[#60a5fa]/20"
          />
        </label>

        <label
          htmlFor="assign"
          className="flex flex-col gap-2 text-sm text-zinc-300"
        >
          <span className="flex items-center gap-2 font-medium text-zinc-200">
            <FaUserTie className="text-[#34d399]" />
            Assign To
          </span>
          <input
            type="text"
            placeholder="Enter Employee Email ID"
            ref={assignToElem}
            id="assign"
            className="rounded-xl border border-white/10 bg-[#181818] px-4 py-3 text-white placeholder:text-zinc-500 outline-none transition focus:border-[#34d399]/60 focus:ring-2 focus:ring-[#34d399]/20"
          />
        </label>

        <label
          htmlFor="category"
          className="flex flex-col gap-2 text-sm text-zinc-300 md:col-span-2"
        >
          <span className="flex items-center gap-2 font-medium text-zinc-200">
            <FaTag className="text-[#a78bfa]" />
            Category
          </span>
          <select
            id="category"
            defaultValue=""
            ref={categoryElem}
            className="rounded-xl border border-white/10 bg-[#181818] px-4 py-3 text-white outline-none transition focus:border-[#a78bfa]/60 focus:ring-2 focus:ring-[#a78bfa]/20"
          >
            <option value="" disabled>
              Select task category
            </option>
            <option value="Design">Design</option>
            <option value="Development">Development</option>
            <option value="Marketing">Marketing</option>
            <option value="HR">HR</option>
            <option value="Management">Management</option>
          </select>
        </label>
        <button
          type="submit"
          className="md:col-span-2 p-4 rounded-xl font-bold border border-white/30 hover:bg-slate-800 text-xl"
        >
          Create Task
        </button>
      </form>
    </div>
  );
};

export default CreateTask;
