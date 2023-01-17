import React, { useState } from "react";
import "./App.scss";
import Form_One from "./components/Form_One";
import Form_Three from "./components/Form_Three";
import Form_Two from "./components/Form_Two";
import Left_Component from "./components/Left_Component";
import { checkboxType } from "./Model";

const App = () => {
  const [time, setTime] = useState("monthly");
  const [checkedValues, setCheckedValues] = useState<checkboxType[]>([]);
  console.log(checkedValues);

  return (
    <div className="container">
      <Left_Component />
      <div className="form">
        {/* <Form_One /> */}
        {/* <Form_Two time={time} setTime={setTime} /> */}
        <Form_Three
          time={time}
          checkedValues={checkedValues}
          setCheckedValues={setCheckedValues}
        />
      </div>
    </div>
  );
};

export default App;
