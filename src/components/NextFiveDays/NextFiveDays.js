import { Container, Row, Col } from "reactstrap";
import { timeConverter } from "../../TimeConverter";

const NextFiveDays = (props) => {
  const { day: day1, monthNumber: monthNumber1 } = timeConverter(
    props.daily[1].dt
  );
  const { day: day2, monthNumber: monthNumber2 } = timeConverter(
    props.daily[2].dt
  );
  const { day: day3, monthNumber: monthNumber3 } = timeConverter(
    props.daily[3].dt
  );
  const { day: day4, monthNumber: monthNumber4 } = timeConverter(
    props.daily[4].dt
  );
  const { day: day5, monthNumber: monthNumber5 } = timeConverter(
    props.daily[5].dt
  );

  const icon1 = props.daily[1].weather[0].icon;
  const icon2 = props.daily[2].weather[0].icon;
  const icon3 = props.daily[3].weather[0].icon;
  const icon4 = props.daily[4].weather[0].icon;
  const icon5 = props.daily[5].weather[0].icon;

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
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Col
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h3>
            {day1}/{monthNumber1}
          </h3>
        </Col>
        <Col>
          <img
            src={`http://openweathermap.org/img/wn/${icon1}@2x.png`}
            alt=""
            style={{ height: "4rem", width: "4rem" }}
          />
        </Col>
        <Col>
          <h3>{Math.round(props.daily[1].temp.min)}&#176;C</h3>
          <p>Low</p>
        </Col>
        <Col>
          <h3>{Math.round(props.daily[1].temp.max)}&#176;C</h3>
          <p>High</p>
        </Col>
        <Col>
          <h3>{props.daily[1].wind_speed}</h3>
          <p>Wind</p>
        </Col>
        <Col>
          <h3>{props.daily[1].humidity}</h3>
          <p>Humidity</p>
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
        <Col
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h3>
            {day2}/{monthNumber2}
          </h3>
        </Col>
        <Col>
          <img
            src={`http://openweathermap.org/img/wn/${icon2}@2x.png`}
            alt=""
            style={{ height: "4rem", width: "4rem" }}
          />
        </Col>
        <Col>
          <h3>{Math.round(props.daily[2].temp.min)}&#176;C</h3>
          <p>Low</p>
        </Col>
        <Col>
          <h3>{Math.round(props.daily[2].temp.max)}&#176;C</h3>
          <p>High</p>
        </Col>
        <Col>
          <h3>{props.daily[2].wind_speed}</h3>
          <p>Wind</p>
        </Col>
        <Col>
          <h3>{props.daily[2].humidity}</h3>
          <p>Humidity</p>
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
        <Col
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h3>
            {day3}/{monthNumber3}
          </h3>
        </Col>
        <Col>
          <img
            src={`http://openweathermap.org/img/wn/${icon3}@2x.png`}
            alt=""
            style={{ height: "4rem", width: "4rem" }}
          />
        </Col>
        <Col>
          <h3>{Math.round(props.daily[3].temp.min)}&#176;C</h3>
          <p>Low</p>
        </Col>
        <Col>
          <h3>{Math.round(props.daily[3].temp.max)}&#176;C</h3>
          <p>High</p>
        </Col>
        <Col>
          <h3>{props.daily[3].wind_speed}</h3>
          <p>Wind</p>
        </Col>
        <Col>
          <h3>{props.daily[3].humidity}</h3>
          <p>Humidity</p>
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
        <Col
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h3>
            {day4}/{monthNumber4}
          </h3>
        </Col>
        <Col>
          <img
            src={`http://openweathermap.org/img/wn/${icon4}@2x.png`}
            alt=""
            style={{ height: "4rem", width: "4rem" }}
          />
        </Col>
        <Col>
          <h3>{Math.round(props.daily[4].temp.min)}&#176;C</h3>
          <p>Low</p>
        </Col>
        <Col>
          <h3>{Math.round(props.daily[4].temp.max)}&#176;C</h3>
          <p>High</p>
        </Col>
        <Col>
          <h3>{props.daily[4].wind_speed}</h3>
          <p>Wind</p>
        </Col>
        <Col>
          <h3>{props.daily[4].humidity}</h3>
          <p>Humidity</p>
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
        <Col
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h3>
            {day5}/{monthNumber5}
          </h3>
        </Col>
        <Col>
          <img
            src={`http://openweathermap.org/img/wn/${icon5}@2x.png`}
            alt=""
            style={{ height: "4rem", width: "4rem" }}
          />
        </Col>
        <Col>
          <h3>{Math.round(props.daily[5].temp.min)}&#176;C</h3>
          <p>Low</p>
        </Col>
        <Col>
          <h3>{Math.round(props.daily[5].temp.max)}&#176;C</h3>
          <p>High</p>
        </Col>
        <Col>
          <h3>{props.daily[5].wind_speed}</h3>
          <p>Wind</p>
        </Col>
        <Col>
          <h3>{props.daily[5].humidity}</h3>
          <p>Humidity</p>
        </Col>
      </Row>
    </Container>
  );
};

export default NextFiveDays;
