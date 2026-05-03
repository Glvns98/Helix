/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  Activity, 
  Cpu, 
  Shield, 
  Server, 
  Database, 
  Box, 
  Bell, 
  User, 
  LayoutDashboard,
  Search,
  Settings,
  Menu
} from 'lucide-react';
import { BackgroundGrid, BorderBeam } from './components/Effects';
import { MetricCard } from './components/MetricCard';
import { NetworkTopology } from './components/NetworkTopology';
import { AIIntelligence } from './components/AIIntelligence';
import { SecurityAudit } from './components/SecurityAudit';
import { TransactionFlow } from './components/TransactionFlow';
import { SYSTEM_CONFIG } from './constants';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-zinc-300 font-sans selection:bg-cyan-500/30">
      <BackgroundGrid />
      
      {/* Top Navigation */}
      <header className="h-20 border-b border-white/10 flex items-center px-12 sticky top-0 bg-black/90 backdrop-blur-xl z-50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-accent flex items-center justify-center text-black font-black italic text-xl">H</div>
          <div className="flex flex-col">
            <span className="text-sm font-black tracking-[0.4em] uppercase text-white leading-none">{SYSTEM_CONFIG.PROJECT_NAME}</span>
            <span className="text-[9px] font-bold text-accent mt-1 tracking-widest uppercase">Central Operations</span>
          </div>
        </div>

        <nav className="hidden lg:flex ml-20 gap-12">
          {['Infrastructure', 'Transactions', 'Security', 'Philosophy'].map((item) => (
            <a key={item} href="#" className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 hover:text-accent transition-colors">
              {item}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-8">
          <div className="flex flex-col items-end">
            <div className="text-[11px] font-black text-white uppercase tracking-wider">Level 3 Clearance</div>
            <div className="text-[8px] text-white/30 uppercase tracking-widest font-bold mt-0.5">EST. 05:10:35Z</div>
          </div>
          <div className="w-10 h-10 rounded-none bg-black border border-white/20 flex items-center justify-center relative group">
             <img src="https://api.dicebear.com/7.x/pixel-art/svg?seed=Helix" alt="Avatar" className="w-8 h-8 opacity-60 group-hover:opacity-100 transition-opacity" referrerPolicy="no-referrer" />
          </div>
        </div>
      </header>

      <main className="max-w-[1600px] mx-auto p-12 grid grid-cols-12 gap-1 gap-y-12">
        {/* Bold Hero Header */}
        <div className="col-span-12 mb-12">
          <div className="flex items-center gap-6 mb-6">
            <span className="text-accent text-sm font-bold tracking-widest uppercase">Active Node</span>
            <div className="h-[1px] flex-1 bg-white/10" />
            <span className="text-[10px] font-bold text-white/10 uppercase tracking-[0.5em]">Global Payment Orchestration</span>
          </div>
          <h1 className="text-[100px] md:text-[140px] leading-[0.8] font-black uppercase italic tracking-tighter text-white">
            Build the<br />
            <span className="text-accent">Infrastructure.</span>
          </h1>
        </div>

        {/* Row 1: Quick Stats - Flat minimalist grid */}
        <div className="col-span-12 lg:col-span-3 border-r border-white/10">
          <MetricCard 
            label="Throughput"
            value="1492"
            unit="TPS"
            status="optimal"
            icon={<Activity className="w-4 h-4" />}
          />
        </div>
        <div className="col-span-12 lg:col-span-3 border-r border-white/10">
          <MetricCard 
            label="Sync Latency"
            value="84"
            unit="MS"
            status="optimal"
            icon={<Cpu className="w-4 h-4" />}
          />
        </div>
        <div className="col-span-12 lg:col-span-3 border-r border-white/10">
          <MetricCard 
            label="Webhook Load"
            value="78.2"
            unit="%"
            status="warning"
            icon={<Server className="w-4 h-4" />}
          />
        </div>
        <div className="col-span-12 lg:col-span-3">
          <MetricCard 
            label="Shard Health"
            value="99.99"
            unit="AVAIL"
            status="optimal"
            icon={<Database className="w-4 h-4" />}
          />
        </div>

        {/* Row 2: Topology & Intelligence */}
        <div className="col-span-12 lg:col-span-9">
          <BorderBeam className="h-full">
            <NetworkTopology />
          </BorderBeam>
        </div>
        <div className="col-span-12 lg:col-span-3">
          <BorderBeam className="h-full">
            <SecurityAudit />
          </BorderBeam>
        </div>

        {/* Row 3: AI Intelligence & Transaction Flow */}
        <div className="col-span-12 lg:col-span-8">
          <BorderBeam className="h-full">
            <div className="grid grid-cols-1 md:grid-cols-2 h-full">
              <AIIntelligence />
              <div className="border-l border-white/5">
                <TransactionFlow />
              </div>
            </div>
          </BorderBeam>
        </div>
        
        <div className="col-span-12 lg:col-span-4">
          <BorderBeam>
            <div className="p-12">
               <div className="flex items-center justify-between mb-8">
                <h3 className="text-xs font-black uppercase tracking-[0.3em] text-white">Activity</h3>
                <span className="text-[10px] font-bold text-accent uppercase">Live Hub</span>
              </div>
              <div className="space-y-6">
                {[
                  { time: '05:10:42', event: 'EKS Pod scaled to +3', type: 'info' },
                  { time: '05:09:12', event: 'WAF blocked IP 192.168.1.1', type: 'warning' },
                  { time: '05:08:55', event: 'RDS Replica recovery primary', type: 'info' },
                  { time: '05:07:30', event: 'SQS FIFO queue depth > 500', type: 'warning' },
                ].map((log, i) => (
                  <div key={i} className="flex justify-between items-center text-[10px] font-bold border-b border-white/10 pb-4">
                    <div className="flex gap-6">
                      <span className="text-white/20 font-mono italic">{log.time}</span>
                      <span className="text-white uppercase tracking-tight">{log.event}</span>
                    </div>
                    <span className={`text-[8px] font-black uppercase tracking-widest ${log.type === 'warning' ? 'text-accent' : 'text-white/40'}`}>
                      {log.type}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </BorderBeam>
        </div>
      </main>

      {/* Footer / Status Bar */}
      <footer className="h-10 border-t border-white/10 bg-black flex items-center px-12 fixed bottom-0 left-0 right-0 z-50 text-[9px] font-bold uppercase tracking-[0.2em] text-white/40">
        <div className="flex items-center gap-8">
          <span className="flex items-center gap-2">
            <div className="w-1 h-1 bg-accent" />
            Status: Synchronized
          </span>
          <span className="flex items-center gap-2">
             <div className="w-1 h-1 bg-accent" />
            Region: {SYSTEM_CONFIG.REGION}
          </span>
        </div>
        <div className="ml-auto flex items-center gap-4">
           <span className="font-mono text-white/20">HELIX_SEC_AUDIT_PASS</span>
           <div className="h-3 w-[1px] bg-white/10" />
           <span className="text-white">© 2026 HELIX_INTL</span>
        </div>
      </footer>
    </div>
  );
}

