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
import Confirmation from "./Components/Confirmation";
import SuccessfulPayment from "./Components/SuccessfulPayment";
import Profile from "./Pages/Profile/Profile";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import User from "./Components/User";
import MosqueDetails from "./Pages/MosqueDetails/MosqueDetails";
import RegisterMosque from "./Pages/RegisterMosque/RegisterMosque";

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
          <Route path="Confirmation" element={<Confirmation />} />
          <Route path="SuccessfulPayment" element={<SuccessfulPayment />} />
          <Route path="Profile" element={<Profile />} />
          <Route path="Errorpage" element={<ErrorPage />} />
          <Route path="User" element={<User />} />
          <Route path="MosqueDetails" element={<MosqueDetails />} />
          <Route path="RegisterMosque" element={<RegisterMosque />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
