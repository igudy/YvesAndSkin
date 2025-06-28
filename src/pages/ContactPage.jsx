import React from "react";
import { motion } from "framer-motion";
import ContactInfo from "../components/ContactInfo";
import ContactBranch from "../components/ContactBranch";
import Nav from "./Nav";
import Footer from "../components/Footer";

function ContactPage() {
  const pageVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { duration: 0.5 },
    },
    exit: { opacity: 0 },
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      className="mt-24"
    >
      <Nav />
      <ContactInfo />
      <ContactBranch />
      <Footer />
    </motion.div>
  );
}

export default ContactPage;
