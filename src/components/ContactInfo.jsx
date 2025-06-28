import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Mail,
  Phone,
  Instagram,
  Youtube,
  Twitter,
  MessageCircleHeart,
} from "lucide-react";

const ContactInfo = () => {
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

  const socialIconHover = {
    scale: 1.1,
    rotate: 10,
    transition: { type: "spring", stiffness: 500 },
  };

  return (
    <motion.div
      className="mt-4 flex items-center justify-center p-4"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div
        className="container mx-auto shadow-lg rounded-lg p-8 w-full grid md:grid-cols-2 gap-8"
        whileHover={{ scale: 1.005 }}
      >
        <motion.div
          className="p-8 bg-gray-200 rounded-lg"
          variants={itemVariants}
        >
          <motion.h2
            className="text-2xl font-bold text-gray-800 mb-4"
            variants={itemVariants}
          >
            Contact Information
          </motion.h2>
          <motion.p className="text-gray-600 mb-6" variants={itemVariants}>
            Feel free to reach out to us for appointments, inquiries, or to
            experience the tranquility of Serene Beauty. We're here to make your
            beauty journey as serene as possible.
          </motion.p>

          <motion.div
            className="space-y-8 text-gray-700"
            variants={containerVariants}
          >
            {[
              {
                icon: <MapPin />,
                text: "1901 Thornridge Cir. Shiloh, Hawaii 81063, USA",
              },
              { icon: <Mail />, text: "@YVES AND SKINbeauty.com" },
              { icon: <Phone />, text: "(+234) 0813-397-1813" },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-2"
                variants={itemVariants}
                whileHover={{ x: 5 }}
              >
                <motion.div
                  className="border-orange-500 rounded-full border p-1"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {item.icon}
                </motion.div>
                <span>{item.text}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="flex space-x-8 mt-6" variants={itemVariants}>
            {[
              { icon: <Instagram />, key: "instagram" },
              { icon: <Youtube />, key: "youtube" },
              { icon: <Twitter />, key: "twitter" },
              { icon: <MessageCircleHeart />, key: "message" },
            ].map((social) => (
              <motion.a
                key={social.key}
                href="#"
                className="text-gray-500 hover:text-gray-700 border-orange-500 rounded-full border p-1"
                whileHover={socialIconHover}
                whileTap={{ scale: 0.9 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div className="md:w-full w-[90%]" variants={itemVariants}>
          <motion.h2
            className="text-2xl font-bold text-gray-800 mb-4"
            variants={itemVariants}
          >
            Have a Question?
          </motion.h2>
          <motion.p
            className="text-gray-500 text-sm mb-4"
            variants={itemVariants}
          >
            <span className="text-orange-500">Business Hours:</span>{" "}
            <span className="text-gray-900 font-bold">Mon - Fri:</span> 08:00 AM
            To 09:00 PM <span className="text-gray-900 font-bold">Sat:</span>{" "}
            09:00 AM To 06:00 PM
          </motion.p>

          <motion.form className="space-y-4" variants={containerVariants}>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
              variants={itemVariants}
            >
              <div>
                <label htmlFor="name" className="sr-only">
                  Your Name
                </label>
                <motion.input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  className="w-full p-3 border border-orange-500 rounded-md hover:border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  whileFocus={{ scale: 1.02 }}
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <motion.input
                  type="email"
                  id="email"
                  placeholder="Email"
                  className="w-full p-3 border border-orange-500 rounded-md hover:border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  whileFocus={{ scale: 1.02 }}
                />
              </div>
            </motion.div>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-2.5"
              variants={itemVariants}
            >
              <div>
                <label htmlFor="service" className="sr-only">
                  What Service You Want?
                </label>
                <motion.input
                  type="text"
                  id="service"
                  placeholder="What Service You Want?"
                  className="w-full p-3 border border-orange-500 rounded-md hover:border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  whileFocus={{ scale: 1.02 }}
                />
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">
                  Phone
                </label>
                <motion.input
                  type="tel"
                  id="phone"
                  placeholder="Phone"
                  className="w-full p-3 border border-orange-500 rounded-md hover:border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  whileFocus={{ scale: 1.02 }}
                />
              </div>
            </motion.div>
            <motion.div variants={itemVariants}>
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <motion.textarea
                id="message"
                rows="5"
                placeholder="Message"
                className="w-full p-3 rounded-md border border-orange-500 hover:border-gray-600 resize-y focus:outline-none focus:ring-2 focus:ring-orange-500"
                whileFocus={{ scale: 1.01 }}
              ></motion.textarea>
            </motion.div>
            <motion.button
              type="submit"
              className="w-1/2 bg-slate-700 text-white p-3 rounded-md font-semibold hover:bg-slate-800 hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send
            </motion.button>
          </motion.form>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ContactInfo;
