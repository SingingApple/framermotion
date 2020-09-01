import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Home = () => {
  return (
    <motion.div
      className="home container"
      animate={{ opacity: 0.2, marginTop: 200, rotateZ: 45 }}
    >
      <motion.h2 animate={{ scale: 1.5, color: "#ff2994", x: 100, y: -50 }}>
        Welcome to Pizza Joint
      </motion.h2>
      <Link to="/base">
        <motion.button whileHover={{ scale: 1.5 }}>
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Home;
