import React from 'react'


function Service() {
  return (
    <>
       {/* Service Start */}
<div className="container-fluid py-5 wow fadeInUp " data-wow-delay="0.1s">
  <div className="container">
    <div className="row g-5 mb-5">
      <div className="col-lg-5 wow zoomIn" data-wow-delay="0.3s" style={{minHeight: 400}}>
        <div className="twentytwenty-container position-relative h-100 rounded overflow-hidden">
          <img className="position-absolute w-100 h-100" src="img/man-is-thinking-seriously-while-sitting-coffee-shop_1150-6417.jpg" width="50px" style={{objectFit: 'cover'}} />
          <img className="position-absolute w-100 h-100" src="img/surprised-handsome-man-showing-banner-pointing-up_176420-18869.jpg" style={{objectFit: 'cover'}} />
        </div>
      </div>
      <div className="col-lg-7">
        <div className="section-title mb-5">
          <h5 className="position-relative d-inline-block text-primary text-uppercase">Our Services</h5>
          <h1 className="display-5 mb-0">We Offer The Best Quality Services</h1>
        </div>
        <div className="row g-5">
          <div className="col-md-6 service-item wow zoomIn" data-wow-delay="0.6s">
            <div className="rounded-top overflow-hidden">
              <img className="img-fluid" src="img/family-therapy-psychologist-office_23-2149175179.jpg" alt />
            </div>
            <div className="position-relative bg-light rounded-bottom text-center p-4">
              <h5 className="m-0">Individual Therapy</h5>
            </div>
          </div>
          <div className="col-md-6 service-item wow zoomIn" data-wow-delay="0.9s">
            <div className="rounded-top overflow-hidden">
              <img className="img-fluid" src="img/people-attending-group-therapy-session-while-sitting-chairs_23-2148752066.jpg" alt />
            </div>
            <div className="position-relative bg-light rounded-bottom text-center p-4">
              <h5 className="m-0">Group Therapy</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row g-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="col-lg-7">
        <div className="row g-5">
          <div className="col-md-6 service-item wow zoomIn" data-wow-delay="0.3s">
            <div className="rounded-top overflow-hidden">
              <img className="img-fluid" src="img/ill-male-patient-bed-talking-nurse_23-2148981216.jpg" alt />
            </div>
            <div className="position-relative bg-light rounded-bottom text-center p-4">
              <h5 className="m-0">Residential Treatment</h5>
            </div>
          </div>
          <div className="col-md-6 service-item wow zoomIn" data-wow-delay="0.6s">
            <div className="rounded-top overflow-hidden">
              <img className="img-fluid" src="img/couple-doing-family-therapy_23-2149305187.jpg" alt />
            </div>
            <div className="position-relative bg-light rounded-bottom text-center p-4">
              <h5 className="m-0">Family Therapy</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-5 service-item wow zoomIn" data-wow-delay="0.9s">
        <div className="position-relative bg-primary rounded h-100 d-flex flex-column align-items-center justify-content-center text-center p-4">
          <h3 className="text-white mb-3">Make Appointment</h3>
          <p className="text-white mb-3">We Are Always Here For You</p>
          <h2 className="text-white mb-0">+050 4810259</h2>
        </div>
      </div>
    </div>
  </div>
</div>
{/* Service End */}
    </>
  )
}

export default Service