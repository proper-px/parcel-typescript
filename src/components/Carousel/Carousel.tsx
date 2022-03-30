import PageTitle from "../PageTitle/PageTitle";
import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper/core";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

interface IStyledCarouselProps {}

interface ICarouselProps extends IStyledCarouselProps {
  children: Array<SwiperSlide>;
}

SwiperCore.use([Navigation, Pagination]);

const StyledCarousel = styled.div<IStyledCarouselProps>``;

const Carousel: React.FC<ICarouselProps> = (props) => {
  return (
    <Swiper
      navigation={true}
      pagination={true}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {props.children}
    </Swiper>
  );
};

export default Carousel;
