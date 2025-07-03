import React from "react";
import AcceptTask from "../TaskList/AcceptTask";
import NewTask from "../TaskList/NewTask";
import CompleteTask from "../TaskList/CompleteTask";
const TaskListNum = ({ data }) => {
  return (
    <div id="tasklist" className="flex  mt-10 justify-between gap-5 screen">
      <div className=" w-[45%] p-10 rounded-xl py-6 px-9 bg-red-400">
        <h2 className="text-3xl font-semibold">{data.taskStats.newTask}</h2>
        <h3 className="text-xl font-medium ">New Task</h3>
      </div>

      <div className=" w-[45%] p-10 rounded-xl py-6 px-9 bg-green-400">
        <h2 className="text-3xl font-semibold">{data.taskStats.completed}</h2>
        <h3 className="text-xl font-medium ">Completed Task</h3>
      </div>

      <div className=" w-[45%] p-10 rounded-xl py-6 px-9 bg-yellow-400">
        <h2 className="text-3xl font-semibold">{data.taskStats.active}</h2>
        <h3 className="text-xl font-medium ">Active Task</h3>
      </div>

      <div className=" w-[45%] p-10 rounded-xl py-6 px-9 bg-blue-400">
        <h2 className="text-3xl font-semibold">{data.taskStats.failed}</h2>
        <h3 className="text-xl font-medium ">Failed Task</h3>
      </div>
    </div>
  );
};

export default TaskListNum;
