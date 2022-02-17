import { timeConverter } from "../../TimeConverter";

const LocationAndDate = (props) => {
  const { day, monthName, weekDay } = timeConverter(props.date);
  return (
    <div>
      <h1>
        {weekDay}, {day} {monthName}
      </h1>
    </div>
  );
};

export default LocationAndDate;
