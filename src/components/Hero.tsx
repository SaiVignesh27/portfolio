import React from 'react';
import resume from './resume.pdf';
import { GithubIcon, Linkedin, Mail, Phone, MapPin, FileDown } from 'lucide-react';
const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-90" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay opacity-10" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-6xl font-bold text-white mb-4 animate-fadeIn">
          Kadiri Sai Vignesh
        </h1>
        <p className="text-xl sm:text-2xl text-gray-300 mb-8 animate-slideUp">
          Aspiring Engineer | Tech Innovator | Passionate Developer
        </p>
        
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          <a href="tel:+918688959653" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
            <Phone size={20} />
            <span>+91 8688959653</span>
          </a>
          <a href="mailto:kadirivignesh2005@gmail.com" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
            <Mail size={20} />
            <span>kadirivignesh2005@gmail.com</span>
          </a>
          <span className="flex items-center gap-2 text-gray-300">
            <MapPin size={20} />
            <span>Guntur, India</span>
          </span>
        </div>

        <p className="max-w-2xl mx-auto text-gray-300 mb-8">
          Aspiring to launch a career in the engineering industry with a focus on technical expertise, 
          adaptability, and innovation. Open to learning from experienced professionals and contributing 
          to impactful projects as a 2025 graduate.
        </p>

        <div className="flex justify-center gap-4 mb-8">
          <a
            href={resume} download="resume"
            className="bg-white text-black px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-opacity-90 transition-all transform hover:scale-105"
          >
            <FileDown size={20} />
            Download Resume
          </a>
          <a
            href="#contact"
            className="bg-white bg-opacity-10 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-opacity-20 transition-all transform hover:scale-105"
          >
            Contact Me
          </a>
        </div>

        <div className="flex justify-center gap-6">
          <a href="https://github.com/saivignesh27" className="text-gray-300 hover:text-white transition-colors transform hover:scale-110">
            <GithubIcon size={24} />
          </a>
          <a href="https://www.linkedin.com/in/sai-vignesh-kadiri/" className="text-gray-300 hover:text-white transition-colors transform hover:scale-110">
            <Linkedin size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;