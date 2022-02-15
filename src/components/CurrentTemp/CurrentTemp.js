import { Container, Row, Col } from "reactstrap";
import mostlySunny from "../../store/icons/mostly-sunny.svg";

const CurrentTemp = (props) => {
  return (
    <Container>
      <Row>
        <Col style={{ textAlign: "center", padding: "0rem" }}>
          <img src={mostlySunny} alt="" style={{ height: "8rem" }} />
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
