import React from "react";
import faker from "faker";
import Container from "../elements/Container";
import Flex from "../elements/Flex";
import Heading from "../elements/Heading";
import Card from "../elements/Card";
import WeatherInput from "./WeatherInput";

const API_KEY = "ad1d890318187965928b47ae73fc7bc6";

class Weather extends React.Component {
  constructor() {
    super();
    this.state = {
      city: "",
      temperature: "",
      temp_high: "",
      temp_low: "",
      humidity: "",
      description: "",
      isLoading: true
    };
  }

  componentDidMount() {}

  handleSearch = event => {
    event.preventDefault();

    const city = event.target.city.value;
    const country = event.target.country.value;
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`
    )
      .then(response => response.json())
      .then(responseData => {
        console.log(responseData);
        this.setState({
          city: responseData.name,
          temperature: responseData.main.temp,
          temp_high: responseData.main.temp_max,
          temp_low: responseData.main.temp_min,
          humidity: responseData.main.humidity,
          description: responseData.weather[0].description,
          loading: false
        });
      })
      .catch(error => {
        console.log("Error fetching and parsing data", error);
      });
  };

  render() {
    return (
      <div>
        <Container>
          <Flex>
            <WeatherInput handleSearch={this.handleSearch} />
          </Flex>
        </Container>
        <Container>
          <Flex>
            <Card primary delay={125} style={{ width: "100%" }}>
              <Heading style={{ color: "#fff" }} h4>
                <h3>{this.state.city}</h3>
                <h1>{this.state.temperature}</h1>
                <h3>{this.state.humidity}</h3>
                <p>
                  {this.state.temp_low}, {this.state.temp_high}
                </p>
                <p>{this.state.description}</p>
              </Heading>
            </Card>
          </Flex>
        </Container>
      </div>
    );
  }
}

export default Weather;
