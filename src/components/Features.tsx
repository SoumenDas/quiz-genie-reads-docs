
const Features = () => {
  const features = [
    {
      icon: "🎯",
      title: "Smart Question Generation",
      description: "AI analyzes your content and creates relevant, engaging questions that test comprehension and retention."
    },
    {
      icon: "⚡",
      title: "Instant Results",
      description: "Generate complete quizzes in seconds from any URL or PDF document. No manual question writing required."
    },
    {
      icon: "🎨",
      title: "Personalized Quizzes",
      description: "Customize difficulty levels, question count, and quiz titles to match your students' needs and learning objectives."
    },
    {
      icon: "📤",
      title: "Easy Sharing",
      description: "Share quizzes instantly with students through shareable links. No accounts required for students to take quizzes."
    },
    {
      icon: "📊",
      title: "Progress Tracking",
      description: "Monitor student performance with detailed analytics and identify areas that need more attention."
    },
    {
      icon: "📱",
      title: "Mobile Friendly",
      description: "Students can take quizzes on any device. Perfect for homework, classroom activities, or self-study."
    }
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Why Teachers & Parents Love QuizCraft
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Powerful features designed to make learning more effective and assessment creation effortless
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h4>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
