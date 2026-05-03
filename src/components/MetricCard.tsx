import React from 'react';
import { motion } from 'motion/react';
import { Shield, Server, Database, Cpu, Activity, BarChart3, AlertTriangle, Zap, Terminal } from 'lucide-react';
import { Metric } from '../types';

export const MetricCard: React.FC<Metric & { icon: React.ReactNode }> = ({ label, value, unit, status, icon }) => {
  const statusColor = {
    optimal: 'text-white',
    warning: 'text-accent',
    critical: 'text-red-500',
  }[status];

  return (
    <div className="p-6 flex flex-col gap-3 group">
      <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
        <span>{label}</span>
        <div className="opacity-40 group-hover:opacity-100 transition-opacity">{icon}</div>
      </div>
      <div className="flex items-baseline gap-2">
        <span className={`text-4xl font-black italic tracking-tighter uppercase ${statusColor}`}>{value}</span>
        <span className="text-[10px] text-white/20 uppercase font-mono font-bold tracking-widest">{unit}</span>
      </div>
      <div className="mt-2 flex items-center gap-3">
        <div className="flex-1 h-[2px] bg-white/10 overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: status === 'optimal' ? '85%' : status === 'warning' ? '60%' : '30%' }}
            className={`h-full ${status === 'warning' ? 'bg-accent' : 'bg-white'}`}
          />
        </div>
        <span className={`text-[8px] font-black uppercase tracking-widest ${status === 'warning' ? 'text-accent' : 'text-white/40'}`}>
          {status}
        </span>
      </div>
    </div>
  );
};
