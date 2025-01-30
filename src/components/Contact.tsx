import React, { useState, useRef } from 'react';
import { Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await emailjs.sendForm(
        'service_5qd3kau', // Replace with your EmailJS service ID
        'template_v8n39qn', // Replace with your EmailJS template ID
        formRef.current!,
        'Va9OaJMIj0XCB0RRv' // Replace with your EmailJS public key
      );

      if (result.text === 'OK') {
        toast.success('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
      console.error('Email error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-black">
      <Toaster position="top-right" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Get in Touch</h2>
        
        <div className="max-w-2xl mx-auto">
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-white mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-white bg-opacity-5 rounded-lg border border-white border-opacity-20 text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition-all"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-white mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-white bg-opacity-5 rounded-lg border border-white border-opacity-20 text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition-all"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-white mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 bg-white bg-opacity-5 rounded-lg border border-white border-opacity-20 text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition-all resize-none"
                placeholder="Your message..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-white text-black py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-opacity-90 transition-all transform hover:scale-105 ${
                isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? (
                'Sending...'
              ) : (
                <>
                  <Send size={20} />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;