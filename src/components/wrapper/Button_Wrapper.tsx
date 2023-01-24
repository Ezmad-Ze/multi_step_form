import React from "react";
import { buttonType } from "../../Model";
import "./Button_Wrapper.scss";

interface props {
  id: number;
  url: string;
  name: string;
  time: string;
  price: number;
  planID: number;
  handleClick: (
    plan_id: number,
    plan_url: string,
    plan_name: string,
    plan_price: number,
    plan_time: string
  ) => void;
}

const Button_Wrapper = ({
  id,
  url,
  name,
  time,
  price,
  handleClick,
  planID,
}: props) => {
  return (
    <label className="wrapper">
      <input
        type="radio"
        name="radio"
        id="radio"
        defaultChecked={planID === id}
      />
      <div
        className="buttonContainer"
        onClick={() => handleClick(id, url, name, price, time)}
      >
        <img src={url} alt={name} className="buttonContainer__image" />
        <div className="buttonContainer__right">
          <h3 className="buttonContainer__right--name">{name}</h3>
          <p className="buttonContainer__right--price">
            ${price}/{time}
          </p>
          <p
            className={`${
              time === "yr"
                ? "buttonContainer__right--time--active"
                : "buttonContainer__right--time--disable"
            }`}
          >
            2 months free
          </p>
        </div>
      </div>
    </label>
  );
};

export default Button_Wrapper;
