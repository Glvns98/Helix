import React from 'react';
import { motion } from 'motion/react';
import { SUBNETS } from '../constants';

export const TransactionFlow: React.FC = () => {
  return (
    <div className="p-12 h-full flex flex-col gap-12 overflow-hidden">
      <div className="flex items-center justify-between">
        <h3 className="text-xs font-black uppercase tracking-[0.4em] text-white">Webhook Stream</h3>
      </div>

      <div className="relative flex-1 flex flex-col justify-around">
        {/* Connection Line */}
        <div className="absolute left-[30px] top-10 bottom-10 w-[2px] bg-white/5">
           <motion.div 
            animate={{ top: ['0%', '100%'] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 w-full h-12 bg-gradient-to-b from-transparent via-accent to-transparent"
           />
        </div>

        {['Transaction Ingress', 'Auth Gateway', 'SQS Pipeline', 'DB Commit'].map((step, i) => (
          <motion.div 
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.2 }}
            className="flex items-center gap-8 relative z-10 group"
          >
            <div className="w-14 h-14 rounded-none border border-white/10 bg-black flex items-center justify-center relative shadow-2xl group-hover:border-accent transition-colors">
               <div className="w-2 h-2 bg-white/20 group-hover:bg-accent transition-colors" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-black uppercase tracking-tighter text-white">{step}</span>
              <div className="mt-3 flex gap-1.5 focus:outline-none">
                {[1,2,3,4,5,6].map(dot => (
                  <div key={dot} className={`w-1.5 h-1.5 ${i === 0 || (i === 1 && dot < 4) ? 'bg-accent/40' : 'bg-white/5'}`} />
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
