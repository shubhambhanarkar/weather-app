import "./App.css";
import { useEffect, useState } from "react";
import CurrentStats from "./components/CurrentStats/CurrentStats";
import CurrentTemp from "./components/CurrentTemp/CurrentTemp";
import Date from "./components/Date/Date";
import ByHour from "./components/ByHour/ByHour";
import NextFiveDays from "./components/NextFiveDays/NextFiveDays";
import { Container, Row, Col } from "reactstrap";
import axios from "axios";

function App() {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [data, setData] = useState();

  const apiURL = `api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=dcc7e384eb482e7814aba729a093bbbb`;

  useEffect(() => {
    fetchData();
  }, []);

  const getLocation = async () => {
    new Promise((resolve, reject) => {
      try {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              setLatitude(Math.round(position.coords.latitude));
              setLongitude(Math.round(position.coords.longitude));
              resolve();
            },
            () => {
              alert("Please allow us to get your location.");
            }
          );
        } else {
          reject();
          alert("We cannot fetch the location currently.");
        }
      } catch (err) {
        console.log("location error", err);
      }
    });
  };

  useEffect(() => {
    getWeatherData();
    console.log("weather data", data);
  }, [latitude, longitude]);

  const getWeatherData = async () => {
    return new Promise(async (resolve, reject) => {
      try {
        setData(await axios.get(apiURL));
        resolve(data);
      } catch (error) {
        reject(error.message);
      }
    });
  };

  const fetchData = async () => {
    await getLocation();
  };

  return (
    <div>
      <Container className="App">
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
    </div>
  );
}

export default App;
