import React, { useState } from 'react';
import { BookOpen, TrendingUp, Users, DollarSign, Clock, MapPin, ChevronRight } from 'lucide-react';

const CareerPathways = () => {
  const [selectedStream, setSelectedStream] = useState('science');

  const pathways = {
    science: {
      title: "Science Stream Careers",
      color: "from-blue-500 to-indigo-600",
      careers: [
        {
          title: "Engineering",
          growth: "High",
          salary: "₹6-25 LPA",
          duration: "4 years",
          description: "Design and build solutions for real-world problems",
          path: "12th Science → JEE → B.Tech → Job/M.Tech → Senior Engineer",
          opportunities: ["Software Engineer", "Civil Engineer", "Mechanical Engineer", "Electronics Engineer"],
          colleges: ["NIT Srinagar", "IIIT Jammu", "Government Engineering Colleges"]
        },
        {
          title: "Medicine",
          growth: "Very High",
          salary: "₹8-50 LPA",
          duration: "5.5 years",
          description: "Heal and serve humanity through medical practice",
          path: "12th Science → NEET → MBBS → Internship → MD/MS → Doctor",
          opportunities: ["General Physician", "Specialist Doctor", "Surgeon", "Medical Researcher"],
          colleges: ["Government Medical College Srinagar", "GMC Jammu", "SKIMS"]
        },
        {
          title: "Research & Technology",
          growth: "High",
          salary: "₹5-30 LPA",
          duration: "3-6 years",
          description: "Advance scientific knowledge and innovation",
          path: "12th Science → B.Sc → M.Sc/M.Tech → PhD → Researcher",
          opportunities: ["Data Scientist", "Research Scientist", "Lab Technician", "Technology Developer"],
          colleges: ["University of Kashmir", "Central University of Kashmir", "IIT Research Centers"]
        }
      ]
    },
    arts: {
      title: "Arts & Humanities Careers",
      color: "from-green-500 to-teal-600",
      careers: [
        {
          title: "Civil Services",
          growth: "Very High",
          salary: "₹7-35 LPA",
          duration: "3 years + preparation",
          description: "Serve the nation and lead public administration",
          path: "12th Arts → Graduation → UPSC → IAS/IPS/IFS → Administrative Officer",
          opportunities: ["IAS Officer", "IPS Officer", "District Collector", "Policy Maker"],
          colleges: ["University of Kashmir", "University of Jammu", "Degree Colleges"]
        },
        {
          title: "Teaching & Education",
          growth: "Stable",
          salary: "₹3-15 LPA",
          duration: "2-4 years",
          description: "Shape future generations through education",
          path: "12th Arts → B.Ed/BA → M.Ed/MA → NET/SET → Professor/Teacher",
          opportunities: ["School Teacher", "College Professor", "Education Administrator", "Academic Writer"],
          colleges: ["Government Colleges of Education", "Universities", "Teacher Training Institutes"]
        },
        {
          title: "Media & Journalism",
          growth: "High",
          salary: "₹4-20 LPA",
          duration: "3 years",
          description: "Inform society and shape public opinion",
          path: "12th Arts → Mass Communication → Internship → Media Job → Senior Journalist",
          opportunities: ["News Reporter", "Editor", "Content Writer", "Digital Media Specialist"],
          colleges: ["University of Kashmir Media Department", "Government Degree Colleges"]
        }
      ]
    },
    commerce: {
      title: "Commerce Stream Careers",
      color: "from-purple-500 to-pink-600",
      careers: [
        {
          title: "Chartered Accountancy",
          growth: "Very High",
          salary: "₹8-50 LPA",
          duration: "3-5 years",
          description: "Master of financial management and auditing",
          path: "12th Commerce → CA Foundation → Articleship → CA Final → Chartered Accountant",
          opportunities: ["CA Practice", "Financial Advisor", "Corporate Finance", "Tax Consultant"],
          colleges: ["ICAI Centers", "Commerce Colleges with CA Coaching"]
        },
        {
          title: "Banking & Finance",
          growth: "High",
          salary: "₹5-25 LPA",
          duration: "3 years",
          description: "Manage money and financial services",
          path: "12th Commerce → B.Com → Bank PO/Clerk → Manager → General Manager",
          opportunities: ["Bank Manager", "Financial Analyst", "Investment Advisor", "Credit Officer"],
          colleges: ["Government Commerce Colleges", "University Commerce Departments"]
        },
        {
          title: "Business Management",
          growth: "High",
          salary: "₹6-30 LPA",
          duration: "3-5 years",
          description: "Lead businesses and drive growth",
          path: "12th Commerce → BBA/B.Com → MBA → Management Trainee → Manager",
          opportunities: ["Business Manager", "Marketing Manager", "HR Manager", "Operations Manager"],
          colleges: ["University Business Schools", "Government Management Colleges"]
        }
      ]
    },
    vocational: {
      title: "Vocational & Skill-Based Careers",
      color: "from-orange-500 to-red-600",
      careers: [
        {
          title: "Information Technology",
          growth: "Very High",
          salary: "₹3-20 LPA",
          duration: "1-3 years",
          description: "Build digital solutions and manage technology",
          path: "12th Any → Diploma/Certificate → Internship → IT Job → Senior Developer",
          opportunities: ["Web Developer", "App Developer", "Network Administrator", "Cybersecurity Specialist"],
          colleges: ["Government Polytechnics", "ITIs", "Computer Centers"]
        },
        {
          title: "Tourism & Hospitality",
          growth: "High",
          salary: "₹2-15 LPA",
          duration: "1-3 years",
          description: "Serve visitors and promote J&K's natural beauty",
          path: "12th Any → Hotel Management/Tourism → Training → Job → Manager",
          opportunities: ["Hotel Manager", "Tour Guide", "Travel Agent", "Event Manager"],
          colleges: ["Government Hotel Management Institutes", "Tourism Colleges"]
        },
        {
          title: "Handicrafts & Arts",
          growth: "Medium",
          salary: "₹2-10 LPA",
          duration: "1-2 years",
          description: "Preserve and promote traditional J&K crafts",
          path: "12th Any → Craft Training → Skill Development → Business/Employment",
          opportunities: ["Craft Artist", "Design Entrepreneur", "Cultural Preservationist", "Export Business"],
          colleges: ["Craft Development Institutes", "Skill Development Centers", "Art Schools"]
        }
      ]
    }
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Career Pathways</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore detailed career paths from government colleges to successful careers in Jammu & Kashmir
          </p>
        </div>

        {/* Stream Selection */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.keys(pathways).map((stream) => (
            <button
              key={stream}
              onClick={() => setSelectedStream(stream)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
                selectedStream === stream
                  ? 'bg-indigo-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-indigo-50 border-2 border-gray-200'
              }`}
            >
              {pathways[stream].title}
            </button>
          ))}
        </div>

        {/* Career Cards */}
        <div className="space-y-8">
          {pathways[selectedStream].careers.map((career, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className={`bg-gradient-to-r ${pathways[selectedStream].color} p-6 text-white`}>
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div>
                    <h2 className="text-3xl font-bold mb-2">{career.title}</h2>
                    <p className="text-lg opacity-90">{career.description}</p>
                  </div>
                  <div className="flex gap-4 mt-4 md:mt-0">
                    <div className="text-center">
                      <div className="flex items-center justify-center bg-white bg-opacity-20 rounded-lg p-2 mb-1">
                        <TrendingUp className="h-5 w-5" />
                      </div>
                      <div className="text-sm">{career.growth}</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center bg-white bg-opacity-20 rounded-lg p-2 mb-1">
                        <DollarSign className="h-5 w-5" />
                      </div>
                      <div className="text-sm">{career.salary}</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center bg-white bg-opacity-20 rounded-lg p-2 mb-1">
                        <Clock className="h-5 w-5" />
                      </div>
                      <div className="text-sm">{career.duration}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div className="grid lg:grid-cols-3 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                      <BookOpen className="mr-2 h-5 w-5 text-indigo-600" />
                      Career Path
                    </h3>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-gray-700 leading-relaxed">{career.path}</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                      <Users className="mr-2 h-5 w-5 text-indigo-600" />
                      Job Opportunities
                    </h3>
                    <ul className="space-y-2">
                      {career.opportunities.map((opportunity, idx) => (
                        <li key={idx} className="flex items-center text-gray-700">
                          <ChevronRight className="h-4 w-4 text-indigo-600 mr-2" />
                          {opportunity}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                      <MapPin className="mr-2 h-5 w-5 text-indigo-600" />
                      Top Colleges in J&K
                    </h3>
                    <ul className="space-y-2">
                      {career.colleges.map((college, idx) => (
                        <li key={idx} className="flex items-center text-gray-700">
                          <ChevronRight className="h-4 w-4 text-indigo-600 mr-2" />
                          {college}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-indigo-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Personalized Guidance?</h3>
          <p className="text-gray-600 mb-6">Take our aptitude quiz to get career recommendations tailored to your interests and skills.</p>
          <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
            Take Aptitude Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default CareerPathways;