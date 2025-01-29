import React from "react";
import { ButtonProps } from "./Button.types";
import "./Button.css";

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button
      className={`button-${props.theme} ${props.disabled}`}
      disabled={props.disabled}
      data-testid={props.testId}
    >
      {props.label}
    </button>
  );
};

export default Button;
