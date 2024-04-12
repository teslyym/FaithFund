import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Donate from "./Pages/Donate/Donate";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import PaymentInfo from "./Components/PaymentInfo";
import Otp from "./Components/Otp";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Donate" element={<Donate />} />
          <Route path="Login" element={<Login />} />
          <Route path="Register" element={<Register />} />
          <Route path="payment-info" element={<PaymentInfo />} />
          <Route path="Otp" element={<Otp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
