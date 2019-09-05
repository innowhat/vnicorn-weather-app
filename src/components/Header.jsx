import React from "react";
import Heading from "../elements/Heading";
import Container from "../elements/Container";

const Header = () => {
  return (
    <Container>
      <Heading h2 style={{ textAlign: "center" }}>
        Weather App
      </Heading>
    </Container>
  );
};

export default Header;
