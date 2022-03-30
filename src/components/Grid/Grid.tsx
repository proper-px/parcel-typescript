import * as React from "react";
import styled from "styled-components";
import { StyledContainer, StyledContainerfluid } from "./StyledContainers";
import { StyledRow } from "./StyledRow";
import { StyledCol, StyledColProps } from "./StyledColumn";

interface GirdChildren {
  children: React.ReactNode;
}

interface ColProps extends StyledColProps, GirdChildren {
  columnCount?: number;
}

const Col: React.FC<ColProps> = (props: ColProps) => {
  return (
    <StyledCol
      xs={props.xs}
      sm={props.sm}
      md={props.md}
      lg={props.lg}
      xl={props.xl}
      xsOrder={props.xsOrder}
      smOrder={props.smOrder}
      mdOrder={props.mdOrder}
      lgOrder={props.lgOrder}
      xlOrder={props.xlOrder}
      auto={props.auto}
    >
      {props.children}
    </StyledCol>
  );
};

const Container: React.FC = (props: GirdChildren) => {
  return <StyledContainer>{props.children}</StyledContainer>;
};

const ContainerFluid: React.FC = (props: GirdChildren) => {
  return <StyledContainerfluid>{props.children}</StyledContainerfluid>;
};

const Row: React.FC = (props: GirdChildren) => {
  return <StyledRow>{props.children}</StyledRow>;
};

export { Col, Container, ContainerFluid, Row };
