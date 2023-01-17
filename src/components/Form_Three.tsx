import React, { useEffect, useState } from "react";
import Checkbox_Wrapper from "./Checkbox_Wrapper";
import { checkboxType, checkbox_list } from "../Model";
import "./Form_Three.scss";
import Form_Wrapper from "./Form_Wrapper";
import Title from "./Title";

interface props {
  time: string;
  checkedValues: checkboxType[];
  setCheckedValues: React.Dispatch<React.SetStateAction<checkboxType[]>>;
}

const Form_Three = ({ time, checkedValues, setCheckedValues }: props) => {
  const [checkedState, setCheckedState] = useState(checkbox_list);

  let arr: checkboxType[] = [];
  const handleOnChange = (position: number) => {
    const updatedCheckedState = checkedState.map((item) =>
      item.id === position
        ? { ...item, checked: !item.checked }
        : { ...item, checked: item.checked }
    );

    setCheckedState(updatedCheckedState);
  };

  useEffect(() => {
    checkedState.map((item) => {
      item.checked === true && item.timeline === time && arr.push(item);
    });
    setCheckedValues(arr);
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
