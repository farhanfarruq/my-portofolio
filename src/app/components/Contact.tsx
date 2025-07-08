"use client";
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import SectionHeading from './ui/SectionHeading';
import { fadeIn } from '../hooks/useScrollAnimation';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Contact() {
  const { ref, controls } = useScrollAnimation();
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      
      setSubmitStatus({
        success: true,
        message: 'Your message has been sent successfully! I will get back to you soon.'
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: 'Failed to send message. Please try again later or contact me directly at john@example.com'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" ref={ref} className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading>Get In Touch</SectionHeading>
        
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate={controls}
          className="max-w-3xl mx-auto"
        >
          <p className="text-center text-light/80 mb-12">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
            I'll do my best to get back to you!
          </p>
          
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-light/70 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark/50 border border-primary/10 rounded-md text-light placeholder-light/30 focus:border-primary/50 focus:ring-1 focus:ring-primary/30 outline-none transition-all hoverable"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-light/70 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark/50 border border-primary/10 rounded-md text-light placeholder-light/30 focus:border-primary/50 focus:ring-1 focus:ring-primary/30 outline-none transition-all hoverable"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-light/70 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-dark/50 border border-primary/10 rounded-md text-light placeholder-light/30 focus:border-primary/50 focus:ring-1 focus:ring-primary/30 outline-none transition-all hoverable"
                placeholder="Your message here..."
              />
            </div>
            
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 bg-primary text-dark font-medium rounded-md hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed hoverable"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
            
            {submitStatus && (
              <div
                className={`p-4 rounded-md ${
                  submitStatus.success ? 'bg-green-900/30 border border-green-800' : 'bg-red-900/30 border border-red-800'
                }`}
              >
                <p className={submitStatus.success ? 'text-green-300' : 'text-red-300'}>
                  {submitStatus.message}
                </p>
              </div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}