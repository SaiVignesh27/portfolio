import React from 'react';
import freelance from './freelance.png';
import ts from './tshub.png';
import { ExternalLink, Github, Code2 } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 'skill-troove',
      title: 'SKILL TROOVE',
      description: 'A web/mobile app for connecting freelancers and recruiters, featuring AI-driven matchmaking and location-based recommendations.',
      image: freelance,
      status: 'Final Year Project (Ongoing)',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'AI/ML']
    },
    {
      id: 'trip-amity',
      title: 'TRIP AMITY',
      description: 'A mobile application designed to assist in itinerary planning for trips.',
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80',
      technologies: ['React Native', 'Firebase', 'Google Maps API']
    },
    {
      id: 'ts-hub',
      title: 'TS-HUB',
      description: 'A web application to help students access educational materials provided by faculty members.',
      image: ts,
      technologies: ['MERN Stack', 'AWS S3', 'Material UI']
    },
    {
      id: 'school-bus',
      title: 'SCHOOL BUS MANAGEMENT SYSTEM',
      description: 'An IoT solution for school buses that provides real-time location updates and child commute details for parents, along with fee reports for management.',
      image: 'https://images.unsplash.com/photo-1557223562-6c77ef16210f?auto=format&fit=crop&q=80',
      technologies: ['IoT', 'React.js', 'Node.js', 'MongoDB']
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
              onClick={() => navigateToProject(project.id)}
            >
              <div className="relative h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white font-medium">View Details</span>
                </div>
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