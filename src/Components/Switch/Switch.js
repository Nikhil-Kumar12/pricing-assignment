import React, { useState } from "react";
import "./Switch.css";

const Switch = (props) => {
  const [subscription, setSubscription] = useState(false);
  const handleSwitch = () => {
    setSubscription(!subscription);
    !subscription
      ? props.setPrice({ price1: 490, price2: 790, price3: 990, validity: "yearly" })
      : props.setPrice({ price1: 49, price2: 79, price3: 99, validity: "monthly" });
  };
  return (
    <div className="switchContainer">
      <h2 style={!subscription ? { color: "#2196f3" } : {}}>Monthly</h2>
      <label className="switch">
        <input type="checkbox" checked={subscription} onChange={handleSwitch} />
        <span className="slider round"></span>
      </label>
      <h2 style={subscription ? { color: "#2196f3" } : {}}>Yearly</h2>
    </div>
  );
};

export default Switch;
