import React from "react";
import vid from "../assets/vid.png";
import logo from "../assets/icon.png";
import you from "../assets/Youtube.png";
import { motion } from "framer-motion";

const AboutHeader = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <motion.div
      className="container px-4 sm:px-6 mx-auto mt-8 font-sans"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div
        className="relative rounded-lg overflow-hidden shadow-2xl"
        variants={itemVariants}
        whileHover={{ scale: 1.01 }}
      >
        <img
          src={vid}
          alt=""
          className="w-full h-auto object-cover max-h-[70vh] md:max-h-[80vh]"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 p-4 bg-opacity-40 text-white">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <img
              src={you}
              alt="YouTube icon"
              className="w-16 sm:w-20 md:w-24 h-auto"
            />
          </motion.div>
          <motion.div className="flex items-center" variants={itemVariants}>
            <span className="text-lg font-bold text-gray-300">
              YVES AND SKIN
            </span>
            <motion.img
              src={logo}
              alt="YVES AND SKIN logo"
              width={30}
              className="mx-1"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>
        </div>
      </motion.div>

      <motion.section
        className="flex flex-col md:flex-row justify-between items-center gap-8 mx-auto mt-6"
        variants={containerVariants}
      >
        <motion.div className="flex items-center" variants={itemVariants}>
          <span className="text-lg font-bold text-gray-800">YVES AND SKIN</span>
        </motion.div>

        <motion.div variants={itemVariants}>
          <h2 className="text-xl font-semibold text-gray-800">
            If It Makes You Feel <br />
            <motion.span
              className="text-orange-500"
              whileHover={{ scale: 1.05 }}
            >
              Beautiful
            </motion.span>
            , Then Do It.
          </h2>
        </motion.div>

        <motion.div
          className="md:w-1/3 text-gray-700 leading-relaxed text-lg"
          variants={itemVariants}
        >
          <p>
            Life inside our beauty salon is never a dull moment, and the
            enthusiasm of wanting to satisfy our customers keeps all of us
            united.
          </p>
        </motion.div>
      </motion.section>
    </motion.div>
  );
};

export default AboutHeader;
