import React from "react";
import "./Title.scss";

interface props {
  title: string;
  paragraph: string;
}

const Title = ({ title, paragraph }: props) => {
  return (
    <>
      <h2 className="title">{title}</h2>
      <p className="subtitle">{paragraph}</p>
    </>
  );
};

export default Title;
