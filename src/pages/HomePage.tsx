import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  BookOpen, 
  MapPin, 
  Calendar, 
  Users, 
  TrendingUp, 
  Award,
  Smartphone,
  Wifi,
  ChevronRight,
  Star
} from 'lucide-react';

const HomePage = () => {
  const features = [
    {
      icon: Brain,
      title: 'Smart Aptitude Assessment',
      description: 'AI-powered quizzes to discover your strengths and interests',
      link: '/quiz',
      color: 'bg-blue-500'
    },
    {
      icon: BookOpen,
      title: 'Career Pathway Mapping',
      description: 'Clear roadmaps from courses to careers with job opportunities',
      link: '/careers',
      color: 'bg-green-500'
    },
    {
      icon: MapPin,
      title: 'Government College Directory',
      description: 'Complete information about nearby colleges and programs',
      link: '/colleges',
      color: 'bg-purple-500'
    },
    {
      icon: Calendar,
      title: 'Academic Timeline',
      description: 'Never miss important admission dates and scholarship deadlines',
      link: '/timeline',
      color: 'bg-orange-500'
    }
  ];

  const stats = [
    { icon: Users, value: '50+', label: 'Government Colleges' },
    { icon: BookOpen, value: '200+', label: 'Course Options' },
    { icon: TrendingUp, value: '95%', label: 'Success Rate' },
    { icon: Award, value: '1000+', label: 'Students Guided' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Your Future Starts with the
              <span className="block text-yellow-300">Right Education Choice</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Empowering students in Jammu & Kashmir to make informed decisions about their education and career path through government colleges
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/quiz"
                className="inline-flex items-center bg-yellow-400 text-gray-900 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-yellow-300 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                <Brain className="mr-2 h-6 w-6" />
                Start Your Journey
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/colleges"
                className="inline-flex items-center bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-200"
              >
                <MapPin className="mr-2 h-6 w-6" />
                Explore Colleges
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-16 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-indigo-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform provides comprehensive guidance to help you make the best educational decisions for your future
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Link
                key={index}
                to={feature.link}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-200 group"
              >
                <div className={`${feature.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <div className="flex items-center text-indigo-600 font-semibold group-hover:text-indigo-700">
                  Get Started <ChevronRight className="ml-1 h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Why Choose Government Colleges in J&K?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 rounded-full p-2 mt-1">
                    <Star className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Quality Education at Affordable Cost</h3>
                    <p className="text-gray-600">Access world-class education without the burden of high fees</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 rounded-full p-2 mt-1">
                    <Award className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Recognized Degrees</h3>
                    <p className="text-gray-600">Degrees accepted nationwide for jobs and higher studies</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 rounded-full p-2 mt-1">
                    <Users className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Strong Alumni Network</h3>
                    <p className="text-gray-600">Connect with successful graduates in various fields</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Platform Features</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Smartphone className="h-6 w-6" />
                  <span>Mobile & Web Access</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Wifi className="h-6 w-6" />
                  <span>Offline-First Design</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Brain className="h-6 w-6" />
                  <span>AI-Powered Recommendations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <BookOpen className="h-6 w-6" />
                  <span>Multilingual Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-indigo-600 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Shape Your Future?
          </h2>
          <p className="text-xl mb-8">
            Join thousands of students who've discovered their perfect career path through government colleges
          </p>
          <Link
            to="/quiz"
            className="inline-flex items-center bg-yellow-400 text-gray-900 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-yellow-300 transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            <Brain className="mr-2 h-6 w-6" />
            Take the Aptitude Quiz Now
            <ChevronRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;