import React from "react";
import { buttonType } from "../../Model";
import "./Button_Wrapper.scss";
import arcade from "../../assets/icon-arcade.svg";
import advanced from "../../assets/icon-advanced.svg";
import pro from "../../assets/icon-pro.svg";

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

  
  //import and display the image
  const displayImage = (url: string): any => {
    if (url === "../src/assets/icon-arcade.svg") {
      return arcade;
    } else if (url === "../src/assets/icon-advanced.svg") {
      return advanced;
    } else if (url === "../src/assets/icon-pro.svg") {
      return pro;
    }
  };

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
        <img
          src={displayImage(url)}
          alt={name}
          className="buttonContainer__image"
        />
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
