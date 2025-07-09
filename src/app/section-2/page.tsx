'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Building2, Clock, Info, Database, Cpu, Zap, Lightbulb } from 'lucide-react';
import Link from 'next/link';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Section2Page = () => {
  // Données pour le graphique de progression des données
  const dataProgression = [
    { name: 'Données', value: 25 },
    { name: 'Information', value: 50 },
    { name: 'Connaissance', value: 75 },
    { name: 'Sagesse', value: 100 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-lg p-6 mb-8"
        >
          <div className="flex items-center justify-between mb-4">
            <Link href="/" className="flex items-center gap-2 text-purple-600 hover:text-purple-700">
              <ArrowLeft className="w-5 h-5" />
              Retour au plan
            </Link>
            <div className="flex items-center gap-2 text-gray-600">
              <Clock className="w-4 h-4" />
              30 min de lecture
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="bg-purple-100 p-3 rounded-lg">
              <Building2 className="w-8 h-8 text-purple-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                Section II - Les notions clés
              </h1>
              <p className="text-gray-600">
                Information, décision, informatique et technologies de l&apos;information
              </p>
            </div>
          </div>
        </motion.div>

        {/* Contenu */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-8"
        >
          {/* A. Information et décision */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <Info className="w-7 h-7 text-blue-600" />
              A. Information et décision
            </h2>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6 rounded-r-lg">
              <p className="text-blue-700 leading-relaxed font-medium">
                Le cœur de la gestion réside dans la prise de décision. Si de bonnes informations ne garantissent pas 
                de prendre de bonnes décisions, on peut légitimement craindre qu&apos;avec de mauvaises informations, 
                la prise de décision soit défectueuse.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">Les trois familles de décisions selon Igor Ansoff</h3>
            
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h4 className="font-semibold text-red-800 mb-2">Décisions stratégiques</h4>
                <p className="text-red-700 text-sm leading-relaxed">
                  Prises par les dirigeants, conditionnent le long terme, 
                  souvent irréversibles. Concernent l&apos;entreprise et son environnement.
                </p>
              </div>
              
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <h4 className="font-semibold text-orange-800 mb-2">Décisions tactiques</h4>
                <p className="text-orange-700 text-sm leading-relaxed">
                  Concernent la gestion des ressources : obtenir un financement, embaucher.
                </p>
              </div>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h4 className="font-semibold text-green-800 mb-2">Décisions opérationnelles</h4>
                <p className="text-green-700 text-sm leading-relaxed">
                  Concernent la vie courante : lancer un réapprovisionnement, résoudre un conflit client.
                </p>
              </div>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-purple-800 mb-3">Modèle IMC d&apos;Herbert Simon</h3>
              
              {/* Moyen mnémotechnique IMC */}
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg mb-6">
                <h4 className="font-semibold text-yellow-800 mb-2 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5" />
                  Moyen mnémotechnique
                </h4>
                <p className="text-yellow-700 text-sm">
                  <strong>&quot;I.M.C. = Je Mange Correctement&quot;</strong>
                  <br />• <strong>I</strong>ntelligence = <em>J</em>e comprends (identifier le problème)
                  <br />• <strong>M</strong>odélisation = <em>M</em>ange (traiter l&apos;information)
                  <br />• <strong>C</strong>hoix = <em>C</em>orrectement (décider et agir)
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</div>
                  <div>
                    <strong className="text-purple-800">Intelligence :</strong>
                    <span className="text-purple-700"> comprendre en recueillant toutes les informations possibles</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</div>
                  <div>
                    <strong className="text-purple-800">Modélisation :</strong>
                    <span className="text-purple-700"> traiter les informations et rechercher les solutions envisageables</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</div>
                  <div>
                    <strong className="text-purple-800">Choix :</strong>
                    <span className="text-purple-700"> sélectionner la meilleure solution compte tenu des contraintes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Progression des données vers la sagesse */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">De la donnée à la sagesse</h3>
            
            {/* Moyen mnémotechnique DICS */}
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg mb-6">
              <h4 className="font-semibold text-yellow-800 mb-2 flex items-center gap-2">
                <Lightbulb className="w-5 h-5" />
                Moyen mnémotechnique
              </h4>
              <p className="text-yellow-700 text-sm">
                <strong>&quot;D.I.C.S. = Dans l&apos;Information, Chercher la Sagesse&quot;</strong>
                <br />• <strong>D</strong>onnée → <strong>I</strong>nformation → <strong>C</strong>onnaissance → <strong>S</strong>agesse
                <br />• Plus on monte dans la pyramide, plus la valeur ajoutée augmente
              </p>
            </div>
            
            <div className="mb-6">
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={dataProgression}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                  <h4 className="font-semibold text-red-800 mb-2">Donnée (Data)</h4>
                  <p className="text-red-700 text-sm">
                    Résultat direct d&apos;une mesure. Une donnée seule ne permet pas de prendre une décision.
                  </p>
                </div>
                
                <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-lg">
                  <h4 className="font-semibold text-orange-800 mb-2">Information</h4>
                  <p className="text-orange-700 text-sm">
                    Donnée à laquelle un sens et une interprétation ont été attribués. 
                    Permet de prendre une décision opérationnelle.
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2">Connaissance</h4>
                  <p className="text-yellow-700 text-sm">
                    Résultat d&apos;une réflexion basée sur l&apos;expérience, les idées, les valeurs. 
                    Permet de confronter les informations au contexte.
                  </p>
                </div>
                
                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Sagesse</h4>
                  <p className="text-green-700 text-sm">
                    État d&apos;esprit de discernement final. Faculté rencontrée chez les responsables seniors, 
                    issue d&apos;une grande expérience.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Qualité de l'information */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Qualité de l&apos;information</h3>
            
            <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6 rounded-r-lg">
              <h4 className="font-semibold text-red-800 mb-2">Principe GIGO</h4>
              <p className="text-red-700">
                <strong>Garbage In, Garbage Out :</strong> Si les données sont mauvaises en entrée, 
                le résultat sera tout aussi mauvais. Ne pas confondre précision et validité.
              </p>
            </div>
            
            {/* Moyen mnémotechnique pour les critères */}
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg mb-6">
              <h4 className="font-semibold text-yellow-800 mb-2 flex items-center gap-2">
                <Lightbulb className="w-5 h-5" />
                Moyen mnémotechnique
              </h4>
              <p className="text-yellow-700 text-sm">
                <strong>&quot;PEPIAD = Papa Et Petit Indien Adorent Danser&quot;</strong>
                <br />• <strong>P</strong>ertinence • <strong>E</strong>xactitude • <strong>P</strong>récision
                <br />• <strong>I</strong>ntelligibilité • <strong>A</strong>ctualité • <strong>D</strong>isponibilité
              </p>
            </div>
            
            <h4 className="font-semibold text-gray-800 mb-4">Critères de qualité d&apos;une information</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700"><strong>Pertinente :</strong> répond aux besoins</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700"><strong>Exacte :</strong> rend compte de la réalité</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-700"><strong>Précise :</strong> sans ambiguïté</span>
                </li>
              </ul>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-700"><strong>Intelligible :</strong> compréhensible</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-gray-700"><strong>Actuelle :</strong> mise à jour</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span className="text-gray-700"><strong>Disponible :</strong> accessible au bon moment</span>
                </li>
              </ul>
            </div>
          </div>

          {/* C. L'informatique */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <Cpu className="w-7 h-7 text-indigo-600" />
              C. L&apos;informatique
            </h2>
            
            <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 mb-6 rounded-r-lg">
              <p className="text-indigo-700 leading-relaxed">
                L&apos;informatique est un élément majeur des systèmes d&apos;information mais il ne faut surtout pas
        confondre ces deux notions. L&apos;informatique désigne la science du traitement rationnel de l&apos;information, 
                notamment par machine électronique.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">Propriétés des technologies de l&apos;information</h3>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Zap className="w-6 h-6 text-yellow-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Compression du temps</h4>
                    <p className="text-gray-600 text-sm">Vitesse de traitement supérieure aux capacités humaines</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Database className="w-6 h-6 text-blue-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Capacités de stockage</h4>
                    <p className="text-gray-600 text-sm">Supports magnétiques (DD) et optiques (DVD). Un DVD peut contenir 24 encyclopédies !</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Building2 className="w-6 h-6 text-green-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Compression de l&apos;espace</h4>
                    <p className="text-gray-600 text-sm">Transmission d&apos;énormes quantités d&apos;informations en tout point du globe</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Cpu className="w-6 h-6 text-purple-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Flexibilité d&apos;usage</h4>
                    <p className="text-gray-600 text-sm">Grâce à la numérisation et au codage binaire</p>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">Composants des technologies de l&apos;information</h3>
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="bg-blue-100 p-3 rounded-lg mb-3 mx-auto w-fit">
                    <Cpu className="w-8 h-8 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Éléments matériels</h4>
                  <p className="text-gray-600 text-sm">Ordinateurs, périphériques, stations de travail, serveurs</p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 p-3 rounded-lg mb-3 mx-auto w-fit">
                    <Database className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Éléments immatériels</h4>
                  <p className="text-gray-600 text-sm">Logiciels, bases de données</p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-100 p-3 rounded-lg mb-3 mx-auto w-fit">
                    <Building2 className="w-8 h-8 text-purple-600" />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Réseaux</h4>
                  <p className="text-gray-600 text-sm">Lignes téléphoniques, câbles, fibres optiques</p>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">Mesure de l&apos;information</h3>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6 rounded-r-lg">
              <h4 className="font-semibold text-blue-800 mb-3">Le bit (binary digit)</h4>
              <p className="text-blue-700 mb-3">
                Unité de base de l&apos;information. Ne peut prendre que deux valeurs : 0 ou 1.
              </p>
              <div className="bg-white p-4 rounded-lg">
                <p className="text-blue-800 text-sm mb-2"><strong>Exemples de combinaisons :</strong></p>
                <ul className="text-blue-700 text-sm space-y-1">
                  <li>• 2 bits = 4 possibilités (00, 01, 10, 11) = 2²</li>
                  <li>• 3 bits = 8 possibilités (000, 001, 010, 011, 100, 101, 110, 111) = 2³</li>
                  <li>• 8 bits = 1 octet = 256 possibilités = 2⁸</li>
                </ul>
              </div>
            </div>

            <h4 className="font-semibold text-gray-800 mb-4">Unités de stockage</h4>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 p-3 text-left">Unité</th>
                    <th className="border border-gray-300 p-3 text-left">Symbole</th>
                    <th className="border border-gray-300 p-3 text-left">Équivalence</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-3">Octet</td>
                    <td className="border border-gray-300 p-3">o</td>
                    <td className="border border-gray-300 p-3">8 bits</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3">Kilooctet</td>
                    <td className="border border-gray-300 p-3">Ko</td>
                    <td className="border border-gray-300 p-3">1 000 o</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3">Mégaoctet</td>
                    <td className="border border-gray-300 p-3">Mo</td>
                    <td className="border border-gray-300 p-3">1 000 Ko</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3">Gigaoctet</td>
                    <td className="border border-gray-300 p-3">Go</td>
                    <td className="border border-gray-300 p-3">1 000 Mo</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3">Téraoctet</td>
                    <td className="border border-gray-300 p-3">To</td>
                    <td className="border border-gray-300 p-3">1 000 Go</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3">Pétaoctet</td>
                    <td className="border border-gray-300 p-3">Po</td>
                    <td className="border border-gray-300 p-3">1 000 To</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3">Exaoctet</td>
                    <td className="border border-gray-300 p-3">Eo</td>
                    <td className="border border-gray-300 p-3">1 000 Po</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3">Zetaoctet</td>
                    <td className="border border-gray-300 p-3">Zo</td>
                    <td className="border border-gray-300 p-3">1 000 Eo</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3">Yottaoctet</td>
                    <td className="border border-gray-300 p-3">Yo</td>
                    <td className="border border-gray-300 p-3">1 000 Zo</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg mt-6">
              <h4 className="font-semibold text-yellow-800 mb-2">💡 Exemple pratique</h4>
              <p className="text-yellow-700 text-sm">
                <strong>Google Mail :</strong> 15 Go par utilisateur × 200 millions d&apos;utilisateurs = 3 000 000 000 Go = 3 millions de To = 3 000 Po
              </p>
            </div>
          </div>
        </motion.div>

        {/* Navigation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex justify-between items-center mt-8"
        >
          <Link href="/section-1" className="flex items-center gap-2 text-gray-600 hover:text-gray-800">
            <ArrowLeft className="w-5 h-5" />
            Section I
          </Link>
          
          <Link href="/quiz" className="flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors">
            Quiz
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Section2Page;