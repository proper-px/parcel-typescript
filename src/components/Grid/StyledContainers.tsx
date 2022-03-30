import styled from "styled-components";

const StyledContainer = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  ${(props) => props.theme.breakpointsMin.mobile} {
    max-width: ${(props) => props.theme.containerWidths.sm};
  }
  ${(props) => props.theme.breakpointsMin.tablet} {
    max-width: ${(props) => props.theme.containerWidths.md};
  }
  ${(props) => props.theme.breakpointsMin.smallDesktop} {
    max-width: ${(props) => props.theme.containerWidths.lg};
  }
  ${(props) => props.theme.breakpointsMin.largeDesktop} {
    max-width: ${(props) => props.theme.containerWidths.xl};
  }
`;

const StyledContainerfluid = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
`;

export { StyledContainer, StyledContainerfluid };
