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
import { useDispatch } from "react-redux";
import { addEvent } from "../../redux/themeSlice";
import { store } from "../../redux/store";

const Calender = () => {
  let today = startOfToday();

  const [eventList, SetEventList] = useState({});
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
  // const options = { weekday: "short" };
  // let dayOfWeek = "";
  // dayOfWeek = days[0].toLocaleString("en-US", options);

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
  const [eventValue, setEventValue] = useState("");
  const [oneClickDate, setOneClickDate] = useState("");
  const dispatch = useDispatch();

  console.log(store.getState());

  return (
    <>
      <div className=" flex justify-center items-center flex-col p-10 ">
        <div className="w-full flex justify-between">
          <div className="w-full flex justify-between items-center">
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
           bg-white rounded">
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
           bg-white rounded">
                <MdKeyboardArrowRight className=" text-2xl" />
              </button>
              <div
                onClick={() => settoday(today)}
                className=" w-[100px] bg-white rounded text-center px-3 py-1">
                today
              </div>
            </div>
            <div>
              <p className="title">July 2023</p>
            </div>
            <div>
              <button
                className=" px-3 py-1 
           bg-white shadow-sm">
                Month
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
        <div className=" w-full">
          <div className=" grid grid-cols-7  bgTransparent ">
            <div className=" w-full py-3 borderTransparent title ">Sunday</div>
            <div className="w-full py-3 borderTransparent title ">Monday</div>
            <div className="w-full py-3 borderTransparent title">Tuesday</div>
            <div className="w-full py-3 borderTransparent title">Wesdays</div>
            <div className="w-full py-3 borderTransparent title">Thursday</div>
            <div className="w-full py-3 borderTransparent title">Friday</div>
            <div className="w-full py-3 borderTransparent title">Saturday</div>
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
                  className={`p-6 h-[150px] flex  flex-col bgTransparent  borderTransparent`}>
                  <div
                    className={`w-[35px]  h-[35px] flex items-center justify-center ms-auto ${
                      isToday(day) ? "bg-red-200" : ""
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
                  <div
                    className={`w-full p-6 ${
                      isSameDay(day, eventList?.day) ? "block" : "hidden"
                    } `}>
                    {eventList?.event}
                  </div>
                </div>
              ))}
            </div>
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

            SetEventList({
              day: oneClickDate,
              event: eventValue,
            });
            // eventArray.push(eventList);
          }}
          className=" w-[200px]">
          <div className=" w-full ">
            <div className="w-[400px] flex justify-center gap-3 flex-col items-center">
              <label htmlFor="">Type to create your event</label>
              <input
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
