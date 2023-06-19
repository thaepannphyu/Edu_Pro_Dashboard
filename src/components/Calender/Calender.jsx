import {
  addMonths,
  endOfMonth,
  format,
  lastDayOfMonth,
  parse,
  previousDay,
  setMonth,
  startOfMonth,
  startOfToday,
} from "date-fns";
import { eachDayOfInterval } from "date-fns/esm";
import React, { useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const Calender = () => {
  let today = startOfToday();
  const [todayS, settoday] = useState(today);
  let stringFormat = format(todayS, "MMM-yyyy");
  let [currentMonth, setCurrentMonth] = useState(stringFormat);
  let date = new Date();

  let firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", todayS);
  let lastDayOfCurrentMonth = endOfMonth(firstDayCurrentMonth);
  // console.log(today.getMonth() - 1);
  let days = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth),
  });
  // console.log(firstDayCurrentMonth);
  console.log(stringFormat);
  const options = { weekday: "short" };
  let dayOfWeek = "";
  dayOfWeek = days[0].toLocaleString("en-US", options);

  let startOfPreviousMonth = startOfMonth(addMonths(todayS, -1));
  let endOfPreviousMonth = endOfMonth(addMonths(todayS, -1));

  let daysOfprev = eachDayOfInterval({
    start: startOfPreviousMonth,
    end: endOfPreviousMonth,
  });
  // const dateNew = new Date(endOfPreviousMonth);
  // console.log(endOfPreviousMonth.getDate());
  // console.log(currentMonth);
  // console.log(today);
  for (let i = 0; i < firstDayCurrentMonth.getDay(); i++) {
    days.unshift(daysOfprev[endOfPreviousMonth.getDate() - 1 - i]);
  }

  const startOfNextMonth = startOfMonth(addMonths(todayS, +1));
  const endOfNextMonth = endOfMonth(addMonths(todayS, +1));
  let daysOfnext = eachDayOfInterval({
    start: startOfNextMonth,
    end: endOfNextMonth,
  });
  const suffixDays = 42 - days.length;

  for (let i = 0; i < suffixDays; i++) {
    days.push(daysOfnext[i]);
  }
  // console.log(addMonths(date, -1));

  return (
    <div className=" flex justify-center items-center flex-col p-10 ">
      <div className="w-full flex justify-between">
        <div className="w-full flex justify-between items-center">
          <div className=" w-[20%] flex gap-3  items-center">
            <button
              onClick={() => {
                settoday(addMonths(todayS, -1));
                console.log(todayS);
                firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", todayS);
                lastDayOfCurrentMonth = endOfMonth(firstDayCurrentMonth);
              }}
              className=" px-3 py-1 
           bg-white ">
              <MdKeyboardArrowLeft className=" text-2xl" />
            </button>
            <button
              className=" px-3 py-1 
           bg-white ">
              <MdKeyboardArrowRight className=" text-2xl" />
            </button>
            <p onClick={() => settoday(today)}>today</p>
          </div>
          <div>
            <p>July 2023</p>
          </div>
          <div>
            <button
              className=" px-3 py-1 
           bg-white shadow-sm">
              Month
            </button>
            <button
              className=" px-3 py-1 
           bg-white shadow-sm">
              week
            </button>
            <button
              className=" px-3 py-1 
           bg-white shadow-sm ">
              day
            </button>
          </div>
        </div>
      </div>
      <div className=" w-full">
        <div className=" grid grid-cols-7 ">
          <div className=" mx-auto">Sunday</div>
          <div className="mx-auto">Monday</div>
          <div className="mx-auto">Tuesday</div>
          <div className="mx-auto">Wesdays</div>
          <div className="mx-auto">Thursday</div>
          <div className="mx-auto">Friday</div>
          <div className="mx-auto">Saturday</div>
        </div>
        <div className=" w-full">
          <div className=" grid grid-cols-7 ">
            {days.map((day, index) => (
              <div
                key={index}
                className={` h-[150px] flex justify-between flex-col bg-teal-300`}>
                <div className="w-[35px] h-[35px] flex items-center justify-center ms-auto bg-slate-500 rounded-[50%]">
                  <div className="">
                    <time dateTime={format(day, "yyyy-MM-dd")}>
                      {format(day, "d")}
                    </time>
                  </div>
                </div>
                <div className="w-full">Event</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calender;
