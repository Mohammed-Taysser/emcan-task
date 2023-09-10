import About from '../components/About';
import Instructors from '../components/Instructors';
import PerfectCourses from '../components/PerfectCourses';
import Testimonials from '../components/Testimonials';
import TopSubjects from '../components/TopSubjects';
import Footer from '../layouts/Footer';
import Navbar from '../layouts/Navbar';
import Slider from '../layouts/Slider';

import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../assets/scss/app.scss';

function App() {
  return (
    <div className='app'>
      <Navbar />

      <Slider />

      <TopSubjects />

      <PerfectCourses />

      <Instructors />

      <About />

      <Testimonials />

      <Footer />
    </div>
  );
}

export default App;
