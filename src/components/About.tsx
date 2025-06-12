import React from 'react';
import { GraduationCap, User, Code2, Briefcase } from 'lucide-react';

const About = () => {
  const education = [
    {
      degree: "Bachelor of Technology (B.Tech)",
      specialization: "Computer Science and Engineering",
      institution: "KKR & KSR Institute of Technology and Sciences",
      duration: "2021 - 2025"
    },
    {
      degree: "Intermediate (MPC)",
      institution: "Sri Gayatri Junior College",
      duration: "2019 - 2021"
    },
    {
      degree: "SSC",
      institution: "Dr. K.K.R Gowtham School",
      duration: "2018 - 2019"
    }
  ];

  const skills = {
    programming: ['Java', 'JavaScript', 'Python Basics'],
    frameworks: ['MERN Stack', 'React.js', 'Node.js', 'Express.js'],
    other: ['Salesforce Platform Developer 1', 'Data Structures & Algorithms', 'Basics of AI/ML']
  };

  return (
    <section id="about" className="py-20 bg-black bg-opacity-95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="backdrop-blur-lg bg-white bg-opacity-5 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="text-white" size={24} />
                <h3 className="text-xl font-semibold text-white">Education</h3>
              </div>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="border-l-2 border-gray-700 pl-4">
                    <h4 className="text-white font-medium">{edu.degree}</h4>
                    {edu.specialization && (
                      <p className="text-gray-400">{edu.specialization}</p>
                    )}
                    <p className="text-gray-400">{edu.institution}</p>
                    <p className="text-gray-500 text-sm">{edu.duration}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="backdrop-blur-lg bg-white bg-opacity-5 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-6">
                <Code2 className="text-white" size={24} />
                <h3 className="text-xl font-semibold text-white">Technical Skills</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="text-white mb-2">Programming Languages</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.programming.map((skill, index) => (
                      <span key={index} className="px-3 py-1 bg-white bg-opacity-10 rounded-full text-gray-300 text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-white mb-2">Frameworks & Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.frameworks.map((skill, index) => (
                      <span key={index} className="px-3 py-1 bg-white bg-opacity-10 rounded-full text-gray-300 text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-white mb-2">Other Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.other.map((skill, index) => (
                      <span key={index} className="px-3 py-1 bg-white bg-opacity-10 rounded-full text-gray-300 text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="backdrop-blur-lg bg-white bg-opacity-5 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-6">
                <Briefcase className="text-white" size={24} />
                <h3 className="text-xl font-semibold text-white">Achievements</h3>
              </div>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li>Wipro Certified Java Full Stack Developer</li>
                <li>Salesforce Certified Platform Developer 1</li>
                <li>Finalist in MEAN Stack Hackathon</li>
                <li>Finalist in JAVA Full Stack Hackathon</li>
                <li>Currently working on a project to develop LMS for Faangtechlab.com as an internship</li>
              </ul>
            </div>

            <div className="backdrop-blur-lg bg-white bg-opacity-5 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-6">
                <User className="text-white" size={24} />
                <h3 className="text-xl font-semibold text-white">Interests & Activities</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="text-white mb-2">Professional Interests</h4>
                  <ul className="list-disc list-inside text-gray-400">
                    <li>Full Stack Development</li>
                    <li>Web Designing</li>
                    <li>Artificial Intelligence</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white mb-2">Activities</h4>
                  <ul className="list-disc list-inside text-gray-400">
                    <li>Tech Blogging</li>
                    <li>Designing Websites</li>
                    <li>Vibe Coding</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
