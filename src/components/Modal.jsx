import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const modalVariants = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "200px",
    opacity: 1,
  },
  transition: {
    delay: 0.5,
    duration: 2,
  },
};

const backdrop = {
  visible: {
    opacity: 1,
  },
  hidden: {
    opacity: 0,
  },
};

const Modal = ({ showModal, setShowModal }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        <motion.div
          className="backdrop"
          variants={backdrop}
          animate="visible"
          initial="hidden"
          exit="hidden"
        >
          <motion.div
            className="modal"
            variants={modalVariants}
            animate="visible"
            initial="hidden"
          >
            <p>Want to make another Pizza</p>
            <Link to="/">
              <button onClick={() => setShowModal(false)}>Go</button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
