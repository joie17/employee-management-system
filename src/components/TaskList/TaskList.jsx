import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailTask from "./FailTask";

const TaskList = ({ data }) => {
  return (
    <div
      id="tasklist"
      className="h-[55%] overflow-x-auto flex items-center  w-full justify-start gap-5  flex-nowrap py-5    mt-10"
    >
      {data.tasks.map((elem, index) => {
        if (elem.failed) {
          return <FailTask key={index} data={elem} />;
        }
        if (elem.active) {
          return <AcceptTask key={index} data={elem} />;
        }
        if (elem.newTask) {
          return <NewTask key={index} data={elem} />;
        }
        if (elem.completed) {
          return <CompleteTask key={index} data={elem} />;
        }
        return null;
      })}
    </div>
  );
};

export default TaskList;
