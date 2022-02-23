import { Container, Row, Col } from "reactstrap";
import { timeConverter } from "../../TimeConverter";

const ByHour = (props) => {
  const { hour: hour0, minute: minute0 } = timeConverter(props.hourData[0].dt);
  const { hour: hour1, minute: minute1 } = timeConverter(props.hourData[1].dt);
  const { hour: hour2, minute: minute2 } = timeConverter(props.hourData[2].dt);
  const { hour: hour3, minute: minute3 } = timeConverter(props.hourData[3].dt);
  const { hour: hour4, minute: minute4 } = timeConverter(props.hourData[4].dt);

  const icon0 = props.hourData[0].weather[0].icon;
  const icon1 = props.hourData[1].weather[0].icon;
  const icon2 = props.hourData[2].weather[0].icon;
  const icon3 = props.hourData[3].weather[0].icon;
  const icon4 = props.hourData[4].weather[0].icon;

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
          <img
            src={`http://openweathermap.org/img/wn/${icon0}@2x.png`}
            alt=""
            style={{ height: "4rem", width: "4rem" }}
          />
          <h3>{Math.round(props.hourData[0].temp)}&#176;C</h3>
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
          <img
            src={`http://openweathermap.org/img/wn/${icon1}@2x.png`}
            alt=""
            style={{ height: "4rem", width: "4rem" }}
          />
          <h3>{Math.round(props.hourData[1].temp)}&#176;C</h3>
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
          <img
            src={`http://openweathermap.org/img/wn/${icon2}@2x.png`}
            alt=""
            style={{ height: "4rem", width: "4rem" }}
          />
          <h3>{Math.round(props.hourData[2].temp)}&#176;C</h3>
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
          <img
            src={`http://openweathermap.org/img/wn/${icon3}@2x.png`}
            alt=""
            style={{ height: "4rem", width: "4rem" }}
          />
          <h3>{Math.round(props.hourData[3].temp)}&#176;C</h3>
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
          <img
            src={`http://openweathermap.org/img/wn/${icon4}@2x.png`}
            alt=""
            style={{ height: "4rem", width: "4rem" }}
          />
          <h3>{Math.round(props.hourData[4].temp)}&#176;C</h3>
        </Col>
      </Row>
    </Container>
  );
};

export default ByHour;
