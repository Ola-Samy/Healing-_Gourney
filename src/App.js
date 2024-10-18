import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Service from "./Pages/Service";
import Contact from "./Pages/Contact";
import Appointment from "./Pages/Appointment";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";
import Nav from "./Pages/Nav";
import Footer from "./Pages/Footer";
import Unknown from "./Pages/Unknown";
import Doctor from "./Pages/Doctor";
import Costs from "./Pages/Costs";
import Opinions from "./Pages/Opinions";
import Progress from "./Pages/Progress";




function App() {
  return (
    <>
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/service" element={<Service/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/appointment" element={<Appointment/>}/>
      <Route path="/login" element={<Signin/>}/>
      <Route path="/register" element={<Signup/>}/>
      <Route path="/ForgotPassword" element={<Unknown/>}/>
      <Route path="/doctor" element={<Doctor/>}/>
      <Route path="/price" element={<Costs/>}/>
      <Route path="/testimonial" element={<Opinions/>}/>
      <Route path="/progress" element={<Progress/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
        </>
  );
}

export default App;
