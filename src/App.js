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
import DesignPop from "./Modules/Components/DesignPop";
import MarketTwist from "./Modules/Components/MarketTwist";
import Exclusive from "./Modules/Components/Exclusive";
import Blog1 from "./Modules/Components/Blog1";
import Blog2 from "./Modules/Components/Blog2";
import Blog3 from "./Modules/Components/Blog3";
import Blog4 from "./Modules/Components/Blog4";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route index path="/" element={<MainHome />} />
        <Route index path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contentspeak" element={<ContentSpeak />} />
        <Route path="/designpop" element={<DesignPop />} />
        <Route path="/markettwist" element={<MarketTwist />} />
        <Route path="/exclusive" element={<Exclusive />} />
        <Route path="/blog1" element={<Blog1 />} />
        <Route path="/blog2" element={<Blog2 />} />
        <Route path="/blog3" element={<Blog3 />} />
        <Route path="/blog4" element={<Blog4 />} />
      </Routes>

      <Footer1 />
      <CopyRight />
      <ScrollUpButton />
    </>
  );
}

export default App;
