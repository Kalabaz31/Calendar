import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import "./App.css";

import { getWeek } from "./utils/utils";
import Week from "./components/Week/Week.jsx";

function App() {
  const [week, setWeek] = useState(getWeek());
  const [changeMade, setChangeMade] = useState(0);

  const handleWeekChange = (nextOrPrev) => {
    setChangeMade(changeMade + nextOrPrev);
  };

  useEffect(() => {
    setWeek(getWeek(changeMade));
  }, [changeMade]);

  const duration = dayjs("2022/05/27 02:00").diff(dayjs("2022/05/27 00:30"), "minute");
  // console.log(duration);

  return (
    <div className="App">
      {week && <Week week={week} />}
      <button onClick={() => handleWeekChange(-1)}>Prev</button>
      <button onClick={() => handleWeekChange(+1)}>Next</button>
    </div>
  );
}

export default App;
