//import logo from './logo.svg';
//import './App.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Appointment from "./components/Appointment";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header" id="top">
          <Navbar />
        </header>


        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/appointment" element={<Appointment />} />
        </Routes>


        <Footer />
      </div>
    </Router>
  );
}

export default App;
