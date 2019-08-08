import React from "react";
import Card from "../elements/Card";
import Heading from "../elements/Heading";

function WeatherOutput(props) {
  return (
    <Card delay={125} style={{ width: "100%" }}>
      <Heading h1>
        {props.result.temperature} {props.result.temperature ? "°C" : ""}
      </Heading>
      <Heading h3>
        {props.result.description ? "Condition: " : ""}
        {props.result.description}
      </Heading>
      <Heading h4>
        {props.result.city} {props.result.country}
      </Heading>

      <Heading h5 style={{ color: "Yellow", textAlign: "center" }}>
        {props.result.searchError}
      </Heading>
    </Card>
  );
}

export default WeatherOutput;
