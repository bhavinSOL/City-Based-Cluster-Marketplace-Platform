import { City } from '@/types/platform';

export const cities: City[] = [
  {
    id: 'vadodara',
    name: 'Vadodara',
    region: 'Gujarat',
    clusterCount: 4,
    expertCount: 23,
    specializations: ['pcb-design', 'embedded-systems', 'prototyping'],
  },
  {
    id: 'ahmedabad',
    name: 'Ahmedabad',
    region: 'Gujarat',
    clusterCount: 6,
    expertCount: 41,
    specializations: ['mechanical-design', 'pcb-design', 'quality-assurance'],
  },
  {
    id: 'bengaluru',
    name: 'Bengaluru',
    region: 'Karnataka',
    clusterCount: 12,
    expertCount: 89,
    specializations: ['embedded-systems', 'firmware', 'pcb-design', 'prototyping'],
  },
  {
    id: 'pune',
    name: 'Pune',
    region: 'Maharashtra',
    clusterCount: 8,
    expertCount: 52,
    specializations: ['mechanical-design', 'embedded-systems', 'quality-assurance'],
  },
  {
    id: 'noida',
    name: 'Noida',
    region: 'Uttar Pradesh',
    clusterCount: 5,
    expertCount: 34,
    specializations: ['pcb-design', 'firmware', 'prototyping'],
  },
  {
    id: 'hyderabad',
    name: 'Hyderabad',
    region: 'Telangana',
    clusterCount: 7,
    expertCount: 48,
    specializations: ['embedded-systems', 'firmware', 'mechanical-design'],
  },
];

export const specializationLabels: Record<string, string> = {
  'embedded-systems': 'Embedded Systems',
  'pcb-design': 'PCB Design',
  'mechanical-design': 'Mechanical Design',
  'firmware': 'Firmware',
  'quality-assurance': 'Quality Assurance',
  'prototyping': 'Prototyping',
};
