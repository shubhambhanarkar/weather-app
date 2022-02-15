import { Container, Row, Col } from "reactstrap";
import mostlySunny from "../../store/icons/mostly-sunny.svg";

const NextFiveDays = (props) => {
  return (
    <Container>
      <p>Next 5 days</p>
      <Row
        style={{
          backgroundColor: "rgba(0,0,0,0.15)",
          borderRadius: "0.5rem",
          margin: "1.5rem 0rem",
          padding: "0.75rem 0rem",
          textAlign: "center",
        }}
      >
        <Col>
          <h3>_</h3>
        </Col>
        <Col>
          <img src={mostlySunny} alt="" style={{ height: "5rem" }} />
        </Col>
        <Col>
          <h3>10&#176;</h3>
          <p>Low</p>
        </Col>
        <Col>
          <h3>21&#176;</h3>
          <p>High</p>
        </Col>
        <Col>
          <h3>12mph</h3>
          <p>Wind</p>
        </Col>
        <Col>
          <h3>0%</h3>
          <p>Rain</p>
        </Col>
      </Row>
      <Row
        style={{
          backgroundColor: "rgba(0,0,0,0.15)",
          borderRadius: "0.5rem",
          margin: "1.5rem 0rem",
          padding: "0.75rem 0rem",
          textAlign: "center",
        }}
      >
        <Col>
          <h3>Tue</h3>
          <p>14/7</p>
        </Col>
        <Col>
          <img src={mostlySunny} alt="" style={{ height: "5rem" }} />
        </Col>
        <Col>
          <h3>10&#176;</h3>
          <p>Low</p>
        </Col>
        <Col>
          <h3>21&#176;</h3>
          <p>High</p>
        </Col>
        <Col>
          <h3>12mph</h3>
          <p>Wind</p>
        </Col>
        <Col>
          <h3>0%</h3>
          <p>Rain</p>
        </Col>
      </Row>
      <Row
        style={{
          backgroundColor: "rgba(0,0,0,0.15)",
          borderRadius: "0.5rem",
          margin: "1.5rem 0rem",
          padding: "0.75rem 0rem",
          textAlign: "center",
        }}
      >
        <Col>
          <h3>Tue</h3>
          <p>14/7</p>
        </Col>
        <Col>
          <img src={mostlySunny} alt="" style={{ height: "5rem" }} />
        </Col>
        <Col>
          <h3>10&#176;</h3>
          <p>Low</p>
        </Col>
        <Col>
          <h3>21&#176;</h3>
          <p>High</p>
        </Col>
        <Col>
          <h3>12mph</h3>
          <p>Wind</p>
        </Col>
        <Col>
          <h3>0%</h3>
          <p>Rain</p>
        </Col>
      </Row>
      <Row
        style={{
          backgroundColor: "rgba(0,0,0,0.15)",
          borderRadius: "0.5rem",
          margin: "1.5rem 0rem",
          padding: "0.75rem 0rem",
          textAlign: "center",
        }}
      >
        <Col>
          <h3>Tue</h3>
          <p>14/7</p>
        </Col>
        <Col>
          <img src={mostlySunny} alt="" style={{ height: "5rem" }} />
        </Col>
        <Col>
          <h3>10&#176;</h3>
          <p>Low</p>
        </Col>
        <Col>
          <h3>21&#176;</h3>
          <p>High</p>
        </Col>
        <Col>
          <h3>12mph</h3>
          <p>Wind</p>
        </Col>
        <Col>
          <h3>0%</h3>
          <p>Rain</p>
        </Col>
      </Row>
      <Row
        style={{
          backgroundColor: "rgba(0,0,0,0.15)",
          borderRadius: "0.5rem",
          margin: "1.5rem 0rem",
          padding: "0.75rem 0rem",
          textAlign: "center",
        }}
      >
        <Col>
          <h3>Tue</h3>
          <p>14/7</p>
        </Col>
        <Col>
          <img src={mostlySunny} alt="" style={{ height: "5rem" }} />
        </Col>
        <Col>
          <h3>10&#176;</h3>
          <p>Low</p>
        </Col>
        <Col>
          <h3>21&#176;</h3>
          <p>High</p>
        </Col>
        <Col>
          <h3>12mph</h3>
          <p>Wind</p>
        </Col>
        <Col>
          <h3>0%</h3>
          <p>Rain</p>
        </Col>
      </Row>
    </Container>
  );
};

export default NextFiveDays;
