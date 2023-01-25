import "./Form_One.scss";
import Title from "../Title";
import Form_Wrapper from "../wrapper/Form_Wrapper";
import { FormEvent, useEffect, useState } from "react";

interface FormOne {
  name: string;
  email: string;
  phone: string;
  msgName: string;
  msgEmail: string;
  msgPhone: string;
  new_name: boolean;
  new_email: boolean;
  new_phone: boolean;
}

type props = FormOne & {
  update: (fields: Partial<FormOne>) => void;
};

const Form_One = ({
  name,
  email,
  phone,
  update,
  msgName,
  msgEmail,
  msgPhone,
  new_name,
  new_email,
  new_phone,
}: props) => {
  // https://tomduffytech.com/how-to-format-phone-number-in-react/
  const formatAndSetPhone = (e: React.ChangeEvent<HTMLInputElement>): string=> {
    const inputVal = e.target.value.replace(/ /g, ""); //remove all the empty spaces in the input
    let inputNumbersOnly = inputVal.replace(/\D/g, ""); // Get only digits
    if (inputNumbersOnly.length === 0) return inputNumbersOnly;
    if (inputNumbersOnly.length === 1) return `+${inputNumbersOnly}`;
    if (inputNumbersOnly.length <= 4)
      return `+${inputNumbersOnly.slice(0, 1)} ${inputNumbersOnly.slice(1)}`;
    if (inputNumbersOnly.length <= 7)
      return `+${inputNumbersOnly.slice(0, 1)} ${inputNumbersOnly.slice(
        1,
        4
      )} ${inputNumbersOnly.slice(4)}`;
    return `+${inputNumbersOnly.slice(0, 1)} ${inputNumbersOnly.slice(
      1,
      4
    )} ${inputNumbersOnly.slice(4, 7)} ${inputNumbersOnly.slice(7, 10)}`;
  };

  return (
    <Form_Wrapper>
      <Title
        title="Personal info"
        paragraph="Please provide your name, email, address, and phone number"
      />
      <div className="stepone">
        <div className="stepone__labelanderror">
          <label htmlFor="name">Name</label>
          <p className={`${new_name ? "none" : "error"}`}>{msgName}</p>
        </div>
        <input
          type="text"
          name="name"
          id="name"
          required
          autoComplete="off"
          className={`${new_name ? "active" : "error-outline"}`}
          placeholder="e.g. Stephen King"
          value={name}
          onChange={(e) => {
            update({ name: e.target.value });
          }}
        />
        <div className="stepone__labelanderror">
          <label htmlFor="email">Email</label>
          <p className={`${new_email ? "none" : "error"}`}>{msgEmail}</p>
        </div>
        <input
          type="email"
          name="email"
          id="email"
          autoComplete="off"
          className={`${new_email ? "active" : "error-outline"}`}
          placeholder="e.g. stephenking@lorem.com"
          value={email}
          onChange={(e) => {
            update({ email: e.target.value });
          }}
        />
        <div className="stepone__labelanderror">
          <label htmlFor="phone">Phone Number</label>
          <p className={`${new_phone ? "none" : "error"}`}>{msgPhone}</p>
        </div>
        <input
          type="tel"
          name="pone"
          id="phone"
          autoComplete="off"
          required
          className={`${new_phone ? "active" : "error-outline"}`}
          placeholder="e.g. +1 234 567 890"
          value={phone}
          onChange={(e) => {
            {
              update({ phone: formatAndSetPhone(e) });
            }
          }}
        />
      </div>
    </Form_Wrapper>
  );
};

export default Form_One;
