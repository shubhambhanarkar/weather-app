import { useMemo } from "react";
import { Row } from "reactstrap";
import { Country, City } from "country-state-city";

const CitySelection = () => {
  // const [selectedCountry, setSelectedCountry] = useState("");

  const countries = useMemo(() => Country.getAllCountries(), []);
  const cities = useMemo(() => City.getCitiesOfCountry("IN"), []);

  const countryChangeHandler = () => {
    // const country = document.getElementById("my-select").value;
    // setSelectedCountry(country);
    console.log("changed", cities);
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
        <select
          type="select"
          id="my-select"
          onChange={countryChangeHandler}
          style={{ width: "200px", height: "40px" }}
        >
          {countries.map((country) => {
            return <option value={country.name}>{country.name}</option>;
          })}
        </select>
      </Row>
      {/* <Row
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        City
        <select type="select" style={{ width: "200px", height: "40px" }}>
          {cities.map((city) => {
            return <option value={city.value}>{city.name}</option>;
          })}
        </select>
      </Row> */}
    </div>
  );
};

export default CitySelection;
