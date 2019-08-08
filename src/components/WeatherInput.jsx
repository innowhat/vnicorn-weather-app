import React from "react";
import Button from "../elements/Button";
import Card from "../elements/Card";

function WeatherInput(props) {
  return (
    <Card big style={{ width: "100%" }}>
      <form onSubmit={props.handleSearch}>
        <input
          style={{
            width: "100%",
            padding: "10px",
            fontSize: "40px",
            textAlign: "center"
          }}
          type="text"
          name="city"
          placeholder="Enter city eg Helsinki"
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
