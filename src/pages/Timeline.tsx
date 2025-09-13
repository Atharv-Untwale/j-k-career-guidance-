import React, { useState } from 'react';
import { Calendar, Clock, AlertCircle, CheckCircle, Bell, Filter } from 'lucide-react';

const Timeline = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedMonth, setSelectedMonth] = useState('all');

  const events = [
    {
      title: "University of Kashmir Admission Forms",
      date: "March 15, 2024",
      category: "admission",
      status: "upcoming",
      description: "Online application forms available for UG/PG courses",
      deadline: "April 30, 2024",
      link: "www.kashmiruniversity.ac.in",
      important: true
    },
    {
      title: "JEE Main Registration",
      date: "February 1, 2024", 
      category: "entrance",
      status: "active",
      description: "Registration for JEE Main 2024 Session 1",
      deadline: "March 16, 2024",
      link: "jeemain.nta.nic.in",
      important: true
    },
    {
      title: "NEET Application Forms",
      date: "February 9, 2024",
      category: "entrance", 
      status: "upcoming",
      description: "NEET-UG 2024 application forms release",
      deadline: "March 9, 2024",
      link: "neet.nta.nic.in",
      important: true
    },
    {
      title: "J&K State Merit Scholarship",
      date: "January 15, 2024",
      category: "scholarship",
      status: "active",
      description: "Merit-based scholarship for J&K students",
      deadline: "February 28, 2024", 
      link: "jkbose.ac.in",
      important: false
    },
    {
      title: "University of Jammu Admission",
      date: "March 20, 2024",
      category: "admission",
      status: "upcoming", 
      description: "UG/PG admission forms for 2024-25 session",
      deadline: "May 15, 2024",
      link: "www.jammuuniversity.ac.in",
      important: true
    },
    {
      title: "Central Sector Scholarship",
      date: "August 1, 2024",
      category: "scholarship",
      status: "upcoming",
      description: "Central government scholarship for college students",
      deadline: "October 31, 2024",
      link: "scholarships.gov.in",
      important: false
    },
    {
      title: "NIT Srinagar Counselling",
      date: "June 15, 2024",
      category: "counselling",
      status: "upcoming",
      description: "JEE Main based counselling for B.Tech admission",
      deadline: "July 30, 2024",
      link: "www.nitsri.net",
      important: true
    },
    {
      title: "Government College Admissions",
      date: "May 1, 2024",
      category: "admission", 
      status: "upcoming",
      description: "Merit-based admissions for degree colleges",
      deadline: "June 30, 2024",
      link: "jkbose.ac.in",
      important: true
    },
    {
      title: "Minority Scholarship Applications",
      date: "September 15, 2024",
      category: "scholarship",
      status: "upcoming",
      description: "Scholarship applications for minority community students",
      deadline: "November 30, 2024",
      link: "minorityaffairs.gov.in",
      important: false
    },
    {
      title: "CUET Registration",
      date: "February 20, 2024",
      category: "entrance",
      status: "upcoming", 
      description: "Common University Entrance Test registration",
      deadline: "March 31, 2024",
      link: "cuet.nta.nic.in",
      important: true
    }
  ];

  const categories = [
    { value: 'all', label: 'All Categories', color: 'gray' },
    { value: 'admission', label: 'Admissions', color: 'blue' },
    { value: 'entrance', label: 'Entrance Exams', color: 'purple' },
    { value: 'scholarship', label: 'Scholarships', color: 'green' },
    { value: 'counselling', label: 'Counselling', color: 'orange' }
  ];

  const months = [
    { value: 'all', label: 'All Months' },
    { value: '01', label: 'January' },
    { value: '02', label: 'February' },
    { value: '03', label: 'March' },
    { value: '04', label: 'April' },
    { value: '05', label: 'May' },
    { value: '06', label: 'June' },
    { value: '07', label: 'July' },
    { value: '08', label: 'August' },
    { value: '09', label: 'September' },
    { value: '10', label: 'October' },
    { value: '11', label: 'November' },
    { value: '12', label: 'December' }
  ];

  const filteredEvents = events.filter(event => {
    const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;
    const eventMonth = new Date(event.date).getMonth() + 1;
    const matchesMonth = selectedMonth === 'all' || eventMonth.toString().padStart(2, '0') === selectedMonth;
    return matchesCategory && matchesMonth;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800 border-green-200';
      case 'upcoming': return 'bg-blue-100 text-blue-800 border-blue-200'; 
      case 'closed': return 'bg-gray-100 text-gray-800 border-gray-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getCategoryColor = (category) => {
    const categoryData = categories.find(cat => cat.value === category);
    return categoryData ? categoryData.color : 'gray';
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'active': return <CheckCircle className="h-4 w-4" />;
      case 'upcoming': return <Clock className="h-4 w-4" />;
      case 'closed': return <AlertCircle className="h-4 w-4" />;
      default: return <Clock className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Academic Timeline 2024</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Never miss important dates for admissions, entrance exams, and scholarships in Jammu & Kashmir
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Filter className="inline h-4 w-4 mr-1" />
                Category
              </label>
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category.value}
                    onClick={() => setSelectedCategory(category.value)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedCategory === category.value
                        ? 'bg-indigo-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Calendar className="inline h-4 w-4 mr-1" />
                Month
              </label>
              <select
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              >
                {months.map(month => (
                  <option key={month.value} value={month.value}>
                    {month.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing <span className="font-semibold">{filteredEvents.length}</span> events
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200"></div>
          
          <div className="space-y-8">
            {filteredEvents.map((event, index) => (
              <div key={index} className="relative">
                {/* Timeline Dot */}
                <div className={`absolute left-6 w-4 h-4 rounded-full border-4 border-white ${
                  event.status === 'active' ? 'bg-green-500' :
                  event.status === 'upcoming' ? 'bg-blue-500' : 'bg-gray-400'
                } shadow-md`}></div>
                
                {/* Event Card */}
                <div className="ml-16">
                  <div className={`bg-white rounded-2xl shadow-lg p-6 ${event.important ? 'border-l-4 border-yellow-400' : ''}`}>
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h2 className="text-xl font-bold text-gray-900">{event.title}</h2>
                          {event.important && <Bell className="h-5 w-5 text-yellow-500" />}
                        </div>
                        <p className="text-gray-600 mb-3">{event.description}</p>
                        <div className="flex flex-wrap gap-2">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(event.status)}`}>
                            <span className="flex items-center gap-1">
                              {getStatusIcon(event.status)}
                              {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
                            </span>
                          </span>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium bg-${getCategoryColor(event.category)}-100 text-${getCategoryColor(event.category)}-800`}>
                            {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
                          </span>
                        </div>
                      </div>
                      
                      <div className="lg:text-right mt-4 lg:mt-0">
                        <div className="bg-indigo-50 rounded-lg p-4">
                          <p className="text-sm text-gray-600 mb-1">Start Date</p>
                          <p className="font-bold text-indigo-600">{event.date}</p>
                          <p className="text-sm text-gray-600 mt-2 mb-1">Deadline</p>
                          <p className="font-bold text-red-600">{event.deadline}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-100">
                      <a
                        href={`https://${event.link}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition-colors text-center"
                      >
                        Visit Official Website
                      </a>
                      <button className="bg-gray-100 text-gray-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                        Set Reminder
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <div className="bg-gray-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="h-12 w-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No events found</h3>
            <p className="text-gray-600">Try adjusting your filters</p>
          </div>
        )}

        {/* Important Notice */}
        <div className="mt-12 bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
          <div className="flex">
            <AlertCircle className="h-6 w-6 text-yellow-400 mr-3 mt-0.5" />
            <div>
              <h3 className="text-lg font-semibold text-yellow-800 mb-2">Important Notice</h3>
              <p className="text-yellow-700">
                Dates are subject to change. Please verify from official websites before taking any action. 
                Enable notifications to get timely reminders about important deadlines.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;