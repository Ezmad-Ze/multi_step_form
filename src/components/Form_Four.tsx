import React from "react";
import "./Form_Four.scss";
import Form_Wrapper from "../components/wrapper/Form_Wrapper";
import Title from "./Title";
import { checkboxType } from "../Model";

interface props {
  name: string;
  email: string;
  phone: string;
  plan_id: number;
  plan_name: string;
  plan_price: number;
  plan_time: string;
  addon: checkboxType[];
  test: void;
  change: () => void;
}

const Form_Four = ({
  name,
  email,
  phone,
  plan_id,
  plan_name,
  plan_price,
  plan_time,
  addon,
  test,
  change,
}: props) => {
  //to display the full time name
  const timeValue = (val: string): string => {
    if (val === "mo") return "Monthly";
    return "Yearly";
  };
  // to display the full time value
  const fullTimeValue = (val: string): string => {
    if (val === "mo") return "Month";
    return "Year";
  };
  const TotalSummation = () => {
    let init_sum = 0;
    let arr = [];
    addon.map((add) => arr.push(add.price));
    arr.push(plan_price);
    let sum = arr.reduce((total, current) => {
      return total + current;
    });
    return sum;
  };

  return (
    <Form_Wrapper>
      <Title
        title="Finishing up"
        paragraph="Double-check everything looks OK before confirming"
      />
      <div className="finishing">
        <div className="finishing__container">
          <div className="finishing__container--plan">
            <div className="finishing__container--plan--left">
              <h2 className="finishing__container--plan--left--name">
                {plan_name}({timeValue(plan_time)})
              </h2>
              <span
                className="finishing__container--plan--left--change"
                onClick={() => change()}
              >
                Change
              </span>
            </div>
            <span className="finishing__container--plan--price">
              ${plan_price}/{plan_time}
            </span>
          </div>
          <hr />
          <div className="finishing__container--addon">
            {addon.map((add) => (
              <div
                className="finishing__container--addon--container"
                key={add.id}
              >
                <h2 className="finishing__container--addon--container--title">
                  {add.title}
                </h2>
                <span className="finishing__container--addon--container--price">
                  +${add.price}/{plan_time}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="finishing__total">
          <span className="finishing__total--title">
            Total(per {fullTimeValue(plan_time)})
          </span>
          <span className="finishing__total--price">
            +${TotalSummation()}/{plan_time}
          </span>
        </div>
      </div>
    </Form_Wrapper>
  );
};

export default Form_Four;
