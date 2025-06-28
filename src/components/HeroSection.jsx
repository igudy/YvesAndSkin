import React from "react";
import { motion } from "framer-motion";
import Button from "./Button";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import { CgArrowTopRight } from "react-icons/cg";

const cardVariants = {
  offscreen: { y: 50, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8 },
  },
};

function HeroSection() {
  const handleClick = () => {};

  return (
    <div className="py-10 px-4 md:px-8 max-w-7xl mx-auto">
      <motion.div
        className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeIn}
      >
        <motion.p
          className="text-2xl md:text-3xl font-light text-gray-700 text-center md:text-left max-w-2xl"
          variants={fadeIn}
        >
          Enhance your inner radiance at our{" "}
          <span className="text-orange-500 font-semibold">
            beauty sanctuary
          </span>{" "}
          and let your true beauty shine.
        </motion.p>
        <motion.div variants={fadeIn}>
          <Button
            className="px-6 py-3 bg-black text-white font-semibold rounded-full hover:bg-orange-500 transition-colors duration-300"
            display="Explore Services"
            onClick={handleClick}
          />
        </motion.div>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {[
          { img: image1, title: "Hair Salon Haven" },
          { img: image2, title: "Waxing Salon Haven" },
          { img: image3, title: "Skincare Salon Haven" },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center text-center"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, margin: "-50px" }}
            variants={cardVariants}
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img
              src={item.img}
              alt={item.title}
              className="mx-auto w-full h-64 object-cover rounded-2xl mb-4 shadow-lg"
            />
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              {item.title}
            </h2>

            <motion.div
              className="flex items-center cursor-pointer gap-1 text-orange-500"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="">Explore Services</div>
              <div>
                <CgArrowTopRight className="w-4 h-4 mt-1" />
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="flex flex-col md:flex-row gap-8 mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <motion.img
          src={image1}
          alt=""
          className="w-full md:w-1/2 h-auto rounded-2xl object-cover shadow-lg"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400 }}
        />
        <motion.img
          src={image2}
          alt=""
          className="w-full md:w-1/2 h-auto rounded-2xl object-cover shadow-lg"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400 }}
        />
      </motion.div>

      <motion.div
        className="flex flex-col md:flex-row items-center justify-between gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center md:text-left"
          whileHover={{ scale: 1.02 }}
        >
          The Place Of <span className="text-orange-500">Beauty</span>
        </motion.h2>
        <motion.p
          className="text-lg text-gray-700 max-w-2xl text-center md:text-left"
          whileHover={{ scale: 1.01 }}
        >
          Our heart goes out at what we do and our slogan is making our
          customers feel beautiful and fabulous.
        </motion.p>
      </motion.div>
    </div>
  );
}

export default HeroSection;
