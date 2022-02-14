import "./App.css";
import CurrentStats from "./components/CurrentStats/CurrentStats";
import CurrentTemp from "./components/CurrentTemp/CurrentTemp";
import Date from "./components/Date/Date";
import ByHour from "./components/ByHour/ByHour";
import NextFiveDays from "./components/NextFiveDays/NextFiveDays";
import { Container, Row, Col } from "reactstrap";
// import CitySelection from "./components/CitySelection";

import { useOpenWeather } from "react-open-weather";
import { useEffect, useState } from "react";

function App() {
  const [latitute, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
      alert("We cannot fetch the location currently.");
    }
  };

  const showPosition = (position) => {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
  };

  const showError = (error) => {
    alert("Please allow us to get your location.");
  };

  useEffect(() => {
    getLocation();
    alert("Longitude: " + longitude + "Latitude: " + latitute);
  }, []);

  const { data } = useOpenWeather({
    key: "a7920afa4f3b4f25e2a0d4291fc7b43b",
    lat: latitute,
    lon: longitude,
    lang: "en",
    unit: "metric", // values are (metric, standard, imperial)
  });

  useEffect(() => {
    console.log("data", data);
  }, [data]);

  return (
    <Container className="App">
      {/* <Row>
        <CitySelection />
      </Row> */}
      <Row>
        <Date />
      </Row>
      <Row>
        <Col style={{ borderRight: "1px solid grey" }}>
          <CurrentTemp />
        </Col>
        <Col className="currentStats">
          <CurrentStats />
        </Col>
      </Row>
      <Row>
        <ByHour />
      </Row>
      <Row className="nextFiveDays">
        <NextFiveDays />
      </Row>
    </Container>
  );
}

export default App;
