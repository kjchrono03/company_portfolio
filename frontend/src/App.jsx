import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Schedule from "./components/schedule";
import Contact from './components/contact';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Quote from "./components/quote";
import About from "./components/about";
import Portflio from "./components/portfolio";
import Expertise from "./components/expertise";
import Chat from "./components/chatbot";
import Product from "./components/product";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portflio />} />
        <Route path="/expertise" element={<Expertise />} />
        <Route path="/product" element={<Product />} />
      </Routes>
      <Footer />
      <Chat />
    </>
  );
}

export default App;
