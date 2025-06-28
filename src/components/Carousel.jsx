import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import image1 from "../assets/Image Slide.png";
import vid from "../assets/vid.png";
import image3 from "../assets/story3.png";
import image2 from "../assets/story2.png";

const images = [
  { id: 1, src: image1, alt: "Elegant woman with jewelery looking upwards" },
  { id: 2, src: image2, alt: "Video with jewelery looking upwards" },
  { id: 3, src: image3, alt: "Elegant scene" },
  { id: 4, src: vid, alt: "Video scene" },
];

const fadeVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
  exit: { opacity: 0, transition: { duration: 0.5 } },
};

const textVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative mx-3 sm:mx-10 mt-10 h-[400px] md:h-[600px] lg:h-[700px] overflow-hidden rounded-2xl shadow-2xl">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          variants={fadeVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="absolute inset-0 w-full h-full"
        >
          <img
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-4 z-10">
        {images.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              index === currentIndex
                ? "bg-orange-500"
                : "bg-white/50 hover:bg-white"
            }`}
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      <motion.div
        className="absolute bottom-12 left-8 text-white max-w-lg"
        initial="hidden"
        animate="visible"
        variants={textVariants}
      >
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
          variants={textVariants}
        >
          Contemporary Elegance.
        </motion.h2>
        <motion.p
          className="text-base md:text-lg leading-relaxed"
          variants={textVariants}
          transition={{ delay: 0.2 }}
        >
          Discover the fusion of sophistication and modern design in every
          frame.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Carousel;
