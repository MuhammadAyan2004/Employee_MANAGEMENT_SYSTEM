const TaskListNumber = ({ data }) => {
  return (
    <div className="flex justify-between gap-5 mt-10 ">
      <div className="w-[45%] rounded-xl bg-red-500 py-6 px-9">
        <h2 className="text-2xl font-semibold bg-transparent">
          {data.taskCounts.newTask}
        </h2>
        <h3 className="text-xl font-medium bg-transparent">new Task</h3>
      </div>
      <div className="w-[45%] rounded-xl bg-green-500 py-6 px-9">
        <h2 className="text-2xl font-semibold bg-transparent">
          {data.taskCounts.completed}
        </h2>
        <h3 className="text-xl font-medium bg-transparent">Completed</h3>
      </div>
      <div className="w-[45%] rounded-xl bg-blue-500 py-6 px-9">
        <h2 className="text-2xl font-semibold bg-transparent">
          {data.taskCounts.active}
        </h2>
        <h3 className="text-xl font-medium bg-transparent">Accepted</h3>
      </div>
      <div className="w-[45%] rounded-xl bg-yellow-500 py-6 px-9">
        <h2 className="text-2xl font-semibold bg-transparent">
          {data.taskCounts.failed}
        </h2>
        <h3 className="text-xl font-medium bg-transparent">Failed</h3>
      </div>
    </div>
  );
};

export default TaskListNumber
