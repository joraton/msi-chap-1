'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, TrendingUp, Clock, Calendar, Lightbulb } from 'lucide-react';
import Link from 'next/link';

const Section1Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-lg p-6 mb-8"
        >
          <div className="flex items-center justify-between mb-4">
            <Link href="/" className="flex items-center gap-2 text-green-600 hover:text-green-700">
              <ArrowLeft className="w-5 h-5" />
              Retour au plan
            </Link>
            <div className="flex items-center gap-2 text-gray-600">
              <Clock className="w-4 h-4" />
              25 min de lecture
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="bg-green-100 p-3 rounded-lg">
              <TrendingUp className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                Section I - La montée en puissance de la discipline
              </h1>
              <p className="text-gray-600">
                Histoire et développement du management des systèmes d&apos;information
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
            <h2 className="text-2xl font-bold text-gray-800 mb-6">A. Les premières évocations</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              La notion de système d&apos;information est très ancienne. Elle peut être associée à l&apos;écriture, la comptabilité
            et toutes les démarches humaines visant à collecter, traiter, stocker, puis diffuser de l&apos;information.
            Toutefois, le lien fondamental entre système d&apos;information et technologie impose de restreindre l&apos;approche 
              et de la limiter à une période plus récente.
            </p>

            {/* Timeline */}
            <div className="bg-blue-50 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-blue-800 mb-4 flex items-center gap-2">
                <Calendar className="w-6 h-6" />
                Chronologie historique
              </h3>
              
              {/* Moyen mnémotechnique */}
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg mb-6">
                <h4 className="font-semibold text-yellow-800 mb-2 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5" />
                  Moyen mnémotechnique
                </h4>
                <p className="text-yellow-700 text-sm">
                  <strong>&quot;54-60-80 : EDP-MSI-DSI&quot;</strong> - Retenez cette progression chronologique :
                  <br />• <strong>1954</strong> : <em>E</em>lectronic <em>D</em>ata <em>P</em>rocessing (technique)
                  <br />• <strong>1960s</strong> : <em>M</em>anagement des <em>S</em>ystèmes d&apos;<em>I</em>nformation (informationnel)
                <br />• <strong>1980s</strong> : <em>D</em>irection des <em>S</em>ystèmes d&apos;<em>I</em>nformation (stratégique)
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold min-w-fit">
                    1954
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-2">Le premier ordinateur en entreprise</h4>
                    <p className="text-blue-700 text-sm leading-relaxed">
                      General Electric utilise pour la première fois un ordinateur dans un contexte de gestion d&apos;entreprise.
              On le désignait alors par l&apos;expression Electronic Data Processing (EDP), c&apos;est-à-dire un système 
                      de traitement automatique des données.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold min-w-fit">
                    1960s
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-800 mb-2">Apparition du terme MSI</h4>
                    <p className="text-green-700 text-sm leading-relaxed">
                      La notion de MSI (Management Information System) apparaît aux États-Unis avec une nouvelle vision : 
                      fournir aux gestionnaires les informations dont ils ont besoin pour les fonctions opérationnelles, 
                      de management et de prise de décision.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8 rounded-r-lg">
              <h3 className="text-xl font-semibold text-green-800 mb-3">Définition du MSI</h3>
              <p className="text-green-700 leading-relaxed font-medium">
                &quot;Le MSI désigne un système intégré homme-machine qui fournit de l&apos;information pour assister
              les fonctions opérationnelles, de management et de prise de décision au sein d&apos;une organisation.&quot;
              </p>
              <p className="text-green-600 text-sm mt-3 font-semibold">
                Finalité : fournir la bonne information, à la bonne personne, au bon moment.
              </p>
            </div>

            <h3 className="text-xl font-bold text-gray-800 mb-4">Les deux approches complémentaires</h3>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-purple-800 mb-3">Approche informationnelle</h4>
                <p className="text-purple-700 text-sm leading-relaxed mb-3">
                  Cette approche se focalise sur la qualité des informations à traiter par le système. 
                  L&apos;information est la ressource initiale du processus de prise de décision.
                </p>
                <div className="bg-purple-100 p-3 rounded text-xs text-purple-800">
                  <strong>Concept clé :</strong> INFO LOGICAL - améliorer la qualité des décisions 
                  en améliorant la qualité des informations.
                </div>
              </div>
              
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-orange-800 mb-3">Approche bases de données</h4>
                <p className="text-orange-700 text-sm leading-relaxed mb-3">
                  Cette approche considère que la notion d&apos;utilité n&apos;est pas définissable à l&apos;avance. 
                  Il faut se focaliser sur les phases clés : saisir, traiter, stocker et diffuser les données.
                </p>
                <div className="bg-orange-100 p-3 rounded text-xs text-orange-800">
                  <strong>Principe :</strong> Rendre toute l&apos;information accessible au manager 
                  selon les demandes formulées.
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-6">B. Le développement de la discipline</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Au début des années 1980, de nombreuses entreprises françaises adoptent la dénomination 
              &laquo; direction des systèmes d&apos;information &raquo; (DSI) pour désigner l&apos;ancienne direction informatique. 
              Cela traduit un recul des problématiques technologiques et une mise en avant des aspects informationnels.
            </p>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-yellow-800 mb-3">Évolutions majeures</h3>
              <ul className="text-yellow-700 space-y-2">
                <li>• <strong>Système d&apos;information organisationnel (SIO) :</strong> représenter l&apos;organisation pour en permettre la compréhension et le changement</li>
                <li>• <strong>Systèmes d&apos;information stratégiques :</strong> lien entre stratégie d&apos;entreprise et SI pour acquérir un avantage concurrentiel</li>
                <li>• <strong>Modélisation :</strong> outil préalable à toute démarche de changement organisationnel</li>
              </ul>
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
          <Link href="/introduction" className="flex items-center gap-2 text-gray-600 hover:text-gray-800">
            <ArrowLeft className="w-5 h-5" />
            Introduction
          </Link>
          
          <Link href="/section-2" className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
            Section II
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Section1Page;