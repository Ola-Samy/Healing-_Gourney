import React from 'react'
import { Link } from 'react-router-dom'
import Homeopinions from './Homeopinions'
function Opinions() {
  return (
    <>
    {/* Hero Start */}
  <div className="container-fluid bg-primary py-5 hero-header mb-5">
    <div className="row py-3">
      <div className="col-12 text-center">
        <h1 className="display-3 text-white animated zoomIn">Testimonial</h1>
        <Link to="/" className="h4 text-white">Home</Link>
        <i className="far fa-circle text-white px-2" />
        <Link to="/testimonial" className="h4 text-white">Testimonial</Link>
      </div>
    </div>
  </div>
  {/* Hero End */} 
<Homeopinions/>
    </>
  )
}

export default Opinions