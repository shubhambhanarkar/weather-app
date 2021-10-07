import "./App.css";
import CurrentStats from "./components/CurrentStats/CurrentStats";
import CurrentTemp from "./components/CurrentTemp/CurrentTemp";
import LocationAndDate from "./components/LocationAndDate/LocationAndDate";
import ByHour from "./components/ByHour/ByHour";
import NextFiveDays from "./components/NextFiveDays/NextFiveDays";
import { Container, Row, Col } from "reactstrap";

function App() {
  return (
    <Container className="App">
      <Row>
        <LocationAndDate />
      </Row>
      <Row>
        <Col style={{borderRight: "1px solid grey"}}>
          <CurrentTemp />
        </Col>
        <Col  className="currentStats">
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
