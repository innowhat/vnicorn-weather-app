import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Weather from "./components/Weather";
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
