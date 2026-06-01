import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SlideProps {
  children: ReactNode;
  className?: string;
  isActive?: boolean;
}

export default function Slide({
  children,
  className = "",
  isActive = true,
}: SlideProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={isActive ? { opacity: 1 } : { opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={`min-h-screen w-full flex items-center justify-center px-4 md:px-8 lg:px-16 ${className}`}
    >
      <div className="max-w-6xl w-full">{children}</div>
    </motion.div>
  );
}
