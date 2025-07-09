'use client';

import { motion } from 'framer-motion';
import { Rocket, TrendingUp, Building2, HelpCircle, Award } from 'lucide-react';
import SectionBlock from './SectionBlock';

const CoursePlan = () => {
  const sections = [
    {
      title: "Introduction",
      description: "Découvrez les fondements et l&apos;évolution du MSI",
      icon: Rocket,
      link: "/introduction",
      color: "blue",
      delay: 0.1
    },
    {
      title: "Section I",
      description: "La montée en puissance de la discipline",
      icon: TrendingUp,
      link: "/section-1",
      color: "green",
      delay: 0.2
    },
    {
      title: "Section II",
      description: "Les notions clés du management des SI",
      icon: Building2,
      link: "/section-2",
      color: "orange",
      delay: 0.3
    },
    {
      title: "Quiz",
      description: "Testez vos connaissances",
      icon: HelpCircle,
      link: "/quiz",
      color: "purple",
      delay: 0.4
    },
    {
      title: "Cas pratique",
      description: "Exercices pratiques pour l&apos;examen",
      icon: Award,
      link: "/cas-pratique",
      color: "indigo",
      delay: 0.5
    }
  ];

  return (
    <div className="space-y-8 sm:space-y-10 lg:space-y-12 px-2 sm:px-0">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6, ease: "easeOut" }}
        className="text-center"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 sm:mb-6">
          Plan du cours
        </h2>
        <p className="text-gray-600 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
          Explorez chaque section du chapitre pour maîtriser les concepts fondamentaux du MSI
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {sections.map((section, index) => (
          <SectionBlock
              key={index}
              title={section.title}
              description={section.description}
              icon={section.icon}
              link={section.link}
              color={section.color}
              delay={section.delay + 0.7}
            />
        ))}
      </div>
    </div>
  );
};

export default CoursePlan;