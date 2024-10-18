import React from 'react'
import { Link } from 'react-router-dom'
import Homecontact from './Homecontact'

function Contact() {
  return (
    <>
   {/* Hero Start */}
    <div class="container-fluid bg-contact bg-primary">
        <div class="row py-3">
            <div class="col-12 text-center">
                <h1 class="display-3 text-white animated zoomIn">Contact Us</h1>
                <Link to="/" class="h4 text-white">Home</Link>
                <i class="far fa-circle text-white px-2"></i>
                <Link to="/contact" class="h4 text-white">Contact</Link>
            </div>
        </div>
    </div>
  {/* Hero end */}
 <Homecontact/>

    </>
    )
}

export default Contact