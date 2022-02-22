import { Container, Row, Col } from "reactstrap";
import sunny from "../../store/icons/sunny.svg";
import { timeConverter } from "../../TimeConverter";

const ByHour = (props) => {
  // const getData = () => {
  //   for (let i = 0; i < 5; i++) {
  //     const { hour: hour0, minute: minute0 } = timeConverter(
  //       props.hourData[i].dt
  //     );
  //   }
  // };
  const { hour: hour0, minute: minute0 } = timeConverter(props.hourData[0].dt);
  const { hour: hour1, minute: minute1 } = timeConverter(props.hourData[1].dt);
  const { hour: hour2, minute: minute2 } = timeConverter(props.hourData[2].dt);
  const { hour: hour3, minute: minute3 } = timeConverter(props.hourData[3].dt);
  const { hour: hour4, minute: minute4 } = timeConverter(props.hourData[4].dt);

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
          <h3>
            {hour0}:{minute0}
          </h3>
          <img src={sunny} alt="" />
          <h3>{Math.round(props.hourData[0].temp)}&#176;</h3>
        </Col>
        <Col
          style={{
            backgroundColor: "rgba(0,0,0,0.15)",
            textAlign: "center",
            borderRadius: "0.5rem",
            margin: "1rem 2rem",
          }}
        >
          <h3>
            {hour1}:{minute1}
          </h3>
          <img src={sunny} alt="" />
          <h3>{Math.round(props.hourData[1].temp)}&#176;</h3>
        </Col>
        <Col
          style={{
            backgroundColor: "rgba(0,0,0,0.15)",
            textAlign: "center",
            borderRadius: "0.5rem",
            margin: "1rem 2rem",
          }}
        >
          <h3>
            {hour2}:{minute2}
          </h3>
          <img src={sunny} alt="" />
          <h3>{Math.round(props.hourData[2].temp)}&#176;</h3>
        </Col>
        <Col
          style={{
            backgroundColor: "rgba(0,0,0,0.15)",
            textAlign: "center",
            borderRadius: "0.5rem",
            margin: "1rem 2rem",
          }}
        >
          <h3>
            {hour3}:{minute3}
          </h3>
          <img src={sunny} alt="" />
          <h3>{Math.round(props.hourData[3].temp)}&#176;</h3>
        </Col>
        <Col
          style={{
            backgroundColor: "rgba(0,0,0,0.15)",
            textAlign: "center",
            borderRadius: "0.5rem",
            margin: "1rem 2rem",
          }}
        >
          <h3>
            {hour4}:{minute4}
          </h3>
          <img src={sunny} alt="" />
          <h3>{Math.round(props.hourData[4].temp)}&#176;</h3>
        </Col>
      </Row>
    </Container>
  );
};

export default ByHour;
