import { useState } from "react";

const Tasks = ({ task }) => {
  const [showTask, setShowTask] = useState(false);
  return (
    // header
    <>
      <div className="rounded-2xl border border-white/20 bg-slate-900 overflow-hidden">
        <div
          className="flex items-center justify-between p-3 cursor-pointer hover:bg-slate-800 transition"
          onClick={() => setShowTask(!showTask)}
        >
          <div className="w-1/3">
            <p className="text-sm uppercase text-zinc-500 flex items-center text-center gap-2">
              Employee Name:
              <span className="text-lg  text-white">{task.name}</span>
            </p>
            <p className="text-sm text-zinc-500">{task.email}</p>
          </div>

          <div className="w-1/3 text-right flex flex-col items-center">
            <p className="text-xs text-zinc-500">Tasks</p>
            <p className="text-sm text-white font-semibold">
              {task.tasks.length}
            </p>
          </div>

          <span className="w-1/3 text-right text-zinc-500">
            {showTask ? "▲" : "▼"}
          </span>
        </div>
      </div>
      {showTask && (
        <div className="space-y-3 border-t border-white/10 p-4">
          {task.tasks.map((task, idx) => (
            <div
              key={idx}
              className="flex gap-4 rounded-xl border border-white/20 bg-slate-900 p-4 md:flex-row md:items-center md:justify-between"
            >
              {/* task info */}
              <div className="flex-1 w-1/3">
                <p className="text-sm uppercase text-zinc-500 flex items-center text-center gap-2">
                  Task Title:
                  <span className="text-lg  text-white">{task.title}</span>
                </p>
                <p className="text-sm text-zinc-500">{task.description}</p>
              </div>
              {/* task category */}
              <div className="w-1/3 flex flex-col items-center">
                <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                  Category
                </p>

                <p className="mt-1 text-sm text-zinc-300">{task.category}</p>
              </div>
              {/* status */}
              <div className="w-1/3 flex flex-col items-end">
                <p className="w-[15vh] text-center">status</p>
                <span className="w-[15vh] text-center mt-1 inline-block rounded-full bg-white/5 px-3 py-1 text-xs font-semibold">
                  {task.completed
                    ? "completed"
                    : task.failed
                      ? "failed"
                      : task.active
                        ? "In Progress"
                        : "new"}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Tasks;
