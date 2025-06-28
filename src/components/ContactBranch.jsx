import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import branch1 from "../assets/branch1.png";
import branch2 from "../assets/branch2.png";

const ContactBranch = () => {
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

  const branchHover = {
    y: -5,
    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
    transition: { type: "spring", stiffness: 400 },
  };

  const branches = [
    {
      location: "Lekki, Nigeria",
      address: "43W Elgin St. Celina, Delaware 10299",
      email: "YVES AND SKINbeauty.com.ng",
      phone: "(+234) 8133-971-813",
      image: branch2,
      alt: "Lekki Branch Interior",
    },
    {
      location: "Kumasi, Ghana",
      address: "Riverside 25, San Francisco California",
      email: "YVES AND SKINbeauty.com.gh",
      phone: "(+234) 813-397-1813",
      image: branch1,
      alt: "Kumasi Branch Interior",
    },
  ];

  return (
    <motion.div
      className="container px-3 sm:px-10 mx-auto w-full py-12"
      initial="hidden"
      animate="visible"
      variants={container}
    >
      <motion.div className="max-w-7xl mx-auto text-center" variants={item}>
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Come And Visit{" "}
          <motion.span className="text-orange-500" whileHover={{ scale: 1.05 }}>
            Our Other Branches
          </motion.span>
        </h2>
      </motion.div>

      <motion.div
        className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
        variants={container}
      >
        {branches.map((branch, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row"
            variants={item}
            whileHover={branchHover}
          >
            <div className="p-6 flex flex-col justify-between">
              <div className="md:mt-18">
                <motion.h3
                  className="text-xl font-semibold text-gray-900"
                  whileHover={{ color: "#f97316" }}
                >
                  {branch.location}
                </motion.h3>
                <p className="mt-2 text-gray-600">{branch.address}</p>
                <div className="mt-4 text-gray-700 space-y-2">
                  <div className="flex items-center gap-1">
                    <Mail className="p-1 text-orange-500" />
                    <span>{branch.email}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Phone className="p-1 text-orange-500" />
                    <span>{branch.phone}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:flex-shrink-0">
              <motion.img
                className="h-full w-full object-cover md:w-full"
                src={branch.image}
                alt={branch.alt}
                whileHover={{ scale: 1.05 }}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default ContactBranch;
