import Carousel from "../components/Carousel/Carousel";
import React, { useEffect } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";
import { Container, Row, Col } from "../components/Grid/Grid";
import PageTitle from "../components/PageTitle/PageTitle";
import { SwiperSlide } from "swiper/react";
import CardBasic from "../components/Card/CardVariants/CardBasic";
import CardGroup from "../components/Card/CardGroup";
import Button from "../components/Buttons/Button";
import ButtonLink from "../components/Buttons/ButtonLink";

interface IHomePageProps {}

const HomePage = (props: IHomePageProps) => {
  const toastId = React.useRef(null);
  const warnId = React.useRef(null);
  const notify = () => {
    if (!toast.isActive(toastId.current)) {
      toastId.current = toast.success("Success", {
        position: "bottom-right",
      });
    }
  };

  useEffect(() => {}, []);

  const warn = () => {
    if (!toast.isActive(warnId.current)) {
      warnId.current = toast.warning("Warning", {
        position: "bottom-right",
        autoClose: false,
      });
    }
  };

  return (
    <>
      <button onClick={notify}>Toast Success</button>
      <button onClick={warn}>Toast Warn</button>
      <PageTitle
        color="light"
        title="Welcome to our homepage"
        subTitle="This is a wonderful page"
        setContainer={true}
        description={{
          __html: `<p>This text is set using HTML <a href="https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml" target="_blank">Click here to understand the consiquences</a></p>`,
        }}
      />
      <Container>
        <CardGroup lg={4} md={6} xs={12}>
          <CardBasic
            title="This is a card title"
            subTitle="This is a subTitle"
            content="hello world"
            action="/test"
            actionLabel="Let's go somewhere"
          />
          <CardBasic
            title="This is a card title"
            subTitle="This is a subTitle"
            content="hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello worldhello world hello worldhello world hello world hello world"
            action="/test"
            actionLabel="Let's go somewhere"
          />
          <CardBasic
            title="This is a card title"
            subTitle="This is a subTitle"
            content="hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello worldhello world hello worldhello world hello world hello world"
            action="/test"
            actionLabel="Let's go somewhere"
          />
        </CardGroup>
      </Container>
    </>
  );
};

export default HomePage;
