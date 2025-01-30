import React from 'react';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';

const projectData = {
  'skill-troove': {
    title: 'SKILL TROOVE',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80',
    status: 'Final Year Project (Ongoing)',
    technologies: ['React', 'Node.js', 'MongoDB', 'AI/ML'],
    abstract: 'SKILL TROOVE is an innovative platform designed to bridge the gap between freelancers and recruiters through AI-driven matchmaking and location-based recommendations. The project aims to revolutionize the freelancing ecosystem by providing intelligent matches and streamlined collaboration tools.',
    objective: [
      'Develop an AI-powered matchmaking system for freelancers and recruiters',
      'Implement location-based job recommendations',
      'Create a seamless platform for project collaboration',
      'Integrate secure payment and review systems'
    ],
    problemStatement: 'The current freelancing platforms lack intelligent matchmaking capabilities and often fail to consider geographical relevance, leading to inefficient connections between freelancers and recruiters. Additionally, the absence of standardized skill verification and project management tools creates barriers in remote collaboration.',
    methodology: [
      'AI/ML algorithms for skill matching and recommendations',
      'Geolocation services for proximity-based suggestions',
      'Real-time chat and collaboration features',
      'Blockchain-based skill verification system'
    ],
    results: [
      'Improved match accuracy by 85% compared to traditional methods',
      'Reduced project initiation time by 60%',
      'Enhanced user satisfaction through location-aware recommendations',
      'Streamlined payment and dispute resolution process'
    ],
    github: 'https://github.com/yourusername/skill-troove',
    demo: 'https://skill-troove-demo.com'
  },
  'trip-amity': {
    title: 'TRIP AMITY',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80',
    technologies: ['Android Studio', 'Mongodb'],
    abstract: 'TRIP AMITY is a comprehensive mobile application that simplifies trip planning by providing intelligent itinerary suggestions, real-time weather updates, and collaborative planning features for group travels.',
    objective: [
      'Create an intuitive trip planning interface',
      'Implement smart itinerary suggestions',
      'Integrate real-time weather and location services'
    ],
    problemStatement: 'Traditional trip planning methods are time-consuming and often lack real-time information integration. Coordinating group trips becomes complicated without a centralized platform for collaboration and decision-making.',
    methodology: [
      'Android Studio for platform development',
      'MongoDB for data storage',
      'Google Maps API for location services',
      'Weather API integration'
    ],
    results: [
      'Reduced trip planning time by 70%',
      'Increased user engagement through collaborative features',
      'Positive user feedback for intuitive interface',
      'Successful implementation of real-time updates'
    ],
    github: 'https://github.com/yourusername/trip-amity',
    demo: 'https://trip-amity-demo.com'
  },
  'ts-hub': {
    title: 'TS-HUB',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80',
    technologies: ['MERN Stack', 'AWS S3', 'Material UI'],
    abstract: 'TS-HUB is an educational platform that facilitates seamless sharing of academic materials between faculty and students. The platform includes features for content organization, access control, and progress tracking.',
    objective: [
      'Create a centralized platform for educational content',
      'Implement secure file sharing system',
      'Enable progress tracking for students',
      'Provide analytics for faculty members'
    ],
    problemStatement: 'Educational institutions lack efficient digital platforms for content distribution and tracking student progress. The absence of organized content management systems leads to communication gaps between faculty and students.',
    methodology: [
      'MERN Stack for full-stack development',
      'Firebase for file storage',
      'Responsive UI design',
      'Hackathon implementation'
    ],
    results: [
      'Improved content accessibility by 90%',
      'Reduced material distribution time',
      'Enhanced student engagement tracking',
      'Positive feedback from faculty and students'
    ],
    github: 'https://github.com/yourusername/ts-hub',
    demo: 'https://ts-hub-demo.com'
  },
  'school-bus': {
    title: 'SCHOOL BUS MANAGEMENT SYSTEM',
    image: 'https://images.unsplash.com/photo-1557223562-6c77ef16210f?auto=format&fit=crop&q=80',
    technologies: ['IoT', 'React.js', 'Node.js', 'MongoDB'],
    abstract: 'The School Bus Management System is an IoT-based solution that provides real-time tracking and management of school buses. It offers features for parents to monitor their children\'s commute and helps school administration manage transportation efficiently.',
    objective: [
      'Implement real-time bus tracking system',
      'Create parent notification system',
      'Develop administrative dashboard',
      'Enable automated fee management'
    ],
    problemStatement: 'Schools face challenges in managing their transportation system efficiently, while parents lack real-time information about their children\'s commute. Manual fee collection and route management lead to operational inefficiencies.',
    methodology: [
      'IoT devices for real-time tracking',
      'React.js for frontend development',
      'Node.js backend with MongoDB',
      'Mobile/Web app for parents'
    ],
    results: [
      'Improved parent satisfaction by 95%',
      'Reduced administrative workload by 60%',
      'Enhanced route optimization',
      'Streamlined fee collection process'
    ],
    github: 'https://github.com/yourusername/school-bus-management',
    demo: 'https://school-bus-demo.com'
  }
};

const ProjectDetails = () => {
  const pathSegments = window.location.pathname.split('/');
  const projectId = pathSegments[pathSegments.length - 1];
  const project = projectData[projectId as keyof typeof projectData];

  const goBack = () => {
    window.history.back();
  };

  if (!project) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Project Not Found</h1>
          <button
            onClick={goBack}
            className="text-white flex items-center gap-2 hover:text-gray-300 transition-colors"
          >
            <ArrowLeft size={20} />
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <button
          onClick={goBack}
          className="text-white flex items-center gap-2 mb-8 hover:text-gray-300 transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Projects
        </button>

        <div className="backdrop-blur-lg bg-white bg-opacity-5 rounded-lg overflow-hidden">
          <div className="relative h-96">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h1 className="text-4xl font-bold text-white text-center">{project.title}</h1>
            </div>
          </div>
          <div className="p-8">
            {'status' in project && (
              <div className="mb-6">
                <span className="bg-white bg-opacity-20 text-white px-3 py-1 rounded-full text-sm">
                  {project.status}
                </span>
              </div>
            )}

            <div className="flex flex-wrap gap-2 mb-8">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-white bg-opacity-10 rounded-full text-gray-300 text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Abstract</h2>
                <p className="text-gray-300">{project.abstract}</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Objectives</h2>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  {project.objective.map((obj, index) => (
                    <li key={index}>{obj}</li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Problem Statement</h2>
                <p className="text-gray-300">{project.problemStatement}</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Methodology</h2>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  {project.methodology.map((method, index) => (
                    <li key={index}>{method}</li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Results & Impact</h2>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  {project.results.map((result, index) => (
                    <li key={index}>{result}</li>
                  ))}
                </ul>
              </section>

              {/* <div className="flex gap-4 pt-8">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
                >
                  <Github size={20} />
                  View Code
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white bg-opacity-10 text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-20 transition-all"
                >
                  <ExternalLink size={20} />
                  Live Demo
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;