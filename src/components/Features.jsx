import { motion } from "framer-motion";
import Button from "./Button";
import logo from "../assets/icon.png";
import image1 from "../assets/bag.png";
import image2 from "../assets/haven.png";
import image3 from "../assets/jew.png";
import vid from "../assets/vid.png";
import you from "../assets/Youtube.png";
import { CgArrowTopRight } from "react-icons/cg";

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const scaleUp = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

function Features() {
  const handleClick = () => {};

  return (
    <div className="max-w-7xl px-4 sm:px-6 lg:px-8 py-12 mx-auto">
      <motion.div
        className="flex flex-col md:flex-row justify-between items-center gap-6 mb-16 text-center md:text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.h3
          className="text-4xl md:text-5xl font-bold text-gray-900"
          variants={fadeUp}
        >
          Featured
        </motion.h3>
        <motion.div variants={fadeUp}>
          <Button
            className="px-6 py-3 bg-black text-white font-semibold rounded-full hover:bg-orange-500 transition-colors duration-300"
            display="Explore Collections"
            onClick={handleClick}
          />
        </motion.div>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        {[
          { img: image1, title: "Hair Salon Haven" },
          { img: image2, title: "Waxing Salon Haven" },
          { img: image3, title: "Skincare Salon Haven" },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center text-center"
            variants={fadeUp}
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.img
              src={item.img}
              alt={item.title}
              className="w-full h-64 object-cover rounded-2xl mb-4 shadow-lg"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400 }}
            />
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              {item.title}
            </h2>
            <motion.div
              className="flex items-center gap-1 text-orange-500 cursor-pointer"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span>Explore Services</span>
              <CgArrowTopRight className="w-4 h-4" />
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="relative rounded-2xl overflow-hidden shadow-2xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={scaleUp}
        whileHover={{ scale: 1.01 }}
      >
        <img src={vid} alt="" className="w-full max-h-[70vh] object-cover" />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center gap-4 p-6 text-white">
          <motion.img
            src={you}
            alt="YouTube icon"
            className="w-16 md:w-20"
            whileHover={{ scale: 1.1 }}
          />
          <motion.div
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <img src={logo} alt="YVES AND SKIN logo" className="w-8 md:w-10" />
            <span className="text-2xl font-bold">YVES AND SKIN</span>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default Features;
