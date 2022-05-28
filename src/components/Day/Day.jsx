import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import Cell from "../Cell/Cell";
import "./Day.scss";
const Day = ({ day, events = [], emptyColumn = false }) => {
  const [dayEvents, setDayEvents] = useState([]);

  useEffect(() => {
    const filteredEvents = events.filter(
      (event) =>
        dayjs(event.startTime).format("YY/MM/DD") === day[0].format("YY/MM/DD")
    );

    setDayEvents(filteredEvents);
  }, [events]);

  return (
    <>
      {emptyColumn ? (
        <>
          <div className="column">
            <div className="empty-headerCell"></div>
            {day?.map((hour) => (
              <Cell hour={hour} key={Math.random()} emptyCells={true} />
            ))}
          </div>
        </>
      ) : (
        <>
          <div className="column">
            <div className="cell headerCell">
              <h4>{day[0].format("dddd")}</h4>
              <p>{day[0].format("MMMM, DD")}</p>
            </div>
            {day?.map((hour) => (
              <Cell hour={hour} events={dayEvents} key={Math.random()} />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Day;
