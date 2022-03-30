import React from "react";
import styled from "styled-components";

interface IStyledCardGroupProps {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  auto?: boolean;
}

interface ICardGroupProps extends IStyledCardGroupProps {
  children: Array<React.ReactNode>;
}

const StyledCardColumn = styled.div<IStyledCardGroupProps>`
  display: flex;
  position: relative;
  width: 100%;
  margin-bottom: 1.875rem;
  padding-right: 15px;
  padding-left: 15px;
  ${(props) => (props.auto ? `flex: 0 0 auto; width: auto;` : "")};
  ${(props) => props.theme.breakpointsMin.start} {
    ${(props) => (props.xs ? `flex: 0 0 ${(props.xs / 12) * 100}%;` : "")};
    min-width: ${(props) => props.xs && `${(props.xs / 12) * 100}%`};
  }
  ${(props) => props.theme.breakpointsMin.mobile} {
    ${(props) => (props.sm ? `flex: 0 0 ${(props.sm / 12) * 100}%;` : "")};
    min-width: ${(props) => props.sm && `${(props.sm / 12) * 100}%`};
  }
  ${(props) => props.theme.breakpointsMin.tablet} {
    ${(props) => (props.md ? `flex: 0 0 ${(props.md / 12) * 100}%;` : "")};
    min-width: ${(props) => props.md && `${(props.md / 12) * 100}%`};
  }
  ${(props) => props.theme.breakpointsMin.smallDesktop} {
    ${(props) => (props.lg ? `flex: 0 0 ${(props.lg / 12) * 100}%;` : "")};
    min-width: ${(props) => props.lg && `${(props.lg / 12) * 100}%`};
  }
  ${(props) => props.theme.breakpointsMin.largeDesktop} {
    ${(props) => (props.xl ? `flex: 0 0 ${(props.xl / 12) * 100}%;` : "")};
    min-width: ${(props) => props.xl && `${(props.xl / 12) * 100}%`};
  }
`;

const StyledCardGroup = styled.div<IStyledCardGroupProps>`
  display: flex;
  flex-flow: row wrap;
  margin-left: -15px;
  margin-right: -15px;
`;

const CardGroup: React.FC<ICardGroupProps> = (props) => {
  return (
    <StyledCardGroup
      sm={props.sm}
      md={props.md}
      lg={props.lg}
      xl={props.xl}
      auto={props.auto}
    >
      {props.children.map((component) => {
        return (
          <StyledCardColumn
            sm={props.sm}
            md={props.md}
            lg={props.lg}
            xl={props.xl}
            auto={props.auto}
          >
            {component}
          </StyledCardColumn>
        );
      })}
    </StyledCardGroup>
  );
};

export default CardGroup;
