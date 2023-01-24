import React, { FormEvent } from "react";
import "./All_Forms.scss";
interface props {
  currentStep: number;
  isFirst: boolean;
  step: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  steps: React.ReactElement<any, string | React.JSXElementConstructor<any>>[];
  back: () => void;
  handleSubmit: (e: FormEvent) => void;
}
const All_Forms = ({
  currentStep,
  isFirst,
  step,
  steps,
  back,
  handleSubmit,
}: props) => {
  return (
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
  );
};

export default All_Forms;
