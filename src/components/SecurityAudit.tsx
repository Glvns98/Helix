import React from 'react';
import { Shield, Key, Lock, CheckCircle2, Eye, EyeOff } from 'lucide-react';

export const SecurityAudit: React.FC = () => {
  const securityFeatures = [
    { label: 'PCI-DSS Compliance', status: 'Level 1 Active', icon: <Shield className="w-4 h-4" /> },
    { label: 'KMS Data at Rest', status: 'AES-256 Enabled', icon: <Lock className="w-4 h-4" /> },
    { label: 'TLS 1.3 Encryption', status: 'Fully Encrypted', icon: <CheckCircle2 className="w-4 h-4" /> },
    { label: 'Secrets Injection', status: 'ASCP Validated', icon: <Key className="w-4 h-4" /> },
  ];

  return (
    <div className="p-12 h-full flex flex-col gap-12">
      <h3 className="text-xs font-black uppercase tracking-[0.4em] text-white">Security & Integrity</h3>
      
      <div className="grid grid-cols-1 gap-4">
        {securityFeatures.map((feature) => (
          <div key={feature.label} className="p-6 bg-black border border-white/5 flex flex-col gap-3 group hover:border-accent transition-colors">
            <div className="flex items-center gap-3 text-white/20 group-hover:text-accent transition-colors">
              {feature.icon}
              <span className="text-[10px] font-black uppercase tracking-widest">{feature.label}</span>
            </div>
            <div className="text-[14px] font-black text-white uppercase italic tracking-tighter">
              {feature.status}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-auto p-6 bg-white/[0.02] border border-white/10 flex items-center gap-6">
        <div className="p-4 bg-accent/20">
          <Shield className="w-8 h-8 text-accent" />
        </div>
        <div>
          <div className="text-[11px] font-bold text-accent uppercase tracking-[0.2em]">Environment Secure</div>
          <p className="text-[9px] text-white/30 uppercase font-black leading-none mt-2">Verification Frequency: 4h Cycle</p>
        </div>
      </div>
    </div>
  );
};
