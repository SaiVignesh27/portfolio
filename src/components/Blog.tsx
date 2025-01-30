import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { format } from 'date-fns';

const Blog = () => {
  const blogPosts = [
    {
      title: 'Getting Started with Final Year Project',
      excerpt: 'A comprehensive guide to building full-stack applications with MongoDB, Express.js, React, and Node.js along with AI/ML and Blockchain.',
      date: new Date('2024-12-10'),
      readTime: '5 mins',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80',
      tags: ['Web Development', 'MERN Stack', 'Project','AI/ML','Blockchain']
    },
    {
      title: 'AI Integration in Web Applications',
      excerpt: 'Learn how to integrate AI capabilities into your web applications using modern frameworks and APIs.',
      date: new Date('2025-01-27'),
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80',
      tags: ['AI', 'Machine Learning', 'Web Development']
    }
  ];

  return (
    <section id="blog" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Blog</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="backdrop-blur-lg bg-white bg-opacity-5 rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
            >
              <div className="relative h-48">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-white bg-opacity-10 rounded-full text-gray-300 text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold text-white mb-2">
                  {post.title}
                </h3>

                <p className="text-gray-400 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{format(post.date, 'MMM dd, yyyy')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <button className="mt-4 flex items-center gap-2 text-white hover:text-gray-300 transition-colors">
                  Read More
                  <ArrowRight size={16} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;