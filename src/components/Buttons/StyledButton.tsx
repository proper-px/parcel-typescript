import { IStyleConfig } from "../SharedInterfaces/IStyleConfig";
import React from "react";
import styled from "styled-components";
import { darken } from "polished";

export interface IStyledButton extends IStyleConfig {
  isDisabled?: boolean;
}

export const StyledButton = styled.button<IStyledButton>`
  text-decoration: none !important;
  background-color: ${(props) => props.theme.colors[props.brandedTheme]};
  color: ${(props) => props.theme.mappedColors[props.brandedTheme]};
  transition: ${(props) => props.theme.button.transition};
  padding: 0.5rem 1rem;
  font-family: "Helvetica", sans-serif;
  line-height: 1.5;
  -webkit-appearance: none;
  font-size: 1.25rem;
  display: inline-block;
  border: 1px solid
    ${(props) =>
      darken(
        props.theme.button.darkenAmount,
        props.theme.colors[props.brandedTheme]
      )};
  ${(props) =>
    props.theme.button.isRounded &&
    `
        border-radius: ${props.theme.borderRadius};
    `}
  &:hover {
    background-color: ${(props) =>
      darken(
        `${props.theme.button.darkenAmount}`,
        props.theme.colors[props.brandedTheme]
      )};
  }
  ${(props) =>
    props.isDisabled &&
    `
    background-color: #333;
  `}
`;
