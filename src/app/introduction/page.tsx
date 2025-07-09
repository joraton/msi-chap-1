'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, BookOpen, Clock, Lightbulb } from 'lucide-react';
import Link from 'next/link';

const IntroductionPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-lg p-6 mb-8"
        >
          <div className="flex items-center justify-between mb-4">
            <Link href="/" className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
              <ArrowLeft className="w-5 h-5" />
              Retour au plan
            </Link>
            <div className="flex items-center gap-2 text-gray-600">
              <Clock className="w-4 h-4" />
              15 min de lecture
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="bg-blue-100 p-3 rounded-lg">
              <BookOpen className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                Introduction au MSI
              </h1>
              <p className="text-gray-600">
                Découvrez les fondements du management des systèmes d&apos;information
              </p>
            </div>
          </div>
        </motion.div>

        {/* Contenu */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-xl shadow-lg p-8 mb-8"
        >
          <div className="prose prose-lg max-w-none">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">Définition</h3>
              <p className="text-blue-700 leading-relaxed">
                Le management des systèmes d&apos;information (MSI) est une discipline universitaire qui est apparue dans les années 1960
            et qui a pris, au fil du temps, une importance de plus en plus forte, reflet du rôle des systèmes d&apos;information dans les organisations.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">Contexte historique</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              L&apos;histoire du MSI est marquée par des innovations technologiques mais également par des réflexions, 
              des recherches et des démarches méthodiques qui vont expliquer la place que cette discipline occupe actuellement.
            </p>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8 rounded-r-lg">
              <h3 className="text-xl font-semibold text-green-800 mb-3">Points clés à retenir</h3>
              <ul className="text-green-700 space-y-2">
                <li>• Discipline née dans les années 1960</li>
                <li>• Importance croissante dans les organisations</li>
                <li>• Évolution liée aux innovations technologiques</li>
                <li>• Approche méthodique et scientifique</li>
              </ul>
            </div>

            {/* Moyen mnémotechnique général */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8 rounded-r-lg"
            >
              <h3 className="text-xl font-semibold text-yellow-800 mb-4 flex items-center gap-2">
                <Lightbulb className="w-6 h-6" />
                Moyen mnémotechnique du chapitre
              </h3>
              <div className="bg-white p-4 rounded-lg">
                <p className="text-yellow-700 font-medium mb-3">
                  <strong>&quot;MSI = Maîtriser les Systèmes Intelligemment&quot;</strong>
                </p>
                <div className="text-yellow-600 text-sm space-y-2">
                  <p>• <strong>M</strong>aîtriser : Contrôler l&apos;évolution (EDP→MSI→DSI)</p>
              <p>• <strong>S</strong>ystèmes : Organiser l&apos;information (DICS, PEPIAD)</p>
                  <p>• <strong>I</strong>ntelligemment : Décider efficacement (IMC)</p>
                </div>
              </div>
            </motion.div>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">Objectifs d&apos;apprentissage</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              À l&apos;issue de ce chapitre, vous serez capable de :
            </p>
            <ul className="text-gray-700 space-y-2 mb-6">
              <li>• Comprendre l&apos;évolution historique du MSI</li>
              <li>• Identifier les notions clés de la discipline</li>
              <li>• Distinguer information, données et connaissances</li>
              <li>• Appréhender les enjeux technologiques actuels</li>
            </ul>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-yellow-800 mb-3">Structure du chapitre</h3>
              <p className="text-yellow-700 leading-relaxed">
                Ce chapitre se divise en deux grandes parties : la montée en puissance de la discipline MSI 
                et les notions clés que tout gestionnaire doit maîtriser.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Navigation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex justify-between items-center"
        >
          <Link href="/" className="flex items-center gap-2 text-gray-600 hover:text-gray-800">
            <ArrowLeft className="w-5 h-5" />
            Plan du cours
          </Link>
          
          <Link href="/section-1" className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Section I
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default IntroductionPage;