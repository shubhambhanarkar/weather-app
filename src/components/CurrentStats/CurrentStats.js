import { Col, Container, Row } from "reactstrap";

const CurrentStats = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h2>23&#176;</h2>
          <p>High</p>
        </Col>
        <Col>
          <h2>7mph</h2>
          <p>Wind</p>
        </Col>
        <Col>
          <h2>05:27</h2>
          <p>Sunrise</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>14&#176;</h2>
          <p>Low</p>
        </Col>
        <Col>
          <h2>0%</h2>
          <p>Rain</p>
        </Col>
        <Col>
          <h2>20:57</h2>
          <p>Sunset</p>
        </Col>
      </Row>
    </Container>
  );
};

export default CurrentStats;
