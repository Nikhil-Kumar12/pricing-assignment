import React, { useState } from "react";
import Card from "../Card/Card";
import Switch from "../Switch/Switch";
import "./Home.css";

const Home = () => {
  const [price, setPrice] = useState({
    price1: 49,
    price2: 79,
    price3: 99,
    validity: "monthly",
  });

  return (
    <div className="home-container">
      <div className="catchLine">
        <h1>Pricing</h1>

        <p>
          Nunquam contactus ionicis tormento. A falsis, lapsus castus advena.
          <br />
          Ecce. Heu, habitio! Cum pulchritudine persuadere.
        </p>
      </div>
      <Switch setPrice={setPrice} />
      <Card price={price} />
    </div>
  );
};

export default Home;
