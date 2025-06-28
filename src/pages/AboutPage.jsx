import { motion } from "framer-motion";
import AboutHeader from "../components/AboutHeader";
import AboutStory from "../components/AboutStory";
import AboutOwner from "../components/AboutOwner";
import AboutTeam from "../components/AboutTeam";
import Nav from "./Nav";
import Footer from "../components/Footer";

function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-24"
    >
      <Nav />
      <AboutHeader />
      <AboutStory />
      <AboutOwner />
      <AboutTeam />
      <Footer />
    </motion.div>
  );
}

export default AboutPage;
