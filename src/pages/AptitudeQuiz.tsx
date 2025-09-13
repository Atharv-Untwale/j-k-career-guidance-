import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, ChevronLeft, Brain, Award, BookOpen } from 'lucide-react';

const AptitudeQuiz = ({ setUserProfile }) => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: 1,
      question: "What type of activities do you enjoy most?",
      options: [
        { text: "Working with numbers and data", stream: "science", weight: 3 },
        { text: "Reading and writing creatively", stream: "arts", weight: 3 },
        { text: "Understanding how businesses work", stream: "commerce", weight: 3 },
        { text: "Working with hands-on projects", stream: "vocational", weight: 3 }
      ]
    },
    {
      id: 2,
      question: "Which subject interests you the most?",
      options: [
        { text: "Mathematics and Physics", stream: "science", weight: 4 },
        { text: "History and Literature", stream: "arts", weight: 4 },
        { text: "Economics and Business Studies", stream: "commerce", weight: 4 },
        { text: "Computer Applications and Skills", stream: "vocational", weight: 4 }
      ]
    },
    {
      id: 3,
      question: "What kind of career appeals to you?",
      options: [
        { text: "Engineer, Doctor, or Scientist", stream: "science", weight: 5 },
        { text: "Teacher, Journalist, or Civil Servant", stream: "arts", weight: 5 },
        { text: "Banker, Accountant, or Entrepreneur", stream: "commerce", weight: 5 },
        { text: "Technician, Designer, or Skilled Craftsperson", stream: "vocational", weight: 5 }
      ]
    },
    {
      id: 4,
      question: "How do you prefer to solve problems?",
      options: [
        { text: "Using logical reasoning and formulas", stream: "science", weight: 3 },
        { text: "Through discussion and research", stream: "arts", weight: 3 },
        { text: "By analyzing costs and benefits", stream: "commerce", weight: 3 },
        { text: "Through practical, hands-on approach", stream: "vocational", weight: 3 }
      ]
    },
    {
      id: 5,
      question: "What motivates you most?",
      options: [
        { text: "Discovering new things and innovations", stream: "science", weight: 3 },
        { text: "Helping society and making a difference", stream: "arts", weight: 3 },
        { text: "Financial growth and business success", stream: "commerce", weight: 3 },
        { text: "Creating something with my own skills", stream: "vocational", weight: 3 }
      ]
    }
  ];

  const handleAnswer = (option) => {
    const newAnswers = [...answers, option];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate results
      const streamScores = {
        science: 0,
        arts: 0,
        commerce: 0,
        vocational: 0
      };

      newAnswers.forEach(answer => {
        streamScores[answer.stream] += answer.weight;
      });

      const recommendedStream = Object.keys(streamScores).reduce((a, b) => 
        streamScores[a] > streamScores[b] ? a : b
      );

      const profile = {
        recommendedStream,
        scores: streamScores,
        answers: newAnswers
      };

      setUserProfile(profile);
      setShowResults(true);
    }
  };

  const goBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setAnswers(answers.slice(0, -1));
    }
  };

  const getStreamInfo = (stream) => {
    const streamData = {
      science: {
        title: "Science Stream",
        description: "Perfect for analytical minds who love problem-solving",
        careers: ["Engineering", "Medicine", "Research", "Technology", "Environmental Science"],
        colleges: ["NIT Srinagar", "SKUAST", "Government Medical College"],
        color: "from-blue-500 to-indigo-600"
      },
      arts: {
        title: "Arts & Humanities",
        description: "Ideal for creative and socially conscious individuals",
        careers: ["Civil Services", "Teaching", "Journalism", "Social Work", "Law"],
        colleges: ["University of Kashmir", "University of Jammu", "Government Colleges"],
        color: "from-green-500 to-teal-600"
      },
      commerce: {
        title: "Commerce Stream",
        description: "Great for business-minded and entrepreneurial students",
        careers: ["Banking", "CA/CS", "Business Management", "Finance", "Marketing"],
        colleges: ["Government Commerce Colleges", "University Business Schools"],
        color: "from-purple-500 to-pink-600"
      },
      vocational: {
        title: "Vocational Training",
        description: "Perfect for hands-on learners and skill-based careers",
        careers: ["IT Support", "Digital Marketing", "Hospitality", "Tourism", "Crafts"],
        colleges: ["Government Polytechnics", "ITIs", "Skill Development Centers"],
        color: "from-orange-500 to-red-600"
      }
    };
    return streamData[stream];
  };

  if (showResults) {
    const profile = {
      recommendedStream: Object.keys(answers.reduce((acc, answer) => {
        acc[answer.stream] = (acc[answer.stream] || 0) + answer.weight;
        return acc;
      }, {})).reduce((a, b) => 
        answers.reduce((acc, answer) => {
          acc[answer.stream] = (acc[answer.stream] || 0) + answer.weight;
          return acc;
        }, {})[a] > answers.reduce((acc, answer) => {
          acc[answer.stream] = (acc[answer.stream] || 0) + answer.weight;
          return acc;
        }, {})[b] ? a : b
      )
    };

    const streamInfo = getStreamInfo(profile.recommendedStream);

    return (
      <div className="min-h-screen py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-10 w-10 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Quiz Complete!</h1>
            <p className="text-xl text-gray-600">Here's your personalized recommendation</p>
          </div>

          <div className={`bg-gradient-to-r ${streamInfo.color} rounded-2xl p-8 text-white mb-8`}>
            <h2 className="text-3xl font-bold mb-4">{streamInfo.title}</h2>
            <p className="text-xl mb-6">{streamInfo.description}</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Career Opportunities:</h3>
                <ul className="space-y-1">
                  {streamInfo.careers.map((career, index) => (
                    <li key={index} className="flex items-center">
                      <ChevronRight className="h-4 w-4 mr-2" />
                      {career}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">Top Colleges in J&K:</h3>
                <ul className="space-y-1">
                  {streamInfo.colleges.map((college, index) => (
                    <li key={index} className="flex items-center">
                      <ChevronRight className="h-4 w-4 mr-2" />
                      {college}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/careers')}
              className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors flex items-center justify-center"
            >
              <BookOpen className="mr-2 h-5 w-5" />
              Explore Career Paths
            </button>
            <button
              onClick={() => navigate('/colleges')}
              className="bg-white text-indigo-600 border-2 border-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
            >
              Find Colleges
            </button>
            <button
              onClick={() => navigate('/dashboard')}
              className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              View Dashboard
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Brain className="h-8 w-8 text-indigo-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Career Aptitude Assessment</h1>
          <p className="text-xl text-gray-600">Discover your ideal academic stream and career path</p>
        </div>

        <div className="bg-gray-200 rounded-full h-3 mb-8">
          <div 
            className="bg-indigo-600 h-3 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          ></div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="mb-6">
            <span className="text-sm text-indigo-600 font-semibold">
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <h2 className="text-2xl font-bold text-gray-900 mt-2">
              {questions[currentQuestion].question}
            </h2>
          </div>

          <div className="space-y-4">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                className="w-full text-left p-6 border-2 border-gray-200 rounded-xl hover:border-indigo-300 hover:bg-indigo-50 transition-all duration-200 group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-lg text-gray-900 group-hover:text-indigo-900">
                    {option.text}
                  </span>
                  <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-indigo-600" />
                </div>
              </button>
            ))}
          </div>

          {currentQuestion > 0 && (
            <div className="mt-8">
              <button
                onClick={goBack}
                className="flex items-center text-gray-600 hover:text-gray-900 font-semibold"
              >
                <ChevronLeft className="h-5 w-5 mr-1" />
                Previous Question
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AptitudeQuiz;