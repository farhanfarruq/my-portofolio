"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import SectionHeading from './ui/SectionHeading';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '../../hooks/useScrollAnimation';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { FiUsers, FiUserPlus, FiPackage, FiExternalLink } from 'react-icons/fi';

// Interface untuk tipe data profil GitHub
interface GitHubProfile {
  avatar_url: string;
  name: string;
  bio: string;
  followers: number;
  following: number;
  public_repos: number;
  html_url: string;
}

export default function Github() {
  const { ref, controls } = useScrollAnimation();
  const [profile, setProfile] = useState<GitHubProfile | null>(null);
  const GITHUB_USERNAME = 'farhanfarruq';
  const THEME = 'radical'; 

  useEffect(() => {
    async function fetchProfile() {
      try {
        const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
        if (response.ok) {
          const data = await response.json();
          setProfile(data);
        } else {
          console.error("Failed to fetch GitHub profile");
        }
      } catch (error) {
        console.error("Error fetching GitHub profile:", error);
      }
    }
    fetchProfile();
  }, []);

  return (
    <section id="github" ref={ref} className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="hoverable-text">
          <SectionHeading>My GitHub Profile</SectionHeading>
        </div>

        <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={controls}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8"
        >
            {/* Kolom Kiri: Profil Info & Streak */}
            <motion.div variants={fadeInUp} className="lg:col-span-1 space-y-8">
                {/* Kartu Profil yang sudah diringkas */}
                <div className="bg-darker/50 p-6 rounded-lg border border-primary/20 flex flex-col items-center text-center min-h-[640px]">
                    {profile ? (
                        <>
                            <div className="flex flex-col items-center justify-center h-full flex-1 mt-12">
                                <Image
                                    src={profile.avatar_url}
                                    alt={profile.name || 'GitHub Avatar'}
                                    width={128}
                                    height={128}
                                    className="rounded-full border-4 border-primary/50 mb-4"
                                />
                                <h3 className="text-2xl font-bold text-white">{profile.name}</h3>
                                <div className="flex flex-wrap justify-center gap-4 my-4 text-light/80">
                                    <span className="flex items-center"><FiUsers className="mr-2 text-primary" /> {profile.followers}</span>
                                    <span className="flex items-center"><FiUserPlus className="mr-2 text-primary" /> {profile.following}</span>
                                </div>
                                <a 
                                    href={profile.html_url} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="mt-4 inline-flex items-center px-6 py-3 bg-primary text-dark font-medium rounded-md hover:bg-primary/90 transition-colors hoverable"
                                >
                                    <FiExternalLink className="mr-2" />
                                    View Profile
                                </a>
                            </div>
                        </>
                    ) : (
                        <div className="flex items-center justify-center h-full">
                            <p>Loading Profile...</p>
                        </div>
                    )}
                </div>

                {/* GitHub Streak Stats */}
                <div className="flex justify-center">
                    <img 
                        src={`https://github-readme-streak-stats.herokuapp.com/?user=${GITHUB_USERNAME}&theme=${THEME}`} 
                        alt="GitHub Streak"
                        className="rounded-lg" 
                    />
                </div>
            </motion.div>

            {/* Kolom Kanan: Statistik Visual */}
            <motion.div variants={fadeInUp} className="lg:col-span-2 space-y-8">
                <img
                    src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${GITHUB_USERNAME}&layout=compact&langs_count=8&theme=${THEME}`}
                    alt="Top Languages"
                    className="w-full rounded-lg"
                />
                <img
                    src={`https://github-readme-stats.vercel.app/api?username=${GITHUB_USERNAME}&show_icons=true&theme=${THEME}&include_all_commits=true&count_private=true`}
                    alt="GitHub Stats"
                    className="w-full rounded-lg"
                />
            </motion.div>
        </motion.div>
        
        {/* Kontribusi di bawah */}
        <motion.div variants={fadeInUp} initial="hidden" animate={controls}>
            <img
                src={`https://ghchart.rshah.org/${GITHUB_USERNAME}`}
                alt="GitHub Contributions"
                className="w-full rounded-lg"
            />
        </motion.div>

      </div>
    </section>
  );
}