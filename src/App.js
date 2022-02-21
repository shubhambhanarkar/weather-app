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
  const [dataLoading, setDataLoading] = useState(true);

  const apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&appid=fed1aa356aa6fa4fced8ca487e667588`;

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    getWeatherData();
    console.log("weather data", data);
  }, [latitude, longitude]);

  const getLocation = async () => {
    new Promise((resolve, reject) => {
      try {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              setLatitude(position.coords.latitude);
              setLongitude(position.coords.longitude);
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

  const fetchData = async () => {
    await getLocation();
  };

  const getWeatherData = async () => {
    return new Promise(async (resolve, reject) => {
      try {
        const resData = await axios.get(apiURL);
        setData(resData.data);
        resolve(resData.data);
        setDataLoading(false);
      } catch (error) {
        reject(error.message);
        setDataLoading(true);
      }
    });
  };

  return (
    <div>
      {!dataLoading && (
        <Container className="App">
          <Row>
            <Date date={data.current.dt} />
          </Row>
          <Row>
            <Col style={{ borderRight: "1px solid grey" }}>
              <CurrentTemp temp={data.current} />
            </Col>
            <Col className="currentStats">
              <CurrentStats stats={data.current} />
            </Col>
          </Row>
          <Row>
            <ByHour hourData={data.hourly} />
          </Row>
          <Row className="nextFiveDays">
            <NextFiveDays />
          </Row>
        </Container>
      )}
    </div>
  );
}

export default App;
