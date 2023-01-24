import React, { FormEvent, useEffect, useState } from "react";
import "./App.scss";
import Form_Four from "./components/Form_Four";
import Form_One from "./components/Form_One";
import Form_Three from "./components/Form_Three";
import Form_Two from "./components/Form_Two";
import Left_Component from "./components/Left_Component";
import useMultiStepForm from "./hooks/useMultiStepForm";
import {
  checkboxType,
  checkError,
  Data,
  emailPattern,
  ERROR,
  INITIAL_STATE,
  required,
  REQUIRED_STATE,
} from "./Model";

const App = () => {
  const [data, setData] = useState<Data>(INITIAL_STATE);
  const [time, setTime] = useState("mo");
  const [checkedValues, setCheckedValues] = useState<checkboxType[]>([]);
  const [errorMsg, seterrorMsg] = useState<required>(REQUIRED_STATE);
  const [errorTest, setErrorTest] = useState<checkError>(ERROR);
  const [test, setTest] = useState(() => {});
  const Emailreg = new RegExp(emailPattern);

  //to update form fields
  const updateFields = (fields: Partial<Data>) => {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  };
  //goto the plan form
  const changeForm = () => {
    goto(1);
  };
  //add the forms
  const {
    goto,
    steps,
    step,
    isFirst,
    isLast,
    currentStep,
    setCurrentStep,
    next,
    back,
  } = useMultiStepForm([
    <Form_One {...data} update={updateFields} {...errorMsg} {...errorTest} />,
    <Form_Two time={time} setTime={setTime} {...data} update={updateFields} />,
    <Form_Three
      time={time}
      checkedValues={checkedValues}
      setCheckedValues={setCheckedValues}
      {...data}
      update={updateFields}
    />,
    <Form_Four {...data} test={test} change={changeForm} />,
  ]);

  //handle validation
  const handleValidation = () => {
    if (data.name.length === 0) {
      setErrorTest((prev) => ({ ...prev, new_name: !prev }));
      seterrorMsg((prev) => ({
        ...prev,
        msgName: "This field is required",
      }));
    } else {
      setErrorTest((prev) => ({ ...prev, new_name: true }));
    }
    if (data.email.length === 0) {
      setErrorTest((prev) => ({ ...prev, new_email: !prev }));
      seterrorMsg((prev) => ({
        ...prev,
        msgEmail: "This field is required",
      }));
    } else if (!Emailreg.test(data.email)) {
      setErrorTest((prev) => ({ ...prev, new_email: false }));
      seterrorMsg((prev) => ({
        ...prev,
        msgEmail: "This field requires email",
      }));
    } else {
      setErrorTest((prev) => ({ ...prev, new_email: true }));
    }
    if (data.phone.length === 0) {
      setErrorTest((prev) => ({ ...prev, new_phone: false }));
      seterrorMsg((prev) => ({
        ...prev,
        msgPhone: "This field is required",
      }));
    } else if (isNaN(Number(data.phone))) {
      setErrorTest((prev) => ({ ...prev, new_phone: false }));
      seterrorMsg((prev) => ({
        ...prev,
        msgPhone: "This field requires number",
      }));
    } else {
      setErrorTest((prev) => ({ ...prev, new_phone: true }));
    }
  };

  //handle the submittion
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (
      data.name.length != 0 &&
      data.email.length != 0 &&
      data.phone.length != 0 &&
      !isNaN(Number(data.phone)) &&
      Emailreg.test(data.email)
    ) {
      setErrorTest((prev) => ({
        ...prev,
        new_name: true,
        new_email: true,
        new_phone: true,
      }));
      !isLast ? next() : setData(INITIAL_STATE);
    } else {
      handleValidation();
    }
  };

  return (
    <div className="container">
      <Left_Component currentStep={currentStep} />
      <div className="container__container">
        <form className="container__container--form">{step}</form>
        <div className="container__container--nav">
          <button
            onClick={back}
            type="button"
            className={`${
              !isFirst
                ? "container__container--nav--back"
                : "container__container--nav--hidden"
            }`}
          >
            Go Back
          </button>

          <button
            type="button"
            onClick={(e) => {
              handleSubmit(e);
            }}
            className={`${
              currentStep !== steps.length - 1
                ? "container__container--nav--next"
                : "container__container--nav--confirm"
            }`}
          >
            {currentStep !== steps.length - 1 ? "Next Step" : "Confirm"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
