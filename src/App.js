import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Transition from "./elements/Transition";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Weather from "./components/Weather";

import Container from "./elements/Container";
import GlobalStyle from "./theme/GlobalStyle";

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Header />
      <Weather />
      <Footer />
    </React.Fragment>
  );
}

export default App;
