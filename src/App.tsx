import React, { FormEvent, useState } from "react";
import "./App.scss";
import Form_Four from "./components/Form_Four";
import Form_One from "./components/Form_One";
import Form_Three from "./components/Form_Three";
import Form_Two from "./components/Form_Two";
import Left_Component from "./components/Left_Component";
import useMultiStepForm from "./hooks/useMultiStepForm";
import { checkboxType, Data, INITIAL_STATE } from "./Model";

const App = () => {
  const [data, setData] = useState<Data>(INITIAL_STATE);
  const [time, setTime] = useState("monthly");
  const [checkedValues, setCheckedValues] = useState<checkboxType[]>([]);

  const updateFields = (fields: Partial<Data>) => {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  };

  const { steps, step, isFirst, isLast, currentStep, next, back } =
    useMultiStepForm([
      <Form_One {...data} update={updateFields} />,
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
      <Form_Four />,
    ]);

    console.log(checkedValues)
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    !isLast ? next() : setData(INITIAL_STATE);
  };

  console.log(data);
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
