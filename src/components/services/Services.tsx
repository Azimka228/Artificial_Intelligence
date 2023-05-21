import React from 'react';

import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import styles from './Services.module.scss';
import './swiper.css';
import { ServicesData } from './ServicesData';
import SliderItem from './servicesItem/SliderItem';

const breakpointsSlider = {
  320: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  // when window width is >= 480px
  1200: {
    slidesPerView: 3,
    spaceBetween: 30,
  },
  // when window width is >= 640px
  1854: {
    slidesPerView: 4,
    spaceBetween: 40,
  },
};
const Services = (): JSX.Element => {
  const mappedSlides = ServicesData.map((el, id) => (
    <SwiperSlide key={id}>
      <SliderItem {...el} />
    </SwiperSlide>
  ));

  return (
    <section className={styles.main} id="services">
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        pagination
        modules={[Pagination]}
        breakpoints={breakpointsSlider}
        className="mySwiper"
      >
        {mappedSlides}
      </Swiper>
    </section>
  );
};

export default Services;
