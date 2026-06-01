import { motion } from "framer-motion";
import { ReactNode } from "react";

interface DeliveryCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  delay?: number;
  highlight?: boolean;
}

export default function DeliveryCard({
  title,
  description,
  icon,
  delay = 0,
  highlight = false,
}: DeliveryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className={`glass-card p-6 md:p-8 transition-all duration-300 group ${
        highlight
          ? "border-2 border-purple-500 shadow-[0_0_30px_rgba(177,45,255,0.4)]"
          : "hover:shadow-[0_0_30px_rgba(177,45,255,0.3)]"
      }`}
    >
      {icon && (
        <div className="mb-4 text-3xl md:text-4xl text-blue-400 group-hover:text-blue-300 transition-colors">
          {icon}
        </div>
      )}
      <h3 className="text-lg md:text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-300 text-sm md:text-base leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
