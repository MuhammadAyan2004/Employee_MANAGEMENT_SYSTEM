import AcceptTask from "./acceptTask";
import CompleteTask from "./completeTask";
import FailedTask from "./failedTask";
import NewTask from "./newTask";

const Tasklist = ({ data }) => {
  return (
    <>
      <div
        id="tasklist"
        className="h-[55%] w-full mt-10 flex items-center justify-start gap-5 flex-nowrap overflow-x-auto"
      >
        {data.tasks.map((task, idx) =>{  
          if(task.newTask){
            return <NewTask key={idx} data={task} />;
          }
          if(task.active){
            return <AcceptTask key={idx} data={task} />;
          }
          if(task.complted){
            return <CompleteTask key={idx} data={task} />;
          }
          if(task.failed){
            return <FailedTask key={idx} data={task} />;
          }
        }
        )}
      </div>
    </>
  );
};

export default Tasklist;
