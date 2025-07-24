import React, { useState } from "react";
import { MapPin, Clock, DollarSign, Bookmark, BookMarked } from "lucide-react";
import data from "../assets/data.png";
import devops from "../assets/devops.png";
import frontend from "../assets/frontend.png";
import product from "../assets/product.png";
import qa from "../assets/qa.png";
import UIUX from "../assets/ui-ux.png";

/**
 * @param {{ darkMode: boolean }} props
 */

const FeaturedJobs = ({ darkMode }) => {
  const [bookmarkedJobs, setBookmarkedJobs] = useState({});

  const toggleBookmark = (id) => {
    setBookmarkedJobs((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const jobs = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "TechCorp",
      location: "San Francisco, CA",
      type: "Full-Time",
      salary: "$80k - $120k",
      logo: frontend,
      featured: true,
    },
    {
      id: 2,
      title: "UX/UI Designer",
      company: "DesignStudio",
      location: "New York, NY",
      type: "Full-Time",
      salary: "$70k - $100k",
      logo: UIUX,
      featured: true,
    },
    {
      id: 3,
      title: "DevOps Engineer",
      company: "CloudTech",
      location: "Austin, TX",
      type: "Full-Time",
      salary: "$90k - $130k",
      logo: devops,
      featured: false,
    },
    {
      id: 4,
      title: "Product Manager",
      company: "Innovation Labs",
      location: "Seattle, WA",
      type: "Full-Time",
      salary: "$100k - $140k",
      logo: product,
      featured: true,
    },
    {
      id: 5,
      title: "Data Scientist",
      company: "DataFlow",
      location: "Boston, MA",
      type: "Full-Time",
      salary: "$95k - $135k",
      logo: data,
      featured: false,
    },
    {
      id: 6,
      title: "QA Engineer",
      company: "QualityFirst",
      location: "Remote",
      type: "Full-Time",
      salary: "$60k - $90k",
      logo: qa,
      featured: false,
    },
  ];

  return (
    <section className={`py-16 ${darkMode ? "bg-gray-900" : "bg-gray-50"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2
            className={`text-3xl sm:text-4xl font-bold ${
              darkMode ? "text-white" : "text-gray-900"
            } mb-4`}
          >
            Featured Jobs
          </h2>
          <p
            className={`text-lg ${
              darkMode ? "text-gray-400" : "text-gray-600"
            } max-w-2xl mx-auto`}
          >
            Discover hand-picked job opportunities from top companies
          </p>
        </div>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {jobs.map((job) => (
            <div
              key={job.id}
              className={`${
                darkMode
                  ? "bg-gray-800 hover:bg-gray-700 border-gray-700"
                  : "bg-white hover:bg-gray-50 border-gray-200"
              } border rounded-xl p-6 transition-all duration-200 hover:shadow-xl transform hover:-translate-y-1 cursor-pointer group relative`}
            >
              {/* Featured Badge */}
              {job.featured && (
                <div className="absolute top-4 right-4">
                  <span className="px-2 py-1 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-xs font-semibold rounded-full">
                    Featured
                  </span>
                </div>
              )}

              {/* Company Logo */}
              <div className="flex items-start justify-between mb-4">
                <div
                  className={`w-12 h-12 ${
                    darkMode ? "bg-gray-200" : "bg-gray-100"
                  } rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-200`}
                >
                  <img src={job.logo} className="w-8 h-8" />
                </div>
                <button
                  onClick={() => toggleBookmark(job.id)}
                  className={`p-2 ${
                    darkMode ? "hover:bg-gray-600" : "hover:bg-gray-100"
                  } rounded-lg transition-colors duration-200`}
                >
                  {bookmarkedJobs[job.id] ? (
                    <BookMarked
                      className={`w-5 h-5 ${
                        darkMode ? "text-white" : "text-gray-600"
                      }`}
                    />
                  ) : (
                    <Bookmark
                      className={`w-5 h-5 ${
                        darkMode
                          ? "text-gray-400 hover:text-white"
                          : "text-gray-400 hover:text-gray-600"
                      }`}
                    />
                  )}
                </button>
              </div>

              {/* Job Info */}
              <h3
                className={`text-xl font-semibold ${
                  darkMode ? "text-white" : "text-gray-900"
                } mb-2 group-hover:text-blue-600 transition-colors duration-200`}
              >
                {job.title}
              </h3>
              <p
                className={`${
                  darkMode ? "text-gray-300" : "text-gray-600"
                } font-medium mb-4`}
              >
                {job.company}
              </p>

              {/* Job Details */}
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <MapPin
                    className={`w-4 h-4 ${
                      darkMode ? "text-gray-400" : "text-gray-500"
                    }`}
                  />
                  <span
                    className={`text-sm ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {job.location}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock
                    className={`w-4 h-4 ${
                      darkMode ? "text-gray-400" : "text-gray-500"
                    }`}
                  />
                  <span
                    className={`text-sm ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {job.type}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <DollarSign
                    className={`w-4 h-4 ${
                      darkMode ? "text-gray-400" : "text-gray-500"
                    }`}
                  />
                  <span
                    className={`text-sm font-semibold ${
                      darkMode ? "text-green-400" : "text-green-600"
                    }`}
                  >
                    {job.salary}
                  </span>
                </div>
              </div>

              {/* Apply Button */}
              <button className="w-full mt-6 px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white rounded-lg font-semibold transition-all duration-200 transform group-hover:scale-105">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedJobs;
