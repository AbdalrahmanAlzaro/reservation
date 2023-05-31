import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./Components/Home/Nav";
import Main from "./Components/Home/Hero";
import Footer from "./Components/Home/Footer";
import Contact from "./Components/contact/contact";
import LogIn from "./Components/login/LogIn";
import Reg from "./Components/registration/registration";


function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route index element={<Main />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<LogIn />} />
          <Route path="Reg" element={<Reg />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
