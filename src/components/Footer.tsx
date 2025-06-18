import React from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                Yogi Ganesh
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Frontend Developer passionate about creating beautiful and functional web applications. 
                Always learning, always growing.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {['Home', 'About', 'Skills', 'Projects', 'Resume', 'Contact'].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => {
                        const element = document.querySelector(`#${item.toLowerCase()}`);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Let's Connect</h4>
              <div className="flex space-x-4 mb-4">
                <a
                  href="https://github.com/yogiganesh108"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-200"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/yogiganesh7/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-200"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="mailto:yogiganesh108@gmail.com"
                  className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-200"
                >
                  <Mail size={20} />
                </a>
              </div>
              <p className="text-gray-400 text-sm">
                Feel free to reach out for collaborations or just to say hello!
              </p>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                © {currentYear} Yogi Ganesh Nagendra Illuri. All rights reserved.
              </p>
              <p className="text-gray-400 text-sm flex items-center">
                Made with <Heart size={16} className="text-red-500 mx-1" /> using React & Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;