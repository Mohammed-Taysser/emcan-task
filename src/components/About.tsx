import about from '../assets/images/background/about.png';

function About() {
  return (
    <div className='my-5 about '>
      <div className='row g-0 m-0 p-0'>
        <div className='col-md-6 my-3'>
          <img src={about} alt='about' className='img-fluid' height={475} />
        </div>
        <div className='col-md-6 my-3'>
          <div className='info-container'>
            <h2 className='title'>Become an instructor</h2>
            <p className='info'>
              Instructors from around the world teach millions of students on
              Udemy. We provide the tools and skills to teach what you love.
            </p>
            <p className='info'>
              Become an instructor and change lives — including your own.
            </p>

            <a href='#' className='get-start'>
              Get Start
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
