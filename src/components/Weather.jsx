import React from "react";
import Container from "../elements/Container";
import Flex from "../elements/Flex";
import WeatherInput from "./WeatherInput";
import WeatherOutput from "./WeatherOutput";

const API_KEY = "ad1d890318187965928b47ae73fc7bc6";

class Weather extends React.Component {
  constructor() {
    super();
    this.state = {
      city: null,
      temperature: null,
      description: null,
      isLoading: true
    };
  }

  componentDidMount() {}

  handleSearch = event => {
    event.preventDefault();
    const city = event.target.city.value;
    console.log(city);
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    )
      .then(response => response.json())
      .then(responseData => {
        console.log(responseData);
        let temp = [responseData.main.temp, ..."°C"];

        this.setState({
          city: responseData.name,
          temperature: temp,
          description: responseData.weather[0].description,
          isLoading: false
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
            <WeatherOutput result={this.state} />
          </Flex>
        </Container>
      </div>
    );
  }
}

export default Weather;
