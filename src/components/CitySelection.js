import { useMemo, useState } from "react";
import countryList from "react-select-country-list";
import { Input, Row } from "reactstrap";

const CitySelection = () => {
  const [countryValue, setCountryValue] = useState("");

  const options = useMemo(() => countryList().getData(), []);

  const countryClickHandler = () => {
    setCountryValue(countryValue);
  };

  return (
    <div>
      <Row
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Country
        <Input
          type="select"
          style={{ width: "200px", height: "40px" }}
          value={countryValue}
          onChange={countryClickHandler}
        >
          {options.map((option) => {
            return <option>{option.label}</option>;
          })}
        </Input>
      </Row>
      <Row>
        City
        <Input
          type="select"
          style={{ width: "200px", height: "40px" }}
          value={countryValue}
        >
          {options.map((option) => {
            return <option>{option.label}</option>;
          })}
        </Input>
      </Row>
    </div>
  );
};

export default CitySelection;
