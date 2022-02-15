import { Container, Row, Col } from "reactstrap";

const CurrentTemp = (props) => {
  return (
    <Container>
      <Row>
        <Col style={{ textAlign: "center", padding: "0rem" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            viewBox="0 0 8 8"
          >
            <path d="M0 26.078q0-0.609 0.422-1.016t1.047-0.406h31.109q0.625 0 1.023 0.398t0.398 1.023q0 0.578-0.414 0.969t-1.008 0.391h-31.109q-0.625 0-1.047-0.391t-0.422-0.969zM4.359 20.844q0-0.609 0.438-1" />
          </svg>
        </Col>
        <Col style={{ textAlign: "center", padding: "0rem" }}>
          <h1 style={{ fontSize: "5rem", fontWeight: "lighter" }}>
            {props.temp?.temperature.current}&#176;
          </h1>
          <p>{props.temp?.description}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default CurrentTemp;
