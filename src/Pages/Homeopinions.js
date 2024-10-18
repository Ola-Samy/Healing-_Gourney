import React from 'react'

function Homeopinions() {
  return (
    <>
      {/* Testimonial Start */}
   <div class="container-fluid  bg-primary bg-testimonial py-5 mb-5 wow fadeInUp" data-wow-delay="0.1s" >
         <div class="container py-5 ">
            <div class="row justify-content-center">
                <div class="col-lg-7">
                <div id="carouselExample" className="carousel slide"data-bs-ride="carousel">
                 <div className=" testimonial-carousel-caption ">
  <div className="carousel-inner">
    <div className="carousel-item active">
    <div className="testimonial-carousel-item text-center text-white">
    <img class="img-fluid mx-auto rounded mb-4 " src="img/client-5.jpg" alt=""/>
<p className="fs-5 text-dark lg">
The staff at Healing Journey are professional and welcoming, providing support and encouragement throughout the recovery process.</p>
<hr className="mx-auto w-25" />
<h4 className="text-light mb-0">Mariam Ibrahim</h4>
</div>
   </div>
    
    <div className="carousel-item">
    <div className="testimonial-carousel-item text-center text-white">

    <img class="img-fluid mx-auto rounded mb-4" src="img/client.jpg" alt=""/>
<p className="fs-5 text-dark lg">I’ve become a stronger and more positive person. I’m now able to face life’s challenges with confidence.</p>
<hr className="mx-auto w-25" />
<h4 className="text-light mb-0">Yousef Karim</h4>
</div>
    </div>

    <div className="carousel-item">
    <div className="testimonial-carousel-item text-center text-white">
    <img class="img-fluid mx-auto rounded mb-4" src="img/client-4.jpg" alt=""/>
<p className="fs-5 text-dark lg">I felt safe and completely private throughout my treatment. It was a supportive and comfortable environment.</p>
<hr className="mx-auto w-25" />
<h4 className="text-light mb-0">Batool Osama</h4>
    </div>
  </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>
            </div>
          </div>
       </div>
       </div>
       </div>
    </>
  )
}

export default Homeopinions