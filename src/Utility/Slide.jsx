import React from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";



const Slide = ({ children }) => {
    const ref = useRef(null);
    const isInview = useInView(ref, { once: true });
    const controls = useAnimation();

    useEffect(() => {
        if (isInview) {
          controls.start("visible");
          console.log("in view");
        }
      }, [isInview]);
  return (
    <motion.div
    ref={ref}
    variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{
        type: "spring",
        duration: 0.5,
        damping: 8,
        delay: 0.25,
        stiffness: 100,
      }}
      initial="hidden"
      animate={controls}
    >
      {children}
    </motion.div>
  );
};

export default Slide;
