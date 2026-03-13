import { motion } from 'framer-motion';
import { Camera, Film, PenTool, Share2, Radio, Video, ArrowRight, Mail, ChevronDown } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function MediaCell() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="min-h-screen bg-brand-gradient text-slate-200 selection:bg-accent selection:text-white"
    >
      {/* 1. Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden">
        {/* Background ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/30 rounded-full blur-[120px] pointer-events-none" />
        
        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={staggerContainer}
          className="z-10 flex flex-col items-center max-w-4xl"
        >
          <motion.div variants={fadeIn} className="mb-8 w-32 h-32 p-4 rounded-full bg-white flex items-center justify-center shadow-[0_0_50px_rgba(255,255,255,0.2)] overflow-hidden">
             <img src="/assets/images/mediacell-logo.jpg" alt="Media Cell Logo" className="w-full h-full object-contain" />
          </motion.div>
          
          <motion.h1 
            variants={fadeIn}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-white"
          >
            Media Cell – JEC
          </motion.h1>
          
          <motion.p 
            variants={fadeIn}
            className="text-xl md:text-2xl text-slate-300 max-w-2xl mb-12 font-light"
          >
            Capturing the spirit, stories, and vibrant life of Jabalpur Engineering College.
          </motion.p>
          
          <motion.button 
            variants={fadeIn}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group px-8 py-4 bg-white text-black font-semibold rounded-full flex items-center gap-2 hover:bg-slate-100 transition-colors shadow-[0_10px_30px_rgba(255,255,255,0.2)]"
          >
            Explore Media Cell
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 animate-bounce"
        >
          <ChevronDown className="w-8 h-8 text-white/50" />
        </motion.div>
      </section>

      {/* Premium Divider */}
      <div className="h-px w-full bg-linear-to-r from-transparent via-white/10 to-transparent" />

      {/* 2. About Section */}
      <section className="py-24 px-4 relative">
        <div className="max-w-5xl mx-auto">
          <motion.div 
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, margin: "-100px" }}
             variants={fadeIn}
             className="glass-panel rounded-3xl p-8 md:p-12 relative overflow-hidden"
          >
             <div className="absolute -top-32 -right-32 w-64 h-64 bg-accent/20 rounded-full blur-[80px]" />
             <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">About Us</h2>
                  <p className="text-lg text-slate-300 leading-relaxed mb-6">
                    We are the official media and event coverage body of Jabalpur Engineering College. From the grandest festivals to the subtlest campus moments, we are there to document history.
                  </p>
                  <p className="text-lg text-slate-300 leading-relaxed">
                    Our team specializes in photography, videography, graphic design, and social media management, ensuring JEC's vibrant culture reaches everyone.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="aspect-square rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center p-6">
                    <Camera className="w-12 h-12 text-accent" />
                  </div>
                  <div className="aspect-square rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center p-6 translate-y-8">
                    <Video className="w-12 h-12 text-accent" />
                  </div>
                </div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* Premium Divider */}
      <div className="h-px w-full bg-linear-to-r from-transparent via-white/10 to-transparent" />

      {/* 3. What We Do Section */}
      <section className="py-24 px-4 relative bg-black/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What We Do</h2>
            <p className="text-slate-400">Our core domains of expertise</p>
          </div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              { icon: Camera, title: "Event Photography", desc: "Capturing memories that last a lifetime." },
              { icon: Film, title: "Event Videography", desc: "Cinematic after-movies and promotional teasers." },
              { icon: PenTool, title: "Marketing", desc: "Creative creating hype for upcoming events produced bt mediacell." },
              { icon: Share2, title: "PR and content", desc: "Managing JEC's digital footprint across platforms." },
              { icon: Radio, title: "Live Coverage", desc: "Real-time updates and live streaming." },
              { icon: Video, title: "Video Editing", desc: "Professional post-production and VFX." }
            ].map((skill, idx) => (
              <motion.div 
                key={idx}
                variants={fadeIn}
                whileHover={{ scale: 1.03, y: -5 }}
                className="glass-panel p-6 rounded-2xl transition-all duration-300 hover:bg-white/10"
              >
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-6">
                  <skill.icon className="w-6 h-6 text-accent-bright" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{skill.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. Gallery Section */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
           <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-4">Gallery</h2>
              <p className="text-slate-400">Glimpses of our recent campus coverage</p>
            </div>
            <button className="hidden md:flex items-center gap-2 text-accent-bright hover:text-white transition-colors">
              View All <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <motion.div 
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
             variants={staggerContainer}
             className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-4 h-[600px]"
          >
             {/* Large span image */}
             <motion.div 
                variants={fadeIn} 
                className="col-span-2 row-span-2 rounded-2xl bg-indigo-900/40 border border-white/5 relative overflow-hidden group"
             >
                <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                   <p className="text-white font-medium text-lg">Inertia 2.0 - Technical Fest</p>
                </div>
                {/* Photo placeholder */}
                <div className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 bg-black/40 flex items-center justify-center">
                  <Camera className="w-12 h-12 text-white/20" />
                </div>
             </motion.div>

             {/* Small images */}
             {[1, 2, 3, 4].map((i) => (
                <motion.div 
                  key={i}
                  variants={fadeIn} 
                  className="rounded-2xl border border-white/5 relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors z-10" />
                  <img 
                     src={`/assets/images/mediacell/image${i}.jpg`} 
                     alt={`Gallery Photo ${i}`}
                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </motion.div>
             ))}
          </motion.div>
        </div>
      </section>

      {/* 5. Team Section */}
      <section className="py-24 px-4 bg-black/20">
        <div className="max-w-5xl mx-auto text-center">
           <h2 className="text-4xl font-bold mb-16">Meet the Team</h2>
           
           <motion.div 
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
             variants={staggerContainer}
             className="flex flex-wrap justify-center gap-8"
           >
              {[
                { role: "President", name: "Gurdeep Singh Oberoi", },
                { role: "Core Member", name: "Harshit Yadav" },
                { role: "Core Member", name: "Pavas katare" },
              ].map((member, i) => (
                 <motion.div 
                    key={i}
                    variants={fadeIn}
                    whileHover={{ y: -10 }}
                    className="w-48 flex flex-col items-center"
                 >
                    <div className="w-32 h-32 rounded-full glass-panel flex items-center justify-center mb-4 border-2 border-accent/30 overflow-hidden">
                       {member.image ? (
                          <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                       ) : (
                          <div className="w-full h-full bg-linear-to-br from-indigo-500/20 to-purple-600/20" />
                       )}
                    </div>
                    <h4 className="text-lg font-semibold">{member.name}</h4>
                    <p className="text-sm text-accent-bright">{member.role}</p>
                 </motion.div>
              ))}
           </motion.div>
        </div>
      </section>

      {/* 6. Join the Club Section */}
      <section className="py-24 px-4 relative overflow-hidden bg-black/40">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-xl h-48 bg-accent/10 rounded-[100%] blur-[100px]" />
         
         <div className="max-w-3xl mx-auto text-center relative z-10 glass-panel p-12 rounded-3xl border border-white/20 shadow-[0_0_50px_rgba(255,255,255,0.05)]">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready to create?</h2>
            <p className="text-xl text-slate-300 mb-10">
              Join the official Media Cell of JEC and turn your passion for content creation into reality.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
               <motion.button 
                 whileHover={{ scale: 1.05 }}
                 whileTap={{ scale: 0.95 }}
                 className="w-full sm:w-auto px-8 py-4 bg-white text-black font-semibold rounded-full shadow-[0_10px_30px_rgba(255,255,255,0.2)] transition-all"
               >
                 Join Media Cell
               </motion.button>
               <motion.button 
                 whileHover={{ scale: 1.05 }}
                 whileTap={{ scale: 0.95 }}
                 className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-full border border-white/20 transition-all flex items-center justify-center gap-2"
               >
                 <Mail className="w-5 h-5" /> Contact Club
               </motion.button>
            </div>
         </div>
      </section>

      {/* 7. Future Platform Vision Section (Hackathon Special) */}
      <section className="py-32 px-4 relative bg-linear-to-t from-black/80 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <motion.div 
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: true }}
                 variants={fadeIn}
                 className="p-1 rounded-2xl bg-linear-to-br from-indigo-500/20 via-purple-500/20 to-transparent inline-block mb-6"
              >
                 <div className="px-4 py-2 bg-black/50 rounded-xl backdrop-blur-md text-sm font-semibold text-accent-bright border border-white/5">
                    Platform Evolution
                 </div>
              </motion.div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight text-white">
                The Future of <br/><span className="text-transparent bg-clip-text bg-linear-to-r from-accent-bright to-indigo-400">Know Your Club</span>
              </h2>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                Our vision extends beyond club discovery. We are building the ultimate centralized ecosystem for Jabalpur Engineering College to foster digital community growth.
              </p>
            </div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
               {[
                 { title: "Club Recruitment", desc: "Automated end-to-end recruitment drives." },
                 { title: "Event Calendar", desc: "Never miss a tech or cultural fest again." },
                 { title: "AI Recommender", desc: "Smart matching based on a student's technical skills." },
                 { title: "Resource Hub", desc: "Central repository of past club workshops and files." }
               ].map((feature, i) => (
                 <motion.div 
                   key={i}
                   variants={fadeIn}
                   whileHover={{ scale: 1.02 }}
                   className="glass-panel p-6 rounded-2xl border-white/5 hover:border-accent/30 transition-colors"
                 >
                   <div className="w-2 h-2 rounded-full bg-accent mb-4 shadow-[0_0_10px_rgba(139,92,246,1)]" />
                   <h4 className="text-lg font-bold text-white mb-2">{feature.title}</h4>
                   <p className="text-sm text-slate-400">{feature.desc}</p>
                 </motion.div>
               ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 8. Footer */}
      <footer className="py-8 border-t border-white/5 bg-black text-center text-slate-500 text-sm">
         <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-semibold text-slate-400">Media Cell – JEC</p>
            <p>Know Your Club – Hackathon Demo Project</p>
            <div className="flex gap-4">
               <a href="/" className="hover:text-accent-bright transition-colors">Back to Home</a>
            </div>
         </div>
      </footer>
    </motion.div>
  );
}
