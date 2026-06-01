import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ProblemCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  delay?: number;
}

export default function ProblemCard({
  title,
  description,
  icon,
  delay = 0,
}: ProblemCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="glass-card p-6 md:p-8 hover:shadow-[0_0_30px_rgba(177,45,255,0.3)] transition-all duration-300 group"
    >
      {icon && (
        <div className="mb-4 text-3xl md:text-4xl text-purple-400 group-hover:text-purple-300 transition-colors">
          {icon}
        </div>
      )}
      <h3 className="text-xl md:text-2xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-300 text-base md:text-lg leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
