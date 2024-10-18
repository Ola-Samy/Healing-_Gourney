import React from 'react'
import { Link } from 'react-router-dom'

function Banner() {
  return (
    <>
  {/* Carousel Start */}
  <div className="container-fluid p-0">
    <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="w-100" src="img/home1.jpg" alt="Image" height="700px" />
          <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
            <div className="p-3" style={{maxWidth: 900}}>
              <h5 className="text-white text-uppercase mb-3 animated slideInDown">Get ready for a new life,</h5>
              <h1 className="display-1 text-white mb-md-4 animated zoomIn">free from addiction</h1>
              <Link to="/appointment" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Appointment</Link>
              <Link to="/contact" className="btn btn-secondary py-md-3 px-md-5 animated slideInRight">Contact Us</Link>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img className="w-100" src="img/home 2.jpg" alt="Image" height="700px" />
          <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
            <div className="p-3" style={{maxWidth: 900}}>
              <h5 className="text-white text-uppercase mb-3 animated slideInDown">You are not alone,</h5>
              <h1 className="display-1 text-white mb-md-4 animated zoomIn">support is here</h1>
              <Link to="/appointment" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Appointment</Link>
              <Link to="/contact" className="btn btn-secondary py-md-3 px-md-5 animated slideInRight">Contact Us</Link>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img className="w-100" src="img/home4.jpg" alt="Image" height="700px" />
          <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
            <div className="p-3" style={{maxWidth: 900}}>
              <h5 className="text-white text-uppercase mb-3 animated slideInDown">Start your journey</h5>
              <h1 className="display-1 text-white mb-md-4 animated zoomIn">to freedom</h1>
              <Link to="/appointment" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Appointment</Link>
              <Link to="/contact" className="btn btn-secondary py-md-3 px-md-5 animated slideInRight">Contact Us</Link>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img className="w-100" src="img/home3.jpg" alt="Image" height="700px" />
          <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
            <div className="p-3" style={{maxWidth: 900}}>
              <h5 className="text-white text-uppercase mb-3 animated slideInDown">Life is worth living,</h5>
              <h1 className="display-1 text-white mb-md-4 animated zoomIn">let us help you live it</h1>
              <Link to="/appointment" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Appointment</Link>
              <Link to="/contact" className="btn btn-secondary py-md-3 px-md-5 animated slideInRight">Contact Us</Link>
            </div>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#header-carousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>
  {/* Carousel End */}
    {/* Banner Start */}
    <div className="container-fluid banner mb-5">
    <div className="container">
      <div className="row gx-0">
        <div className="col-lg-4 wow zoomIn" data-wow-delay="0.1s">
          <div className="bg-primary d-flex flex-column p-5" style={{height: 300}}>
            <h3 className="text-white mb-3">Opening Hours</h3>
            <div className="d-flex justify-content-between text-white mb-3">
              <h6 className="text-white mb-0">Mon - Fri</h6>
              <p className="mb-0"> 6:00am - 10:00pm</p>
            </div>
            <div className="d-flex justify-content-between text-white mb-3">
              <h6 className="text-white mb-0">Saturday</h6>
              <p className="mb-0"> 8:00am - 7:00pm</p>
            </div>
            <div className="d-flex justify-content-between text-white mb-3">
              <h6 className="text-white mb-0">Sunday</h6>
              <p className="mb-0"> 6:00am - 7:00pm</p>
            </div>
            <Link to="/appointment" className="btn btn-light">Appointment</Link>
          </div>
        </div>
        <div className="col-lg-4 wow zoomIn" data-wow-delay="0.3s">
          <div className="bg-dark d-flex flex-column p-5" style={{height: 300}}>
            <h3 className="text-white mb-3">Search A Doctor</h3>
            <select className="form-select bg-light border-0 mb-3" style={{height: 40}}>
              <option selected>Select A Service</option>
              <option value={1}>Residential Treatment</option>
              <option value={2}>Family Therapy</option>
              <option value={3}>individual Therapy</option>
              <option value={3}>Group Therapy</option>
            </select>
            <Link className="btn btn-light" to="/doctor">Search Doctor</Link>
          </div>
        </div>
        <div className="col-lg-4 wow zoomIn" data-wow-delay="0.6s">
          <div className="bg-secondary d-flex flex-column p-5" style={{height: 300}}>
            <h3 className="text-white mb-3">Make Appointment</h3>
            <p className="text-white">Are you ready to change your life? Book a consultation with one of our specialist consultants. We will work together to determine the best treatment plan to suit your individual needs.</p>
            <h2 className="text-white mb-0">+50 4810259</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Banner end */}
    </>
  )
}

export default Banner