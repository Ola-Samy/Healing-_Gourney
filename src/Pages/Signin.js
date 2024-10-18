import React from 'react'
import { Link } from 'react-router-dom'

function Signin() {
  return (
    <>
    {/* <login start> */}
        
	<div className="limiter">
  <div className="container-login100">
    <div className="wrap-login100">
      <div className="login100-pic js-tilt" data-tilt>
        <img src="img/img-01.png" alt="IMG" />
      </div>
      <form className="login100-form validate-form" id="login-form">
        <span className="login100-form-title">
          Member Login
        </span>
        <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
          <input className="input100" type="email" name="email" placeholder="Email" id="email" required/>
          <span className="focus-input100" />
          <span className="symbol-input100">
            <i className="fa fa-envelope" aria-hidden="true" />
          </span>
        </div>
        <div className="wrap-input100 validate-input" data-validate="Password is required">
          <input className="input100" type="password" name="pass" placeholder="Password"id="password" required/>
          <span className="focus-input100" />
          <span className="symbol-input100">
            <i className="fa fa-lock" aria-hidden="true" />
          </span>
        </div>
        <div className="container-login100-form-btn">
          <button className="login100-form-btn">
             Login
          </button>
        </div>
        <div className="text-center p-t-12">
          <span className="txt1">
            Forgot
          </span>
          <Link className="txt2" to="/ForgotPassword">
            Username / Password?
          </Link>
        </div>
        <div className="text-center p-t-80">
          <Link className="txt2" to="/Register">
            Create your Account
            <i className="fa fa-long-arrow-right m-l-5" aria-hidden="true" />
          </Link>
        </div>
      </form>
    </div>
  </div>
</div>

    {/* </login end> */}
    </>
  )
}

export default Signin