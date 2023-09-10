import { useRef } from 'react';
import { Navigation, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { INSTRUCTORS } from '../constants/instructors';
import SingleInstructor from './SingleInstructor';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

function Instructors() {
  const sliderRef = useRef(null);

  return (
    <div className='instructors my-5'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-5 my-3 '>
            <div className='info pe-5'>
              <h3 className='title'>
                Instructors who have achieved the career you want.
              </h3>
              <div className='subtitle'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </div>
            </div>
          </div>
          <div className='col-md-7 my-3'>
            <div className='slider'>
              <Swiper
                ref={sliderRef}
                spaceBetween={10}
                slidesPerView={1}
                // navigation={true}
                scrollbar={{ draggable: true }}
                modules={[Navigation, Scrollbar]}
              >
                {INSTRUCTORS.map((instructor) => (
                  <SwiperSlide key={instructor.id}>
                    <SingleInstructor instructor={instructor} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Instructors;
