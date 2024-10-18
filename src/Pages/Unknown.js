import React from 'react'
import { Link } from 'react-router-dom'

function Unknown() {
  return (
    <>
    {/* Password Reset */}
<section className="p-3 p-md-4 p-xl-5">
  <div className="container">
    <div className="card border-light-subtle shadow-sm">
      <div className="row g-0">
        <div className="col-12 col-md-6">
          <img className="img-fluid rounded-start w-100 h-100 object-fit-cover" loading="lazy" src="img/Forgot-Password.jpg" alt="BootstrapBrain Logo" />
        </div>
        <div className="col-12 col-md-6">
          <div className="card-body p-3 p-md-4 p-xl-5">
            <div className="row">
              <div className="col-12">
                <div className="mb-5">
                  <h2 className="h3">Password Reset</h2>
                  <h3 className="fs-6 fw-normal text-primary m-0">Provide the email address associated with your account to recover your password.</h3>
                </div>
              </div>
            </div>
            <form action="#!">
              <div className="row gy-3 gy-md-4 overflow-hidden">
                <div className="col-12">
                  <label htmlFor="email" className="form-label">Email <span className="text-danger">*</span></label>
                  <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                </div>
                <div className="col-12">
                  <div className="d-grid">
                    <button className="btn bsb-btn-xl btn-primary" type="submit">Reset Password</button>
                  </div>
                </div>
              </div>
            </form>
            <div className="row">
              <div className="col-12">
                <hr className="mt-5 mb-4 border-secondary-subtle" />
                <div className="d-flex gap-2 gap-md-4 flex-column flex-md-row justify-content-md-end">
                  <Link to="/login" className="link-primary text-decoration-none">Login</Link>
                  <Link to="/Register" className="link-secondary text-decoration-none">Register</Link>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <p className="mt-5 mb-4 text-secondary">Or sign in with</p>
                <div className="d-flex gap-3 flex-column flex-xl-row">
                  <Link to="" className="btn bsb-btn-xl btn-outline-primary rounded-pill">
                    <span className="ms-2 fs-6 ">Google</span>
                  </Link>
                  <Link to="" className="btn bsb-btn-xl btn-outline-primary rounded-pill">
                    <span className="ms-2 fs-6">Facebook</span>
                  </Link>
                  <Link to="" className="btn bsb-btn-xl btn-outline-primary rounded-pill">
                    <span className="ms-2 fs-6">Twitter</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default Unknown