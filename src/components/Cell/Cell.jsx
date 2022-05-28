import dayjs from "dayjs";
import React, { useState, useEffect } from "react";

import "./Cell.scss";

const Cell = ({ hour, events = [], emptyCells = false }) => {
  //   console.log(events);

  // console.log(hour);
  const [hourEvents, setHourEvents] = useState([]);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (events !== null) {
      const filteredEvents = events.filter(
        (event) =>
          dayjs(event.startTime).format("HH:mm") === hour.format("HH:mm")
      );
      //   console.log(filteredEvents.length);

      setHourEvents(filteredEvents);
    }
  }, [events]);

  return (
    <>
      {emptyCells ? (
        <>
          <div className="empty-cell" key={hour}>
            <h4>{hour.format("HH:mm")}</h4>
          </div>
        </>
      ) : (
        <>
          <div className="cell" key={hour}>
            <div className={`events`}>
              {hourEvents.map((event) => {
                const yPosition = dayjs(event.startTime).format("mm");

                const duration =
                  dayjs(event.endTime).diff(dayjs(event.startTime), "minute") /
                  15;
                console.log("duration");
                console.log(duration);
                return (
                  <div
                    className="event-item"
                    style={{
                      background: "",
                      top: `${yPosition}px`,
                      height: `${duration * 50}px`,
                    }}
                    key={Math.random()}
                  >
                    <div className="event-item-header">
                      <h4>{event.title}</h4>
                      <p>{`${dayjs(event.startTime).format("HH:mm")} - ${dayjs(
                        event.endTime
                      ).format("HH:mm")} `}</p>
                    </div>
                    <div className="participants">
                      {event.participants.map((participant) => (
                        <img
                          src={participant.profile_img}
                          alt=""
                          key={Math.random()}
                        />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Cell;
