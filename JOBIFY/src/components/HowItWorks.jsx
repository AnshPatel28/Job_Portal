import { UserPlus, Upload, Search, Send } from 'lucide-react';

/**
 * @param {{ darkMode: boolean }} props
 */

const HowItWorks = ({ darkMode }) => {
    const steps = [
    {
      id: 1,
      title: 'Create Account',
      description: 'Sign up for free and set up your professional profile',
      icon: UserPlus,
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 2,
      title: 'Upload CV/Resume',
      description: 'Upload your resume and let employers find you',
      icon: Upload,
      color: 'from-green-500 to-green-600'
    },
    {
      id: 3,
      title: 'Find Suitable Job',
      description: 'Browse and discover jobs that match your skills',
      icon: Search,
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 4,
      title: 'Apply for Job',
      description: 'Apply with one click and track your applications',
      icon: Send,
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <section className={`py-16 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
            How It Works
          </h2>
          <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'} max-w-2xl mx-auto`}>
            Find your dream job in 4 simple steps
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={step.id} className="relative text-center group">
                {/* Connection Line (desktop only) */}
                {index < steps.length - 1 && (
                  <div className={`hidden lg:block absolute top-14 left-[45%] w-full h-0.5 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} transform translate-x-8 z-0`} />
                )}

                {/* Step Number */}
                <div className={`relative z-10 w-12 h-12 mx-auto mb-6 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-200`}>
                  {step.id}
                </div>

                {/* Step Icon */}
                <div className={`w-16 h-16 mx-auto mb-6 ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} rounded-2xl flex items-center justify-center group-hover:bg-gradient-to-r group-hover:${step.color} transition-all duration-300`}>
                  <IconComponent className={`w-8 h-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'} group-hover:text-gray-400 transition-colors duration-300`} />
                </div>

                {/* Step Content */}
                <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-3`}>
                  {step.title}
                </h3>
                <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} leading-relaxed`}>
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg">
            Get Started Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;