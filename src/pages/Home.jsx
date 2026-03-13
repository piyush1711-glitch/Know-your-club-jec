import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, Compass, Shield, Users, ArrowRight, Zap } from 'lucide-react';
import { clubs } from '../data/clubs';
import NewsSection from '../components/NewsSection';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

// Simple animated particles background
const Particles = () => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    const handleResize = () => setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-accent-bright/20"
          style={{
            width: Math.random() * 6 + 2 + 'px',
            height: Math.random() * 6 + 2 + 'px',
            left: Math.random() * windowSize.width + 'px',
            top: Math.random() * windowSize.height + 'px',
          }}
          animate={{
            y: [0, Math.random() * -100 - 50],
            x: [0, (Math.random() - 0.5) * 50],
            opacity: [0.2, 0.8, 0],
          }}
          transition={{
            duration: Math.random() * 4 + 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  );
};

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredClubs, setFilteredClubs] = useState(clubs);

  // Smart filtering system based on search term
  useEffect(() => {
    if (!searchTerm.trim()) {
      setFilteredClubs(clubs);
      return;
    }

    const query = searchTerm.toLowerCase();
    const results = clubs.filter(club => {
      // Check if name matches
      if (club.name.toLowerCase().includes(query)) return true;
      // Check if description matches
      if (club.description.toLowerCase().includes(query)) return true;
      // Check if tags match
      return club.categories.some(tag => tag.includes(query) || query.includes(tag));
    });
    setFilteredClubs(results);
  }, [searchTerm]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-brand-gradient text-slate-200 selection:bg-accent selection:text-white"
    >
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center bg-black/10 backdrop-blur-md border-b border-white/5 pointer-events-none">
        <div className="flex items-center gap-3 pointer-events-auto group cursor-pointer transition-transform duration-300 hover:scale-105">
          <img src="/logo.svg" alt="Know Your Club Logo" className="w-12 h-12 object-contain rounded-xl shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] transition-shadow duration-300" />
          <div className="flex items-baseline gap-0.5">
            <span className="text-xl md:text-2xl font-black text-white tracking-tight drop-shadow-md">
              Know Your Club
            </span>
            <span className="text-sm md:text-base font-bold text-slate-300 tracking-widest pl-1">
              .jec
            </span>
          </div>
        </div>
      </header>

      {/* 1. Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col justify-center items-center text-center px-4 overflow-hidden pt-20">
        <Particles />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-indigo-900/40 rounded-full blur-[120px] pointer-events-none z-0" />
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-purple-900/30 rounded-full blur-[100px] pointer-events-none z-0" />
        
        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={staggerContainer}
          className="z-10 flex flex-col items-center max-w-5xl"
        >
          <motion.div variants={fadeIn} className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-accent/30 text-accent-bright text-sm font-medium tracking-wide">
             <Zap className="w-4 h-4" /> Welcome to JEC Induction 2026
          </motion.div>
          
          <motion.h1 
            variants={fadeIn}
            className="text-6xl md:text-8xl font-extrabold tracking-tight mb-8 text-white leading-tight"
          >
            Find Your Tribe<br />at JEC
          </motion.h1>
          
          <motion.p 
            variants={fadeIn}
            className="text-xl md:text-2xl text-slate-300 max-w-3xl mb-12 font-light leading-relaxed"
          >
            Explore clubs, connect with like-minded students, and make your college experience unforgettable.
          </motion.p>
          
          <motion.div variants={fadeIn} className="flex gap-4">
            <button 
              onClick={() => document.getElementById('search-section').scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-white text-black font-semibold rounded-full flex items-center gap-2 hover:bg-slate-100 outline-none shadow-[0_10px_30px_rgba(255,255,255,0.2)] hover:shadow-[0_15px_40px_rgba(255,255,255,0.4)] transition-all transform hover:scale-105"
            >
              Explore Clubs
            </button>
            <button 
              onClick={() => document.getElementById('about-section').scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-white/5 backdrop-blur-md text-white border border-white/20 font-semibold rounded-full flex items-center gap-2 hover:bg-white/10 outline-none transition-all transform hover:scale-105"
            >
              Learn More
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Premium Divider */}
      <div className="h-px w-full bg-linear-to-r from-transparent via-white/10 to-transparent" />

      {/* News & Updates Section */}
      <NewsSection />

      {/* Premium Divider */}
      <div className="h-px w-full bg-linear-to-r from-transparent via-white/10 to-transparent" />

      {/* 2. About Section */}
      <section id="about-section" className="py-24 px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div 
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, margin: "-100px" }}
             variants={fadeIn}
             className="glass-panel rounded-[2.5rem] p-10 md:p-14 relative overflow-hidden group"
          >
             <div className="absolute -top-32 -right-32 w-80 h-80 bg-accent/20 rounded-full blur-[80px] group-hover:bg-accent/30 transition-colors duration-700" />
             <div className="relative z-10">
                <div className="mb-6 inline-block p-4 rounded-2xl bg-white/5 border border-white/10">
                  <Compass className="w-8 h-8 text-accent-bright" />
                </div>
                <h2 className="text-3xl md:text-5xl font-bold mb-8">The Induction Dilemma</h2>
                <div className="grid md:grid-cols-2 gap-12">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-white">The Problem</h3>
                    <p className="text-lg text-slate-300 leading-relaxed">
                      During college induction, numerous clubs approach first-year students simultaneously. It's overwhelming to digest all that information, leaving students confused about which club truly matches their passion.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-accent-bright">Our Solution</h3>
                    <p className="text-lg text-slate-300 leading-relaxed">
                      "Know Your Club" is an interactive platform built by JEC students, for JEC students. We let you explore, filter, and discover all technical and cultural communities at your own pace.
                    </p>
                  </div>
                </div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* 3. AI Club Finder / Search Section */}
      <section id="search-section" className="pt-24 pb-8 px-4 z-10 sticky top-0 bg-brand-gradient/90 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-4xl mx-auto text-center">
           <h2 className="text-3xl font-bold mb-8 text-white">Explore clubs</h2>
           <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="relative group max-w-2xl mx-auto"
           >
              <div className="absolute inset-0 bg-white/10 rounded-full blur-[20px] group-focus-within:bg-white/20 transition-colors duration-500" />
              <div className="relative flex items-center bg-white/5 border border-white/20 rounded-full px-6 py-4 shadow-2xl backdrop-blur-md">
                <Search className="w-6 h-6 text-white/50 mr-4" />
                <input 
                  type="text" 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="E.g. tech and cultural, coding, dance, photography..."
                  className="w-full bg-transparent border-none outline-none text-white text-lg placeholder-white/30"
                />
              </div>
           </motion.div>
        </div>
      </section>

      {/* 4. Clubs Grid Section */}
      <section className="py-16 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="popLayout">
            {filteredClubs.length === 0 ? (
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                exit={{ opacity: 0 }}
                className="text-center py-20 text-slate-400"
              >
                <div className="inline-block p-6 rounded-full bg-white/5 mb-4">
                  <Search className="w-12 h-12 text-slate-500" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-2">No clubs found</h3>
                <p>Try adjusting your search terms (e.g. tech, music, coding)</p>
              </motion.div>
            ) : (
              <motion.div 
                key="grid"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              >
                {filteredClubs.map((club, idx) => (
                  <motion.div 
                    key={club.id}
                    layout // Animate sorting/filtering
                    variants={fadeIn}
                    whileHover={{ 
                      scale: 1.05, 
                      y: -10,
                      transition: { duration: 0.4, ease: "easeOut" }
                    }}
                    className={`relative rounded-2xl transition-all duration-300 group ${club.isDemo ? 'ring-2 ring-white/50 shadow-[0_0_30px_rgba(255,255,255,0.2)]' : ''}`}
                  >
                    {club.isDemo && (
                      <div className="absolute -top-3 -right-3 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg z-20 animate-pulse">
                        Hackathon Demo
                      </div>
                    )}
                    
                    {/* Link conditionally handles routing */}
                    <Link 
                      to={club.path} 
                      className={`block h-full bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl relative overflow-hidden transition-all duration-500 group-hover:bg-white/10 group-hover:border-white/40 group-hover:shadow-[0_20px_60px_rgba(255,255,255,0.15)] transform ${club.isDemo ? '' : 'pointer-events-none'}`}
                    >
                      {/* Interactive dynamic glow effect */}
                      <div className="absolute -inset-2 bg-linear-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse z-0 pointer-events-none transition-opacity duration-700" />
                      
                      {/* Logo Watermark - Dynamic Scaling */}
                      {club.logo && (
                        <div className="absolute -bottom-6 -right-6 w-44 h-44 opacity-10 group-hover:opacity-20 transition-all duration-700 pointer-events-none z-0 transform group-hover:scale-125 group-hover:-rotate-12">
                           <img src={club.logo} alt="" className="w-full h-full object-contain filter grayscale invert brightness-200" />
                        </div>
                      )}

                      <motion.div 
                        whileHover={{ rotate: 5, scale: 1.1 }}
                        className="relative z-10 w-16 h-16 rounded-full bg-white border border-white/20 flex items-center justify-center mb-6 shadow-2xl overflow-hidden p-2 transition-transform duration-500"
                      >
                        {club.logo ? (
                           <img src={club.logo} alt={`${club.name} Logo`} className="w-full h-full object-contain" />
                        ) : (
                           <Users className="w-8 h-8 text-black" />
                        )}
                      </motion.div>
                      <h3 className="relative z-10 text-2xl font-bold mb-2 text-white">{club.name}</h3>
                      <p className="relative z-10 text-slate-300 text-sm leading-relaxed mb-6 drop-shadow-sm">{club.description}</p>
                      
                      <div className="relative z-10 flex flex-wrap gap-2 mb-6">
                        {club.categories.slice(0, 3).map(tag => (
                          <span key={tag} className="px-2 py-1 text-[10px] uppercase font-bold tracking-wider rounded border border-white/10 bg-white/5 text-slate-300">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center text-sm font-semibold text-accent-bright group-hover:text-white transition-colors">
                        Explore <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* 5. Footer */}
      <footer className="py-12 border-t border-white/5 bg-black/40 text-center text-slate-500 text-sm mt-20 relative z-10">
         <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-semibold text-slate-300">Know Your Club – JEC</p>
            <p>Built for Hackathon Demo</p>
         </div>
      </footer>
    </motion.div>
  );
}
