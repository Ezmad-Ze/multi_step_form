import React from "react";
import "./App.scss";
import Form_One from "./components/Form_One";
import Form_Two from "./components/Form_Two";
import Left_Component from "./components/Left_Component";

const App = () => {
  return (
    <div className="container">
      <Left_Component />
      <form className="form">
        {/* <Form_One /> */}
        <Form_Two />
      </form>
    </div>
  );
};

export default App;
