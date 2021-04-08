import React from "react"
import PropTypes from "prop-types"
import SwiperCore, { A11y, Navigation } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/swiper.scss"
import "swiper/components/navigation/navigation.scss"

// import * as styles from "./styles.module.scss"

SwiperCore.use([Navigation, A11y])

const Carousel = ({ slides }) => {
  return (
    <>
      <div>
        <button id="prev-slide">Back</button>
        <button id="next-slide">Next</button>
      </div>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        navigation={{ nextEl: "#next-slide", prevEl: "#prev-slide" }}
        a11y
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>{slide.body}</SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

Carousel.propTypes = {
  /**
   * An array of data used to render the carousel's slides.
   */
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      body: PropTypes.string.isRequired
    })
  ).isRequired
}

Carousel.defaultProps = {}

export default Carousel
