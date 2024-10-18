import React from 'react'
import { Link } from 'react-router-dom'


function About() {
  return (
    <>
     {/* About Start */}
<div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
  <div className="container">
    <div className="row g-5">
      <div className="col-lg-7">
        <div className="section-title mb-4">
          <h5 className="position-relative d-inline-block text-primary text-uppercase">About Us</h5>
          <h1 className="display-5 mb-0">The World's Best Center for addiction treatment That You Can Trust</h1>
        </div>
        <h4 className="text-body fst-italic mb-4">Welcome to HealingJourney, a leading center for addiction treatment dedicated to helping individuals reclaim their lives from the grips of substance use disorders</h4>
        <p className="mb-4"> Our goal is to address these challenges through a comprehensive treatment approach that combines medical expertise with emotional and psychological support.</p>
        <div className="row g-3">
          <div className="col-sm-6 wow zoomIn" data-wow-delay="0.3s">
            <h5 className="mb-3"><i className="fa fa-check-circle text-primary me-3" />Award Winning</h5>
            <h5 className="mb-3"><i className="fa fa-check-circle text-primary me-3" />Professional Staff</h5>
          </div>
          <div className="col-sm-6 wow zoomIn" data-wow-delay="0.6s">
            <h5 className="mb-3"><i className="fa fa-check-circle text-primary me-3" />24/7 Opened</h5>
            <h5 className="mb-3"><i className="fa fa-check-circle text-primary me-3" />Fair Prices</h5>
          </div>
        </div>
        <Link to="/appointment" className="btn btn-primary py-3 px-5 mt-4 wow zoomIn" data-wow-delay="0.6s">Make Appointment</Link>
      </div>
      <div className="col-lg-5" style={{minHeight: 500}}>
        <div className="position-relative h-100">
          <img className="position-absolute w-100 h-100 rounded wow zoomIn" data-wow-delay="0.9s" src="img/home4.jpg" style={{objectFit: 'cover'}} />
        </div>
      </div>
    </div>
  </div>
</div>
{/* About End */}
    </>
  )
}

export default About