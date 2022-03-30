import React from "react";
import styled from "styled-components";
import { ThemeColors } from "../../theme/styled";
import { Container, Row, Col } from "../Grid/Grid";

interface IStyledPageTitleProps {
  color?: ThemeColors;
  minHeight?: string;
}

interface IPageTitleProps extends IStyledPageTitleProps {
  title: string;
  subTitle?: string;
  setContainer: boolean;
  description?: { __html: string };
}

const StyledDescription = styled.div<IStyledPageTitleProps>`
  > * {
    margin-bottom: 0;
  }
`;

const StyledPageTitle = styled.div<IStyledPageTitleProps>`
  ${(props) =>
    props.minHeight &&
    `
    ${props.theme.breakpointsMin.tablet} {
        min-height: ${props.minHeight};
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    }
  `}
  padding: ${(props) =>
    `${props.theme.padding.lg} ${props.theme.padding.base}`};
  ${(props) =>
    props.color
      ? `
        background-color: ${props.theme.colors[props.color]};
        color: ${props.theme.mappedColors[props.color]};
    `
      : `
        color: ${props.theme.colors.dark};
      `}
`;

const PageTitle: React.FC<IPageTitleProps> = (props) => {
  const Content = () => {
    return (
      <>
        <h1 style={{ marginBottom: !props.subTitle && "0px" }}>
          {props.title}
        </h1>
        <h2 style={{ marginBottom: !props.description && "0px" }}>
          {props.subTitle}
        </h2>
        <StyledDescription dangerouslySetInnerHTML={props.description} />
      </>
    );
  };
  return (
    <StyledPageTitle color={props.color} minHeight={props.minHeight}>
      {props.setContainer ? (
        <Container>
          <Row>
            <Col md={12}>
              <Content />
            </Col>
          </Row>
        </Container>
      ) : (
        <Content />
      )}
    </StyledPageTitle>
  );
};

export default PageTitle;
