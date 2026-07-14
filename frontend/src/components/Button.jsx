import { motion } from "framer-motion";

export default function Button({ variant = "primary", href, children, className = "", ...props }) {
  const Component = href ? motion.a : motion.button;
  const baseClasses = `btn btn--${variant} ${className}`.trim();

  return (
    <Component
      href={href}
      className={baseClasses}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
      {...props}
    >
      {children}
    </Component>
  );
}
