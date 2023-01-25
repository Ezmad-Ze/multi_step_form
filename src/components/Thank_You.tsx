import React from "react";
import "./Thank_You.scss";
import thank_you from "../assets/icon-thank-you.svg";
import Form_Wrapper from "./wrapper/Form_Wrapper";
const Thank_You = () => {
  return (
    <Form_Wrapper>
      <div className="thank_you">
        <img src={thank_you} alt="Thank You" className="thank_you__img" />
        <span className="thank_you__title">Thank You!</span>
        <p className="thank_you__text">
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </div>
    </Form_Wrapper>
  );
};

export default Thank_You;
