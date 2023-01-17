import React from "react";
import "./Button_Wrapper.scss";

interface props {
  url: string;
  name: string;
  time: string;
  price: number;
  handleClick: (price: number) => void;
}

const Button_Wrapper = ({ url, name, time, price, handleClick }: props) => {
  const checkTimeline = (timeline: string): string => {
    if (timeline === "yearly") return "yr";
    return "mo";
  };
  return (
    <label className="wrapper">
      <input type="radio" name="radio" id="radio" />
      <div className="buttonContainer" onClick={() => handleClick(price)}>
        <img src={url} alt={name} className="buttonContainer__image" />
        <div className="buttonContainer__right">
          <h3 className="buttonContainer__right--name">{name}</h3>
          <p className="buttonContainer__right--price">
            ${price}/{checkTimeline(time)}
          </p>
          <p
            className={`${
              time === "yearly"
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
