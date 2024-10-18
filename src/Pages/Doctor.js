import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Doctor() {
  return (
    <>
    
     {/* Hero Start */}
<div className="container-fluid bg-primary py-5 bg-team mb-5">
  <div className="row py-3">
    <div className="col-12 text-center">
    <div class="bg-team"></div>
      <h1 className="display-3 text-white animated zoomIn">Doctors</h1>
      <Link to="/" className="h4 text-white">Home</Link>
      <i className="far fa-circle text-white px-2" />
      <Link to="/doctor" className="h4 text-white">Doctors</Link>
    </div>
  </div>
</div>
{/* Hero End */}
 {/* Team Start */}
 <div className="container-fluid py-5">
  <div className="container">
    <div className="row g-5">
      <div className="col-lg-4 wow slideInUp" data-wow-delay="0.1s">
        <div className="section-title bg-light rounded h-100 p-5">
          <h5 className="position-relative d-inline-block text-primary text-uppercase">Our Doctors</h5>
          <h1 className="display-6 mb-4">Meet Our Certified &amp; Experienced Doctors</h1>
          <Link to="/appointment" className="btn btn-primary py-3 px-5">Appointment</Link>
        </div>
      </div>
      <div className="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
        <div className="team-item">
          <div className="position-relative rounded-top" style={{zIndex: 1}}>
            <img className="img-fluid rounded-top w-100" src="img/doctor-6.jpg" alt />
            <div className="position-absolute top-100 start-50 translate-middle bg-light rounded p-2 d-flex">
              <Link className="btn btn-primary btn-square m-1" to="#"><i className="fab fa-twitter fw-normal" /></Link>
              <Link className="btn btn-primary btn-square m-1" to="#"><i className="fab fa-facebook-f fw-normal" /></Link>
              <Link className="btn btn-primary btn-square m-1" to="#"><i className="fab fa-linkedin-in fw-normal" /></Link>
              <Link className="btn btn-primary btn-square m-1" to="#"><i className="fab fa-instagram fw-normal" /></Link>
            </div>
          </div>
          <div className="team-text position-relative bg-light text-center rounded-bottom p-4 pt-5">
            <h4 className="mb-2">Dr. Hossam Amara</h4>
            <p className="text-primary mb-0">Senior Consultant Psychiatrist</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 wow slideInUp" data-wow-delay="0.6s">
        <div className="team-item">
          <div className="position-relative rounded-top" style={{zIndex: 1}}>
            <img className="img-fluid rounded-top w-100" src="img/doctor-7.jpg" alt />
            <div className="position-absolute top-100 start-50 translate-middle bg-light rounded p-2 d-flex">
              <Link className="btn btn-primary btn-square m-1" to="#"><i className="fab fa-twitter fw-normal" /></Link>
              <Link className="btn btn-primary btn-square m-1" to="#"><i className="fab fa-facebook-f fw-normal" /></Link>
              <Link className="btn btn-primary btn-square m-1" to="#"><i className="fab fa-linkedin-in fw-normal" /></Link>
              <Link className="btn btn-primary btn-square m-1" to="#"><i className="fab fa-instagram fw-normal" /></Link>
            </div>
          </div>
          <div className="team-text position-relative bg-light text-center rounded-bottom p-4 pt-5">
            <h4 className="mb-2">Dr. Sally Mohammed </h4>
            <p className="text-primary mb-0">Psychiatric and neurological consultant</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 wow slideInUp" data-wow-delay="0.1s">
        <div className="team-item">
          <div className="position-relative rounded-top" style={{zIndex: 1}}>
            <img className="img-fluid rounded-top w-100" src="img/doctor-8.jpg" alt />
            <div className="position-absolute top-100 start-50 translate-middle bg-light rounded p-2 d-flex">
              <Link className="btn btn-primary btn-square m-1" to="#"><i className="fab fa-twitter fw-normal" /></Link>
              <Link className="btn btn-primary btn-square m-1" to="#"><i className="fab fa-facebook-f fw-normal" /></Link>
              <Link className="btn btn-primary btn-square m-1" to="#"><i className="fab fa-linkedin-in fw-normal" /></Link>
              <Link className="btn btn-primary btn-square m-1" to="#"><i className="fab fa-instagram fw-normal" /></Link>
            </div>
          </div>
          <div className="team-text position-relative bg-light text-center rounded-bottom p-4 pt-5">
            <h4 className="mb-2">Dr. Atef Ibrahim</h4>
            <p className="text-primary mb-0">Psychological expert consultant</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
        <div className="team-item">
          <div className="position-relative rounded-top" style={{zIndex: 1}}>
            <img className="img-fluid rounded-top w-100" src="img/doctor-1.jpg" alt />
            <div className="position-absolute top-100 start-50 translate-middle bg-light rounded p-2 d-flex">
              <Link className="btn btn-primary btn-square m-1" to="#"><i className="fab fa-twitter fw-normal" /></Link>
              <Link className="btn btn-primary btn-square m-1" to="#"><i className="fab fa-facebook-f fw-normal" /></Link>
              <Link className="btn btn-primary btn-square m-1" to="#"><i className="fab fa-linkedin-in fw-normal" /></Link>
              <Link className="btn btn-primary btn-square m-1" to="#"><i className="fab fa-instagram fw-normal" /></Link>
            </div>
          </div>
          <div className="team-text position-relative bg-light text-center rounded-bottom p-4 pt-5">
            <h4 className="mb-2">Dr. Doaa Maamoun</h4>
            <p className="text-primary mb-0">Psychiatrist</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 wow slideInUp" data-wow-delay="0.6s">
        <div className="team-item">
          <div className="position-relative rounded-top" style={{zIndex: 1}}>
            <img className="img-fluid rounded-top w-100" src="img/doctor-9.jpg" alt />
            <div className="position-absolute top-100 start-50 translate-middle bg-light rounded p-2 d-flex">
              <Link className="btn btn-primary btn-square m-1" to="#"><i className="fab fa-twitter fw-normal" /></Link>
              <Link className="btn btn-primary btn-square m-1" to="#"><i className="fab fa-facebook-f fw-normal" /></Link>
              <Link className="btn btn-primary btn-square m-1" to="#"><i className="fab fa-linkedin-in fw-normal" /></Link>
              <Link className="btn btn-primary btn-square m-1" to="#"><i className="fab fa-instagram fw-normal" /></Link>
            </div>
          </div>
          <div className="team-text position-relative bg-light text-center rounded-bottom p-4 pt-5">
            <h4 className="mb-2">Dr. Mohammed Hussein</h4>
            <p className="text-primary mb-0">Consultant Psychiatrist</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{/* Team End */}
    </>
  )
}

export default Doctor