import "./App.css";
import CurrentStats from "./components/CurrentStats/CurrentStats";
import CurrentTemp from "./components/CurrentTemp/CurrentTemp";
import LocationAndDate from "./components/LocationAndDate/LocationAndDate";
import ByHour from "./components/ByHour/ByHour";
import NextFiveDays from "./components/NextFiveDays/NextFiveDays";
import { Container, Row, Col } from "reactstrap";
import CitySelection from "./components/CitySelection";

import { useOpenWeather } from "react-open-weather";
import { useEffect } from "react";

function App() {
  const { data } = useOpenWeather({
    key: "a7920afa4f3b4f25e2a0d4291fc7b43b",
    lat: "48.137154",
    lon: "11.576124",
    lang: "en",
    unit: "metric", // values are (metric, standard, imperial)
  });

  useEffect(() => {
    console.log("data", data);
  }, [data]);

  return (
    <Container className="App">
      <Row>
        <CitySelection />
      </Row>
      <Row>
        <LocationAndDate />
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
