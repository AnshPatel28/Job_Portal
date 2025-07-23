import React, { useState } from 'react';
import { Search, Menu, X, Briefcase, Moon, Sun } from 'lucide-react';

/**
 * @param {{ darkMode: boolean, toggleDarkMode: () => void }} props
 */
const Header = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={`sticky top-0 z-50 ${darkMode ? 'bg-gray-900' : 'bg-white'} border-b ${darkMode ? 'border-gray-800' : 'border-gray-200'} backdrop-blur-md bg-opacity-90`}>
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
              <Briefcase className="w-5 h-5 text-white" />
            </div>
            <span className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>JobiFy</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex ml-[10%] space-x-8">
            <a href="#" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900 hover:font-semibold'} font-medium transition-colors duration-200`}>
              Find Jobs
            </a>
            <a href="#" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900 hover:font-semibold'} font-medium transition-colors duration-200`}>
              For Companies
            </a>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'} transition-colors duration-200`}
            >
              {darkMode ? <Sun className="w-5 h-5 text-gray-300" /> : <Moon className="w-5 h-5 text-gray-700" />}
            </button>
            <button className={`px-4 py-2 ${darkMode ? 'text-gray-300 hover:text-white border-gray-600' : 'text-gray-700 hover:text-gray-900 border-gray-300'} border rounded-lg font-medium transition-colors duration-200`}>
              Log In
            </button>
            <button className={`px-4 py-2 ${darkMode ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-gray-900 hover:bg-gray-800 text-white'} rounded-lg font-medium transition-colors duration-200`}>
              Sign Up
            </button>
            <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg">
              Post a Job
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-lg ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'} transition-colors duration-200`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className={`w-6 h-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`md:hidden border-t ${darkMode ? 'border-gray-800' : 'border-gray-200'} py-4`}>
            <nav className="space-y-4">
              <a href="#" className={`block ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'} font-medium transition-colors duration-200`}>
                Find Jobs
              </a>
              <a href="#" className={`block ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'} font-medium transition-colors duration-200`}>
                For Companies
              </a>
              <div className="flex items-center space-x-4 pt-4">
                <button
                  onClick={toggleDarkMode}
                  className={`p-2 rounded-lg ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'} transition-colors duration-200`}
                >
                  {darkMode ? <Sun className="w-5 h-5 text-gray-300" /> : <Moon className="w-5 h-5 text-gray-700" />}
                </button>
                <button className={`px-4 py-2 ${darkMode ? 'text-gray-300 border-gray-600' : 'text-gray-700 border-gray-300'} border rounded-lg font-medium transition-colors duration-200`}>
                  Log In
                </button>
                <button className={`px-4 py-2 ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-900 text-white'} rounded-lg font-medium transition-colors duration-200`}>
                  Sign Up
                </button>
              </div>
              <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white rounded-lg font-semibold transition-all duration-200 shadow-lg">
                Post a Job
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;