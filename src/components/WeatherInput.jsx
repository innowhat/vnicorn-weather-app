import React from "react";
import Button from "../elements/Button";
import Card from "../elements/Card";
import Heading from "../elements/Heading";

function WeatherInput(props) {
  return (
    <Card big style={{ width: "100%" }}>
      <Heading h3>Search by City eg Helsinki</Heading>
      <form onSubmit={props.handleSearch}>
        <input
          style={{ width: "100%", padding: "10px", fontSize: "40px" }}
          type="text"
          name="city"
          placeholder="Enter city name"
        />
        <Button
          secondary
          type="submit"
          name="btnSearch"
          style={{ width: "100%", padding: "10px", fontSize: "40px" }}
        >
          Search
        </Button>
      </form>
    </Card>
  );
}

export default WeatherInput;
