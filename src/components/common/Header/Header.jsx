import LogoLight from '../svgs/LogoLight/LogoLight';
import classes from './Header.module.scss';

function Header() {
  return (
    <nav className={` ${classes.headerContainer} navbar navbar-expand-lg`}>
      <div className="container-fluid">
        <LogoLight width='6rem' />
        <button className={` ${classes.mobileBtn} navbar-toggler`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          {/* <span className="navbar-toggler-icon"></span> */}
          <i className="fa-solid fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className={` ${classes.navLink} nav-link`} href="#about">About</a>
            </li>
            {/* <li className="nav-item">
              <a className={` ${classes.navLink} nav-link`} href="#events">Events</a>
            </li> */}
            <li className="nav-item">
              <a className={` ${classes.navLink} nav-link`} href="#contact">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header