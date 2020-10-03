import React from "react";

const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      <span className="button__text">{props.text}</span>
    </button>
  );
};

export default Button;
