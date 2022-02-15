import { Col, Container, Row } from "reactstrap";

const CurrentStats = (props) => {
  return (
    <Container>
      <Row>
        <Col>
          <h2>{props.stats?.temperature.max}&#176;</h2>
          <p>High</p>
        </Col>
        <Col>
          <h2>{props.stats?.wind} kmph</h2>
          <p>Wind</p>
        </Col>
        <Col>
          <h2>_</h2>
          <p>Sunrise</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>{props.stats?.temperature.min}&#176;</h2>
          <p>Low</p>
        </Col>
        <Col>
          <h2>_</h2>
          <p>Humidity</p>
        </Col>
        <Col>
          <h2>_</h2>
          <p>Sunset</p>
        </Col>
      </Row>
    </Container>
  );
};

export default CurrentStats;
