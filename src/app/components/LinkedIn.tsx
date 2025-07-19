"use client";
import Image from 'next/image';
import SectionHeading from './ui/SectionHeading';
import { motion } from 'framer-motion';
import { useScrollAnimation, fadeInUp } from '../../hooks/useScrollAnimation';
import { FiExternalLink } from 'react-icons/fi';

// Data statis untuk profil LinkedIn Anda
const linkedInProfile = {
  name: 'Farhan Miftakhul Farruq',
  headline: 'Full-Stack Developer | Informatics Student',
  bio: 'Specializing in full-stack web development with a passion for creating seamless and impactful digital experiences.',
  location: 'Yogyakarta, Indonesia',
  profileImage: '/images/avatar.jpg',
  bannerImage: '/images/linkedin-banner.jpg',
  profileUrl: 'https://linkedin.com/in/farhan-faruq'
};

export default function LinkedIn() {
  const { ref, controls } = useScrollAnimation();

  return (
    <section id="linkedin" ref={ref} className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="hoverable-text">
          <SectionHeading>Find Me on LinkedIn</SectionHeading>
        </div>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={controls}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-darker/50 rounded-lg border border-primary/20 overflow-hidden w-full">
            {/* Banner Background */}
            <div className="relative w-full aspect-[4/1]">
              <Image
                src={linkedInProfile.bannerImage}
                alt="LinkedIn Banner"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="p-6 relative w-full">
              {/* Profile Image - Dibuat Responsif */}
              <div className="absolute -top-12 sm:-top-16 left-1/2 -translate-x-1/2 sm:left-6 sm:translate-x-0">
                <Image
                  src={linkedInProfile.profileImage}
                  alt={linkedInProfile.name}
                  width={100}
                  height={100}
                  className="rounded-full border-4 border-darker object-cover w-24 h-24 sm:w-32 sm:h-32"
                />
              </div>

              {/* Profile Info - Dibuat Responsif */}
              <div className="pt-14 sm:pt-16 text-center sm:text-left">
                <h3 className="text-2xl font-bold text-white">{linkedInProfile.name}</h3>
                <p className="text-light/80 mt-1">{linkedInProfile.headline}</p>
                <p className="text-light/70 mt-4 border-l-2 border-primary/50 pl-4 text-sm">
                  {linkedInProfile.bio}
                </p>
                <p className="text-light/60 text-sm mt-4">{linkedInProfile.location}</p>
              </div>
              
              {/* Action Button */}
              <div className="mt-6">
                <a 
                  href={linkedInProfile.profileUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-primary text-dark font-bold rounded-md hover:bg-primary/90 transition-colors hoverable"
                >
                  <FiExternalLink className="mr-2" />
                  View Profile on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}