import {
  addMonths,
  endOfMonth,
  format,
  isSameMonth,
  isThisMonth,
  isToday,
  lastDayOfMonth,
  parse,
  previousDay,
  setMonth,
  startOfMonth,
  startOfToday,
} from "date-fns";
import { eachDayOfInterval } from "date-fns/esm";
import React, { useEffect, useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Group, Button } from "@mantine/core";
import isSameDay from "date-fns/isSameDay";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { addEvent } from "../../redux/themeSlice";

import { HiBars3BottomRight } from "react-icons/hi2";

const Calender = () => {
  let today = startOfToday();

  let eventArray = [];
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
  // console.log(stringFormat);
  const options = { weekday: "short" };

  const dayname = (day) => {
    let nameDay = day.toLocaleString("en-US", options);

    return nameDay;
  };

  let startOfPreviousMonth = startOfMonth(addMonths(todayS, -1));
  let endOfPreviousMonth = endOfMonth(addMonths(todayS, -1));

  let daysOfprev = eachDayOfInterval({
    start: startOfPreviousMonth,
    end: endOfPreviousMonth,
  });
  let startOfNextMonth = startOfMonth(addMonths(todayS, +1));
  let endOfNextMonth = endOfMonth(addMonths(todayS, +1));
  let daysOfnext = eachDayOfInterval({
    start: startOfNextMonth,
    end: endOfNextMonth,
  });
  // const dateNew = new Date(endOfPreviousMonth);
  // console.log(endOfPreviousMonth.getDate());
  // console.log(currentMonth);
  // console.log(today);
  for (let i = 0; i < firstDayCurrentMonth.getDay(); i++) {
    days.unshift(daysOfprev[endOfPreviousMonth.getDate() - 1 - i]);
  }

  const suffixDays = 42 - days.length;

  for (let i = 0; i < suffixDays; i++) {
    days.push(daysOfnext[i]);
  }

  useEffect(() => {
    setCurrentMonth(format(todayS, "MMM-yyyy"));
    days = eachDayOfInterval({
      start: firstDayCurrentMonth,
      end: lastDayOfCurrentMonth,
    });
    startOfPreviousMonth = startOfMonth(addMonths(todayS, -1));
    endOfPreviousMonth = endOfMonth(addMonths(todayS, -1));

    daysOfprev = eachDayOfInterval({
      start: startOfPreviousMonth,
      end: endOfPreviousMonth,
    });
    startOfNextMonth = startOfMonth(addMonths(todayS, +1));
    endOfNextMonth = endOfMonth(addMonths(todayS, +1));
    daysOfnext = eachDayOfInterval({
      start: startOfNextMonth,
      end: endOfNextMonth,
    });
  }, [todayS]);
  const [opened, { open, close }] = useDisclosure(false);
  const [eventValue, setEventValue] = useState(" ");
  const [oneClickDate, setOneClickDate] = useState("");
  const dispatch = useDispatch();
  const events = useSelector((state) => state.themeSlice?.events);
  const [togleEvent, setTogleEvent] = useState(false);
  // let filteredEventDisplay = [];
  // const filteredEventDisplayFun = () => {
  //   filteredEventDisplay = events?.filter((event) =>
  //     event.oneClickDate?.getMonth()
  //   );
  //   console.log(filteredEventDisplay);
  // };
  // filteredEventDisplayFun();
  return (
    <>
      <div className=" md:scale-[0.8]  lg:scale-100 flex justify-center items-center flex-col lg:p-10 ">
        <div className="w-full flex justify-between">
          <div className="w-full flex justify-between items-center mb-5">
            <div className=" flex gap-3  items-center flex-wrap">
              <div className=" flex gap-3  items-center">
                <button
                  onClick={() => {
                    settoday(addMonths(todayS, -1));

                    firstDayCurrentMonth = parse(
                      currentMonth,
                      "MMM-yyyy",
                      todayS
                    );
                    lastDayOfCurrentMonth = endOfMonth(firstDayCurrentMonth);
                  }}
                  className=" px-3 py-1 
           bg-white rounded hover:bg-slate-400">
                  <MdKeyboardArrowLeft className=" text-2xl" />
                </button>
                <button
                  onClick={() => {
                    settoday(addMonths(todayS, +1));

                    firstDayCurrentMonth = parse(
                      currentMonth,
                      "MMM-yyyy",
                      todayS
                    );
                    lastDayOfCurrentMonth = endOfMonth(firstDayCurrentMonth);
                  }}
                  className=" px-3 py-1 
           bg-white rounded hover:bg-slate-400">
                  <MdKeyboardArrowRight className=" text-2xl" />
                </button>
              </div>
              <div
                onClick={() => settoday(today)}
                className=" w-[100px] bg-white cursor-pointer hover:bg-slate-400 rounded text-center px-3 py-1">
                today
              </div>
            </div>
            <div>
              <p className="title text-2xl">July 2023</p>
            </div>
            <div>
              <button
                onClick={() => setTogleEvent(!togleEvent)}
                className=" px-3 py-1 
           bg-white shadow-sm rounded hover:bg-slate-400 ">
                Event List
              </button>
              {/* <button
                className=" px-3 py-1 
           bg-white shadow-sm">
                week
              </button>
              <button
                className=" px-3 py-1 
           bg-white shadow-sm ">
                day
              </button> */}
            </div>
          </div>
        </div>
        <div className=" w-full flex justify-between  flex-wrap gap-4">
          {/* calendar body */}
          <div
            className={`${
              togleEvent == true ? "w-full  md:w-full  lg:w-[70%]" : "w-full"
            }`}>
            <div className=" grid grid-cols-7  bgTransparent ">
              <div className=" w-full py-3 px-2 borderTransparent title ">
                SUN
              </div>
              <div className="w-full py-3 px-2 borderTransparent title ">
                MON
              </div>
              <div className="w-full py-3 px-2 borderTransparent title">
                TUE
              </div>
              <div className="w-full py-3 px-2 borderTransparent title">
                WED
              </div>
              <div className="w-full py-3 px-2 borderTransparent title">
                THU
              </div>
              <div className="w-full py-3 px-2 borderTransparent title">
                FRI
              </div>
              <div className="w-full py-3 px-2 borderTransparent title">
                SAT
              </div>
            </div>
            <div className=" w-full">
              <div className=" grid grid-cols-7 ">
                {days.map((day, index) => (
                  <div
                    onClick={() => {
                      open();
                      setOneClickDate(day);
                    }}
                    key={index}
                    className={`lg:p-6 md:p-6 p-2 h-[150px] flex  flex-col  bgTransparent  borderTransparent overflow-hidden`}>
                    <div
                      className={`w-[35px]  h-[35px] flex items-center  justify-center  lg:ms-auto md:ms-auto ${
                        isToday(day) ? "bg-orange-400 text-black" : ""
                      }  rounded-[50%] ${
                        isSameMonth(day, todayS) && !isToday(day)
                          ? "bg-slate-200 "
                          : "title"
                      }`}>
                      <div className="">
                        <time dateTime={format(day, "yyyy-MM-dd")}>
                          {format(day, "d")}
                        </time>
                      </div>
                    </div>
                    {events.map((event, index) => (
                      <div
                        key={index}
                        className={`w-full  ${
                          isSameDay(day, event?.oneClickDate)
                            ? "block"
                            : "hidden"
                        } title`}>
                        {event?.eventValue}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* event list container */}
          <div
            className={` ${
              togleEvent == true ? "flex w-full  lg:w-[28%]" : "hidden "
            }  bgTransparent p-3  flex-col gap-y-5 `}>
            <div className=" w-full flex items-center ">
              <div className=" w-[40%] flex items-center">
                <HiBars3BottomRight className=" title" />
              </div>
              <div className=" w-[60%] title flex items-center gap-3">
                <div>
                  {todayS?.toLocaleString("default", { month: "long" })}
                </div>
                {todayS?.getFullYear()}
              </div>
            </div>
            <ul className=" w-full ">
              {events.map((event, index) => (
                <li
                  key={index}
                  className={`w-full flex gap-5 mb-3 hover:text-orange-400 title`}>
                  <div className="border-e-2 w-[10%] pe-3">
                    <p className="">{event?.oneClickDate?.getDate()}</p>
                    <small>{dayname(event?.oneClickDate)}</small>
                  </div>
                  <div className="">{event?.eventValue}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Modal opened={opened} onClose={close} withCloseButton={false}>
        <button onClick={() => close()}>
          <AiOutlineClose />
        </button>
        <form
          onSubmit={(e) => {
            e.preventDefault();

            dispatch(addEvent({ oneClickDate, eventValue }));
            close();
            setEventValue("");
            // eventArray.push(eventList);
          }}
          className=" w-[200px]">
          <div className=" w-full ">
            <div className="w-[400px] flex justify-center gap-3 flex-col items-center">
              <label htmlFor="eventInput">Type to create your event</label>
              <input
                id="eventInput"
                value={eventValue}
                onChange={(e) => {
                  setEventValue(e.target.value);
                }}
                type="text"
                className="w-full  outline-none  py-2 border-orange-300 border-2 rounded px-5"
                placeholder="Event"
              />
            </div>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default Calender;
