import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Camera } from 'lucide-react';
import EventCard from './EventCard';

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const eventsData = [
  {
    title: "CodeKumbh 2.0 – The Biggest Hackathon",
    description: "CodeKumbh 2.0 is a large-scale hackathon organized by JLUG where students collaborate, innovate, and build impactful technology projects.",
    date: "12th – 13th March",
    organizer: "JLUG (JEC Linux User Group)",
    tag: "Live Now / Ongoing",
    isLive: true,
    icon: Terminal
  },
  {
    title: "Intertia 2.0",
    description: "Intertia 2.0 was a campus fest organized by the Media Cell of Jabalpur Engineering College featuring photography, media coverage and creative events across campus.",
    organizer: "Media Cell",
    tag: "Recently Happened",
    isLive: false,
    icon: Camera
  }
];

export default function NewsSection() {
  return (
    <section className="py-24 px-4 relative z-10 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">News & Updates</h2>
            <p className="text-xl text-slate-400">Stay informed about important club activities.</p>
          </motion.div>

          <motion.div
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
             variants={fadeIn}
          >
             <button className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 hover:border-white/20 transition-all active:scale-95">
               View All Updates
             </button>
          </motion.div>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {eventsData.map((event, index) => (
             <motion.div key={index} variants={fadeIn} className="h-full">
               <EventCard {...event} />
             </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
