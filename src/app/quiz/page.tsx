'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, HelpCircle, Clock, CheckCircle, XCircle, RotateCcw, Lightbulb } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

const QuizPage = () => {
  const questions: Question[] = [
    {
      id: 1,
      question: "Quelle année marque l&apos;utilisation du premier ordinateur en entreprise ?",
      options: ["1950", "1954", "1960", "1965"],
      correctAnswer: 1,
      explanation: "En 1954, General Electric utilise pour la première fois un ordinateur dans un contexte de gestion d&apos;entreprise, désigné par l&apos;expression Electronic Data Processing (EDP)."
    },
    {
      id: 2,
      question: "Que signifie l&apos;acronyme MSI ?",
      options: ["Management System Information", "Management des Systèmes d&apos;Information", "Management System Integration", "Management des Services Informatiques"],
      correctAnswer: 1,
      explanation: "MSI signifie Management des Systèmes d&apos;Information (Management Information System en anglais)."
    },
    {
      id: 3,
      question: "Selon le modèle IMC d&apos;Herbert Simon, quelles sont les trois étapes de prise de décision ?",
      options: ["Information, Modélisation, Choix", "Intelligence, Modélisation, Choix", "Information, Management, Contrôle", "Intelligence, Management, Contrôle"],
      correctAnswer: 1,
      explanation: "Le modèle IMC distingue trois étapes : Intelligence (comprendre), Modélisation (traiter les informations), et Choix (sélectionner la meilleure solution)."
    },
    {
      id: 4,
      question: "Que signifie l&apos;acronyme GIGO ?",
      options: ["Good In, Good Out", "Garbage In, Garbage Out", "General Information, General Output", "Global Input, Global Output"],
      correctAnswer: 1,
      explanation: "GIGO signifie &apos;Garbage In, Garbage Out&apos; : si les données sont mauvaises en entrée, le résultat sera tout aussi mauvais."
    },
    {
      id: 5,
      question: "Quelle est la finalité principale du MSI ?",
      options: ["Automatiser les processus", "Réduire les coûts", "Fournir la bonne information, à la bonne personne, au bon moment", "Améliorer la technologie"],
      correctAnswer: 2,
      explanation: "La finalité du MSI est de fournir la bonne information, à la bonne personne, au bon moment pour assister les fonctions opérationnelles, de management et de prise de décision."
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>(new Array(questions.length).fill(-1));
  const [showResults, setShowResults] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
    setShowExplanation(true);
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setShowExplanation(false);
    } else {
      setShowResults(true);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setShowExplanation(selectedAnswers[currentQuestion - 1] !== -1);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers(new Array(questions.length).fill(-1));
    setShowResults(false);
    setShowExplanation(false);
  };

  const calculateScore = () => {
    return selectedAnswers.reduce((score, answer, index) => {
      return score + (answer === questions[index].correctAnswer ? 1 : 0);
    }, 0);
  };

  const getScoreColor = (score: number) => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 80) return 'text-green-600';
    if (percentage >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  if (showResults) {
    const score = calculateScore();
    const percentage = Math.round((score / questions.length) * 100);
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-xl shadow-lg p-8 text-center"
          >
            <div className="mb-6">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h1 className="text-3xl font-bold text-gray-800 mb-2">Quiz terminé !</h1>
              <p className="text-gray-600">Voici vos résultats</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <div className={`text-4xl font-bold mb-2 ${getScoreColor(score)}`}>
                {score}/{questions.length}
              </div>
              <div className={`text-2xl font-semibold ${getScoreColor(score)}`}>
                {percentage}%
              </div>
              <p className="text-gray-600 mt-2">
                {percentage >= 80 ? 'Excellent travail !' : 
                 percentage >= 60 ? 'Bon travail, mais vous pouvez mieux faire.' : 
                 'Il serait bon de revoir le cours.'}
              </p>
            </div>
            
            <div className="flex gap-4 justify-center">
              <button
                onClick={resetQuiz}
                className="flex items-center gap-2 bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors"
              >
                <RotateCcw className="w-5 h-5" />
                Recommencer
              </button>
              
              <Link href="/cas-pratique" className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Cas pratique
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-orange-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-lg p-6 mb-8"
        >
          <div className="flex items-center justify-between mb-4">
            <Link href="/" className="flex items-center gap-2 text-orange-600 hover:text-orange-700">
              <ArrowLeft className="w-5 h-5" />
              Retour au plan
            </Link>
            <div className="flex items-center gap-2 text-gray-600">
              <Clock className="w-4 h-4" />
              10 min
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="bg-orange-100 p-3 rounded-lg">
              <HelpCircle className="w-8 h-8 text-orange-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                Quiz - Chapitre 1 MSI
              </h1>
              <p className="text-gray-600">
                Testez vos connaissances sur les fondements du MSI
              </p>
            </div>
          </div>
          
          {/* Progress bar */}
          <div className="mt-6">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Question {currentQuestion + 1} sur {questions.length}</span>
              <span>{Math.round(((currentQuestion + 1) / questions.length) * 100)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-orange-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
          </div>
        </motion.div>

        {/* Aide-mémoire */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg mb-8"
        >
          <h2 className="text-lg font-semibold text-yellow-800 mb-3 flex items-center gap-2">
            <Lightbulb className="w-5 h-5" />
            Aide-mémoire pour le quiz
          </h2>
          <div className="text-yellow-700 space-y-2 text-sm">
            <p><strong>Chronologie :</strong> "54-60-80 : EDP-MSI-DSI"</p>
            <p><strong>Modèle IMC :</strong> "Je Mange Correctement" (Intelligence-Modélisation-Choix)</p>
            <p><strong>Qualité info :</strong> "PEPIAD" (Pertinence, Exactitude, Précision, Intelligibilité, Actualité, Disponibilité)</p>
            <p><strong>Progression :</strong> "DICS" (Donnée → Information → Connaissance → Sagesse)</p>
          </div>
        </motion.div>

        {/* Question */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentQuestion}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-xl shadow-lg p-8 mb-8"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-6">
              {questions[currentQuestion].question}
            </h2>
            
            <div className="space-y-3 mb-6">
              {questions[currentQuestion].options.map((option, index) => {
                const isSelected = selectedAnswers[currentQuestion] === index;
                const isCorrect = index === questions[currentQuestion].correctAnswer;
                const showAnswer = showExplanation;
                
                let buttonClass = "w-full p-4 text-left border-2 rounded-lg transition-all duration-200 ";
                
                if (showAnswer) {
                  if (isCorrect) {
                    buttonClass += "border-green-500 bg-green-50 text-green-800";
                  } else if (isSelected && !isCorrect) {
                    buttonClass += "border-red-500 bg-red-50 text-red-800";
                  } else {
                    buttonClass += "border-gray-200 bg-gray-50 text-gray-600";
                  }
                } else {
                  if (isSelected) {
                    buttonClass += "border-orange-500 bg-orange-50 text-orange-800";
                  } else {
                    buttonClass += "border-gray-200 hover:border-orange-300 hover:bg-orange-50";
                  }
                }
                
                return (
                  <button
                    key={index}
                    onClick={() => !showExplanation && handleAnswerSelect(index)}
                    disabled={showExplanation}
                    className={buttonClass}
                  >
                    <div className="flex items-center justify-between">
                      <span>{option}</span>
                      {showAnswer && isCorrect && <CheckCircle className="w-5 h-5 text-green-600" />}
                      {showAnswer && isSelected && !isCorrect && <XCircle className="w-5 h-5 text-red-600" />}
                    </div>
                  </button>
                );
              })}
            </div>
            
            {/* Explanation */}
            <AnimatePresence>
              {showExplanation && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg mb-6"
                >
                  <h3 className="font-semibold text-blue-800 mb-2">Explication</h3>
                  <p className="text-blue-700 text-sm leading-relaxed">
                    {questions[currentQuestion].explanation}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex justify-between items-center"
        >
          <button
            onClick={prevQuestion}
            disabled={currentQuestion === 0}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-colors ${
              currentQuestion === 0 
                ? 'text-gray-400 cursor-not-allowed' 
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            <ArrowLeft className="w-5 h-5" />
            Précédent
          </button>
          
          <button
            onClick={nextQuestion}
            disabled={selectedAnswers[currentQuestion] === -1}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-colors ${
              selectedAnswers[currentQuestion] === -1
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-orange-600 text-white hover:bg-orange-700'
            }`}
          >
            {currentQuestion === questions.length - 1 ? 'Terminer' : 'Suivant'}
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default QuizPage;