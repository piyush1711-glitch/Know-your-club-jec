import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users } from 'lucide-react';

export default function NewsCard({ title, description, date, organizer, tag, icon: Icon }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -5 }}
      className="relative group rounded-3xl overflow-hidden glass-panel border border-white/10 transition-all duration-300 hover:border-accent/40 hover:shadow-[0_0_40px_rgba(139,92,246,0.3)]"
    >
      {/* Background Glow Effect on Hover */}
      <div className="absolute inset-0 bg-linear-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent/20 rounded-full blur-[60px] group-hover:bg-accent/40 transition-colors duration-700 pointer-events-none" />

      <div className="p-8 relative z-10 flex flex-col h-full">
        {/* Top Header: Icon & Tag */}
        <div className="flex justify-between items-start mb-6">
          <div className="w-12 h-12 rounded-xl bg-linear-to-br from-indigo-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center shadow-inner">
            {Icon ? <Icon className="w-6 h-6 text-accent-bright" /> : <Users className="w-6 h-6 text-accent-bright" />}
          </div>
          {tag && (
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-accent/20 text-accent-bright border border-accent/30 shadow-[0_0_10px_rgba(139,92,246,0.2)]">
              {tag}
            </span>
          )}
        </div>

        {/* Content */}
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-white group-hover:to-accent-bright transition-colors">
            {title}
          </h3>
          <p className="text-slate-300 leading-relaxed mb-6">
            {description}
          </p>
        </div>

        {/* Footer Meta */}
        <div className="pt-6 mt-auto border-t border-white/10 flex flex-col sm:flex-row sm:items-center gap-4 text-sm font-medium text-slate-400">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-indigo-400" />
            <span>{date}</span>
          </div>
          <div className="hidden sm:block w-1 h-1 rounded-full bg-slate-600" />
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-purple-400" />
            <span>{organizer}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
