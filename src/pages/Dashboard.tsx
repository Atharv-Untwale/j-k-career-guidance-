import React from 'react';
import { BookOpen, Calendar, MapPin, TrendingUp, Award, User, Bell, Settings } from 'lucide-react';

const Dashboard = ({ userProfile }) => {
  if (!userProfile) {
    return (
      <div className="min-h-screen py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gray-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <User className="h-10 w-10 text-gray-400" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Welcome to Your Dashboard</h1>
          <p className="text-xl text-gray-600 mb-8">
            Take our aptitude quiz first to get personalized recommendations and unlock your dashboard
          </p>
          <a
            href="/quiz"
            className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
          >
            Take Aptitude Quiz
          </a>
        </div>
      </div>
    );
  }

  const getStreamInfo = (stream) => {
    const streamData = {
      science: {
        title: "Science Stream",
        color: "from-blue-500 to-indigo-600",
        icon: "🔬"
      },
      arts: {
        title: "Arts & Humanities", 
        color: "from-green-500 to-teal-600",
        icon: "📚"
      },
      commerce: {
        title: "Commerce Stream",
        color: "from-purple-500 to-pink-600", 
        icon: "💼"
      },
      vocational: {
        title: "Vocational Training",
        color: "from-orange-500 to-red-600",
        icon: "⚙️"
      }
    };
    return streamData[stream];
  };

  const streamInfo = getStreamInfo(userProfile.recommendedStream);

  const upcomingDeadlines = [
    { title: "University of Kashmir Admission", date: "April 30, 2024", type: "admission" },
    { title: "JEE Main Registration", date: "March 16, 2024", type: "entrance" },
    { title: "Merit Scholarship Application", date: "February 28, 2024", type: "scholarship" }
  ];

  const recommendedColleges = [
    { name: "University of Kashmir", location: "Srinagar", match: "95%" },
    { name: "NIT Srinagar", location: "Srinagar", match: "88%" },
    { name: "Government College Srinagar", location: "Srinagar", match: "92%" }
  ];

  const quickStats = [
    { icon: BookOpen, label: "Recommended Stream", value: streamInfo.title, color: "bg-blue-100 text-blue-600" },
    { icon: MapPin, label: "Nearby Colleges", value: "12 Found", color: "bg-green-100 text-green-600" },
    { icon: Calendar, label: "Upcoming Deadlines", value: "3 Important", color: "bg-red-100 text-red-600" },
    { icon: TrendingUp, label: "Career Opportunities", value: "50+ Paths", color: "bg-purple-100 text-purple-600" }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Your Personalized Dashboard</h1>
          <p className="text-gray-600">Track your educational journey and stay updated with important information</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {quickStats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                  <p className="text-xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div className={`p-3 rounded-lg ${stat.color}`}>
                  <stat.icon className="h-6 w-6" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Recommended Stream */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className={`bg-gradient-to-r ${streamInfo.color} p-6 text-white`}>
                <h2 className="text-2xl font-bold mb-2">Your Recommended Path</h2>
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{streamInfo.icon}</span>
                  <div>
                    <h3 className="text-xl font-semibold">{streamInfo.title}</h3>
                    <p className="opacity-90">Best match for your interests and skills</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex gap-4">
                  <a
                    href="/careers"
                    className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
                  >
                    Explore Careers
                  </a>
                  <a
                    href="/colleges"
                    className="bg-gray-100 text-gray-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                  >
                    Find Colleges
                  </a>
                </div>
              </div>
            </div>

            {/* Recommended Colleges */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <MapPin className="mr-2 h-5 w-5 text-indigo-600" />
                Recommended Colleges
              </h2>
              <div className="space-y-4">
                {recommendedColleges.map((college, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <h3 className="font-semibold text-gray-900">{college.name}</h3>
                      <p className="text-gray-600 flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {college.location}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                        {college.match} Match
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <a
                href="/colleges"
                className="block text-center bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors mt-4"
              >
                View All Colleges
              </a>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Upcoming Deadlines */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <Bell className="mr-2 h-5 w-5 text-red-600" />
                Upcoming Deadlines
              </h2>
              <div className="space-y-4">
                {upcomingDeadlines.map((deadline, index) => (
                  <div key={index} className="border-l-4 border-red-400 pl-4 pb-4">
                    <h3 className="font-semibold text-gray-900">{deadline.title}</h3>
                    <p className="text-red-600 font-medium">{deadline.date}</p>
                    <span className={`inline-block px-2 py-1 rounded text-xs font-medium mt-1 ${
                      deadline.type === 'admission' ? 'bg-blue-100 text-blue-800' :
                      deadline.type === 'entrance' ? 'bg-purple-100 text-purple-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {deadline.type.charAt(0).toUpperCase() + deadline.type.slice(1)}
                    </span>
                  </div>
                ))}
              </div>
              <a
                href="/timeline"
                className="block text-center bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors mt-4"
              >
                View Full Timeline
              </a>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <Settings className="mr-2 h-5 w-5 text-gray-600" />
                Quick Actions
              </h2>
              <div className="space-y-3">
                <button className="w-full text-left p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <span className="font-medium">Retake Aptitude Quiz</span>
                </button>
                <button className="w-full text-left p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <span className="font-medium">Update Preferences</span>
                </button>
                <button className="w-full text-left p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <span className="font-medium">Download Report</span>
                </button>
                <button className="w-full text-left p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <span className="font-medium">Contact Counselor</span>
                </button>
              </div>
            </div>

            {/* Achievement Badge */}
            <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-2xl p-6 text-white text-center">
              <Award className="h-12 w-12 mx-auto mb-3" />
              <h3 className="text-lg font-bold mb-2">Profile Complete!</h3>
              <p className="text-sm opacity-90">
                You've completed your career assessment. Keep exploring to make the best choice!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;