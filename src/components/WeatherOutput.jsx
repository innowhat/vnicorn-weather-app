import React from "react";
import Card from "../elements/Card";
import Heading from "../elements/Heading";

function WeatherOutput(props) {
  return (
    <Card delay={125} style={{ width: "100%" }}>
      <Heading>{props.result.temperature} </Heading>
      <p>{props.result.city}</p>
      <p>{props.result.description}</p>
      <p>{props.result.error}</p>
    </Card>
  );
}

export default WeatherOutput;
