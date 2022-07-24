import "./Banner.css";
import { gb1, gb2 } from "../assets/images";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const Banner = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);
  const images = [gb1, gb2];
  return (
    <motion.div ref={carousel} className="carousel">
      <motion.div
        drag={"x"}
        dragConstraints={{ right: 0, left: -width }}
        className="inner-carousel"
      >
        {images.map((image, index) => (
          <motion.div key={index} className="slide">
            <img src={image} alt="" />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Banner;
