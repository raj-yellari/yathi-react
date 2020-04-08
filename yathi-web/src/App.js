import React from "react";
import "./App.css";
import Header from "./components/headerComponent";
import Footer from "./components/footerComponent";
import BodyRender from "./components/bodyComponent";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <BodyRender></BodyRender>
      <Footer></Footer>
    </div>
  );
}

export default App;
