import { useRef } from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SLIDES } from '../constants/slides';
import SingleSlide from './slider/SingleSlide';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Slider() {
  const sliderRef = useRef(null);

  return (
    <header className='hero-slider-container'>
      <Swiper
        ref={sliderRef}
        slidesPerView={1}
        navigation={true}
        modules={[Navigation, Pagination]}
      >
        {SLIDES.map((slide) => (
          <SwiperSlide key={slide.id}>
            <SingleSlide slide={slide} />
          </SwiperSlide>
        ))}
      </Swiper>
    </header>
  );
}

export default Slider;
