import React, { ReactElement, useState } from "react";

const useMultiStepForm = (steps: ReactElement[]) => {
  const [currentStep, setCurrentStep] = useState(0);

  const next = () => {
    setCurrentStep((prev) => {
      return prev >= steps.length - 1 ? prev : prev + 1;
    });
  };

  const back = () => {
    setCurrentStep((prev) => {
      return steps.length - 1 <= 0 ? prev : prev - 1;
    });
  };
  const goto = (val: number) => {
    setCurrentStep(val);
  };
  return {
    goto,
    steps,
    step: steps[currentStep],
    isFirst: currentStep === 0,
    isLast: currentStep === steps.length - 1,
    currentStep,
    setCurrentStep,
    next,
    back,
  };
};

export default useMultiStepForm;
