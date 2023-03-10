import React, { useState } from "react";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import "./Slider.scss";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    // "https://images.pexels.com/photos/683929/pexels-photo-683929.jpeg",
    "https://cdn.pixabay.com/photo/2016/07/10/19/18/the-interior-of-the-1508271_960_720.jpg",
    "https://www.bergerpaints.com/blog/wp-content/uploads/2019/09/Test-on-multiple-walls.png",
    "https://images.akzonobel.com/akzonobel-flourish/dulux/uk/en/dulux-colour-of-the-year-2022/landing-page/Dulux-Colour-Futures-Colour-of-the-Year-2023-COY-LivingRoom-Inspiration-Global-1920x1080%20KV.jpg?impolicy=.auto&imwidth=1366",
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  };

  return (
    <div className="slider">
      <div className="container" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
        <img src={data[0]} alt="" />
        <img src={data[1]} alt="" />
        <img src={data[2]} alt="" />
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <WestOutlinedIcon />
        </div>
        <div className="icon" onClick={nextSlide}>
          <EastOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default Slider;