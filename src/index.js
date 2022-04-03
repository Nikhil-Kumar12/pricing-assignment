import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Navbar />
    <Home />
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);
