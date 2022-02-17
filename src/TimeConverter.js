export const timeConverter = (UNIX_timestamp) => {
  const milliseconds = UNIX_timestamp * 1000; // 1575909015000
  const dateObject = new window.Date(milliseconds);
  const humanDateFormat = dateObject.toLocaleString(); //2019-12-9 10:30:15
  const weekDay = dateObject.toLocaleString("en-US", { weekday: "long" }); // Monday
  const monthName = dateObject.toLocaleString("en-US", { month: "long" }); // December
  const day = dateObject.toLocaleString("en-US", { day: "numeric" }); // 9
  const year = dateObject.toLocaleString("en-US", { year: "numeric" }); // 2019
  const notHour = dateObject.getHours();
  const hour = ("0" + notHour).slice(-2);
  const notMinute = dateObject.getMinutes();
  const minute = ("0" + notMinute).slice(-2);
  const second = dateObject.toLocaleString("en-US", { second: "numeric" }); // 15
  const timeZone = dateObject.toLocaleString("en-US", {
    timeZoneName: "short",
  }); // 12/9/2019, 10:30:15 AM CST

  return {
    humanDateFormat,
    weekDay,
    monthName,
    day,
    year,
    hour,
    minute,
    second,
    timeZone,
  };
};
