'use client';

import { motion } from 'framer-motion';
import { LucideIcon, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface SectionBlockProps {
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
  color: string;
  delay: number;
}

const SectionBlock: React.FC<SectionBlockProps> = ({ title, description, icon: Icon, link, color, delay }) => {
  const colorClasses = {
    blue: {
      bg: 'bg-gradient-to-br from-blue-50 to-blue-100/50',
      border: 'border-blue-200/50',
      icon: 'bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg',
      title: 'text-blue-900',
      description: 'text-blue-700',
      hover: 'hover:from-blue-100 hover:to-blue-150',
      shadow: 'shadow-blue-100'
    },
    green: {
      bg: 'bg-gradient-to-br from-green-50 to-green-100/50',
      border: 'border-green-200/50',
      icon: 'bg-gradient-to-br from-green-500 to-green-600 text-white shadow-lg',
      title: 'text-green-900',
      description: 'text-green-700',
      hover: 'hover:from-green-100 hover:to-green-150',
      shadow: 'shadow-green-100'
    },
    orange: {
      bg: 'bg-gradient-to-br from-orange-50 to-orange-100/50',
      border: 'border-orange-200/50',
      icon: 'bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-lg',
      title: 'text-orange-900',
      description: 'text-orange-700',
      hover: 'hover:from-orange-100 hover:to-orange-150',
      shadow: 'shadow-orange-100'
    },
    purple: {
      bg: 'bg-gradient-to-br from-purple-50 to-purple-100/50',
      border: 'border-purple-200/50',
      icon: 'bg-gradient-to-br from-purple-500 to-purple-600 text-white shadow-lg',
      title: 'text-purple-900',
      description: 'text-purple-700',
      hover: 'hover:from-purple-100 hover:to-purple-150',
      shadow: 'shadow-purple-100'
    },
    indigo: {
      bg: 'bg-gradient-to-br from-indigo-50 to-indigo-100/50',
      border: 'border-indigo-200/50',
      icon: 'bg-gradient-to-br from-indigo-500 to-indigo-600 text-white shadow-lg',
      title: 'text-indigo-900',
      description: 'text-indigo-700',
      hover: 'hover:from-indigo-100 hover:to-indigo-150',
      shadow: 'shadow-indigo-100'
    }
  };

  const colors = colorClasses[color as keyof typeof colorClasses];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        delay, 
        duration: 0.6, 
        ease: "easeOut",
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ 
        y: -8, 
        scale: 1.03,
        transition: { duration: 0.2, ease: "easeOut" }
      }}
      whileTap={{ scale: 0.98 }}
      className="group h-full"
    >
      <Link href={link} className="block h-full">
        <div className={`${colors.bg} ${colors.border} ${colors.hover} ${colors.shadow} border backdrop-blur-sm rounded-2xl p-6 lg:p-8 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl h-full flex flex-col`}>
          <div className="flex items-start gap-4 lg:gap-6 flex-1">
            <motion.div 
              className={`${colors.icon} p-4 rounded-xl flex-shrink-0`}
              whileHover={{ rotate: 5, scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <Icon className="w-6 h-6 lg:w-7 lg:h-7" />
            </motion.div>
            
            <div className="flex-1 min-w-0">
              <h3 className={`${colors.title} text-lg lg:text-xl font-bold mb-3 leading-tight`}>
                {title}
              </h3>
              <p className={`${colors.description} text-sm lg:text-base leading-relaxed`}>
                {description}
              </p>
            </div>
            
            <motion.div
              className="flex-shrink-0"
              initial={{ x: 0 }}
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowRight className={`${colors.description} w-5 h-5 lg:w-6 lg:h-6`} />
            </motion.div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default SectionBlock;