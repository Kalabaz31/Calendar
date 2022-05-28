import React, { useCallback, useState, useMemo } from "react";
import "./App.scss";

import { getWeek } from "./utils/utils";
import Week from "./components/Calendar/Week.jsx";
import Calendar from "./components/Calendar/Calendar";

function App() {
  return (
    <div className="App">
      <Calendar />
    </div>
  );
}

export default App;
