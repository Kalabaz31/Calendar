import React, { useCallback, useState, useMemo } from "react";

import { getWeek } from "../../utils/utils";
import Week from "./Week";

import "./Calendar.scss";

function Calendar() {
  
  const [changeMade, setChangeMade] = useState(0);

  let weekMemo = useMemo(() => getWeek(changeMade), [changeMade]);

  const handleWeekChange = useCallback(
    (nextOrPrev) => {
      setChangeMade(changeMade + nextOrPrev);
    },
    [changeMade]
  );

  return (
    <div className="app__calendar">
      {weekMemo && (
        <>
          <div className="calendar-header">
            <h2>{`${weekMemo[0][0].format(
              "MMMM, DD "
            )} - ${weekMemo[6][0].format("MMMM, DD, YYYY")}`}</h2>
            <div className="btnWeekChanger">
              <button onClick={(e) => handleWeekChange(-1)}>Prev</button>
              <button onClick={(e) => handleWeekChange(+1)}>Next</button>
            </div>
          </div>
          <Week week={weekMemo} />
        </>
      )}
    </div>
  );
}

export default Calendar;
