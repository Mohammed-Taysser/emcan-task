function SingleSlide(props: { slide: Slide }) {
  return (
    <div
      className='single-slide'
      style={{
        background: `center / cover no-repeat  url('${props.slide.image}')`,
      }}
    >
      <div className='container h-100'>
        <div className='row h-100 align-items-center justify-content-center'>
          <div className='col-md-10 text-center '>
            <h2 className='title'>{props.slide.title}</h2>
            <h6 className='subtitle'>{props.slide.subtitle}</h6>

            <a href='#' className='slide-btn'>
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleSlide;
