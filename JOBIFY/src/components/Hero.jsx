import React, { useState } from "react";
import { Search, MapPin, Building } from "lucide-react";
import { BackgroundBeamsWithCollision } from "./ui/background-beams";

/**
 * @param {{ darkMode: boolean }} props
 */
const Hero = ({ darkMode }) => {
  const [searchData, setSearchData] = useState({
    jobTitle: '',
    location: '',
    company: ''
  });

  const suggestedTags = ['Developer', 'Designer', 'Tester', 'Marketing', 'Sales', 'Manager'];

  const handleInputChange = (field, value) => {
    setSearchData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <BackgroundBeamsWithCollision className={`flex flex-col justify-center items-center py-16 lg:py-24 min-h-fit md:min-h-[calc(100vh-4rem)] ${darkMode ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900' : 'bg-gradient-to-br from-blue-50 via-white to-indigo-50'}`}>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Headline */}
          <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} leading-tight mb-6`}>
            Find your{' '}
            <span className="bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
              dream job
            </span>
          </h1>
          <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-12 max-w-2xl mx-auto`}>
            Discover thousands of job opportunities from top companies worldwide. Start your career journey today.
          </p>
          {/* Search Bar */}
          <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-2xl shadow-2xl p-4 mb-8 border`}>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Job Title Input */}
              <div className="relative">
                <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${darkMode ? 'text-gray-400' : 'text-gray-500'} w-5 h-5`} />
                <input
                  type="text"
                  placeholder="Job title or keyword"
                  value={searchData.jobTitle}
                  onChange={(e) => handleInputChange('jobTitle', e.target.value)}
                  className={`w-full pl-10 pr-4 py-3 ${darkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500'} border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200`}
                />
              </div>
              {/* Location Input */}
              <div className="relative">
                <MapPin className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${darkMode ? 'text-gray-400' : 'text-gray-500'} w-5 h-5`} />
                <input
                  type="text"
                  placeholder="Location"
                  value={searchData.location}
                  onChange={(e) => handleInputChange('location', e.target.value)}
                  className={`w-full pl-10 pr-4 py-3 ${darkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500'} border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200`}
                />
              </div>
              {/* Company Input */}
              <div className="relative">
                <Building className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${darkMode ? 'text-gray-400' : 'text-gray-500'} w-5 h-5`} />
                <input
                  type="text"
                  placeholder="Company"
                  value={searchData.company}
                  onChange={(e) => handleInputChange('company', e.target.value)}
                  className={`w-full pl-10 pr-4 py-3 ${darkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500'} border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200`}
                />
              </div>
              {/* Search Button */}
              <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg">
                Search
              </button>
            </div>
          </div>
          {/* Suggested Tags Bar on Top */}
      <div className="w-full flex flex-wrap justify-center gap-3 items-center mb-8">
        <span className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} text-sm font-medium`}>Popular searches:</span>
        {suggestedTags.map((tag) => (
          <button
            key={tag}
            className={`px-4 py-2 ${darkMode ? 'bg-gray-800 hover:bg-gray-700 text-gray-300 border-gray-700' : 'bg-white hover:bg-gray-50 text-gray-700 border-gray-200'} border rounded-full text-sm font-medium transition-colors duration-200 shadow-sm hover:shadow-md`}
          >
            {tag}
          </button>
        ))}
      </div>
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
};

export default Hero;