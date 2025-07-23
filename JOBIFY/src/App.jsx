import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import FeaturedJobs from './components/FeaturedJobs'
import HowItWorks from './components/HowItWorks'
import TopCompanies from './components/TopCompanies'
import Footer from './components/Footer'

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', JSON.stringify(newMode));
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-white'} transition-colors duration-300`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero darkMode={darkMode}/>
      <FeaturedJobs darkMode={darkMode}/>
      <HowItWorks darkMode={darkMode}/>
      <TopCompanies darkMode={darkMode}/>
      <Footer darkMode={darkMode}/>
    </div>
  )
}

export default App
