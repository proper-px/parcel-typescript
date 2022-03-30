import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  CardBase,
  CardBody,
  CardFooter,
  CardHeader,
} from "../CardElements/Index";
import ElementTitle from "../../Typography/ElementTitle";
import { Theme } from "../../../theme/index";
import ButtonLink from "../../../components/Buttons/ButtonLink";
import Button from "../../Buttons/Button";

interface ICardBasicProps {
  title: string;
  subTitle: string;
  content: string;
  action: string;
  actionLabel: string;
}

const CardBasic: React.FC<ICardBasicProps> = (props) => {
  return (
    <CardBase hasBorder={true} hasShadow={true} isRounded={true} isFlex={true}>
      <CardHeader backgroundColor="light" isTextOnly={true} isRounded={true}>
        <ElementTitle title={props.title} color="dark" />
      </CardHeader>
      <CardBody>
        <p>{props.content}</p>
      </CardBody>
      <CardFooter backgroundColor="light" isRounded={true}>
        {/* <Link to={props.action} style={{ color: `${Theme.colors.primary}` }}>
          {props.actionLabel}
        </Link> */}
        <Button
          label={props.actionLabel}
          action={() => {
            console.log("hello");
          }}
          brandedTheme="secondary"
          isDisabled={true}
        />
      </CardFooter>
    </CardBase>
  );
};

export default CardBasic;
