import Global from '../SVG/Global';
import camera from '../assets/images/icons/camera.svg';
import facebook from '../assets/images/icons/facebook.svg';
import favicon from '../assets/images/icons/favicon.png';
import twitter from '../assets/images/icons/twitter.svg';
import youtube from '../assets/images/icons/youtube.svg';

function Footer() {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='row justify-content-between align-content-stretch'>
          <div className='col-md-3 my-3'>
            <div className='favicon-col'>
              <img src={favicon} alt='favicon' />
              <p className='info'>
                Our website to fulfill customer demand by making them satisfied
                with growing their Knowledge.
              </p>
            </div>
          </div>
          <div className='col-md-2 col-sm-6 my-3'>
            <h3 className='footer-title'>About</h3>
            <ul className='footer-list'>
              <li>
                <a href='#'>Home</a>
              </li>
              <li>
                <a href='#'>Categories</a>
              </li>
              <li>
                <a href='#'>Contact Us</a>
              </li>
            </ul>
          </div>
          <div className='col-md-2 col-sm-6 my-3'>
            <h3 className='footer-title'>Support</h3>
            <ul className='footer-list'>
              <li>
                <a href='#'>FAQs</a>
              </li>
              <li>
                <a href='#'>Blogs</a>
              </li>
              <li>
                <a href='#'>Privacy policy</a>
              </li>
              <li>
                <a href='#'>Technical Support</a>
              </li>
              <li>
                <a href='#'>Terms & Conditions</a>
              </li>
            </ul>
          </div>
          <div className='col-md-4 col-sm-6 my-3'>
            <div className='d-flex h-100 flex-column justify-content-between'>
              <div className=''>
                <h3 className='footer-title'>Follow us</h3>
                <div className='d-flex gap-3'>
                  <a href='#'>
                    <img src={camera} alt='camera' />
                  </a>
                  <a href='#'>
                    <img src={twitter} alt='twitter' />
                  </a>
                  <a href='#'>
                    <img src={facebook} alt='facebook' />
                  </a>
                  <a href='#'>
                    <img src={youtube} alt='youtube' />
                  </a>
                </div>
              </div>

              <div className='align-self-end'>
                <label
                  className='language-select-container'
                  htmlFor='language-select'
                >
                  <Global className='global-icon' />
                  <select
                    className='language-select'
                    id='language-select'
                    title='language'
                  >
                    <option value='en' defaultChecked>
                      English
                    </option>
                    <option value='ar' defaultChecked>
                      Arabic
                    </option>
                  </select>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
