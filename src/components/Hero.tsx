import React, { useEffect, useState } from 'react';
import { ChevronDown, Github, Linkedin, ExternalLink } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const titles = ['Frontend Developer', 'React Enthusiast', 'Java Developer', 'Problem Solver'];

  useEffect(() => {
    const currentTitle = titles[currentIndex];
    const timeout = setTimeout(() => {
      if (displayText.length < currentTitle.length) {
        setDisplayText(currentTitle.slice(0, displayText.length + 1));
      } else {
        setTimeout(() => {
          setDisplayText('');
          setCurrentIndex((prev) => (prev + 1) % titles.length);
        }, 2000);
      }
    }, 100);

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, titles]);

  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="w-32 h-32 lg:w-40 lg:h-40 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 p-1">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-4xl lg:text-5xl font-bold text-gray-800">
                YG
              </div>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 mb-4">
            Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Yogi Ganesh</span>
          </h1>

          <div className="text-xl sm:text-2xl lg:text-3xl text-gray-600 mb-6 h-12 flex items-center justify-center">
            <span className="mr-2">I'm a</span>
            <span className="text-blue-600 font-semibold min-w-[240px] text-left">
              {displayText}<span className="animate-pulse">|</span>
            </span>
          </div>

          <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Computer Science student from Vijayawada, passionate about creating beautiful and functional web applications. 
            Currently pursuing my Bachelor's degree at KL University while building amazing projects.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button
              onClick={() => scrollToNext()}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              View My Work
            </button>
            
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/yogiganesh108"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/yogiganesh7/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ChevronDown size={32} className="text-gray-400" />
      </button>
    </section>
  );
};

export default Hero;