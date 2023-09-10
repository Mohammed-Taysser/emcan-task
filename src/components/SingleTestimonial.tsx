import Star from '../SVG/Star';

function SingleTestimonial(props: { testimonial: Testimonial }) {
  return (
    <div className='single-testimonial'>
      <div className='avatar-container'>
        <div className='avatar'>{props.testimonial.name[0]}</div>
      </div>
      <div className='body'>
        <div className='name'>{props.testimonial.name}</div>
        <div className='d-flex gap-2 align-items-center my-3'>
          <div className='stars'>
            {Array.from({ length: props.testimonial.star }).map((_a, index) => (
              <Star key={index} />
            ))}
          </div>
          <div className='date'>{props.testimonial.date}</div>
        </div>
        <div className='info'>{props.testimonial.body}</div>
      </div>
    </div>
  );
}

export default SingleTestimonial;
