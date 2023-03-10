import React from "react";
import { button_list } from "../../Model";
import Button_Wrapper from "../wrapper/Button_Wrapper";
import "./Form_Two.scss";
import Form_Wrapper from "../wrapper/Form_Wrapper";
import Title from "../Title";
import Switch from "react-switch";

interface FormTwo {
  time: string;
  setTime: React.Dispatch<React.SetStateAction<string>>;
  plan_id: number;
  plan_url: string;
  plan_name: string;
  plan_price: number;
  plan_time: string;
}

type props = FormTwo & {
  update: (fields: Partial<FormTwo>) => void;
};

const Form_Two = ({ time, setTime, plan_id, update }: props) => {
  //to add the changed time
  const changeTime = (): boolean => {
    if (time === "yr") {
      //default value
      update({ plan_id: 1 });
      update({ plan_url: "src/assets/icon-arcade.svg" });
      update({ plan_name: "Arcade" });
      update({ plan_price: 9 });
      update({ plan_time: "mo" });
      setTime("mo");
      return false;
    }
    //default value
    update({ plan_id: 4 });
    update({ plan_url: "src/assets/icon-arcade.svg" });
    update({ plan_name: "Arcade" });
    update({ plan_price: 90 });
    update({ plan_time: "yr" });
    setTime("yr");
    return true;
  };

  //to update and save the result
  const handleClick = (
    id: number,
    url: string,
    name: string,
    price: number,
    time: string
  ): void => {
    update({ plan_id: id });
    update({ plan_url: url });
    update({ plan_name: name });
    update({ plan_price: price });
    update({ plan_time: time });
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
              id={filteredButton.plan_id}
              planID={plan_id}
              url={filteredButton.plan_url}
              name={filteredButton.plan_name}
              price={filteredButton.plan_price}
              time={filteredButton.plan_time}
              handleClick={handleClick}
            />
          ))}
      </div>
      <div className="switch">
        <div className="switch__container">
          <label className={`time ${time === "monthly" && "time-active"}`}>
            Monthly
          </label>
          <Switch
            onChange={changeTime}
            checked={time === "yr"}
            handleDiameter={13}
            offColor="#02295a"
            onColor="#02295a"
            offHandleColor="#ffffff"
            onHandleColor="#ffffff"
            height={26}
            width={50}
            uncheckedIcon={false}
            checkedIcon={false}
            className="switch__container--switcher"
            aria-labelledby="switch-label"
          />
          <label className={`time ${time === "yearly" && "time-active"}`}>
            Yearly
          </label>
        </div>
      </div>
    </Form_Wrapper>
  );
};

export default Form_Two;
