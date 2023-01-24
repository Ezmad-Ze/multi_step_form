import React, { FormEvent, useEffect, useState } from "react";
import "./App.scss";
import All_Forms from "./components/All_Forms";
import Form_Four from "./components/forms/Form_Four";
import Form_One from "./components/forms/Form_One";
import Form_Three from "./components/forms/Form_Three";
import Form_Two from "./components/forms/Form_Two";
import Left_Component from "./components/Left_Component";
import Thank_You from "./components/Thank_You";
import Validation from "./components/Validation";
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
  const [isFinished, setIsFinished] = useState(false);
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
  const { goto, steps, step, isFirst, isLast, currentStep, next, back } =
    useMultiStepForm([
      <Form_One {...data} update={updateFields} {...errorMsg} {...errorTest} />,
      <Form_Two
        time={time}
        setTime={setTime}
        {...data}
        update={updateFields}
      />,
      <Form_Three
        time={time}
        checkedValues={checkedValues}
        setCheckedValues={setCheckedValues}
        {...data}
        update={updateFields}
      />,
      <Form_Four {...data} change={changeForm} />,
    ]);

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
      !isLast ? next() : setIsFinished(true);
    } else {
      Validation(data, setErrorTest, seterrorMsg, Emailreg);
    }
  };

  return (
    <div className="container">
      <Left_Component currentStep={currentStep} />
      {isFinished === false ? (
        <All_Forms
          currentStep={currentStep}
          isFirst={isFirst}
          step={step}
          steps={steps}
          back={back}
          handleSubmit={handleSubmit}
        />
      ) : (
        <Thank_You />
      )}
    </div>
  );
};

export default App;
