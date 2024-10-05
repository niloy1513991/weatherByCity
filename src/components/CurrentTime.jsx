import React from "react";

const CurrentTime = ({ currentTime }) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const month = months[currentTime.getMonth()];
  const day = currentTime.getDate();
  const year = currentTime.getFullYear();
  let hours = currentTime.getHours();
  const minutes = currentTime.getMinutes().toString().padStart(2, "0");
  const seconds = currentTime.getSeconds().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12; // Convert to 12-hour format

  return (
    <div className="date w-80 h-20 text-slate-100 text-3xl mx-auto text-center flex justify-center items-center mt-8 flex-col">
      <h1 className="text-3xl">{`${month} ${day}, ${year}`}</h1>
      <div className="time flex text-xl mt-3">
        <div className="text-center flex justify-center items-center h-8 w-6 font-bold text-xl">{`${hours}`}</div>
        <div className="text-center flex justify-center items-center h-8 font-bold text-xl">{`:`}</div>
        <div className="text-center flex justify-center items-center h-8 w-8 font-bold text-2xl ml-1">{`${minutes}`}</div>
        <div className="text-center flex justify-center items-center h-8 font-bold text-xl">{`:`}</div>
        <div className="text-center flex justify-center items-center h-8 w-10 font-bold text-3xl ml-1">{`${seconds}`}</div>
        <div className="text-center flex justify-center items-center h-8 w-7 text-xl ml-1">{` ${ampm}`}</div>
      </div>
    </div>
  );
};

export default CurrentTime;
