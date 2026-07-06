import React from "react";

const StatsCard = ({ title, value, icon }) => {
  return (
    <div className="rounded-xl bg-white p-6 shadow-sm border">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-500 text-sm">{title}</p>

          <h2 className="mt-2 text-3xl font-bold">
            {value}
          </h2>
        </div>

        <div className="rounded-lg bg-blue-100 p-3">
          {icon}
        </div>
      </div>
    </div>
  );
};

export default StatsCard;