import React from "react";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/footer";
import Slider from "../../Slider/Slider";
import FeaturedProducts from "../../FeaturedProducts/FeaturedProducts";
import "./home.scss";
import Contact from "../Contact/Contact";

function Home() {
  return (
    <div>
      <Navbar />
      <Slider />
      <FeaturedProducts type="featured" />
      <Footer />
      <Contact />
    </div>
  );
}

export default Home;
