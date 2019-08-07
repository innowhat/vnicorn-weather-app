import React from "react";
import Button from "../elements/Button";
import Card from "../elements/Card";
import Heading from "../elements/Heading";

function WeatherInput(props) {
  return (
    <Card big style={{ width: "100%" }}>
      <Heading h3>Search by City or Country</Heading>
      <form onSubmit={props.handleSearch}>
        <input
          style={{ width: "50%", padding: "20px", fontSize: "40px" }}
          type="text"
          name="city"
          placeholder="City"
        />
        <input
          style={{ width: "50%", padding: "20px", fontSize: "40px" }}
          type="text"
          name="country"
          placeholder="Country "
        />
        <Button
          secondary
          type="submit"
          name="btnSearch"
          style={{ width: "100%", padding: "20px", fontSize: "40px" }}
        >
          Search
        </Button>
      </form>
    </Card>
  );
}

export default WeatherInput;
