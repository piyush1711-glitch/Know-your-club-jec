import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users } from 'lucide-react';

export default function EventCard({ title, description, date, organizer, tag, icon: Icon, isLive }) {
  // Dynamic styling based on 'isLive' property
  const baseCardStyle = "relative group rounded-3xl overflow-hidden glass-panel border transition-all duration-300 flex flex-col h-full ";
  const activeCardStyle = isLive 
    ? "border-accent/40 shadow-[0_0_30px_rgba(139,92,246,0.15)] hover:border-accent hover:shadow-[0_0_50px_rgba(139,92,246,0.4)]" 
    : "border-white/5 opacity-80 hover:opacity-100 hover:border-white/20";
    
  const tagStyle = isLive
    ? "bg-accent/20 text-accent-bright border border-accent/30 shadow-[0_0_10px_rgba(139,92,246,0.3)] animate-pulse"
    : "bg-white/5 text-slate-400 border border-white/10";

  const glowRender = isLive 
    ? <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent/20 rounded-full blur-[60px] group-hover:bg-accent/40 transition-colors duration-700 pointer-events-none" />
    : <div className="absolute -top-24 -right-24 w-48 h-48 bg-white/5 rounded-full blur-[60px] group-hover:bg-white/10 transition-colors duration-700 pointer-events-none" />;

  return (
    <motion.div
      whileHover={{ scale: isLive ? 1.03 : 1.01, y: isLive ? -5 : -2 }}
      className={baseCardStyle + activeCardStyle}
    >
      {/* Background Hover Cover */}
      <div className="absolute inset-0 bg-linear-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Corner Glow based on status */}
      {glowRender}

      <div className="p-8 relative z-10 flex flex-col h-full flex-1">
        {/* Top Header: Icon & Tag */}
        <div className="flex justify-between items-start mb-6">
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-inner border border-white/10 ${isLive ? 'bg-linear-to-br from-indigo-500/20 to-purple-500/20' : 'bg-white/5'}`}>
            {Icon ? <Icon className={`w-6 h-6 ${isLive ? 'text-accent-bright' : 'text-slate-400'}`} /> : <Users className={`w-6 h-6 ${isLive ? 'text-accent-bright' : 'text-slate-400'}`} />}
          </div>
          {tag && (
            <span className={`px-3 py-1 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wider ${tagStyle}`}>
              {tag}
            </span>
          )}
        </div>

        {/* Content */}
        <div className="flex-1">
          <h3 className={`text-2xl font-bold mb-3 transition-colors ${isLive ? 'text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-white group-hover:to-accent-bright' : 'text-slate-300 group-hover:text-white'}`}>
            {title}
          </h3>
          <p className="text-slate-400 leading-relaxed mb-6 text-sm md:text-base">
            {description}
          </p>
        </div>

        {/* Footer Meta */}
        <div className="pt-6 mt-auto border-t border-white/10 flex flex-col sm:flex-row sm:items-center gap-4 text-sm font-medium text-slate-500">
          {date && (
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-indigo-400/70" />
              <span>{date}</span>
            </div>
          )}
          {date && <div className="hidden sm:block w-1 h-1 rounded-full bg-slate-700" />}
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-purple-400/70" />
            <span>{organizer}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
