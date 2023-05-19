import React, { useState } from "react";

import sdkIcons from "../assets/img/sdk-icons.png";

export const Checkout = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [optionHidden, setOptionHidden] = useState(false);

  const checkoutStyle = {
    marginTop: "2rem",
    overflow: "hidden",
    transition: "max-height 0.3s",
  };
  const hiddenStyle = { maxHeight: optionHidden ? "0px" : "1000px" };

  const onRadioChange = (event) => {
    setSelectedOption(event.target.value);
    if (event.target.value === "1") {
      setOptionHidden(false);
    } else {
      setOptionHidden(true);
    }
  };

  return (
    <>
      <h3>{selectedOption}</h3>
      <form id="payment-form">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "2rem",
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: "center" }}>
            <input
              onChange={onRadioChange}
              name="payment"
              type="radio"
              id="tonder-pay"
              value="1"
            />
            <label htmlFor="tonder-pay">
              Pago con tarjeta de crédito/débito
            </label>
            <img style={{ width: "150px", marginLeft: "0.5rem" }} src={sdkIcons} alt="" />
          </div>
          <div
            style={{ ...checkoutStyle, ...hiddenStyle }}
            id="tonder-checkout"
          ></div>
        </div>
        <div style={{ marginTop: "2rem" }}>
          <input
            onChange={onRadioChange}
            name="payment"
            type="radio"
            id="other"
            value="2"
          />
          <label htmlFor="other">Otra opcion</label>
        </div>
      </form>
    </>
  );
};
