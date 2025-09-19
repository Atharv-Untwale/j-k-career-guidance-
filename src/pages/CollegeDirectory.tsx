import React, { useState } from 'react';
import { MapPin, Phone, Mail, Globe, Users, BookOpen, Award, Filter, Search, Star } from 'lucide-react';

const CollegeDirectory = () => {
  const [selectedDistrict, setSelectedDistrict] = useState('all');
  const [selectedStream, setSelectedStream] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const colleges = [
    {
      name: "University of Kashmir",
      location: "Srinagar",
      district: "srinagar",
      type: "University",
      established: "1948",
      rating: 4.5,
      streams: ["science", "arts", "commerce"],
      courses: ["B.Sc", "B.A", "B.Com", "M.Sc", "M.A", "MBA", "Ph.D"],
      facilities: ["Library", "Hostels", "Labs", "Sports Complex", "Wi-Fi"],
      fees: "₹5,000 - ₹15,000",
      contact: {
        phone: "+91 (194) 227 2096",
        email: "info@kashmiruniversity.net",
        website: "kashmiruniversity.net"
      },
      cutoff: "65% for general category",
      scholarships: ["Merit Scholarship", "SC/ST Scholarship", "Minority Scholarship"]
    },
    {
      name: "University of Jammu",
      location: "Jammu",
      district: "jammu",
      type: "University", 
      established: "1969",
      rating: 4.3,
      streams: ["science", "arts", "commerce"],
      courses: ["B.Sc", "B.A", "B.Com", "B.Tech", "MBA", "Law"],
      facilities: ["Central Library", "Hostels", "Computer Labs", "Auditorium"],
      fees: "₹4,500 - ₹18,000",
      contact: {
        phone: "0191-2454000",
        email: "info@jammuuniversity.ac.in",
        website: "www.jammuuniversity.ac.in"
      },
      cutoff: "60% for general category",
      scholarships: ["University Merit Scholarship", "Need-based Aid"]
    },
    {
      name: "National Institute of Technology Srinagar",
      location: "Srinagar",
      district: "srinagar",
      type: "Technical Institute",
      established: "1960",
      rating: 4.8,
      streams: ["science"],
      courses: ["B.Tech", "M.Tech", "PhD"],
      facilities: ["Advanced Labs", "Library", "Hostels", "Sports", "Wi-Fi"],
      fees: "₹8,500 - ₹25,000",
      contact: {
        phone: "0194-2420106",
        email: "registrar@nitsri.net",
        website: "www.nitsri.net"
      },
      cutoff: "JEE Main rank required",
      scholarships: ["Institute Merit Scholarship", "Central Sector Scheme"]
    },
    {
      name: "Government Medical College Srinagar",
      location: "Srinagar",
      district: "srinagar",
      type: "Medical College",
      established: "1959",
      rating: 4.6,
      streams: ["science"],
      courses: ["MBBS", "MD", "MS", "Nursing"],
      facilities: ["Hospital", "Labs", "Library", "Hostels"],
      fees: "₹15,000 - ₹50,000",
      contact: {
        phone: "0194-2503204",
        email: "gmcsrinagar@jk.gov.in",
        website: "www.gmcsrinagar.edu.in"
      },
      cutoff: "NEET qualified",
      scholarships: ["Merit cum Means", "State Medical Scholarship"]
    },
    {
      name: "Government College for Women Srinagar",
      location: "Srinagar", 
      district: "srinagar",
      type: "Degree College",
      established: "1950",
      rating: 4.2,
      streams: ["science", "arts", "commerce"],
      courses: ["B.Sc", "B.A", "B.Com", "M.A", "M.Sc"],
      facilities: ["Library", "Computer Lab", "Science Labs", "Canteen"],
      fees: "₹3,000 - ₹8,000",
      contact: {
        phone: "0194-2479632",
        email: "gcwsrinagar@gmail.com",
        website: "www.gcwsrinagar.edu.in"
      },
      cutoff: "50% for general category",
      scholarships: ["Girls Education Scholarship", "Merit Scholarship"]
    },
    {
      name: "Government College Baramulla",
      location: "Baramulla",
      district: "baramulla", 
      type: "Degree College",
      established: "1965",
      rating: 4.0,
      streams: ["science", "arts", "commerce"],
      courses: ["B.Sc", "B.A", "B.Com", "BCA"],
      facilities: ["Library", "Labs", "Sports Ground", "Canteen"],
      fees: "₹2,500 - ₹7,000",
      contact: {
        phone: "0194-2462844",
        email: "gcbaramulla@gmail.com",
        website: "www.gcbaramulla.edu.in"
      },
      cutoff: "45% for general category",
      scholarships: ["State Merit Scholarship", "Minority Scholarship"]
    }
  ];

  const districts = [
    { value: 'all', label: 'All Districts' },
    { value: 'srinagar', label: 'Srinagar' },
    { value: 'jammu', label: 'Jammu' },
    { value: 'baramulla', label: 'Baramulla' },
    { value: 'anantnag', label: 'Anantnag' },
    { value: 'kathua', label: 'Kathua' },
    { value: 'udhampur', label: 'Udhampur' }
  ];

  const streams = [
    { value: 'all', label: 'All Streams' },
    { value: 'science', label: 'Science' },
    { value: 'arts', label: 'Arts' },
    { value: 'commerce', label: 'Commerce' }
  ];

  const filteredColleges = colleges.filter(college => {
    const matchesDistrict = selectedDistrict === 'all' || college.district === selectedDistrict;
    const matchesStream = selectedStream === 'all' || college.streams.includes(selectedStream);
    const matchesSearch = college.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         college.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesDistrict && matchesStream && matchesSearch;
  });

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Government College Directory</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover quality education opportunities at government colleges across Jammu & Kashmir
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Search className="inline h-4 w-4 mr-1" />
                Search Colleges
              </label>
              <input
                type="text"
                placeholder="Search by name or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <MapPin className="inline h-4 w-4 mr-1" />
                District
              </label>
              <select
                value={selectedDistrict}
                onChange={(e) => setSelectedDistrict(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              >
                {districts.map(district => (
                  <option key={district.value} value={district.value}>
                    {district.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Filter className="inline h-4 w-4 mr-1" />
                Stream
              </label>
              <select
                value={selectedStream}
                onChange={(e) => setSelectedStream(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              >
                {streams.map(stream => (
                  <option key={stream.value} value={stream.value}>
                    {stream.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing <span className="font-semibold">{filteredColleges.length}</span> colleges
          </p>
        </div>

        {/* College Cards */}
        <div className="grid lg:grid-cols-2 gap-8">
          {filteredColleges.map((college, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 text-white">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">{college.name}</h2>
                    <p className="flex items-center opacity-90">
                      <MapPin className="h-4 w-4 mr-1" />
                      {college.location}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center bg-white bg-opacity-20 rounded-lg px-3 py-1">
                      <Star className="h-4 w-4 mr-1" />
                      {college.rating}
                    </div>
                    <p className="text-sm mt-1">Est. {college.established}</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {college.courses.slice(0, 4).map((course, idx) => (
                    <span key={idx} className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">
                      {course}
                    </span>
                  ))}
                  {college.courses.length > 4 && (
                    <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">
                      +{college.courses.length - 4} more
                    </span>
                  )}
                </div>
              </div>

              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <Award className="h-4 w-4 mr-2 text-indigo-600" />
                      Key Information
                    </h3>
                    <div className="space-y-2 text-sm">
                      <p><span className="font-medium">Type:</span> {college.type}</p>
                      <p><span className="font-medium">Fees:</span> {college.fees}</p>
                      <p><span className="font-medium">Cutoff:</span> {college.cutoff}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <Users className="h-4 w-4 mr-2 text-indigo-600" />
                      Facilities
                    </h3>
                    <div className="flex flex-wrap gap-1">
                      {college.facilities.map((facility, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                          {facility}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Scholarships Available</h3>
                  <div className="flex flex-wrap gap-2">
                    {college.scholarships.map((scholarship, idx) => (
                      <span key={idx} className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                        {scholarship}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-3">Contact Information</h3>
                  <div className="space-y-2 text-sm">
                    <p className="flex items-center">
                      <Phone className="h-4 w-4 mr-2 text-gray-500" />
                      {college.contact.phone}
                    </p>
                    <p className="flex items-center">
                      <Mail className="h-4 w-4 mr-2 text-gray-500" />
                      {college.contact.email}
                    </p>
                    <p className="flex items-center">
                      <Globe className="h-4 w-4 mr-2 text-gray-500" />
                      {college.contact.website}
                    </p>
                  </div>
                </div>

                <div className="mt-6">
                  <button className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
                    Get Admission Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredColleges.length === 0 && (
          <div className="text-center py-12">
            <div className="bg-gray-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="h-12 w-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No colleges found</h3>
            <p className="text-gray-600">Try adjusting your filters or search terms</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CollegeDirectory;
