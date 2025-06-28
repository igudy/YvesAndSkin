import { motion } from "framer-motion";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Features from "../components/Features";
import Story from "../components/Story";
import Carousel from "../components/Carousel";
import Nav from "./Nav";
import Footer from "../components/Footer";

const pageVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 0.5 },
  },
  exit: { opacity: 0 },
};

function HomePage() {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      className="mt-24"
    >
      <Nav />
      <Header />
      <Carousel />
      <HeroSection />
      <Features />
      <Story />
      <Footer />
    </motion.div>
  );
}

export default HomePage;
