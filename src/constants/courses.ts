import course1 from '../assets/images/courses/course-1.jpg';
import course2 from '../assets/images/courses/course-2.png';
import course3 from '../assets/images/courses/course-3.png';
import course4 from '../assets/images/courses/course-4.png';

import instructor1 from '../assets/images/instructors/instructor-1.png';
import instructor2 from '../assets/images/instructors/instructor-2.png';

const CURRENCY = 'SAR';

const COURSES: Course[] = [
  {
    id: 1,
    title: 'Science and Machine Learning Bootcamp',
    instructor: {
      avatar: instructor1,
      name: 'Ahmad Kamel',
    },
    amount: 4,
    rating: 4.5,
    price: 24,
    image: course1,
  },
  {
    id: 2,
    title: 'Science and Machine Learning Bootcamp',
    instructor: {
      avatar: instructor2,
      name: 'Sama Kamel',
    },
    amount: 4,
    rating: 4.5,
    price: 24,
    image: course2,
  },
  {
    id: 3,
    title: 'Science and Machine Learning Bootcamp',
    instructor: {
      avatar: instructor1,
      name: 'Ahmad Kamel',
    },
    amount: 4,
    rating: 4.5,
    price: 24,
    image: course3,
  },
  {
    id: 4,
    title: 'Science and Machine Learning Bootcamp',
    instructor: {
      avatar: instructor2,
      name: 'Sama Kamel',
    },
    amount: 4,
    rating: 4.5,
    price: 24,
    image: course4,
  },
];

export { COURSES, CURRENCY };
