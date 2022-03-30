import styled from "styled-components";

interface StyledColProps {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  xsOrder?: number;
  smOrder?: number;
  mdOrder?: number;
  lgOrder?: number;
  xlOrder?: number;
  auto?: boolean;
}

const StyledCol = styled.div<StyledColProps>`
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  ${(props) => (props.auto ? `flex: 0 0 auto; width: auto;` : "")};
  ${(props) => props.theme.breakpointsMin.start} {
    ${(props) => (props.xs ? `flex: 0 0 ${(props.xs / 12) * 100}%;` : "")};
    ${(props) => (props.xsOrder ? `order: ${props.xsOrder}` : "")};
    max-width: ${(props) => props.xs && `${(props.xs / 12) * 100}%`};
  }
  ${(props) => props.theme.breakpointsMin.mobile} {
    ${(props) => (props.sm ? `flex: 0 0 ${(props.sm / 12) * 100}%;` : "")};
    ${(props) => (props.smOrder ? `order: ${props.smOrder}` : "")};
    max-width: ${(props) => props.sm && `${(props.sm / 12) * 100}%`};
  }
  ${(props) => props.theme.breakpointsMin.tablet} {
    ${(props) => (props.md ? `flex: 0 0 ${(props.md / 12) * 100}%;` : "")};
    ${(props) => (props.mdOrder ? `order: ${props.mdOrder}` : "")};
    max-width: ${(props) => props.md && `${(props.md / 12) * 100}%`};
  }
  ${(props) => props.theme.breakpointsMin.smallDesktop} {
    ${(props) => (props.lg ? `flex: 0 0 ${(props.lg / 12) * 100}%;` : "")};
    ${(props) => (props.lgOrder ? `order: ${props.lgOrder}` : "")};
    max-width: ${(props) => props.lg && `${(props.lg / 12) * 100}%`};
  }
  ${(props) => props.theme.breakpointsMin.largeDesktop} {
    ${(props) => (props.xl ? `flex: 0 0 ${(props.xl / 12) * 100}%;` : "")};
    ${(props) => (props.xlOrder ? `order: ${props.xlOrder}` : "")};
    max-width: ${(props) => props.xl && `${(props.xl / 12) * 100}%`};
  }
`;

export { StyledColProps, StyledCol };
