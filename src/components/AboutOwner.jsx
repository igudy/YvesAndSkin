import React from "react";
import owner from "../assets/ceo.png";
import { motion } from "framer-motion";

const AboutOwner = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
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
      className="bg-white py-16 px-4 md:px-8 lg:px-16"
      initial="hidden"
      animate="visible"
      variants={container}
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          className="flex justify-center md:justify-start"
          variants={item}
        >
          <motion.img
            src={owner}
            alt="Sarah Johnson, Owner of Serene Beauty"
            className="rounded-lg shadow-xl object-cover w-full max-w-md h-auto md:h-[550px]"
            whileHover={{ scale: 1.02 }}
          />
        </motion.div>

        <motion.div className="text-gray-700" variants={container}>
          <motion.p
            className="text-sm uppercase font-semibold text-gray-500 mb-2"
            variants={item}
          >
            THE LADY OF THE HOUR (CEO)
          </motion.p>
          <motion.h2
            className="text-5xl font-bold text-gray-800 mb-6"
            variants={item}
          >
            Sarah Johnson
          </motion.h2>

          <motion.p className="mb-8 leading-relaxed text-lg" variants={item}>
            Meet Sarah, a visionary hairstylist with a passion for beauty and a
            heart full of dreams. As the owner of Serene Beauty, her journey
            unfolds in the enchanting world of tranquil transformations.
          </motion.p>

          {/* Achievements List */}
          <div className="space-y-6">
            {[
              {
                number: "01",
                title: "Master Stylist of the Year",
                description:
                  "Sarah's exceptional talent and dedication to her craft earned her the prestigious title at the National Beauty Excellence Awards.",
              },
              {
                number: "02",
                title: "Community Impact Award",
                description:
                  "Recognized for her commitment to giving back, Sarah received this award for her charitable work and contributions.",
              },
              {
                number: "03",
                title: "Green Beauty Innovator",
                description:
                  "Sarah's commitment to eco-friendly and sustainable beauty practices was acknowledged with this award.",
              },
            ].map((achievement, index) => (
              <motion.div
                key={index}
                className="flex items-start"
                variants={item}
                whileHover={{ x: 10 }}
              >
                <div className="relative flex-shrink-0 mr-6">
                  <div className="p-4 mr-4 text-2xl bg-gray-900 text-gray-100 font-bold">
                    {achievement.number}
                  </div>
                  {index < 2 && (
                    <div className="absolute left-[38%] top-full -translate-x-1/2 w-0.5 h-20 bg-gray-300"></div>
                  )}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {achievement.title}:
                  </h3>
                  <p className="text-gray-600">{achievement.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutOwner;
