import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const childVariants = {
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

const hoverEffect = {
  scale: 1.05,
  transition: { type: "spring", stiffness: 400, damping: 10 },
};

const tapEffect = {
  scale: 0.98,
};

function Header() {
  return (
    <motion.div
      className="max-w-6xl mx-auto mt-20 px-4 flex flex-col items-center text-center font-sans text-gray-800"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.p
        className="text-xs sm:text-sm md:text-base mb-3 uppercase tracking-widest text-gray-500"
        variants={childVariants}
      >
        Where Tranquility Meets Transformation
      </motion.p>

      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-8 max-w-4xl"
        variants={childVariants}
      >
        We show your{" "}
        <motion.span
          className="text-orange-500"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 500 }}
        >
          skin
        </motion.span>
        ,{" "}
        <motion.span
          className="text-orange-500"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 500 }}
        >
          hair
        </motion.span>{" "}
        and{" "}
        <motion.span
          className="text-orange-500"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 500 }}
        >
          body
        </motion.span>{" "}
        the care and attention they deserve.
      </motion.h1>

      <motion.div
        variants={childVariants}
        whileHover={hoverEffect}
        whileTap={tapEffect}
      >
        <Link
          to="/MakeupForm"
          className="inline-block bg-black text-white px-8 py-3 rounded-md text-sm sm:text-base font-semibold hover:bg-orange-600 transition-colors duration-300 shadow-lg"
        >
          Book Now
        </Link>
      </motion.div>
    </motion.div>
  );
}

export default Header;
