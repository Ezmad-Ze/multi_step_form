import React, { useState } from "react";
import { button_list } from "../Model";
import Button_Wrapper from "./Button_Wrapper";
import "./Form_Two.scss";
import Form_Wrapper from "./Form_Wrapper";
import Title from "./Title";
import Switch from "react-switch";


const Form_Two = () => {
  const [time, setTime] = useState("monthly")
  // const time: string = "monthly";
  const changeTime = (): boolean => {
    if (time === "yearly"){
      setTime("monthly")
      return false;
    } 
    setTime("yearly")     
    return true;
  };
  return (
    <Form_Wrapper>
      <Title
        title="Select your plan"
        paragraph="You have the option of monthly and yearly billing"
      />
      <div className="button">
        {button_list
          .filter((button) => button.plan_time === time)
          .map((filteredButton) => (
            <Button_Wrapper
              key={filteredButton.plan_id}
              url={filteredButton.plan_url}
              name={filteredButton.plan_name}
              price={filteredButton.plan_price}
              time={filteredButton.plan_time}
            />
          ))}
      </div>
      <div className="switch">
        <div className="switch__container">
          <label>Monthly</label>
          <Switch
            onChange={changeTime}
            checked={time === "yearly"}
            handleDiameter={13}
            offColor="#02295a"
            onColor="#02295a"
            offHandleColor="#ffffff"
            onHandleColor="#ffffff"
            height={26}
            width={50}
            uncheckedIcon={false}
            checkedIcon={false}
            className = "switch__container--switcher"
            // borderRadius={6}
          />
          <label>Yearly</label>
        </div>
      </div>
    </Form_Wrapper>
  );
};

export default Form_Two;
