import Google from '../assets/Logo/google.svg';
import Apple from '../assets/Logo/apple.svg';
import Microsoft from '../assets/Logo/microsoft.svg';
import Amazon from '../assets/Logo/amazon.svg';
import Meta from '../assets/Logo/meta.svg';
import Netflix from '../assets/Logo/netflix.svg';
import Tesla from '../assets/Logo/tesla.svg';
import Spotify from '../assets/Logo/spotify.svg';
import Uber from '../assets/Logo/uber.svg';
import Airbnb from '../assets/Logo/airbnb.svg';
import Slack from '../assets/Logo/slack.svg';
import Zoom from '../assets/Logo/zoom.svg';

/**
 * @param {{ darkMode: boolean }} props
 */

const TopCompanies = ({ darkMode }) => {
    const companies = [
    { id: 1, name: 'Google', logo: Google, employees: '15k+' },
    { id: 2, name: 'Apple', logo: Apple, employees: '12k+' },
    { id: 3, name: 'Microsoft', logo: Microsoft, employees: '18k+' },
    { id: 4, name: 'Amazon', logo: Amazon, employees: '20k+' },
    { id: 5, name: 'Meta', logo: Meta, employees: '8k+' },
    { id: 6, name: 'Netflix', logo: Netflix, employees: '5k+' },
    { id: 7, name: 'Tesla', logo: Tesla, employees: '7k+' },
    { id: 8, name: 'Spotify', logo: Spotify, employees: '4k+' },
    { id: 9, name: 'Uber', logo: Uber, employees: '6k+' },
    { id: 10, name: 'Airbnb', logo: Airbnb, employees: '3k+' },
    { id: 11, name: 'Slack', logo: Slack, employees: '2k+' },
    { id: 12, name: 'Zoom', logo: Zoom, employees: '3k+' }
  ];

  return (
    <section className={`py-16 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className={`text-3xl sm:text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
            Top Companies Hiring
          </h2>
          <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'} max-w-2xl mx-auto`}>
            Join thousands of professionals working at leading companies
          </p>
        </div>

        {/* Companies Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {companies.map((company) => (
            <div
              key={company.id}
              className={`${darkMode ? 'bg-gray-800 hover:bg-gray-700 border-gray-700' : 'bg-white hover:bg-gray-50 border-gray-200'} border rounded-xl p-6 text-center transition-all duration-200 hover:shadow-xl transform hover:-translate-y-1 cursor-pointer group`}
            >
              {/* Company Logo */}
              <div className={`w-16 h-16 mx-auto mb-4 ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-200`}>
                <img src={company.logo} className='w-14 h-14'/>
              </div>

              {/* Company Name */}
              <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-2 group-hover:text-blue-600 transition-colors duration-200`}>
                {company.name}
              </h3>

              {/* Employee Count */}
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {company.employees} employees
              </p>

            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-2`}>500+</div>
            <div className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Companies Hiring</div>
          </div>
          <div className="text-center">
            <div className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-2`}>10k+</div>
            <div className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Active Jobs</div>
          </div>
          <div className="text-center">
            <div className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-2`}>50k+</div>
            <div className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Professionals Hired</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopCompanies;