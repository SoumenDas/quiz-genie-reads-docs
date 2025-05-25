
const SampleQuiz = () => {
  const sampleQuestions = [
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
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold text-gray-900 mb-4">
          See QuizCraft in Action
        </h3>
        <p className="text-lg text-gray-600">
          Here's a sample quiz generated from a biology textbook chapter
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
        <div className="flex items-center justify-between mb-6">
          <h4 className="text-xl font-semibold text-gray-900">Biology Quiz: Photosynthesis</h4>
          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
            3 Questions
          </span>
        </div>

        <div className="space-y-8">
          {sampleQuestions.map((q, index) => (
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

        <div className="mt-8 pt-6 border-t border-gray-200 text-center">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
            Submit Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default SampleQuiz;
