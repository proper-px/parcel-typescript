import React from "react";
import { IStyledButton, StyledButton } from "./StyledButton";

interface IButtonProps extends IStyledButton {
  label: string;
  action: () => void;
}

const Button: React.FC<IButtonProps> = (props) => {
  return (
    <StyledButton
      brandedTheme={props.brandedTheme}
      border={props.border}
      onClick={props.action}
      disabled={props.isDisabled}
    >
      {props.label}
    </StyledButton>
  );
};

export default Button;
