import React from "react";
import Left_Component from "./Left_Component";
import "./Form_One.scss";
import Title from "./Title";
import Form_Wrapper from "./Form_Wrapper";
const Form_One = () => {
  const val = true;
  return (
    <Form_Wrapper>
      <Title
        title="Personal info"
        paragraph="Please provide your name, email, address, and phone number"
      />
      <div className="stepone">
        <div className="stepone__labelanderror">
          <label htmlFor="name">Name</label>
          <p className={`${val ? "none" : "error"}`}>This field is required</p>
        </div>
        <input
          type="text"
          name="name"
          id="name"
          className={`${val ? "active" : "error"}`}
          placeholder="e.g. Stephen King"
        />
        <div className="stepone__labelanderror">
          <label htmlFor="email">Email</label>
          <p className={`${val ? "none" : "error"}`}>This field is required</p>
        </div>
        <input
          type="email"
          name="email"
          id="email"
          className={`${val ? "active" : "error"}`}
          placeholder="e.g. stephenking@lorem.com"
        />
        <div className="stepone__labelanderror">
          <label htmlFor="phone">Phone Number</label>
          <p className={`${val ? "none" : "error"}`}>This field is required</p>
        </div>
        <input
          type="tel"
          name="pone"
          id="phone"
          className={`${val ? "active" : "error"}`}
          placeholder="e.g. +1 234 567 890"
        />
      </div>
    </Form_Wrapper>
  );
};

export default Form_One;
