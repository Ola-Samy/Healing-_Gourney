import React from 'react'
import { Link } from 'react-router-dom'

function Costs() {
  return (
    <>
     {/* Hero start */}
  <div className="container-fluid bg-primary py-5 bg-price mb-5">
    <div className="row py-3">
      <div className="col-12 text-center">
      <div class="bg-price"></div>
        <h1 className="display-3 text-white animated zoomIn">Pricing</h1>
        <Link to="/" className="h4 text-white">Home</Link>
        <i className="far fa-circle text-white px-2" />
        <Link to="/price" className="h4 text-white">Pricing</Link>
      </div>
    </div>
  </div>
  {/* Hero End */}
     {/* Pricing Start */}
     <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
   <div className="container">
      <div className="row g-5">
        <div className="col-lg-5">
          <div className="section-title mb-4">
            <h5 className="position-relative d-inline-block text-primary text-uppercase">Pricing Plan</h5>
            <h1 className="display-5 mb-0">We Offer Fair Prices for Addiction Treatment</h1>
          </div>
          <p className="mb-4">At Healing Journey, we are committed to providing high-quality addiction treatment services tailored to individual needs. We understand that the cost of treatment is an important factor in starting your journey to recovery, and we strive to offer transparent and fair pricing. <br></br> Our Commitment: We are dedicated to delivering treatment with the highest standards of quality at prices that fit within your financial means. Our goal is to ensure you receive the support and care necessary for a successful recovery journey.</p>
          <h5 className="text-uppercase text-primary wow fadeInUp" data-wow-delay="0.3s">Call for Appointment</h5>
          <h1 className="wow fadeInUp" data-wow-delay="0.6s">+50 4810259</h1>
        </div>
        <div className="col-lg-7">
          
        
      <div id="carouselExampleCaptions" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
  </div>
  <div className="carousel-inner">
    <div className="price carousel-item active">
      <img src="img/price-5.jpg" className="d-block w-100 " alt="..." />
      <div className="carousel d-none d-md-block">
       <center><h2>$800</h2></center> 
        <h4>Online International Checkup</h4>
<div>
<hr className="text-primary w-50 mx-auto mt-0" />
  <div className="d-flex justify-content-between mb-3"><span>Professional Doctor</span><i className="fa fa-check text-primary pt-1" /></div>
  <div className="d-flex justify-content-between mb-2"><span>24/7 Call Support</span><i className="fa fa-check text-primary pt-1" /></div>
  <Link to="/appointment" className="btn btn-primary py-2 px-4 position-absolute top-100 start-50 translate-middle">Appointment</Link>
</div>
      </div>
    </div>
    <div className=" price carousel-item">
      <img src="img/price-3.jpg" className="d-block w-100" alt="..." />
      <div className="carousel d-none d-md-block">
       <center><h2>$500</h2></center> 
        <div>
  <h4>Individual Therapy</h4>
  <hr className="text-primary w-50 mx-auto mt-0" />
  <div className="d-flex justify-content-between mb-3"><span>Professional Doctor</span><i className="fa fa-check text-primary pt-1" /></div>
  <div className="d-flex justify-content-between mb-2"><span>24/7 Call Support</span><i className="fa fa-check text-primary pt-1" /></div>
  <Link to="/appointment" className="btn btn-primary py-2 px-4 position-absolute top-100 start-50 translate-middle">Appointment</Link>
</div>

      </div>
    </div>
    <div className="price carousel-item">
      <div className="price-carousel">
      <img src="img/price-4.jpg" className="d-block w-100" alt="..." />
      <div className="carousel d-none d-md-block ">
       <center><h2>$700</h2></center>
        <div>
  <h4>Group Therapy</h4>
  <hr className="text-primary w-50 mx-auto mt-0" />
  <div className="d-flex justify-content-between mb-3"><span>Professional Doctor</span><i className="fa fa-check text-primary pt-1" /></div>
  <div className="d-flex justify-content-between mb-2"><span>24/7 Call Support</span><i className="fa fa-check text-primary pt-1" /></div>
  <Link to="/appointment" className="btn btn-primary py-2 px-4 position-absolute top-100 start-50 translate-middle">Appointment</Link>
</div>

      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div> 
           </div>
           </div>
           </div>
           </div>
          </div>
  {/* Pricing End */} 
    </>
  )
}

export default Costs