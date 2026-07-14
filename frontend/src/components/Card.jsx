import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

export default function Card({ className = "", children, ...props }) {
  const canTilt = typeof window !== "undefined" &&
    window.matchMedia("(hover: hover)").matches &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <Tilt
      glareEnable={false}
      tiltMaxAngleX={8}
      tiltMaxAngleY={8}
      perspective={1200}
      scale={1.01}
      transitionSpeed={400}
      tiltEnable={canTilt}
      className={`tilt-card ${className}`.trim()}
      {...props}
    >
      <motion.div
        className="inner-card"
        whileHover={canTilt ? { y: -3, boxShadow: "0 24px 60px rgba(17, 31, 64, 0.12)" } : {}}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </Tilt>
  );
}
