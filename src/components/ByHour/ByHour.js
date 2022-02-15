import { Container, Row, Col } from "reactstrap";
import sunny from "../../store/icons/sunny.svg";

const ByHour = () => {
  return (
    <Container>
      <p>Today's Weather</p>
      <Row>
        <Col
          style={{
            backgroundColor: "rgba(0,0,0,0.15)",
            textAlign: "center",
            borderRadius: "0.5rem",
            margin: "1rem 2rem",
          }}
        >
          <h3>_</h3>
          <img src={sunny} alt="" />
          <h3>_&#176;</h3>
        </Col>
        <Col
          style={{
            backgroundColor: "rgba(0,0,0,0.15)",
            textAlign: "center",
            borderRadius: "0.5rem",
            margin: "1rem 2rem",
          }}
        >
          <h3>_</h3>
          <img src={sunny} alt="" />
          <h3>_&#176;</h3>
        </Col>
        <Col
          style={{
            backgroundColor: "rgba(0,0,0,0.15)",
            textAlign: "center",
            borderRadius: "0.5rem",
            margin: "1rem 2rem",
          }}
        >
          <h3>_</h3>
          <img src={sunny} alt="" />
          <h3>_&#176;</h3>
        </Col>
        <Col
          style={{
            backgroundColor: "rgba(0,0,0,0.15)",
            textAlign: "center",
            borderRadius: "0.5rem",
            margin: "1rem 2rem",
          }}
        >
          <h3>_</h3>
          <img src={sunny} alt="" />
          <h3>_&#176;</h3>
        </Col>
        <Col
          style={{
            backgroundColor: "rgba(0,0,0,0.15)",
            textAlign: "center",
            borderRadius: "0.5rem",
            margin: "1rem 2rem",
          }}
        >
          <h3>_</h3>
          <img src={sunny} alt="" />
          <h3>_&#176;</h3>
        </Col>
      </Row>
    </Container>
  );
};

export default ByHour;
