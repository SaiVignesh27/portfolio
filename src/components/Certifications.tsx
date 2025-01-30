import React from 'react';
import { Award } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    "Wipro Certified JAVA Full Stack Developer",
    "CodeTantra Certified MERN Stack Developer",
    "AI-ML-DS Internship (IIDT Blackbuck)",
    "Advanced Python Programming (Amphisoft E-Box)",
    "Data Structures and Algorithms using C Programming (Amphisoft E-Box)",
    "Data Science for Engineers (NPTEL)",
    "AI & IoT Development (MakeSkilled)",
    "MEAN Stack Development (MakeSkilled)",
    "Android App Development (MakeSkilled)",
    "Google Cloud Computing Foundations (Google)",
    "AI-ML Certification (YHills)",
    "JAVA Full Stack Development (Edunext)"
  ];

  return (
    <section id="certifications" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Certifications</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="backdrop-blur-lg bg-white bg-opacity-5 p-6 rounded-lg transform hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <Award className="text-white" size={24} />
                <h3 className="text-lg font-medium text-white">{cert}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;