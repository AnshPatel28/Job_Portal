import { Briefcase, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

/**
 * @param {{ darkMode: boolean }} props
 */

const Footer = ({ darkMode }) => {
    const footerLinks = {
    'For Job Seekers': [
      'Browse Jobs',
      'Company Reviews',
      'Salary Guide',
      'Career Advice',
      'Resume Builder',
      'Interview Tips'
    ],
    'For Employers': [
      'Post a Job',
      'Employer Branding',
      'Recruitment Solutions',
      'Talent Search',
      'Pricing Plans',
      'Success Stories'
    ],
    'Company': [
      'About Us',
      'Our Team',
      'Careers',
      'Press',
      'Investors',
      'Blog'
    ],
    'Support': [
      'Help Center',
      'Contact Us',
      'Privacy Policy',
      'Terms of Service',
      'Cookie Policy',
      'Security'
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: '#', name: 'Facebook' },
    { icon: Twitter, href: '#', name: 'Twitter' },
    { icon: Linkedin, href: '#', name: 'LinkedIn' },
    { icon: Instagram, href: '#', name: 'Instagram' }
  ];

  return (
    <footer className={`${darkMode ? 'bg-gray-900' : 'bg-gray-900'} text-white pt-16 pb-8`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">JobPortal</span>
            </div>

            {/* Description */}
            <p className="text-gray-400 mb-6 leading-relaxed">
              Connect talent with opportunity. We're the leading platform helping professionals find their dream jobs and companies build amazing teams.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-500" />
                <span className="text-gray-400">hello@jobportal.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-500" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-500" />
                <span className="text-gray-400">San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Stay Updated</h3>
              <p className="text-gray-400">Subscribe to get the latest job opportunities and career insights.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white rounded-lg font-semibold transition-all duration-200 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8 flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
          {/* Copyright */}
          <p className="text-gray-400 text-sm">
            © 2025 JobPortal. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors duration-200 group"
                  aria-label={social.name}
                >
                  <IconComponent className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-200" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;