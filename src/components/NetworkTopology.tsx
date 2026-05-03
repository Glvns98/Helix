import React from 'react';
import { motion } from 'motion/react';
import { SUBNETS } from '../constants';
import { SubnetType } from '../types';
import { Shield, Globe, Lock, Database, AppWindow as App } from 'lucide-react';

const icons = {
  [SubnetType.EDGE]: <Shield className="w-5 h-5" />,
  [SubnetType.PUBLIC]: <Globe className="w-5 h-5" />,
  [SubnetType.PRIVATE]: <App className="w-5 h-5" />,
  [SubnetType.ISOLATED]: <Database className="w-5 h-5" />,
};

export const NetworkTopology: React.FC = () => {
  return (
    <div className="p-12 h-full flex flex-col gap-12">
      <div className="flex items-center justify-between border-b border-white/10 pb-6">
        <h3 className="text-xs font-black uppercase tracking-[0.4em] text-white">Network Topology (VPC_HELIX)</h3>
        <div className="flex items-center gap-8 text-[9px] font-bold text-white/40 uppercase tracking-widest">
          <span className="flex items-center gap-2"><div className="w-1 h-1 bg-accent" /> Secure</span>
          <span className="flex items-center gap-2"><div className="w-1 h-1 bg-white/20" /> Internal</span>
        </div>
      </div>

      <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-1">
        {SUBNETS.map((subnet, index) => (
          <motion.div
            key={subnet.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex flex-col gap-4 group"
          >
            <div 
              className="relative aspect-[3/4] border border-white/5 bg-black p-8 group cursor-help transition-all hover:bg-white/[0.02]"
            >
              <div className="absolute top-4 right-4 text-[10px] font-mono font-bold text-white/10 italic">0{index + 1}</div>
              <div className="mb-8 text-white/20 group-hover:text-accent transition-colors">
                {icons[subnet.id as SubnetType]}
              </div>
              <h4 className="text-[12px] font-black uppercase tracking-widest text-white mb-2">{subnet.name}</h4>
              <p className="text-[9px] text-white/40 leading-relaxed uppercase font-bold tracking-tight">{subnet.description}</p>
              
              <div className="mt-auto pt-8">
                <div className="flex flex-col gap-3">
                   <div className="flex justify-between text-[8px] font-black text-white/20 uppercase tracking-[0.2em]">
                    <span>Current_Load</span>
                    <span className="text-white">72.0%</span>
                  </div>
                  <div className="h-[2px] bg-white/5 w-full overflow-hidden">
                    <div className="h-full bg-accent/40 w-3/4" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
