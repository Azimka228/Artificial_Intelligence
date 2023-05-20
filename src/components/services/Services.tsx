import React from "react";
import {Pagination} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import styles from './Services.module.scss'
import './swiper.css'
import SliderItem from "./servicesItem/SliderItem";

const Services = () => {
	return (
		<section className={styles.main} id='services'>
			<Swiper slidesPerView={5} spaceBetween={50}pagination={true} modules={[Pagination]} className="mySwiper">
				<SwiperSlide><SliderItem/></SwiperSlide>
				<SwiperSlide><SliderItem/></SwiperSlide>
				<SwiperSlide><SliderItem/></SwiperSlide>
				<SwiperSlide><SliderItem/></SwiperSlide>
				<SwiperSlide><SliderItem/></SwiperSlide>
				<SwiperSlide><SliderItem/></SwiperSlide>
				<SwiperSlide><SliderItem/></SwiperSlide>
			</Swiper>
		</section>
	);
};

export default Services;