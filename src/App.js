import { Routes, Route } from "react-router-dom";
import "./App.css";
import Blog from "./Modules/Components/Blog";
import Contact from "./Modules/Components/Contact";
import Services from "./Modules/Components/Services";
import Career from "./Modules/Components/Career";
import Home from "./Modules/Components/Home";
import About from "./Modules/Components/About";
import Navbar from "./common/Navbar";
import Footer1 from "./common/Footer1";
import CopyRight from "./common/CopyRight";
import MainHome from "./Modules/Components/MainHome";
import ScrollUpButton from "./Modules/Components/ScrollUpButton";
import ContentSpeak from "./Modules/Components/ContentSpeak";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route index path="/" element={<MainHome />} />
        <Route index path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contentspeak" element={<ContentSpeak />} />
      </Routes>

      <Footer1 />
      <CopyRight />
      <ScrollUpButton />
    </>
  );
}

export default App;
