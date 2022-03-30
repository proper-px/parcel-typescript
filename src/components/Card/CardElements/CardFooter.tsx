import React from "react";
import styled from "styled-components";

interface IStyledCardFooterProps {
  backgroundColor: string;
  isRounded: boolean;
}

interface ICardFooterProps extends IStyledCardFooterProps {
  children: React.ReactNode;
}

const StyledCardFooter = styled.div<IStyledCardFooterProps>`
  background-color: ${(props) => props.theme.colors[props.backgroundColor]};
  padding: ${(props) => props.theme.padding.base};
  margin-top: auto;

  > * {
    margin-bottom: 0;
  }
  ${(props) =>
    props.isRounded &&
    `
    border-bottom-right-radius: ${props.theme.borderRadius};
    border-bottom-left-radius: ${props.theme.borderRadius};
  `};
`;

const CardFooter: React.FC<ICardFooterProps> = ({
  children,
  backgroundColor,
  isRounded,
}) => {
  return (
    <StyledCardFooter isRounded={isRounded} backgroundColor={backgroundColor}>
      {children}
    </StyledCardFooter>
  );
};

export default CardFooter;
