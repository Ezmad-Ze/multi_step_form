import React from "react";
import "./Form_Wrapper.scss";
interface props {
  children: React.ReactNode;
}
const Form_Wrapper = ({ children }: props) => {
  return <div className="form_container">{children}</div>;
};

export default Form_Wrapper;
