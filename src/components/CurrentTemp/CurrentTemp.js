import { Container, Row, Col } from "reactstrap";
import mostlySunny from "../../store/icons/mostly-sunny.svg";

const CurrentTemp = () => {
  return (
    <Container>
      <Row>
        <Col style={{ textAlign: "center", padding: "0rem" }}>
          <img src={mostlySunny} alt="" style={{height: "8rem"}} />
        </Col>
        <Col style={{ textAlign: "center", padding: "0rem" }}>
          <h1 style={{ fontSize: "5rem", fontWeight: "lighter" }}>21&#176;</h1>
          <p>Mostly sunny</p>
        </Col>
      </Row>
    </Container>
  );
};

export default CurrentTemp;
