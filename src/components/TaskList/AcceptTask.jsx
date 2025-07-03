import React from "react";

const AcceptTask = ({ data }) => {
  console.log();

  return (
    <div>
      <div className=" flex-shrink-0 h-full w-[300px] bg-pink-400 rounded-xl">
        <div className="flex justify-between  items-center p-5">
          <h3 className="bg-red-600 text-sm px-3 py-1 rounded">
            {/* {data} */}
          </h3>
          <h4 className="text-sm">20 Feb 2024</h4>
        </div>

        <h2 className="mt-5 text-2xl font-semibold ml-4">{data.taskTitle} </h2>

        <p className="text-sm ml-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni ea
          velit, eius quis voluptate expedita.
        </p>
      </div>

      <div className="flex justify-between mt-4">
        <button className=" bg-green-400 py-1 px-1 text-sm">
          Mark as Completed
        </button>
        <button className=" bg-red-400 py-1 px-1 text-sm">
          Mark as Failed
        </button>
      </div>
    </div>
  );
};

export default AcceptTask;
