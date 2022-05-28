import React from "react";
import "./Week.scss";

import Day from "../Day/Day";

const events = [
  {
    id: 0,
    startTime: "2022-06-01 02:00",
    endTime: "2022-06-01 03:00",
    title: "Marketing Developement",
    participants: [
      {
        profile_img:
          "https://images.unsplash.com/photo-1594524952992-0cddcede63dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      },
      {
        profile_img:
          "https://images.unsplash.com/photo-1458410489211-ba19aa2f2902?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1192&q=80",
      },
      {
        profile_img:
          "https://images.unsplash.com/photo-1540979129101-fef4ab23dbd6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80",
      },
    ],
  },
  {
    id: 1,
    startTime: "2022-05-27 03:00",
    endTime: "2022-05-27 04:00",
    title: "Design Daily Zoom Meeting",
    participants: [
      {
        profile_img:
          "https://images.unsplash.com/photo-1594524952992-0cddcede63dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      },
      {
        profile_img:
          "https://images.unsplash.com/photo-1458410489211-ba19aa2f2902?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1192&q=80",
      },
      {
        profile_img:
          "https://images.unsplash.com/photo-1540979129101-fef4ab23dbd6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80",
      },
    ],
  },
  {
    id: 2,
    startTime: "2022/05/28 02:00",
    endTime: "2022/05/28 02:30",
    title: "Daily Standup Conference Meeting ",
    participants: [
      {
        profile_img:
          "https://images.unsplash.com/photo-1594524952992-0cddcede63dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      },
      {
        profile_img:
          "https://images.unsplash.com/photo-1458410489211-ba19aa2f2902?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1192&q=80",
      },
      {
        profile_img:
          "https://images.unsplash.com/photo-1540979129101-fef4ab23dbd6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80",
      },
    ],
  },
];

const Week = ({ week }) => {
  return (
    <div>
      <div className="table">
        <Day day={week[0]} emptyColumn={true} />
        {week &&
          week.map((day, index) => (
            <Day day={day} events={events} key={Math.random()} />
          ))}
      </div>
    </div>
  );
};

export default Week;
