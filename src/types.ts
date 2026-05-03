export enum SubnetType {
  EDGE = 'EDGE',
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE',
  ISOLATED = 'ISOLATED',
}

export interface Metric {
  label: string;
  value: string | number;
  unit?: string;
  status: 'optimal' | 'warning' | 'critical';
  trend?: 'up' | 'down' | 'stable';
}

export interface NodeHealth {
  id: string;
  name: string;
  type: 'microservice' | 'database' | 'queue' | 'ai';
  status: 'online' | 'busy' | 'offline';
  latency?: number;
  throughput?: number;
}

export interface RebuttalExample {
  id: string;
  transactionId: string;
  amount: number;
  reason: string;
  rebuttal: string;
  confidence: number;
}
