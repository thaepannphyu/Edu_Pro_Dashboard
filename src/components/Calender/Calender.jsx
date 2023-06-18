import {
  endOfMonth,
  format,
  lastDayOfMonth,
  parse,
  previousDay,
  setMonth,
  startOfToday,
} from "date-fns";
import { eachDayOfInterval } from "date-fns/esm";
import React, { useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const Calender = () => {
  let today = startOfToday();

  const stringFormat = format(today, "MMM-yyyy");
  let [currentMonth, setCurrentMonth] = useState(stringFormat);
  const date = new Date();

  let firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", date);

  let days = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth),
  });

  const options = { weekday: "short" };
  let dayOfWeek = "";
  dayOfWeek = days[0].toLocaleString("en-US", options);
  const [prevMonth, setPrevMonth] = useState(
    setMonth(today, date.getMonth() - 1)
  );
  let firstDayPrevMonth = date.getMonth();
  let daysOfOrev = eachDayOfInterval({
    start: firstDayPrevMonth,
    end: endOfMonth(firstDayPrevMonth),
  });
  console.log(daysOfOrev);
  for (let i = 0; i < firstDayCurrentMonth.getDay(); i++) {
    days.unshift(prevMonth.getDay(i));
    // console.log();
  }

  const suffixDays = 42 - days.length;
  console.log(days);
  // for (let i = suffixDays; i < firstDayCurrentMonth.getDay(); i--) {
  //   days.push(firstDayCurrentMonth.getDay(i));
  // }

  // const WeekDaysSun = [];
  // const WeekDaysMon = [];
  // const WeekDaysThe = [];
  // const WeekDaysWed = [];
  // const WeekDaysThu = [];
  // const WeekDaysFri = [];
  // const WeekDaysSat = [];
  // days.map((day) => {
  //   dayOfWeek = day.toLocaleString("en-US", options);
  //   switch (dayOfWeek) {
  //     case "Sun":
  //       WeekDaysSun.push(day);
  //       break;
  //     case "Mon":
  //       WeekDaysMon.push(day);
  //       break;
  //     case "The":
  //       WeekDaysThe.push(day);
  //       break;
  //     case "Wed":
  //       WeekDaysWed.push(day);
  //       break;
  //     case "Thu":
  //       WeekDaysThu.push(day);
  //       break;
  //     case "Fri":
  //       WeekDaysFri.push(day);
  //       break;
  //     case "Sat":
  //       WeekDaysSat.push(day);
  //   }
  // });
  // console.log(WeekDaysWed);
  return (
    <div className=" flex justify-center items-center flex-col p-10 ">
      <div className="w-full flex justify-between">
        <div className="w-full flex justify-between items-center">
          <div className=" w-[20%] flex gap-3  items-center">
            <button
              className=" px-3 py-1 
           bg-white ">
              <MdKeyboardArrowLeft className=" text-2xl" />
            </button>
            <button
              className=" px-3 py-1 
           bg-white ">
              <MdKeyboardArrowRight className=" text-2xl" />
            </button>
            <p>today</p>
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
        {/* <div className=" grid grid-cols-7 ">
          <div className=" mx-auto">Sunday</div>
          <div className="mx-auto">Monday</div>
          <div className="mx-auto">Tuesday</div>
          <div className="mx-auto">Wesdays</div>
          <div className="mx-auto">Thursday</div>
          <div className="mx-auto">Friday</div>
          <div className="mx-auto">Saturday</div>
        </div> */}
        <div className=" w-full">
          <div className=" grid grid-cols-7 ">
            <div className=" flex flex-col ">
              <div className=" mx-auto">Sunday</div>
              <div>Hello</div>
              <div>Hello</div>
            </div>
            <div className=" flex flex-col ">
              <div className=" mx-auto">Monday</div>
              <div>Hello</div>
              <div>Hello</div>
            </div>
            <div className="mx-auto">Tuesday</div>
            <div className="mx-auto">Wesdays</div>
            <div className="mx-auto">Thursday</div>
            <div className="mx-auto">Friday</div>
            <div className="mx-auto">Saturday</div>
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
