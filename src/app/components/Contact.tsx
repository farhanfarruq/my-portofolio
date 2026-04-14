'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { personal } from '@/lib/data';
import { CheckCircle2, AlertCircle } from 'lucide-react';

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    try {
      if (!process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID) throw new Error("EmailJS missing config");
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setSubmitStatus({ success: true, message: 'Message sent. I\'ll get back to you soon.' });
      setFormData({ name: '', email: '', message: '' });
    } catch {
      setSubmitStatus({ success: false, message: 'Failed to send. Please email me directly.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = "w-full bg-transparent border-t-0 border-x-0 border-b border-outline-variant/30 focus:ring-0 focus:border-primary focus:outline-none p-0 py-3 font-headline text-lg md:text-xl placeholder:text-outline-variant/30";

  return (
    <section id="contact" className="py-16 md:py-24 px-6 md:px-12 bg-surface-container-high">
      <div className="grid grid-cols-12 gap-8 md:gap-16 max-w-6xl mx-auto">
        <motion.div
           ref={ref}
           initial={{ opacity: 0, y: 24 }}
           animate={isInView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
           className="col-span-12 md:col-span-5 mb-16 md:mb-0"
        >
          <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight mb-4 md:mb-6">
            Let&apos;s build<br/>something<br/><span className="italic text-primary">permanent.</span>
          </h2>
          <p className="font-body text-xl text-secondary max-w-sm">
            I&apos;m currently open to select projects, collaborations, or just a conversation. Reach out to start the dialogue.
          </p>
          <div className="mt-24 space-y-4">
            <p className="font-label text-xs uppercase tracking-[0.3em] text-secondary">Direct Access</p>
            <a className="font-headline text-2xl block border-b border-outline-variant/30 pb-2 w-fit hover:text-primary transition-colors" href={personal.social.email}>
              {personal.email}
            </a>
          </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, x: 16 }}
           animate={isInView ? { opacity: 1, x: 0 } : {}}
           transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
           className="col-span-12 md:col-span-7"
        >
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-12">
            <div className="relative group">
              <label className="block font-label text-[10px] uppercase tracking-[0.3em] text-secondary mb-2 transition-colors group-focus-within:text-primary">Name</label>
              <input 
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={inputClass} 
                placeholder="Identity" 
                type="text" 
              />
            </div>
            
            <div className="relative group">
              <label className="block font-label text-[10px] uppercase tracking-[0.3em] text-secondary mb-2 transition-colors group-focus-within:text-primary">Email Address</label>
              <input 
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={inputClass} 
                placeholder="Communication" 
                type="email" 
              />
            </div>
            
            <div className="relative group">
              <label className="block font-label text-[10px] uppercase tracking-[0.3em] text-secondary mb-2 transition-colors group-focus-within:text-primary">Project Intent / Message</label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className={`${inputClass} resize-none`} 
                placeholder="The Vision" 
                rows={4}
              ></textarea>
            </div>
            
            <button 
              disabled={isSubmitting}
              className="bg-on-surface text-surface px-8 md:px-10 py-3 md:py-4 font-headline text-sm md:text-base font-bold hover:bg-primary transition-colors flex items-center gap-3 group cursor-pointer disabled:opacity-50 mt-8" 
              type="submit"
            >
              {isSubmitting ? 'Initiating...' : 'Initiate Connection'}
              <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_forward</span>
            </button>

            {submitStatus && (
              <div className={`flex items-center gap-2.5 text-sm p-4 border ${submitStatus.success ? 'bg-primary-fixed border-primary text-primary' : 'bg-error-container border-error text-error'}`}>
                {submitStatus.success ? <CheckCircle2 size={16} /> : <AlertCircle size={16} />}
                {submitStatus.message}
              </div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
