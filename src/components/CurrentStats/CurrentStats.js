import { Col, Container, Row } from "reactstrap";
import { timeConverter } from "../../TimeConverter";

const CurrentStats = (props) => {
  const { hour: sunriseHour, minute: sunriseMinute } = timeConverter(
    props.stats.sunrise
  );
  const { hour: sunsetHour, minute: sunsetMinute } = timeConverter(
    props.stats.sunset
  );
  return (
    <Container>
      <Row>
        <Col>
          <h2>{props.daily.temp.max}&#176;</h2>
          <p>High</p>
        </Col>
        <Col>
          <h2>{props.stats.wind_speed}</h2>
          <p>Wind</p>
        </Col>
        <Col>
          <h2>
            {sunriseHour}:{sunriseMinute}
          </h2>
          <p>Sunrise</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>{props.daily.temp.min}&#176;</h2>
          <p>Low</p>
        </Col>
        <Col>
          <h2>{props.stats.humidity}</h2>
          <p>Humidity</p>
        </Col>
        <Col>
          <h2>
            {sunsetHour}:{sunsetMinute}
          </h2>
          <p>Sunset</p>
        </Col>
      </Row>
    </Container>
  );
};

export default CurrentStats;
