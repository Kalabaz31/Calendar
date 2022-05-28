import dayjs from "dayjs";

var duration = require("dayjs/plugin/duration");
dayjs.extend(duration);

export function getMonth(month = dayjs().month()) {
  month = Math.floor(month);
  const year = dayjs().year();
  const firstDayOfTheMonth = dayjs(new Date(year, month, 1)).day();
  let currentMonthCount = 0 - firstDayOfTheMonth;
  const daysMatrix = new Array(5).fill([]).map(() => {
    return new Array(7).fill(null).map(() => {
      currentMonthCount++;
      return dayjs(new Date(year, month, currentMonthCount));
    });
  });
  return daysMatrix;
}

export function getWeek(moveByWeek = 0) {
  const currentDay = dayjs().add(7 * moveByWeek, "day");
  const currentDayIndex = currentDay.day();

  const firstDayOfTheWeek = currentDay.$D - currentDayIndex;
  const lastDayOfTheWeek = currentDay.$D + (6 - currentDayIndex);

  let currentDayCount = firstDayOfTheWeek;

  const daysMatrix = new Array(7).fill([]).map(() => {
    currentDayCount++;
    let minute = -30;
    return new Array(48).fill(null).map(() => {
      minute = minute + 30;
      return dayjs(
        new Date(currentDay.year(), currentDay.month(), currentDayCount, "", minute)
      );
    });
  });

  return daysMatrix;
}
