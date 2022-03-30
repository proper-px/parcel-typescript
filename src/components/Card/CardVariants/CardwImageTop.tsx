import React from "react";
import styled from "styled-components";
import * as Card from "../CardElements/Index";

interface IStyledCardwImageTopProps {}

interface ICardwImageTopProps extends IStyledCardwImageTopProps {
  content: string;
}

const StyledCardwImageTop = styled.div<IStyledCardwImageTopProps>`
  test
`;

const CardwImageTop: React.FC<ICardwImageTopProps> = (props) => {
  return (
    <Card.CardBase
      hasBorder={true}
      hasShadow={false}
      isRounded={false}
      isFlex={true}
    >
      <Card.CardBody>
        <p>{props.content}</p>
      </Card.CardBody>
      <Card.CardFooter
        backgroundColor="dark"
        isRounded={false}
      ></Card.CardFooter>
    </Card.CardBase>
  );
};

export default CardwImageTop;
