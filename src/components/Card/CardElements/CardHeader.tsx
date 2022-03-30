import React from "react";
import styled from "styled-components";

interface IStyledCardHeaderProps {
  backgroundColor: string;
  isTextOnly: boolean;
  isRounded: boolean;
}

interface ICardHeaderProps extends IStyledCardHeaderProps {
  children: React.ReactNode;
}

const StyledCardHeader = styled.div<IStyledCardHeaderProps>`
  background-color: ${(props) => props.theme.colors[props.backgroundColor]};
  ${(props) =>
    props.isTextOnly &&
    `
    padding: ${props.theme.padding.base};
    > * {
        margin-bottom: 0;
    }
  `}
  ${(props) =>
    props.isRounded &&
    `
    border-top-left-radius: ${props.theme.borderRadius};
    border-top-right-radius: ${props.theme.borderRadius};
  `}
`;

const CardHeader: React.FC<ICardHeaderProps> = ({
  children,
  backgroundColor,
  isTextOnly,
  isRounded,
}) => {
  return (
    <StyledCardHeader
      isRounded={isRounded}
      isTextOnly={isTextOnly}
      backgroundColor={backgroundColor}
    >
      {children}
    </StyledCardHeader>
  );
};

export default CardHeader;
