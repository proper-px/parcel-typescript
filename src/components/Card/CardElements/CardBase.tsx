import React from "react";
import styled from "styled-components";

interface IStyledCardBaseProps {
  hasShadow: boolean;
  hasBorder: boolean;
  isRounded: boolean;
  isFlex: boolean;
}

interface ICardBaseProps extends IStyledCardBaseProps {
  children: React.ReactNode;
}

const StyledCardBase = styled.div<IStyledCardBaseProps>`
  border-radius: ${(props) => props.isRounded && props.theme.borderRadius};
  box-shadow: ${(props) =>
    props.hasShadow &&
    `${props.theme.shadows.base} ${props.theme.colors.dark}`};
  width: 100%;
  ${(props) =>
    props.isFlex &&
    `
    display: flex;
    flex-direction: column;
  `}
`;

const CardBase: React.FC<ICardBaseProps> = ({
  hasBorder = true,
  hasShadow = true,
  isRounded = true,
  children,
  isFlex = true,
}) => {
  return (
    <StyledCardBase
      isFlex={isFlex}
      hasBorder={hasBorder}
      hasShadow={hasShadow}
      isRounded={isRounded}
    >
      {children}
    </StyledCardBase>
  );
};

export default CardBase;
