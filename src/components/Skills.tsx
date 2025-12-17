import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React', level: 85 },
        { name: 'JavaScript', level: 80 },
        { name: 'HTML/CSS', level: 90 },
        { name: 'Tailwind CSS', level: 75 },
      ]
    },
    {
      title: 'Backend & Languages',
      skills: [
        { name: 'Java', level: 80 },
        { name: 'Python', level: 70 },
        { name: 'Node.js', level: 65 },
        { name: 'SQL', level: 75 },
      ]
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git/GitHub', level: 85 },
        { name: 'VS Code', level: 90 },
        { name: 'Postman', level: 75 },
      ]
    }
  ];

  const certifications = [
    {
      title: 'Developing Front-End Apps with React',
      issuer: 'IBM',
      date: 'Feb 2025',
      credential: 'NCBBH1BWVOHR'
    },
    {
      title: 'HackerRank Java (Basics)',
      issuer: 'HackerRank',
      date: '2024',
      credential: '2E90C78898D7'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Skills</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive overview of my technical abilities and certifications
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">{category.title}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700 font-medium">{skill.name}</span>
                        <span className="text-gray-500 text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Certifications & Achievements</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-300">
                  <h4 className="font-bold text-gray-900 mb-2">{cert.title}</h4>
                  <p className="text-blue-600 font-medium mb-1">{cert.issuer}</p>
                  <p className="text-gray-500 text-sm mb-2">Issued {cert.date}</p>
                  <p className="text-gray-400 text-xs">Credential ID: {cert.credential}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full">
              <span className="font-semibold">Always learning, always growing 🚀</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
