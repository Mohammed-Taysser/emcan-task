function SingleInstructor(props: { instructor: Instructor }) {
  return (
    <div className='single-instructor'>
      <div className='about-container'>
        <div className=''>
          <h3 className='name'>{props.instructor.name}</h3>
          <h4 className='job'> {props.instructor.job}</h4>
        </div>
        <div className='avatar'>
          <img src={props.instructor.avatar} alt={props.instructor.name} />
        </div>
      </div>
      <div className='info'>{props.instructor.about}</div>
    </div>
  );
}

export default SingleInstructor;
