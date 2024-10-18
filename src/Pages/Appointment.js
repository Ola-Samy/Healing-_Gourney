import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Appointment() {
  const [service, setService] = useState('');
  const [doctor, setDoctor] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [submitted, setSubmitted] = useState(false); // إضافة حالة submitted

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && email && service && doctor && date && time) {
      //إذا كانت كل الحقول مليئة  submitted إلى true وتنظيف الحقول
      setSubmitted(true);
      setName('');
      setEmail('');
      setService('');
      setDoctor('');
      setDate('');
      setTime('');
    } else {
      alert('Please fill in all fields.');
    }
  };


  return (
    <>
    
    {/* Hero Start */}
<div className="container-fluid bg-primary py-5 hero-header mb-5">
  <div className="row py-3">
    <div className="col-12 text-center">
      <h1 className="display-3 text-white animated zoomIn">Appointment</h1>
      <Link to="/" className="h4 text-white">Home</Link>
      <i className="far fa-circle text-white px-2" />
      <Link to="/appointment" className="h4 text-white">Appointment</Link>
    </div>
  </div>
</div>
{/* Hero End */}
  {/* Appointment Start */}
  <div className="container-fluid bg-primary bg-appointment my-5 wow fadeInUp" data-wow-delay="0.1s">
  <div className="container">
    <div className="row gx-5">
      <div className="col-lg-6 py-5">
        <div className="py-5">
          <h1 className="display-5 text-white mb-4">We Are A Certified and Awards Winning Addiction Treatment Center You Can Trust</h1>
          <p className="text-white mb-0">We offer a path to recovery and a chance for a new beginning free from addiction. Our commitment is  to provide comprehensive and personalized care for each patient, focusing on delivering both psychological and physical support through advanced treatment programs. Our center is staffed with a team of specialized doctors and therapists who work together to develop individualized treatment plans aimed at restoring health and reclaiming control over life. Our program includes a holistic approach featuring  one-on-one counseling sessions, group therapy, and family support.</p>
        </div>
      </div>
      <div className="col-lg-6">
      <div className="appointment-form h-100 d-flex flex-column justify-content-center text-center p-5 wow zoomIn" data-wow-delay="0.6s">
        <h1 className="text-white mb-4">Make Appointment</h1>
        <form id="appointment" onSubmit={handleSubmit}>
          <div className="row g-3">
            <div className="col-12 col-sm-6">
              <select 
                className="form-select bg-light border-0" 
                style={{ height: 55 }} 
                value={service}
                onChange={(e) => setService(e.target.value)}
              >
                <option value="" disabled>Select A Service</option>
                <option value="1">Online International Checkup</option>
                <option value="2">Group Therapy</option>
                <option value="3">Family Therapy</option>
                <option value="4">Individual Therapy</option>
              </select>
            </div>
            <div className="col-12 col-sm-6">
              <select 
                className="form-select bg-light border-0" 
                style={{ height: 55 }} 
                value={doctor}
                onChange={(e) => setDoctor(e.target.value)}
              >
                <option value="" disabled>Select Doctor</option>
                <option value="1">Dr. Hossam Amara</option>
                <option value="2">Dr. Sally Mohammed</option>
                <option value="3">Dr. Atef Ibrahim</option>
                <option value="4">Dr. Doaa Maamoun</option>
                <option value="5">Dr. Mohammed Hussein</option>
              </select>
            </div>
            <div className="col-12 col-sm-6">
              <input 
                type="text" 
                className="form-control bg-light border-0" 
                placeholder="Your Name" 
                style={{ height: 55 }} 
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="col-12 col-sm-6">
              <input 
                type="email" 
                className="form-control bg-light border-0" 
                placeholder="Your Email" 
                style={{ height: 55 }} 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="col-12 col-sm-6">
              <input 
                type="date" 
                className="form-control bg-light border-0 datetimepicker-input" 
                placeholder="Appointment Date" 
                style={{ height: 55 }} 
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className="col-12 col-sm-6">
              <input 
                type="time" 
                className="form-control bg-light border-0 datetimepicker-input" 
                placeholder="Appointment Time" 
                style={{ height: 55 }} 
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </div>
            <div className="col-12">
              <button className="btn btn-dark w-100 py-3" type="submit" onClick={handleSubmit }>
                Make Appointment
              </button>
            </div>
          </div>
        </form>
        {submitted && <p className="text-light">Thank you! Your Appointment has been sent.</p>}
      </div>
    </div>
    </div>
  </div>
</div>
{/* Appointment End */}
    </>
  )
}

export default Appointment