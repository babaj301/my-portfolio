import { ChevronDown } from "lucide-react";
import { Icon } from "lucide-react";
import { basketball } from "@lucide/lab";
import React from "react";
import { motion } from "motion/react";

const Hero = () => (
  <header className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white relative">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-2xl mb-4 text-blue-300">Hi, my name is</h2>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: 1,
          scale: 1.2,
          transition: { duration: 1, ease: "easeInOut" },
        }}
      >
        <h1 className="text-6xl lg:text-7xl font-bold mb-6">
          Babajide Feranmi
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            type: "spring",
            stiffness: 800,
            damping: 20,
            duration: 1,
            delay: 1.8,
          },
        }}
        className="text-3xl lg:text-4xl text-blue-200 mb-8"
      >
        I'm a hooper who builds fun things for the web.
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -200 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            type: "spring",
            stiffness: 800,
            damping: 20,
            duration: 1,
            delay: 1.5,
          },
        }}
        className="text-xl max-w-2xl mx-auto text-blue-200"
      >
        I'm a Fullstack Developer specializing in building exceptional digital
        experiences with modern web technologies.
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 1, ease: "easeInOut" },
        }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <motion.div className="animate-bounce">
          <Icon width={50} height={50} iconNode={basketball} />
        </motion.div>{" "}
      </motion.div>
    </div>
  </header>
);

export default Hero;
