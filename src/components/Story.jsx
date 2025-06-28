import React, { useState } from "react";
import { motion } from "framer-motion";
import Button from "./Button";
import { ArrowRight, ArrowLeft } from "lucide-react";
import couple from "../assets/couples.png";

const testimonialsData = [
  {
    id: 1,
    name: "Daphne Augustine",
    title: "Accra | Beautician",
    quote: [
      "Serene Beauty isn't just any other salon. It's a complete cut above the rest. Every visit is always a treat and you're always made to feel special.",
      "Sarah never takes her customers for granted and she strives to always deliver something above and beyond ordinary expectations. I cannot recommend Serene Beauty highly enough.",
    ],
  },
  // ... other testimonials
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const slideIn = {
  hidden: { x: -50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Story = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonialsData.length);
  const prev = () =>
    setCurrent(
      (c) => (c - 1 + testimonialsData.length) % testimonialsData.length
    );

  const t = testimonialsData[current];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12 text-center md:text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div>
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-2"
            variants={fadeIn}
          >
            Our <span className="text-orange-500">Story</span>
          </motion.h2>
          <motion.p
            className="text-gray-600 max-w-xl"
            variants={fadeIn}
            transition={{ delay: 0.2 }}
          >
            Life inside our beauty salon is never a dull moment, and the
            enthusiasm of wanting to satisfy our customers keeps all of us
            united.
          </motion.p>
        </div>
        <motion.div variants={fadeIn}>
          <Button
            display="All Our Stories"
            onClick={() => {}}
            className="px-6 py-3 bg-black text-white font-semibold rounded-full hover:bg-orange-500 transition"
          />
        </motion.div>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-8 items-center">
        <motion.div
          className="w-full lg:w-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideIn}
        >
          <motion.img
            src={couple}
            alt="Couple"
            className="w-full h-auto rounded-2xl shadow-lg object-cover"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400 }}
          />
        </motion.div>

        <motion.div
          className="w-full lg:w-1/2 p-6 bg-white rounded-2xl shadow-md"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ delay: 0.2 }}
        >
          <motion.h3
            className="text-xl md:text-2xl font-bold mb-4"
            variants={fadeIn}
          >
            TESTIMONIALS
          </motion.h3>
          <motion.p
            className="text-lg font-semibold text-gray-800 mb-1"
            variants={fadeIn}
          >
            {t.name}
          </motion.p>
          <motion.p className="text-sm text-gray-600 mb-4" variants={fadeIn}>
            {t.title}
          </motion.p>
          <motion.div
            className="text-gray-700 space-y-4 mb-6"
            variants={fadeIn}
          >
            {t.quote.map((q, i) => (
              <motion.p key={i} variants={fadeIn}>
                “{q}”
              </motion.p>
            ))}
          </motion.div>

          <motion.div className="flex items-center gap-4" variants={fadeIn}>
            <motion.button
              onClick={prev}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ArrowLeft />
            </motion.button>
            <span className="text-sm">
              {String(current + 1).padStart(2, "0")} /{" "}
              {String(testimonialsData.length).padStart(2, "0")}
            </span>
            <motion.button
              onClick={next}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ArrowRight />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Story;
