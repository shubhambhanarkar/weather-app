import "./App.css";
import { useEffect, useState } from "react";
import CurrentStats from "./components/CurrentStats/CurrentStats";
import CurrentTemp from "./components/CurrentTemp/CurrentTemp";
import Date from "./components/Date/Date";
import ByHour from "./components/ByHour/ByHour";
import NextFiveDays from "./components/NextFiveDays/NextFiveDays";
import { Container, Row, Col } from "reactstrap";
import { useOpenWeather } from "react-open-weather";

function App() {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  const showPosition = (position) => {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
  };

  const showError = () => {
    alert("Please allow us to get your location.");
  };

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
      alert("We cannot fetch the location currently.");
    }
  };

  const { data, isLoading } = useOpenWeather({
    key: "dcc7e384eb482e7814aba729a093bbbb",
    lat: latitude,
    lon: longitude,
    lang: "en",
    unit: "metric", // values are (metric, standard, imperial)
  });

  useEffect(() => {
    getLocation();
    console.log("weather data", data);
  });

  // useEffect(() => {
  //   axios.get(apiURL).then((res) => {
  //     const data = res.data;
  //     setData(data);
  //   });
  //   console.log("weather data", data);
  // }, [latitude, longitude]);

  return (
    <div>
      {!isLoading && (
        <Container className="App">
          <Row>
            <Date date={data?.current?.date} />
          </Row>
          <Row>
            <Col style={{ borderRight: "1px solid grey" }}>
              <CurrentTemp temp={data?.current} />
            </Col>
            <Col className="currentStats">
              <CurrentStats stats={data?.forecast[0]} />
            </Col>
          </Row>
          <Row>
            <ByHour />
          </Row>
          <Row className="nextFiveDays">
            <NextFiveDays forecast={data?.forecast} />
          </Row>
        </Container>
      )}
    </div>
  );
}

export default App;
