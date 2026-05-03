import { SubnetType } from './types';

export const SYSTEM_CONFIG = {
  PROJECT_NAME: 'HELIX',
  VERSION: '0.4.2-alpha',
  COMPLIANCE: 'PCI-DSS LEVEL 1',
  REGION: 'AWS us-east-1',
};

export const SUBNETS = [
  {
    id: SubnetType.EDGE,
    name: 'Edge Perimeter',
    description: 'AWS Route 53, WAF, API Gateway',
    color: '#FF3366',
  },
  {
    id: SubnetType.PUBLIC,
    name: 'Public Tier',
    description: 'NAT Gateways, ALBs',
    color: '#00CCFF',
  },
  {
    id: SubnetType.PRIVATE,
    name: 'Private Tier (Compute)',
    description: 'EKS, Go, Node.js, Python Microservices',
    color: '#00FF99',
  },
  {
    id: SubnetType.ISOLATED,
    name: 'Isolated Tier (Data)',
    description: 'Aurora, DynamoDB, Redis',
    color: '#FFFF33',
  },
];
