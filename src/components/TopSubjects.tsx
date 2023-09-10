import { TOP_SUBJECTS } from '../constants/subjects';
import SingleSubject from './SingleSubject';

function TopSubjects() {
  return (
    <div className='subjects my-5'>
      <div className='container'>
        <h2 className='section-title text-center mb-3'>Top Subjects</h2>

        <div className='row justify-content-center '>
          {TOP_SUBJECTS.map((subject) => (
            <div key={subject.id} className='col-md-4 my-4'>
              <SingleSubject subject={subject} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TopSubjects;
