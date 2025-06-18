import React from 'react';
import { Download, FileText, Calendar, MapPin, GraduationCap, Briefcase } from 'lucide-react';

const Resume = () => {
  return (
    <section id="resume" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Resume</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Download my complete resume or view my experience and education below
            </p>
          </div>

          <div className="text-center mb-12">
            <a
              href="https://drive.google.com/file/d/1LnjsnBzvmhq0pB1iTJ27uH0pmV2vp-Bf/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 text-lg"
            >
              <Download size={24} className="mr-3" />
              Download Resume PDF
            </a>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Experience */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-8">
                <div className="p-3 bg-blue-100 rounded-lg mr-4">
                  <Briefcase className="text-blue-600" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Experience</h3>
              </div>

              <div className="space-y-6">
                <div className="border-l-4 border-blue-600 pl-6 pb-6">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-xl font-semibold text-gray-900">Frontend Web Developer</h4>
                    <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                      6 months
                    </span>
                  </div>
                  <p className="text-blue-600 font-medium mb-2">Swapna Bharathi Learning Solutions</p>
                  <p className="text-gray-500 mb-3">Dec 2023 - May 2024 • Gudlavalleru, Andhra Pradesh</p>
                  <p className="text-gray-600 leading-relaxed">
                    Developed responsive web applications using modern frontend technologies. 
                    Collaborated with the team to create user-friendly interfaces and improve 
                    user experience. Gained hands-on experience with React, JavaScript, and CSS frameworks.
                  </p>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-8">
                <div className="p-3 bg-purple-100 rounded-lg mr-4">
                  <GraduationCap className="text-purple-600" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Education</h3>
              </div>

              <div className="space-y-6">
                <div className="border-l-4 border-purple-600 pl-6 pb-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Bachelor's Degree</h4>
                  <p className="text-purple-600 font-medium mb-2">KL University</p>
                  <p className="text-gray-500 mb-3">2024 - Present</p>
                  <p className="text-gray-600">
                    Currently pursuing Computer Science Engineering with focus on software development, 
                    data structures, algorithms, and modern programming practices.
                  </p>
                </div>

                <div className="border-l-4 border-purple-400 pl-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Diploma of Education</h4>
                  <p className="text-purple-600 font-medium mb-2">AANM& VVRSR Polytechnic, Gudlavalleru</p>
                  <p className="text-gray-500 mb-3">2021 - 2024 • Computer Science</p>
                  <p className="text-gray-600">
                    Completed comprehensive diploma program covering fundamentals of computer science, 
                    programming languages, database management, and software engineering principles.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">6+</div>
                <div className="text-white/80">Months Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">101+</div>
                <div className="text-white/80">LeetCode Problems</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">5+</div>
                <div className="text-white/80">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">2</div>
                <div className="text-white/80">Certifications</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;