import Cart from '../SVG/Cart';
import Global from '../SVG/Global';
import Search from '../SVG/Search';
import favicon from '../assets/images/icons/favicon.png';

function Navbar() {
  return (
    <nav className='app-navbar navbar navbar-expand-md py-0'>
      <div className='container'>
        <a className='navbar-brand' href='#'>
          <img src={favicon} alt='Zaheen' width='100' height='100' />
        </a>

        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#app-navbar-id'
          aria-controls='app-navbar-id'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='app-navbar-id'>
          <ul className='navbar-nav ms-5 mb-2 mb-lg-0 align-items-center'>
            <li className='nav-item'>
              <a className='nav-link active' aria-current='page' href='#'>
                Subjects
              </a>
            </li>

            <li className='nav-item'>
              <form role='search' className='search'>
                <Search />
                <input
                  type='search'
                  placeholder='Search for anything'
                  aria-label='Search'
                />
              </form>
            </li>

            <li className='nav-item ms-2'>
              <a className='nav-link' href='#'>
                Teach on Zaheen
              </a>
            </li>

            <li className='nav-item'>
              <a className='nav-link' href='#'>
                Contact Us
              </a>
            </li>

            <li className='nav-item'>
              <a className='nav-link' href='#' title='cart'>
                <div className='cart-container'>
                  <Cart className='cart-icon' />
                  <span className='cart-counter'>2</span>
                </div>
              </a>
            </li>

            <li className='nav-item mb-3 mb-md-0'>
              <a className='nav-sign-in' href='#'>
                Sign In
              </a>
            </li>

            <li className='nav-item ms-md-3'>
              <div className='global-icon'>
                <Global />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
