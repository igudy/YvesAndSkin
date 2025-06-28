import React from "react";
import story1 from "../assets/story1.png";
import story2 from "../assets/story2.png";
import story3 from "../assets/story3.png";
import { motion } from "framer-motion";

const AboutStory = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
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
    <motion.section
      className="py-16 px-4"
      initial="hidden"
      animate="visible"
      variants={container}
    >
      <div className="container mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-gray-800 mb-8"
          variants={item}
        >
          Our{" "}
          <motion.span className="text-orange-500" whileHover={{ scale: 1.1 }}>
            Story
          </motion.span>
        </motion.h2>

        <motion.div
          className="text-gray-700 leading-relaxed text-lg mb-12"
          variants={item}
        >
          <p className="mb-4">
            Since 2012 in a charming Hawaii Town, Serene Beauty emerged as a
            haven for beauty and tranquility. Founded by Sarah, a passionate
            hairstylist, the salon's simple yet profound vision was to enhance
            natural beauty while providing a peaceful escape.
          </p>
          <p>
            With time, Serene Beauty's dedicated team grew, offering a range of
            services from esthetics to makeup. It became a beloved part of the
            community, known for its serene ambiance and commitment to giving
            back through charity events.
          </p>
        </motion.div>

        {/* Image Gallery */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={container}
        >
          {[story1, story2, story3].map((story, index) => (
            <motion.div
              key={index}
              className="overflow-hidden rounded-lg shadow-lg"
              variants={item}
              whileHover={{ scale: 1.03 }}
            >
              <motion.img
                src={story}
                alt="Salon story"
                className="w-full h-auto object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutStory;
