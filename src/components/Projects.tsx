import React from 'react';
import freelance from './freelance.png';
import ts from './tshub.png';
import java from './java.jpg';
import dia from './diabetes.jpg';
import { ExternalLink, Github, Code2 } from 'lucide-react';

const Projects = () => {
  const projects = [
  {
    id: 'skill-troove',
    title: 'SkillTroove – AI-Powered Freelance Marketplace',
    description:
      'Developed a secure and scalable freelance hiring platform with AI-based talent matching and blockchain-enabled transactions, supporting contract management, user profiles, and trusted payment flows.',
    image: freelance,
    status: 'Final Year Project',
    technologies: ['React.js', 'Node.js', 'MongoDB', 'Python', 'Blockchain']
  },
  {
    id: 'java-tracker',
    title: 'Java Learning Tracker',
    description:
      'Created a full-stack web app for tracking learning progress in Java courses, featuring user authentication, note-taking, and progress visualization to support structured self-learning.',
    image: java,
    technologies: ['React.js', 'MongoDB', 'Express.js', 'Firebase Auth']
  },
  {
    id: 'ts-hub',
    title: 'TS-Hub – Faculty-Student Resource Sharing',
    description:
      'A full-stack platform connecting faculty and students for academic discussions and educational material sharing.',
    image: ts,
    technologies: ['MERN Stack', 'AWS S3', 'Material UI']
  },
  {
    id: 'diabetes-detector',
    title: 'Diabetes Detection System',
    description:
      'Built a machine learning system using Pima Indians Diabetes Dataset, focusing on data preprocessing, model training, and healthcare insights using supervised learning.',
    image: dia,
    technologies: ['Python', 'AI/ML', 'Pandas', 'Scikit-learn']
  }
];

  const navigateToProject = (id: string) => {
    window.location.href = `/project/${id}`;
  };

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Projects</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="backdrop-blur-lg bg-white bg-opacity-5 rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300 cursor-pointer"
              
            >
              <div className="relative h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
{/*                 <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white font-medium">View Details</span>
                </div> */}
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  {project.status && (
                    <span className="text-xs bg-white bg-opacity-20 text-white px-2 py-1 rounded-full">
                      {project.status}
                    </span>
                  )}
                </div>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-white bg-opacity-10 rounded-full text-gray-300 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
