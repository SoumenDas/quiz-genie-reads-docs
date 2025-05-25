
import { useState } from "react";
import { Share, Settings, Users, Copy, Check } from "lucide-react";

interface Question {
  question: string;
  options: string[];
  correct: number;
}

interface Quiz {
  id: string;
  title: string;
  questions: Question[];
  difficulty: 'easy' | 'medium' | 'hard';
  questionCount: number;
  shareUrl?: string;
}

const QuizGenerator = () => {
  const [generatedQuiz, setGeneratedQuiz] = useState<Quiz | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [showPersonalization, setShowPersonalization] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [copied, setCopied] = useState(false);
  
  // Personalization settings
  const [difficulty, setDifficulty] = useState<'easy' | 'medium' | 'hard'>('medium');
  const [questionCount, setQuestionCount] = useState(5);
  const [quizTitle, setQuizTitle] = useState('');

  const sampleQuiz: Quiz = {
    id: 'sample-1',
    title: 'Biology Quiz: Photosynthesis',
    difficulty: 'medium',
    questionCount: 3,
    questions: [
      {
        question: "What is the main function of photosynthesis in plants?",
        options: [
          "To produce oxygen for animals",
          "To convert sunlight into chemical energy",
          "To absorb water from soil",
          "To release carbon dioxide"
        ],
        correct: 1
      },
      {
        question: "Which part of the plant cell contains chlorophyll?",
        options: [
          "Nucleus",
          "Mitochondria", 
          "Chloroplasts",
          "Cell wall"
        ],
        correct: 2
      },
      {
        question: "What gas do plants absorb during photosynthesis?",
        options: [
          "Oxygen",
          "Nitrogen",
          "Carbon dioxide",
          "Hydrogen"
        ],
        correct: 2
      }
    ],
    shareUrl: 'https://quizcraft.app/quiz/sample-1'
  };

  const handleGenerateQuiz = () => {
    setIsGenerating(true);
    // Simulate quiz generation with personalization
    setTimeout(() => {
      const personalizedQuiz = {
        ...sampleQuiz,
        title: quizTitle || sampleQuiz.title,
        difficulty,
        questionCount,
        id: `quiz-${Date.now()}`,
        shareUrl: `https://quizcraft.app/quiz/quiz-${Date.now()}`
      };
      setGeneratedQuiz(personalizedQuiz);
      setIsGenerating(false);
    }, 3000);
  };

  const handleShare = () => {
    setShowShareModal(true);
  };

  const copyShareUrl = () => {
    if (generatedQuiz?.shareUrl) {
      navigator.clipboard.writeText(generatedQuiz.shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
        <div className="p-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-gray-900">
              Generate Your Quiz
            </h3>
            <button
              onClick={() => setShowPersonalization(!showPersonalization)}
              className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium"
            >
              <Settings className="h-5 w-5" />
              <span>Personalize</span>
            </button>
          </div>

          {/* Personalization Panel */}
          {showPersonalization && (
            <div className="mb-8 p-6 bg-gray-50 rounded-lg border">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Quiz Settings</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Quiz Title
                  </label>
                  <input
                    type="text"
                    value={quizTitle}
                    onChange={(e) => setQuizTitle(e.target.value)}
                    placeholder="Enter custom quiz title"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Number of Questions
                  </label>
                  <select
                    value={questionCount}
                    onChange={(e) => setQuestionCount(Number(e.target.value))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value={3}>3 Questions</option>
                    <option value={5}>5 Questions</option>
                    <option value={10}>10 Questions</option>
                    <option value={15}>15 Questions</option>
                    <option value={20}>20 Questions</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Difficulty Level
                  </label>
                  <select
                    value={difficulty}
                    onChange={(e) => setDifficulty(e.target.value as 'easy' | 'medium' | 'hard')}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          <div className="text-center mb-8">
            <button
              onClick={handleGenerateQuiz}
              disabled={isGenerating}
              className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
            >
              {isGenerating ? 'Generating Quiz...' : 'Generate Personalized Quiz'}
            </button>
          </div>

          {/* Generated Quiz Display */}
          {generatedQuiz && (
            <div className="border-t border-gray-200 pt-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900">{generatedQuiz.title}</h4>
                  <div className="flex items-center space-x-4 mt-2">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {generatedQuiz.questionCount} Questions
                    </span>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      generatedQuiz.difficulty === 'easy' ? 'bg-green-100 text-green-800' :
                      generatedQuiz.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {generatedQuiz.difficulty.charAt(0).toUpperCase() + generatedQuiz.difficulty.slice(1)}
                    </span>
                  </div>
                </div>
                <button
                  onClick={handleShare}
                  className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  <Share className="h-4 w-4" />
                  <span>Share Quiz</span>
                </button>
              </div>

              <div className="space-y-6">
                {generatedQuiz.questions.map((q, index) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-6">
                    <h5 className="font-semibold text-gray-900 mb-4">
                      {index + 1}. {q.question}
                    </h5>
                    <div className="space-y-2">
                      {q.options.map((option, optionIndex) => (
                        <label key={optionIndex} className="flex items-center space-x-3 cursor-pointer hover:bg-gray-50 p-2 rounded">
                          <input
                            type="radio"
                            name={`question-${index}`}
                            className="text-blue-600 focus:ring-blue-500"
                          />
                          <span className="text-gray-700">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Progress Indicator */}
          {isGenerating && (
            <div className="mt-8 p-6 bg-blue-50 rounded-lg">
              <div className="flex items-center justify-center space-x-3">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
                <span className="text-blue-700 font-medium">
                  Generating {questionCount} {difficulty} questions...
                </span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Share Modal */}
      {showShareModal && generatedQuiz && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Share Quiz</h3>
              <button
                onClick={() => setShowShareModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                ×
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Share with Students
                </label>
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    value={generatedQuiz.shareUrl}
                    readOnly
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-600"
                  />
                  <button
                    onClick={copyShareUrl}
                    className="flex items-center space-x-1 bg-blue-600 text-white px-3 py-2 rounded-md hover:bg-blue-700 transition-colors"
                  >
                    {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    <span>{copied ? 'Copied!' : 'Copy'}</span>
                  </button>
                </div>
              </div>
              
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Users className="h-4 w-4" />
                <span>Students can access this quiz anytime with the link</span>
              </div>
              
              <div className="flex space-x-3 pt-4">
                <button
                  onClick={() => setShowShareModal(false)}
                  className="flex-1 bg-gray-200 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-300 transition-colors"
                >
                  Close
                </button>
                <button className="flex-1 bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors">
                  Send via Email
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizGenerator;
