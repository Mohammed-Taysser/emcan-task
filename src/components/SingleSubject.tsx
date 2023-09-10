function SingleSubject(props: { subject: Subject }) {
  return (
    <div className='single-subject'>
      <div className='image'>
        <img src={props.subject.image} alt={props.subject.label} />
      </div>
      <a href={props.subject.url} className='subject-title'>
        {props.subject.label}
      </a>
    </div>
  );
}

export default SingleSubject;
