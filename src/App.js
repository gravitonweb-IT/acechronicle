import { Routes, Route } from "react-router-dom";
import "./App.css";
import Blog from "./Modules/Components/Blog";
import DetailsBlog from "./Modules/Components/DetailsBlog";
import Services from "./Modules/Components/Services";
import Career from "./Modules/Components/Career";
import Home from "./Modules/Components/Home";
import About from "./Modules/Components/About";
import Navbar from "./common/Navbar";
import Footer1 from "./common/Footer1";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/detailsblog" element={<DetailsBlog />} />
        <Route path="/services" element={<Services />} />
        <Route path="/career" element={<Career />} />
      </Routes>

      <Footer1 />
    </>
  );
}

export default App;
