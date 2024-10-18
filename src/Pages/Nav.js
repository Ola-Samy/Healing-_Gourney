import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Nav() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState('/');

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);
  return (
<>
 {/* Topbar Start */}
 <div className="container-fluid bg-light ps-5 pe-0 d-none d-lg-block">
    <div className="row gx-0">
      <div className="col-md-6 text-center text-lg-start mb-2 mb-lg-0">
        <div className="d-inline-flex align-items-center">
          <small className="py-2"><i className="far fa-clock text-primary me-2" />Opening Hours: Sat - Fri : 6.00 am - 10.00 pm</small>
        </div>
      </div>
      <div className="col-md-6 text-center text-lg-end">
        <div className="position-relative d-inline-flex align-items-center bg-primary text-white top-shape px-5">
          <div className="me-2 pe-3 border-end py-2">
            <p className="m-0 text-light"><i className="fa fa-envelope-open me-2 " />info@example.com</p>
          </div>
          <div className="me-2 pe-3 py-2">
            <p className="m-0 text-light"><i className="fa fa-phone-alt me-2 " />+50 4810259</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Topbar End */}
<nav className="navbar navbar-expand-lg bg-white navbar-light shadow-sm px-2 py-2 py-lg-0">
      <Link to="/" className="navbar-brand p-0">
        <h1 className="m-0 text-primary">
          <img src="img/logo (1).jpg" width="120px" alt="Logo" />
          Healing Journey
        </h1>
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto py-0">
          <Link to="/" className={`nav-item nav-link ${activeLink === '/' ? 'active' : ''}`}>
            Home
          </Link>
          <Link to="/about" className={`nav-item nav-link ${activeLink === '/about' ? 'active' : ''}`}>
            About
          </Link>
          <Link to="/progress" className={`nav-item nav-link ${activeLink === '/progress' ? 'active' : ''}`}>
            Progress
          </Link>
          <div className={`nav-item dropdown ${activeLink === '/pages' ? 'active' : ''}`}>
            <Link to="/pages" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
              Pages
            </Link>
            <div className="dropdown-menu m-0">
              <Link to="/price" className={`dropdown-item ${activeLink === '/price' ? 'active' : ''}`}>
                Pricing Plan
              </Link>
              <Link to="/doctor" className={`dropdown-item ${activeLink === '/doctor' ? 'active' : ''}`}>
                Our Doctors
              </Link>
              <Link to="/testimonial" className={`dropdown-item ${activeLink === '/testimonial' ? 'active' : ''}`}>
                Testimonial
              </Link>
              <Link to="/service" className={`dropdown-item ${activeLink === '/service' ? 'active' : ''}`}>
                Service
              </Link>
            </div>
          </div>
          <Link to="/contact" className={`nav-item nav-link ${activeLink === '/contact' ? 'active' : ''}`}>
            Contact
          </Link>
        </div>
        <Link to="/appointment" className="btn btn-primary py-2 px-4 ms-3">Appointment</Link>
        <Link to="/login" className="btn btn-primary py-1 px-2 ms-3">Login</Link>
        <Link to="/register" className="btn btn-primary py-1 px-2 ms-1">Register</Link>
      </div>
    </nav>
  </> 
 )}

export default Nav