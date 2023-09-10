import { useRef } from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import RightAngle from '../SVG/RightAngle';
import { COURSES } from '../constants/courses';
import SingleCourse from './SingleCourse';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function PerfectCourses() {
  const sliderRef = useRef(null);

  const onIndicatorClick = (index: number) => {
    console.log(index);

    // TODO: Find a method to change active slide
  };

  return (
    <div className='courses my-5 py-5'>
      <div className='container'>
        <div className='row align-items-center justify-content-between mb-5'>
          <div className='col-md-8 text-md-end'>
            <h2 className='section-title'>Find your perfect courses</h2>
          </div>
          <div className='col-md-3 text-md-end'>
            <div className='d-flex gap-5 align-items-center'>
              <div className='indicator-container'>
                {COURSES.map((_course, index) => (
                  <div
                    className={`swipper-indicator `}
                    onClick={() => onIndicatorClick(index)}
                    key={index}
                  ></div>
                ))}
              </div>
              <a href='#' className='view-all'>
                <span>View All</span>
                <RightAngle />
              </a>
            </div>
          </div>
        </div>

        <Swiper
          ref={sliderRef}
          spaceBetween={20}
          slidesPerView={4}
          // navigation={true}
          modules={[Navigation, Pagination]}
        >
          {COURSES.map((course) => (
            <SwiperSlide key={course.id}>
              <SingleCourse course={course} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default PerfectCourses;
