import React from "react";
import Button from "./Button";
import team1 from "../assets/team1.png";
import team2 from "../assets/team2.png";
import team3 from "../assets/team3.png";
import { MoveRight } from "lucide-react";
import { motion } from "framer-motion";

function AboutTeam() {
  const handleClick = () => {};

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

  const teamMembers = [
    {
      image: team3,
      name: "James Ethan",
      description:
        "James is the serene soul behind Serene Beauty's spa and wellness offerings. With a wealth of experience in esthetics and...",
    },
    {
      image: team2,
      name: "Cynthia Makafui",
      description:
        "Cynthia is the visionary artist responsible for the salon's stunning makeup transformations. Her creativity knows...",
    },
    {
      image: team1,
      name: "Angela Goodwill",
      description:
        "Angela is the nail guru who turns manicures and pedicures into works of art. Her meticulous attention to detail and...",
    },
  ];

  return (
    <motion.div
      className="py-8 px-4 sm:px-6 lg:px-8"
      initial="hidden"
      animate="visible"
      variants={container}
    >
      <motion.div
        className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center mb-8"
        variants={item}
      >
        <div className="mb-4 md:mb-0">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            Meet <span className="text-orange-500">Our Team</span>
          </h2>
          <p className="text-gray-600 max-w-lg">
            Life inside our beauty salon is never a dull moment, and the
            enthusiasm of wanting to satisfy our customers keeps all of us
            united.
          </p>
        </div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            className="px-6 py-3 border bg-black border-gray-400 text-white font-semibold rounded-md hover:rounded-2xl hover:text-orange-500 transition duration-500"
            display="Explore All Team"
            onClick={handleClick}
          />
        </motion.div>
      </motion.div>

      <motion.div
        className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-5"
        variants={container}
      >
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-start text-center"
            variants={item}
            whileHover={{ y: -5 }}
          >
            <motion.img
              src={member.image}
              alt={member.name}
              className="w-full h-auto object-cover rounded-[8px] mb-4"
              whileHover={{ scale: 1.03 }}
            />
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              {member.name}
            </h2>
            <p className="text-start w-auto">{member.description}</p>
            <motion.div whileHover={{ x: 5 }}>
              <Button
                className="text-orange-500 flex items-center gap-2 hover:cursor-pointer"
                display="Read More"
                showArrow={<MoveRight />}
                onClick={handleClick}
              />
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default AboutTeam;
