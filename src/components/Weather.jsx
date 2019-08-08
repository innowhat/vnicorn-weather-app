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
      city: "",
      temperature: "",
      description: ""
    };
  }

  componentDidMount() {
    let defaultCity = "OSLO";

    this.fetchWeather(defaultCity);
  }

  fetchWeather = city => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    )
      .then(requestData => requestData.json())
      .then(receiveData => {
        console.log(receiveData);
        this.setState({
          city: receiveData.name,
          temperature: receiveData.main.temp,
          description: receiveData.weather[0].description
        });
      });
  };

  handleSearch = event => {
    event.preventDefault();
    let searchCity = event.target.city.value;
    this.fetchWeather(searchCity);
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
