import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { IStyledButton, StyledButton } from "./StyledButton";

interface IButtonLinkProps extends IStyledButton {
  label: string;
  action: string;
  newTab: boolean;
}

const StyledButtonLink = styled(StyledButton)``;

const ButtonLink: React.FC<IButtonLinkProps> = (props) => {
  return (
    <StyledButtonLink
      brandedTheme={props.brandedTheme}
      border={props.border}
      as={Link}
      to={props.action}
    >
      {props.label}
    </StyledButtonLink>
  );
};

export default ButtonLink;
