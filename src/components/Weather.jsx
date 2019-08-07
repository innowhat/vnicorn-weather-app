import React from "react";
import faker from "faker";
import Container from "../elements/Container";
import Flex from "../elements/Flex";
import Heading from "../elements/Heading";
import Card from "../elements/Card";
import WeatherInput from "./WeatherInput";

class Weather extends React.Component {
  render() {
    const randomCards = [];

    for (let i = 0; i < 4; i++) {
      randomCards.push({
        date: faker.date.weekday(1)
      });
    }

    return (
      <div>
        <Container>
          <Flex>
            <Card big style={{ width: "100%" }}>
              <Heading h3>Choose City or Country</Heading>
              <WeatherInput />
            </Card>
          </Flex>
        </Container>
        <Container>
          <Flex>
            {randomCards.map((el, index) => {
              return (
                <Card
                  primary
                  key={index}
                  delay={index * 125}
                  style={{ width: "100%" }}
                >
                  <Heading style={{ color: "#fff" }} h4>
                    {el.date}
                  </Heading>
                  <p>{el.copy}</p>
                </Card>
              );
            })}
          </Flex>
        </Container>
      </div>
    );
  }
}

export default Weather;
