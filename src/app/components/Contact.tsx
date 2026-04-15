'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { personal } from '@/lib/data';
import { CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';
import { GlitchText } from '@/app/components/ui/GlitchText';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
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
      setSubmitStatus({ success: true, message: 'SIGNAL TRANSMITTED. RESPONSE PENDING.' });
      setFormData({ name: '', email: '', message: '' });
    } catch {
      setSubmitStatus({ success: false, message: 'TRANSMISSION FAILED. USE DIRECT EMAIL.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = "w-full bg-surface-lowest/40 border border-primary/10 focus:border-primary/40 focus:bg-surface-lowest/60 outline-none p-4 font-mono text-xs md:text-sm text-primary/90 placeholder:text-tertiary/20 transition-all";

  return (
    <section id="contact" className="border-t border-primary/20 relative z-10 bg-surface/5">
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Side: Messaging */}
          <div className="flex flex-col">
            <h2 className="font-display text-4xl md:text-6xl text-tertiary mb-10 tracking-tight leading-[0.85] uppercase font-light">
              <GlitchText text="Initiate" /><br />
              <GlitchText text="Connection" />
            </h2>
            <p className="font-tech text-xs md:text-sm text-text-muted max-w-sm leading-relaxed mb-16 tracking-wider uppercase opacity-80">
              OPEN FOR SELECT PROJECTS, ARCHITECTURAL COLLABORATIONS, OR DEEP TECHNICAL DIALOGUES.
            </p>
            
            <div className="mt-auto space-y-8">
              <div className="space-y-3">
                <span className="font-tech text-[10px] tracking-[0.4em] text-tertiary/30 uppercase block">Terminal Port</span>
                <a 
                  href={personal.social.email}
                  className="font-mono text-sm md:text-lg text-primary hover:glow-primary transition-all inline-block border-b border-primary/20 pb-1"
                >
                  {personal.email}
                </a>
              </div>
              
              <div className="flex gap-8">
                {Object.entries(personal.social).filter(([k]) => k !== 'email').map(([key, url]) => (
                  <a 
                    key={key} 
                    href={url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-tech text-[10px] tracking-[0.3em] text-tertiary/40 uppercase hover:text-primary transition-colors"
                  >
                    {key} ↗
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="relative">
            {/* Form Decoration */}
            <div className="absolute -top-4 -left-4 w-8 h-8 border-t border-l border-primary/20" />
            <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b border-r border-primary/20" />
            
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 bg-surface-lowest/20 p-8 md:p-10 border border-primary/5">
              <div className="space-y-2">
                <label className="block font-tech text-[9px] uppercase tracking-[0.3em] text-tertiary/30">01. Identity</label>
                <input 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={inputClass} 
                  placeholder="NAME / ORGANIZATION" 
                  type="text" 
                />
              </div>
              
              <div className="space-y-2">
                <label className="block font-tech text-[9px] uppercase tracking-[0.3em] text-tertiary/30">02. Protocol</label>
                <input 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={inputClass} 
                  placeholder="EMAIL ADDRESS" 
                  type="email" 
                />
              </div>
              
              <div className="space-y-2">
                <label className="block font-tech text-[9px] uppercase tracking-[0.3em] text-tertiary/30">03. Payload</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className={`${inputClass} resize-none`} 
                  placeholder="THE VISION / PROJECT INTENT" 
                  rows={5}
                ></textarea>
              </div>
              
              <button 
                disabled={isSubmitting}
                className="w-full bg-primary/10 border border-primary/20 text-primary py-4 font-tech text-[11px] tracking-[0.4em] uppercase hover:bg-primary hover:text-surface transition-all flex items-center justify-center gap-3 group disabled:opacity-50" 
                type="submit"
              >
                {isSubmitting ? 'TRANSMITTING...' : 'EXECUTE CONNECTION'}
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </button>

              {submitStatus && (
                <div className={`flex items-center gap-3 text-[10px] font-mono p-4 border tracking-tight ${submitStatus.success ? 'bg-primary/5 border-primary/20 text-primary' : 'bg-red-500/5 border-red-500/20 text-red-500'}`}>
                  {submitStatus.success ? <CheckCircle2 size={14} /> : <AlertCircle size={14} />}
                  {submitStatus.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
