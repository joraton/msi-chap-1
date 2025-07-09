'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Award, Clock, FileText, Lightbulb, CheckSquare } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

interface Exercise {
  id: number;
  title: string;
  question: string;
  context?: string;
  points: number;
  tips: string[];
  correction: string;
}

const CasPratiquePage = () => {
  const exercises: Exercise[] = [
    {
      id: 1,
      title: "Évolution historique du MSI",
      question: "Analysez l&apos;évolution du rôle des systèmes d&apos;information dans les organisations depuis 1954. Quels sont les facteurs clés qui ont contribué à cette évolution ?",
      context: "Une entreprise industrielle souhaite comprendre comment optimiser son système d&apos;information pour améliorer sa compétitivité.",
      points: 15,
      tips: [
        "Identifiez les 3 grandes périodes : EDP, MSI, DSI",
        "Analysez les facteurs technologiques et organisationnels",
        "Expliquez le passage d&apos;une approche technique à une approche informationnelle",
        "Évoquez l&apos;émergence des SI stratégiques"
      ],
      correction: "L&apos;évolution du MSI s&apos;articule autour de plusieurs phases clés :\n\n1. **1954 - Naissance de l&apos;EDP** : Premier ordinateur en entreprise chez General Electric, automatisation des calculs comptables.\n\n2. **Années 1960 - Émergence du MSI** : Passage d&apos;une vision purement technique (EDP) à une approche informationnelle. Objectif : fournir la bonne information, à la bonne personne, au bon moment.\n\n3. **Années 1980 - Création des DSI** : Reconnaissance de l&apos;importance stratégique des SI, recul des problématiques purement technologiques.\n\n**Facteurs clés d&apos;évolution :**\n- Progrès technologiques (miniaturisation, réseaux)\n- Complexification des organisations\n- Besoin de coordination entre systèmes\n- Émergence de la dimension stratégique des SI\n- Développement des approches méthodologiques"
    },
    {
      id: 2,
      title: "Qualité de l&apos;information",
      question: "Une entreprise constate des erreurs récurrentes dans ses prises de décision. Le directeur suspecte un problème de qualité de l&apos;information. Proposez une grille d&apos;analyse pour évaluer la qualité de l&apos;information et des recommandations d&apos;amélioration.",
      points: 12,
      tips: [
        "Utilisez les 6 critères de qualité de l&apos;information",
        "Appliquez le principe GIGO",
        "Proposez des solutions concrètes",
        "Évoquez les enjeux organisationnels"
      ],
      correction: "**Grille d&apos;analyse de la qualité de l&apos;information :**\n\n**1. Critères d&apos;évaluation :**\n- **Pertinence** : L&apos;information répond-elle aux besoins ?\n- **Exactitude** : Reflète-t-elle la réalité ?\n- **Précision** : Est-elle sans ambiguïté ?\n- **Intelligibilité** : Est-elle compréhensible ?\n- **Actualité** : Est-elle à jour ?\n- **Disponibilité** : Est-elle accessible au bon moment ?\n\n**2. Diagnostic des problèmes :**\n- Application du principe GIGO (Garbage In, Garbage Out)\n- Identification des sources d&apos;erreur\n- Analyse des processus de collecte et traitement\n\n**3. Recommandations :**\n- Mise en place de contrôles qualité\n- Formation des utilisateurs\n- Amélioration des processus de saisie\n- Définition de procédures de validation\n- Mise à jour régulière des données"
    },
    {
      id: 3,
      title: "Modèle IMC et prise de décision",
      question: "Un directeur commercial doit décider du lancement d'un nouveau produit. Appliquez le modèle IMC d'Herbert Simon à cette situation en détaillant chaque étape et les informations nécessaires.",
      context: "L'entreprise dispose d'études de marché, d'analyses concurrentielles et de données financières.",
      points: 12,
      tips: [
        "Détaillez les 3 phases : Intelligence, Modélisation, Choix",
        "Identifiez les informations nécessaires à chaque étape",
        "Montrez la progression logique du processus",
        "Évoquez les outils d'aide à la décision"
      ],
      correction: "**Application du modèle IMC au lancement de produit :**\n\n**1. Phase Intelligence :**\n- **Objectif** : Comprendre la situation\n- **Informations à collecter** :\n  * Études de marché (taille, segments, tendances)\n  * Analyse concurrentielle (offres, prix, positionnement)\n  * Données internes (capacités, ressources, contraintes)\n  * Environnement réglementaire et économique\n\n**2. Phase Modélisation :**\n- **Objectif** : Traiter les informations et identifier les solutions\n- **Activités** :\n  * Analyse SWOT du projet\n  * Modélisation financière (investissements, ROI)\n  * Scénarios de lancement (timing, ciblage, positionnement)\n  * Évaluation des risques\n\n**3. Phase Choix :**\n- **Objectif** : Sélectionner la meilleure option\n- **Critères de décision** :\n  * Rentabilité prévisionnelle\n  * Adéquation avec la stratégie\n  * Faisabilité opérationnelle\n  * Niveau de risque acceptable\n\n**Décision finale** : Lancement/report/abandon avec plan d'action détaillé"
    },
    {
      id: 4,
      title: "Les SI face à la crise sanitaire",
      question: "Analysez le rôle des systèmes d'information pendant la crise sanitaire du Covid-19. Comment les entreprises ont-elles adapté leurs SI pour maintenir leur activité ? Quelles leçons peut-on en tirer pour l'avenir ?",
      context: "La pandémie de Covid-19 a bouleversé le fonctionnement des entreprises, imposant le télétravail massif et la digitalisation accélérée des processus.",
      points: 10,
      tips: [
        "Identifiez les défis techniques et organisationnels",
        "Analysez l'adaptation des SI existants",
        "Évoquez les nouvelles solutions mises en place",
        "Proposez des recommandations pour l'avenir"
      ],
      correction: "**Rôle des SI pendant la crise Covid-19 :**\n\n**1. Défis rencontrés :**\n- Passage brutal au télétravail généralisé\n- Surcharge des infrastructures réseau\n- Sécurisation des accès distants\n- Maintien de la collaboration à distance\n- Continuité des processus métier\n\n**2. Adaptations réalisées :**\n- **Infrastructure** : Renforcement des VPN, migration cloud accélérée\n- **Collaboration** : Déploiement massif d'outils de visioconférence\n- **Processus** : Dématérialisation des workflows\n- **Sécurité** : Mise en place de nouvelles politiques de sécurité\n\n**3. Innovations émergentes :**\n- Applications de traçage et suivi sanitaire\n- Outils de gestion des capacités d'accueil\n- Plateformes de e-commerce renforcées\n- Solutions de signature électronique\n\n**4. Leçons pour l'avenir :**\n- Importance de la résilience des SI\n- Nécessité d'une architecture flexible\n- Rôle stratégique de la transformation digitale\n- Besoin de plans de continuité robustes"
    },
    {
      id: 5,
      title: "Les SI et les illusions - Guerre du Kosovo",
      question: "Analysez le concept de 'domination informationnelle' à travers l'exemple de la guerre du Kosovo (1999). Comment les technologies de l'information peuvent-elles créer des illusions stratégiques ? Quelles leçons en tirer pour les entreprises ?",
      context: "La guerre du Kosovo a été présentée comme la première 'guerre de l'information', où la maîtrise des technologies et de la communication a joué un rôle central.",
      points: 12,
      tips: [
        "Définissez la domination informationnelle",
        "Analysez les illusions technologiques et informationnelles",
        "Établissez des parallèles avec le monde de l'entreprise",
        "Proposez des garde-fous contre ces illusions"
      ],
      correction: "**Analyse de la domination informationnelle - Kosovo 1999 :**\n\n**1. Concept de domination informationnelle :**\n- Contrôle de l'information et de sa diffusion\n- Maîtrise des technologies de communication\n- Influence sur la perception des événements\n- Capacité à façonner l'opinion publique\n\n**2. Illusions identifiées :**\n\n**Illusion technologique :**\n- Croyance en l'infaillibilité des technologies\n- Surestimation des capacités de précision\n- Négligence des facteurs humains\n\n**Illusion informationnelle :**\n- Confusion entre information et connaissance\n- Surinformation vs. compréhension\n- Manipulation de la réalité par les médias\n\n**3. Parallèles en entreprise :**\n- Surinvestissement technologique sans ROI\n- Négligence de la formation des utilisateurs\n- Confusion entre données et intelligence business\n- Risques de désinformation concurrentielle\n\n**4. Garde-fous recommandés :**\n- Validation croisée des informations\n- Formation critique des décideurs\n- Diversification des sources d'information\n- Maintien d'une approche humaine dans l'analyse"
    },
    {
      id: 6,
      title: "Les MSI selon Davenport - Critique de l'obsession technologique",
      question: "Thomas Davenport critique l'obsession technologique des entreprises au détriment de l'information elle-même. Analysez cette critique et proposez une approche équilibrée du management des systèmes d'information.",
      context: "De nombreuses entreprises investissent massivement dans les technologies sans obtenir les bénéfices informationnels escomptés.",
      points: 10,
      tips: [
        "Expliquez la critique de Davenport",
        "Distinguez technologie et information",
        "Analysez les causes de cette obsession",
        "Proposez une approche centrée sur l'information"
      ],
      correction: "**Critique de Davenport - Obsession technologique :**\n\n**1. Analyse de la critique :**\n- **Constat** : Les entreprises privilégient la technologie à l'information\n- **Problème** : Focus sur les moyens plutôt que sur les fins\n- **Conséquence** : ROI décevant des investissements SI\n- **Exemple** : Accumulation de données transactionnelles sans exploitation\n\n**2. Distinction technologie vs. information :**\n\n**Technologie :**\n- Outil, moyen technique\n- Facilite le traitement et le stockage\n- Évolution rapide et coûteuse\n\n**Information :**\n- Contenu, connaissance utile\n- Aide à la prise de décision\n- Valeur ajoutée pour l'organisation\n\n**3. Causes de l'obsession technologique :**\n- Fascination pour l'innovation\n- Pression concurrentielle\n- Méconnaissance des besoins réels\n- Influence des fournisseurs IT\n\n**4. Approche équilibrée recommandée :**\n\n**Démarche centrée information :**\n1. **Audit informationnel** : Identifier les besoins réels\n2. **Cartographie des flux** : Comprendre les circuits d'information\n3. **Analyse de la valeur** : Mesurer l'utilité de chaque information\n4. **Choix technologique** : Sélectionner les outils adaptés\n\n**Principes directeurs :**\n- L'information avant la technologie\n- La simplicité avant la sophistication\n- L'usage avant la performance technique\n- La formation avant l'équipement"
    }
  ];


  const [showCorrection, setShowCorrection] = useState<{ [key: number]: boolean }>({});

  const toggleCorrection = (exerciseId: number) => {
    setShowCorrection(prev => ({
      ...prev,
      [exerciseId]: !prev[exerciseId]
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-lg p-6 mb-8"
        >
          <div className="flex items-center justify-between mb-4">
            <Link href="/" className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700">
              <ArrowLeft className="w-5 h-5" />
              Retour au plan
            </Link>
            <div className="flex items-center gap-2 text-gray-600">
              <Clock className="w-4 h-4" />
              45 min
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="bg-indigo-100 p-3 rounded-lg">
              <Award className="w-8 h-8 text-indigo-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                Cas pratique
              </h1>
              <p className="text-gray-600">
                Exercices pratiques et cas concrets pour l&apos;examen DSCG
              </p>
            </div>
          </div>
        </motion.div>

        {/* Instructions */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8"
        >
          <h2 className="text-lg font-semibold text-blue-800 mb-3">Instructions</h2>
          <ul className="text-blue-700 space-y-2 text-sm">
            <li>• Lisez attentivement chaque énoncé et le contexte fourni</li>
            <li>• Structurez vos réponses en utilisant les concepts du cours</li>
            <li>• Consultez les conseils méthodologiques avant de commencer</li>
            <li>• Vérifiez vos réponses avec les corrections détaillées</li>
          </ul>
        </motion.div>
        
        {/* Aide-mémoire DSCG */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg mb-8"
        >
          <h2 className="text-lg font-semibold text-yellow-800 mb-3 flex items-center gap-2">
            <Lightbulb className="w-5 h-5" />
            Aide-mémoire pour les exercices DSCG
          </h2>
          <div className="grid md:grid-cols-2 gap-4 text-yellow-700 text-sm">
            <div>
              <p className="font-semibold mb-2">Concepts clés :</p>
              <ul className="space-y-1">
                <li>• <strong>EDP-MSI-DSI :</strong> &quot;54-60-80&quot;</li>
                <li>• <strong>IMC :</strong> &quot;Je Mange Correctement&quot;</li>
                <li>• <strong>PEPIAD :</strong> Qualité de l&apos;info</li>
                <li>• <strong>DICS :</strong> Donnée→Sagesse</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold mb-2">Structure de réponse :</p>
              <ul className="space-y-1">
                <li>• Introduction + définitions</li>
                <li>• Développement structuré</li>
                <li>• Exemples concrets</li>
                <li>• Conclusion + recommandations</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Exercices */}
        <div className="space-y-6">
          {exercises.map((exercise, index) => (
            <motion.div
              key={exercise.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              {/* En-tête de l'exercice */}
              <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      Exercice {exercise.id} - {exercise.title}
                    </h3>
                    <div className="flex items-center gap-4 text-indigo-100">
                      <span className="flex items-center gap-1">
                        <Award className="w-4 h-4" />
                        {exercise.points} points
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        15 min
                      </span>
                    </div>
                  </div>
                  <FileText className="w-8 h-8 text-indigo-200" />
                </div>
              </div>

              <div className="p-6">
                {/* Contexte */}
                {exercise.context && (
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg mb-6">
                    <h4 className="font-semibold text-yellow-800 mb-2">Contexte</h4>
                    <p className="text-yellow-700 text-sm leading-relaxed">
                      {exercise.context}
                    </p>
                  </div>
                )}

                {/* Question */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-gray-600" />
                    Énoncé
                  </h4>
                  <p className="text-gray-700 leading-relaxed bg-gray-50 p-4 rounded-lg">
                    {exercise.question}
                  </p>
                </div>

                {/* Conseils méthodologiques */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 text-yellow-500" />
                    Conseils méthodologiques
                  </h4>
                  <ul className="space-y-2">
                    {exercise.tips.map((tip, tipIndex) => (
                      <li key={tipIndex} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckSquare className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bouton correction */}
                <div className="flex justify-center">
                  <button
                    onClick={() => toggleCorrection(exercise.id)}
                    className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    {showCorrection[exercise.id] ? 'Masquer la correction' : 'Voir la correction'}
                  </button>
                </div>

                {/* Correction */}
                {showCorrection[exercise.id] && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-6 bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg"
                  >
                    <h4 className="font-semibold text-green-800 mb-4 flex items-center gap-2">
                      <CheckSquare className="w-5 h-5" />
                      Correction détaillée
                    </h4>
                    <div className="text-green-700 text-sm leading-relaxed whitespace-pre-line">
                      {exercise.correction}
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Navigation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200"
        >
          <Link 
            href="/section-2" 
            className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Section 2
          </Link>
          
          <Link 
            href="/quiz" 
            className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Quiz final
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default CasPratiquePage;