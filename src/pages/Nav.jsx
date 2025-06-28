import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, Briefcase, Menu, X, ChevronDown } from "lucide-react";
import logo from "../assets/icon.png";
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const toggleMenu = () => setIsOpen((prev) => !prev);

  // Check if current path matches the link
  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/AboutPage", label: "About" },
    { path: "/ContactPage", label: "Contact" },
  ];

  const mobileNavVariants = {
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren",
      },
    },
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
        when: "afterChildren",
      },
    },
  };

  const mobileLinkVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-sm px-4 py-4 fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-lg font-semibold text-gray-800"
        >
          <motion.img
            src={logo}
            alt="Logo"
            className="w-6 h-6"
            whileHover={{ rotate: 15 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          <span>
            YVES<span className="text-orange-500">&</span>SKIN
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          {navLinks.map((link) => (
            <motion.div
              key={link.path}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to={link.path}
                className={`relative transition-colors hover:text-orange-500 ${
                  isActive(link.path) ? "font-bold text-orange-500" : ""
                }`}
              >
                {link.label}
                {isActive(link.path) && (
                  <motion.span
                    layoutId="navActiveIndicator"
                    className="absolute left-0 -bottom-1 w-full h-0.5 bg-orange-500"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          <Link to="/LoginPage" className="relative overflow-hidden">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black text-white px-4 py-2 text-sm rounded-lg hover:bg-orange-500 transition"
            >
              Login
            </motion.div>
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <motion.button
          onClick={toggleMenu}
          className="md:hidden text-gray-600 hover:text-orange-500"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Nav */}
      <motion.div
        className="md:hidden overflow-hidden"
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={mobileNavVariants}
      >
        <motion.div
          className="mt-4 space-y-2 bg-white rounded-md shadow-md py-4 px-4"
          variants={mobileNavVariants}
        >
          {navLinks.map((link) => (
            <motion.div key={link.path} variants={mobileLinkVariants}>
              <Link
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block py-2 transition-colors ${
                  isActive(link.path)
                    ? "font-bold text-orange-500"
                    : "text-gray-700 hover:text-orange-500"
                }`}
              >
                {link.label}
              </Link>
            </motion.div>
          ))}

          <motion.div className="pt-4 border-t" variants={mobileLinkVariants}>
            <Link
              to="/LoginPage"
              onClick={() => setIsOpen(false)}
              className="block w-full bg-black text-white text-center py-2 rounded-md hover:bg-orange-500 transition"
            >
              Login
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </nav>
  );
};

export default Nav;
