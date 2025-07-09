'use client';

import { motion } from 'framer-motion';
import { Clock, Users, BookOpen, Home, ChevronRight } from 'lucide-react';

const CourseHeader = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-xl border border-white/20 p-4 sm:p-6 md:p-8 lg:p-10 mb-8 sm:mb-12 mx-2 sm:mx-0"
    >
      {/* Breadcrumb */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-500 mb-4 sm:mb-6 overflow-x-auto"
      >
        <Home className="w-4 h-4" />
        <ChevronRight className="w-3 h-3" />
        <span>DSCG UE5</span>
        <ChevronRight className="w-3 h-3" />
        <span className="text-indigo-600 font-semibold">MSI Chapitre 1</span>
      </motion.div>
      
      {/* Main content */}
      <div className="flex flex-col md:flex-row items-start gap-4 sm:gap-6 lg:gap-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-3 sm:p-4 md:p-5 rounded-xl sm:rounded-2xl shadow-lg flex-shrink-0 self-center md:self-start"
        >
          <BookOpen className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 text-white" />
        </motion.div>
        
        <div className="flex-1 min-w-0">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 sm:mb-4 leading-tight text-center md:text-left"
          >
            Introduction au Management des Systèmes d&#39;Information
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-gray-600 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base lg:text-lg text-center md:text-left"
          >
            Découvrez les fondements du MSI, de l&#39;évolution historique aux concepts clés, 
            en passant par les enjeux stratégiques des systèmes d&#39;information modernes.
          </motion.p>
          
          {/* Badges */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-wrap gap-2 sm:gap-3 justify-center md:justify-start"
          >
            <div className="flex items-center gap-2 bg-gradient-to-r from-blue-100 to-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
              <Users className="w-4 h-4" />
              Expert
            </div>
            <div className="flex items-center gap-2 bg-gradient-to-r from-green-100 to-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
              <Clock className="w-4 h-4" />
              2h30
            </div>
            <div className="flex items-center gap-2 bg-gradient-to-r from-purple-100 to-purple-50 text-purple-700 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
              <BookOpen className="w-4 h-4" />
              5 sections
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default CourseHeader;