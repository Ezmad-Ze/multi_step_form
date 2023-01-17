import React from "react";
import { list } from "../Model";
import "./Left_Component.scss";

interface props {
  currentStep: number;
}

const Left_Component = ({ currentStep }: props) => {
  return (
    <aside className="aside">
      {list.map((l) => {
        return (
          <div key={l.id} className="aside__asideContainer">
            <div
              className={`aside__asideContainer--circle ${
                l.id === currentStep + 1 ? "active" : ""
              }`}
            >
              {l.id}
            </div>
            <div className="aside__asideContainer--text">
              <div className="aside__asideContainer--text--step">
                Step {l.id}
              </div>
              <div className="aside__asideContainer--text--content">
                {l.text}
              </div>
            </div>
          </div>
        );
      })}
    </aside>
  );
};

export default Left_Component;
