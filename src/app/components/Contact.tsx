'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Github, Linkedin, Mail, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import Button from './ui/Button';
import { personal } from '@/lib/data';

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
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
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

  const inputClass =
    'w-full px-3.5 py-2.5 text-sm bg-zinc-900 border border-zinc-800 rounded-md text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-zinc-600 transition-colors duration-200';

  const socialLinks = [
    { icon: Github, href: personal.social.github, label: 'GitHub' },
    { icon: Linkedin, href: personal.social.linkedin, label: 'LinkedIn' },
    { icon: Mail, href: personal.social.email, label: 'Email' },
  ];

  return (
    <section id="contact" className="py-24 border-t border-zinc-900">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <SectionHeading index="05." title="Contact" />

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="grid grid-cols-1 md:grid-cols-5 gap-12"
        >
          {/* Left — Intro */}
          <div className="md:col-span-2 space-y-6">
            <div>
              <h3 className="text-lg font-medium text-zinc-100 mb-2">
                Let&apos;s work together
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                I&apos;m open to freelance opportunities, collaborations, or just a conversation.
                Feel free to reach out.
              </p>
            </div>

            <div className="space-y-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={label !== 'Email' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-zinc-500 hover:text-zinc-200 transition-colors group"
                >
                  <Icon size={15} className="shrink-0" />
                  <span>{label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div className="md:col-span-3">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs text-zinc-500 mb-1.5 font-[var(--font-geist-mono)] tracking-wide">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs text-zinc-500 mb-1.5 font-[var(--font-geist-mono)] tracking-wide">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs text-zinc-500 mb-1.5 font-[var(--font-geist-mono)] tracking-wide">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="What would you like to discuss?"
                  className={`${inputClass} resize-none`}
                />
              </div>

              <div className="flex items-center justify-between gap-4">
                <Button type="submit" variant="primary" disabled={isSubmitting} className="gap-2">
                  {isSubmitting ? 'Sending...' : (
                    <>
                      Send Message <Send size={14} />
                    </>
                  )}
                </Button>
              </div>

              {submitStatus && (
                <div className={`flex items-center gap-2.5 text-sm p-3.5 rounded-md border ${submitStatus.success
                    ? 'bg-emerald-950/40 border-emerald-900 text-emerald-400'
                    : 'bg-red-950/40 border-red-900 text-red-400'
                  }`}>
                  {submitStatus.success
                    ? <CheckCircle2 size={15} className="shrink-0" />
                    : <AlertCircle size={15} className="shrink-0" />}
                  {submitStatus.message}
                </div>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
