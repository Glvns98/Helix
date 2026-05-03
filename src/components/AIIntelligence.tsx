import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Brain, Sparkles, Terminal, FileText, CheckCircle2, AlertCircle } from 'lucide-react';

const REBUTTAL_STEPS = [
  "Aggregating transaction metadata...",
  "Validating customer IP footprint (Selcom API)...",
  "Analyzing behavioral patterns via AWS Bedrock...",
  "Synthesizing rebuttal document (Claude 3 Opus)...",
  "Finalizing PDF audit trail...",
];

export const AIIntelligence: React.FC = () => {
  const [step, setStep] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    if (step < REBUTTAL_STEPS.length) {
      const timer = setTimeout(() => setStep(s => s + 1), 1500);
      return () => clearTimeout(timer);
    } else {
      setIsDone(true);
    }
  }, [step]);

  return (
    <div className="p-12 h-full flex flex-col gap-12">
      <div className="flex items-center justify-between">
        <h3 className="text-xs font-black uppercase tracking-[0.4em] text-accent flex items-center gap-3">
          <Brain className="w-5 h-5" /> Analysis
        </h3>
        <span className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] flex items-center gap-2">
          <Sparkles className="w-3 h-3 text-accent" /> AWS Bedrock
        </span>
      </div>

      <div className="flex-1 grid grid-cols-1 gap-12 overflow-hidden">
        <div className="bg-black border border-white/10 p-8 font-mono text-[10px] overflow-hidden flex flex-col">
          <div className="flex items-center gap-3 text-white/20 mb-8 pb-4 border-b border-white/5">
            <Terminal className="w-4 h-4" />
            <span className="font-bold tracking-widest uppercase">Synthesis Process</span>
          </div>
          <div className="flex-1 space-y-4 overflow-y-auto">
            {REBUTTAL_STEPS.slice(0, step + 1).map((text, i) => (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                key={i}
                className="flex items-start gap-4"
              >
                <span className="text-white/10 font-bold italic">{new Date().toLocaleTimeString('en-US', { hour12: false })}</span>
                <span className={`tracking-tight ${i === step ? "text-accent font-bold" : "text-white/40"}`}>
                  {i === step && step < REBUTTAL_STEPS.length ? "> " : "✓ "}
                  {text.toUpperCase()}
                </span>
                {i === step && step < REBUTTAL_STEPS.length && (
                  <motion.span 
                    animate={{ opacity: [0, 1] }} 
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className="w-2 h-4 bg-accent inline-block align-middle"
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <AnimatePresence>
          {isDone && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-4 p-8 bg-accent text-black flex flex-col md:flex-row items-center justify-between gap-8"
            >
              <div className="flex items-center gap-6">
                <div className="p-4 bg-black/10">
                  <FileText className="w-8 h-8" />
                </div>
                <div className="text-left">
                  <h4 className="text-sm font-black uppercase italic leading-none">Payload_772910X_Generated</h4>
                  <p className="text-[10px] font-bold uppercase tracking-tighter mt-1 opacity-60">
                    Confidence Score: <span className="font-black">92.4%</span>
                  </p>
                </div>
              </div>
              <button 
                onClick={() => { setStep(0); setIsDone(false); }}
                className="w-full md:w-auto px-8 py-4 bg-black text-white text-[10px] font-black uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all"
              >
                Finalize Document
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
