import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
  {/* Footer Start */}
  <div className="container-fluid bg-dark text-light py-3 wow fadeInUp" data-wow-delay="0.3s">
    <div className="container pt-5">
      <div className="row g-5 pt-4">
        <div className="col-lg-3 col-md-6">
          <h3 className="text-white mb-4">Quick Links</h3>
          <div className="d-flex flex-column justify-content-start">
            <Link className="text-light mb-2" to="/" onClick={scrollTotop}><i className="bi bi-arrow-right text-primary me-2" />Home</Link>
            <Link className="text-light mb-2" to="/about"><i className="bi bi-arrow-right text-primary me-2" />About Us</Link>
            <Link className="text-light mb-2" to="/service"><i className="bi bi-arrow-right text-primary me-2" />Our Services</Link>
            <Link className="text-light mb-2" to="/testimonial"><i className="bi bi-arrow-right text-primary me-2" />Testmonials</Link>
            <Link className="text-light" to="/progress"><i className="bi bi-arrow-right text-primary me-2" />Progress</Link>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <h3 className="text-white mb-4">Information Links</h3>
          <div className="d-flex flex-column justify-content-start">
            <Link className="text-light mb-2" to="/appointment"><i className="bi bi-arrow-right text-primary me-2" />Appointment</Link>
            <Link className="text-light mb-2" to="/doctor"><i className="bi bi-arrow-right text-primary me-2" />Doctors</Link>
            <Link className="text-light mb-2" to="/price"><i className="bi bi-arrow-right text-primary me-2" />Price</Link>
            <Link className="text-light" to="/contact"><i className="bi bi-arrow-right text-primary me-2" />Contact Us</Link>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <h3 className="text-white mb-4">Get In Touch</h3>
          <p className="mb-2"><i className="bi bi-geo-alt text-primary me-2" />123 Street,Mansoura</p>
          <p className="mb-2"><i className="bi bi-envelope-open text-primary me-2" />info@example.com</p>
          <p className="mb-0"><i className="bi bi-telephone text-primary me-2" />+50 4810259</p>
        </div>
        <div className="col-lg-3 col-md-6">
          <h3 className="text-white mb-4">Follow Us</h3>
          <div className="d-flex">
            <Link className="btn btn-lg btn-primary btn-lg-square rounded me-2" to=""><i className="fab fa-twitter fw-normal" /></Link>
            <Link className="btn btn-lg btn-primary btn-lg-square rounded me-2" to=""><i className="fab fa-facebook-f fw-normal" /></Link>
            <Link className="btn btn-lg btn-primary btn-lg-square rounded me-2" to=""><i className="fab fa-linkedin-in fw-normal" /></Link>
            <Link className="btn btn-lg btn-primary btn-lg-square rounded" to=""><i className="fab fa-instagram fw-normal" /></Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container-fluid text-light py-4" style={{background: '#051225'}}>
    <div className="container">
      <div className="row g-0">
        <div className="col-md-6 text-center text-md-start">
          <p className="mb-md-0">© <Link className="text-white border-bottom" to="/" onClick={scrollTotop}>Your Site Name</Link>.Healing Journey.</p>
        </div>
        <div className="col-md-6 text-center text-md-end">
          <p className="mb-0">Designed by <p className="text-white md" >Team NEXT</p></p>
          <p className="mb-0">Copyright <p className="text-white md">Team NEXT</p></p>
        </div>
      </div>
    </div>
  </div>
  {/* Footer End */}
  {/* Back to Top */}
  <button onClick={scrollTotop} className="btn btn-lg btn-primary btn-lg-square rounded back-to-top" ><i className="bi bi-arrow-up" /></button>

    </>
    )
}

export default Footer