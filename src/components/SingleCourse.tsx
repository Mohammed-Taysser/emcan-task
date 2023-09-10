import Cart from '../SVG/Cart';
import Clock from '../SVG/Clock';
import Star from '../SVG/Star';
import { CURRENCY } from '../constants/courses';

function SingleCourse(props: { course: Course }) {
  return (
    <div className='single-course'>
      <div className='image'>
        <img src={props.course.image} alt={props.course.title} />
      </div>
      <h4 className='title'>{props.course.title}</h4>

      <div className='instructor-container'>
        <div className='avatar'>
          <img
            src={props.course.instructor.avatar}
            alt={props.course.instructor.name}
          />
        </div>

        <span className='instructor-name'>{props.course.instructor.name}</span>

        <div className='amount-container'>
          <Clock />
          <div className='amount'>{props.course.amount} Months</div>
        </div>

        <div className='rating-container'>
          <Star />
          <div className='rating'>{props.course.rating}</div>
        </div>
      </div>

      <h5 className='price'>
        {props.course.price.toFixed(2)} {CURRENCY}
      </h5>

      <button className='add-to-cart'>
        <Cart /> <span>Add To Cart</span>
      </button>
    </div>
  );
}

export default SingleCourse;
