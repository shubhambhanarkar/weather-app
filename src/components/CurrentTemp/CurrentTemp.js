import { Container, Row, Col } from "reactstrap";

const CurrentTemp = (props) => {
  const icon = props.temp.weather[0].icon;
  return (
    <Container>
      <Row>
        <Col style={{ textAlign: "center", padding: "0rem" }}>
          <img
            src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
            alt=""
            style={{ width: "12rem", height: "10rem" }}
          />
        </Col>
        <Col style={{ textAlign: "center", padding: "0rem" }}>
          <h1 style={{ fontSize: "5rem", fontWeight: "lighter" }}>
            {Math.round(props.temp.temp)}&#176;C
          </h1>
          <p>{props.temp.weather[0].main}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default CurrentTemp;
