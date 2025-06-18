import React from 'react';
import { MapPin, Calendar, GraduationCap, Code } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get to know me, my journey, and what drives my passion for technology
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">My Journey</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  I'm Yogi Ganesh Nagendra Illuri, a passionate Computer Science student from Vijayawada, Andhra Pradesh. 
                  Currently pursuing my Bachelor's degree at KL University, I've developed a strong foundation in programming 
                  and web development.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  My journey began with a Diploma in Computer Science from AANM& VVRSR Polytechnic, Gudlavalleru, 
                  where I discovered my love for coding and problem-solving. Today, I'm focused on frontend development, 
                  particularly with React and modern web technologies.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <div className="p-3 bg-blue-100 rounded-lg mr-4">
                  <MapPin className="text-blue-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Location</h4>
                  <p className="text-gray-600">Vijayawada, Andhra Pradesh, India</p>
                </div>
              </div>

              <div className="flex items-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <div className="p-3 bg-purple-100 rounded-lg mr-4">
                  <GraduationCap className="text-purple-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Education</h4>
                  <p className="text-gray-600">Bachelor's Degree - KL University</p>
                </div>
              </div>

              <div className="flex items-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <div className="p-3 bg-green-100 rounded-lg mr-4">
                  <Code className="text-green-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Experience</h4>
                  <p className="text-gray-600">Frontend Developer at Swapna Bharathi Learning Solutions</p>
                </div>
              </div>

              <div className="flex items-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <div className="p-3 bg-orange-100 rounded-lg mr-4">
                  <Calendar className="text-orange-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Status</h4>
                  <p className="text-gray-600">Student & Frontend Developer</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">What I'm Currently Working On</h3>
              <p className="text-lg opacity-90 max-w-3xl mx-auto">
                I'm constantly learning and building new projects to enhance my skills. Currently focused on mastering React, 
                exploring modern frontend architectures, and contributing to open-source projects. I believe in continuous 
                learning and staying updated with the latest technologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;