import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const Alltask = () => {
  const authData = useContext(AuthContext);

  return (
    <div className="bg-[#1c1c1c] p-5 rounded mt-5" id="alltaskCS">
      {/* Header Row */}
      <div className="bg-blue-400 mb-2 py-2 px-4 flex justify-between rounded">
        <h2 className="w-1/5 border-3 text-white font-extrabold rounded-lg text-m text-center">
          Employee Name
        </h2>
        <h2 className="w-1/5 border-3 text-white font-extrabold text-m rounded-lg text-center">
          New Task
        </h2>
        <h2 className="w-1/5 border-3 text-white font-extrabold text-m rounded-lg text-center">
          Active Task
        </h2>
        <h2 className="w-1/5 border-3 text-white font-extrabold text-m rounded-lg text-center">
          Completed Task
        </h2>
        <h2 className="w-1/5 border-3 text-white font-extrabold text-m rounded-lg text-center">
          Failed Task
        </h2>
      </div>

      {/* Data Rows */}
      <div className="overflow-auto">
        {authData.employees?.map((employee) => (
          <div
            key={employee.id}
            className="border-2 border-slate-500 mb-2 py-2 px-4 flex justify-between rounded"
          >
            <div className="text-lg w-1/5 text-red-600 font-bold border-3 rounded-lg text-center">
              {employee.name}
            </div>
            <div className="text-lg w-1/5 text-yellow-400 font-bold border-3 rounded-lg text-center">
              {employee.taskStats?.newTask ?? 0}
            </div>
            <div className="text-lg w-1/5 text-blue-400 font-bold border-3 rounded-lg text-center">
              {employee.taskStats?.active ?? 0}
            </div>
            <div className="text-lg w-1/5 text-green-500 font-bold border-3 rounded-lg text-center">
              {employee.taskStats?.completed ?? 0}
            </div>
            <div className="text-lg w-1/5 text-red-500 font-bold border-3 rounded-lg text-center">
              {employee.taskStats?.failed ?? 0}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Alltask;
