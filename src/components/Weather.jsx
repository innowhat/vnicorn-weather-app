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
      description: "",
      searchError: "",
      isLoading: false
    };
  }

  componentDidMount() {
    let defaultCity = "Helsinki";
    this.fetchWeather(defaultCity);
  }

  fetchWeather = async city => {
    await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    )
      .then(requestData => requestData.json())
      .then(receiveData => {
        console.log(receiveData);
        if (city) {
          this.setState({
            city: receiveData.name ? receiveData.name : "",
            country:
              receiveData.sys && receiveData.sys.country
                ? receiveData.sys.country
                : "",
            temperature:
              receiveData.main && receiveData.main.temp
                ? receiveData.main.temp
                : "",
            description:
              receiveData.weather && receiveData.weather[0].description
                ? receiveData.weather[0].description
                : "",
            searchError: receiveData.message ? receiveData.message : ""
          });
        } else {
          console.log("oops", receiveData.message);
          this.setState({
            temperature: undefined,
            city: undefined,
            country: undefined,
            description: undefined,
            searchError: "Please enter city"
          });
        }
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
