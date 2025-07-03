import React from "react";
import Header from "../others/Header";
import CreateTask from "../others/CreateTask";
import Alltask from "../others/Alltask";

const AdminDashBoard = (props) => {
  return (
    <div className=" bg-slate-700  p-10">
      <Header changeUser={props.changeUser} />
      <CreateTask />
      <Alltask />
    </div>
  );
};

export default AdminDashBoard;
