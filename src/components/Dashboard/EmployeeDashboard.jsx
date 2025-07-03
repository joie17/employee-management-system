import React from "react";
import Header from "../others/Header";
import TaskListNum from "../others/TaskListNum";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = (props) => {
  // console.log(data);
  return (
    <div className=" p-10 bg-slate-800 h-screen">
      {/* <h1>{data.id}</h1> */}
      <Header changeUser={props.changeUser} data={props.data} />

      <TaskListNum data={props.data} />
      <TaskList data={props.data} />
    </div>
  );
};

export default EmployeeDashboard;
