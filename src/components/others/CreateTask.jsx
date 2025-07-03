import React, { useState } from "react";
import NewTask from "../TaskList/NewTask";
import FailTask from "../TaskList/FailTask";
import CompleteTask from "../TaskList/CompleteTask";

const CreateTask = (data) => {
  const [taskTitle, settaskTitle] = useState("");
  const [taskDescription, settaskDescription] = useState("");
  const [taskDate, settaskDate] = useState("");
  const [asignTo, setasignTo] = useState("");
  const [category, setcategory] = useState("");
  const [newtask, setnewtask] = useState({});

  const [task, settask] = useState({});
  const submitHandler = (e) => {
    e.preventDefault();

    setnewtask({
      taskTitle,
      taskDate,

      taskDescription,
      category,
      active: false,
      NewTask: true,
      FailTask: false,
      CompleteTask: false,
    });
    console.log(task);
    // const data = userData();
    // console.log(taskDate, taskTitle, taskDescription, category);
    localStorage.getItem("employees");
    const data = JSON.parse(localStorage.getItem("employees"));
    // console.log(JSON.stringify(data));

    console.log(data);
    // const data = usetData;
    data.forEach(function (elem) {
      // console.log(elem.name);

      if (asignTo == elem.name) {
        // console.log(elem.tasks);

        elem.tasks.push(newtask);
        elem.taskCounts.newtask = elem.taskCounts.newtask + 1;
      }
    });

    localStorage.setItem("employees", data);
    // settaskDate("");
    // setasignTo("");
    // setcategory("");
    // settaskDescription("");
    // settaskTitle("");
  };
  return (
    <div className="p-5 bg-[#1c1c1c] mt-7 rounded">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        action=""
        className="flex flex-wrap w-full items-start justify-between"
      >
        {/* 1 */}
        <div className="w-1/2">
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
            <input
              value={taskTitle}
              onChange={(e) => {
                settaskTitle(e.target.value);
              }}
              type="text"
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400"
              placeholder="Make ui design"
            />
          </div>

          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
            <input
              value={taskDate}
              onChange={(e) => {
                settaskDate(e.target.value);
              }}
              type="date"
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400"
            />
          </div>

          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Asign to </h3>
            <input
              value={asignTo}
              onChange={(e) => {
                setasignTo(e.target.value);
              }}
              type="text"
              placeholder="employee name"
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400"
            />
          </div>

          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
            <input
              value={category}
              onChange={(e) => {
                setcategory(e.target.value);
              }}
              type="text"
              placeholder="design,dev,etc"
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400"
            />
          </div>
        </div>

        {/* 2 */}
        <div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
            <textarea
              value={taskDescription}
              onChange={(e) => {
                settaskDescription(e.target.value);
              }}
              name="  "
              cols="30"
              rows="10"
              id=""
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400"
            ></textarea>
            <button className=" bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 text-gray-300 mb-0.5">
              Create Task
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
