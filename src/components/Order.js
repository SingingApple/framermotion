import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
const containerVariants = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      delay: 0.5,
      mass: 0.4,
      damping: 8,
      when: "beforeChildren",
      staggerChildren: 0.4, //Initiates 0.4s after parent
    },
  },
};
const childVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};
const buttonVariants = {
  visible: {
    x: -20,
    transition: {
      delay: 2,
    },
  },
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      //yoyo: 10,
      duration: 0.3,
      yoyo: Infinity,
    },
  },
};
const Order = ({ pizza, setShowModal }) => {
  const [showTitle, setShowTitle] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShowModal(true);
    }, 4000);
  }, [setShowModal]);
  setTimeout(() => {
    setShowTitle(false);
  }, 4000);
  return (
    <motion.div
      className="container order"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h2>Thank you for your order</h2>

      <motion.p variants={childVariants}>
        You ordered a {pizza.base} pizza with:
      </motion.p>
      {pizza.toppings.map((topping) => (
        <motion.div key={topping}>{topping}</motion.div>
      ))}
    </motion.div>
  );
};

export default Order;
