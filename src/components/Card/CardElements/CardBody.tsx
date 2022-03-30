import React from "react";
import styled from "styled-components";

interface IStyledCardBodyProps {}

interface ICardBodyProps extends IStyledCardBodyProps {
  children: React.ReactNode;
}

const StyledCardBody = styled.div<IStyledCardBodyProps>`
  padding: 1rem;
`;

const CardBody: React.FC<ICardBodyProps> = ({ children }) => {
  return <StyledCardBody>{children}</StyledCardBody>;
};

export default CardBody;
