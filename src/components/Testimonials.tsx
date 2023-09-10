import { TESTIMONIALS } from '../constants/testimonials';
import SingleTestimonial from './SingleTestimonial';

function Testimonials() {
  return (
    <div className='testimonials my-5'>
      <div className='container'>
        <h2 className='section-title text-center mb-3'>What Students Say</h2>
        <div className='row justify-content-center '>
          {TESTIMONIALS.map((testimonial) => (
            <div key={testimonial.id} className='col-md-4 my-4'>
              <SingleTestimonial testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
