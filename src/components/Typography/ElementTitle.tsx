import React from "react";
import styled from "styled-components";

interface IStyledElementTitleProps {
  color: string;
}

interface IElementTitleProps extends IStyledElementTitleProps {
  title: string;
}

const StyledElementTitle = styled.h3<IStyledElementTitleProps>`
  color: ${(props) => props.theme.colors[props.color]};
`;

const ElementTitle: React.FC<IElementTitleProps> = ({
  title,
  color = "dark",
}) => {
  return <StyledElementTitle color={color}>{title}</StyledElementTitle>;
};

export default ElementTitle;
