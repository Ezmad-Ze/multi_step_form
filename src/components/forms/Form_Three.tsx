import React, { useEffect, useState } from "react";
import Checkbox_Wrapper from "../wrapper/Checkbox_Wrapper";
import { checkboxType, checkbox_list } from "../../Model";
import "./Form_Three.scss";
import Form_Wrapper from "../wrapper/Form_Wrapper";
import Title from "../Title";

interface FormThree {
  time: string;
  checkedValues: checkboxType[];
  addon: checkboxType[];
  setCheckedValues: React.Dispatch<React.SetStateAction<checkboxType[]>>;
}

type props = FormThree & {
  update: (fields: Partial<FormThree>) => void;
};
const Form_Three = ({
  time,
  setCheckedValues,
  update,
  checkedValues,
}: props) => {
  const [checkedState, setCheckedState] = useState(checkbox_list); // to check the checked state

  //to chang the checked state
  const handleOnChange = (position: number) => {
    const updatedCheckedState = checkedState.map((item) =>
      item.id === position
        ? { ...item, checked: !item.checked }
        : { ...item, checked: item.checked }
    );
    setCheckedState(updatedCheckedState);
    setCheckedValues([]);
  };

  //to save the checked values to other state
  useEffect(() => {
    checkedState
      .filter((item) => item.checked === true && item.timeline === time)
      .map((item) => {
        checkedValues.push(item);
      });
    update({ addon: checkedValues });
    setCheckedValues([]);
  }, [checkedState]);

  return (
    <Form_Wrapper>
      <Title
        title="Pick add-ons"
        paragraph="Add-ons help enhance your gaming experience"
      />
      <div className="checkbox">
        {checkbox_list
          .filter((checkbox) => checkbox.timeline === time)
          .map((filteredcheckbox) => (
            <Checkbox_Wrapper
              key={filteredcheckbox.id}
              id={filteredcheckbox.id}
              title={filteredcheckbox.title}
              subtitle={filteredcheckbox.subtitle}
              price={filteredcheckbox.price}
              timeline={filteredcheckbox.timeline}
              handleOnChange={handleOnChange}
            />
          ))}
      </div>
    </Form_Wrapper>
  );
};

export default Form_Three;
