export type CarProfile = {
  name: string;
  age: number;
  riskFactors: string;
  programs: string;
  status: string;
  statusColor: string;
};

export const carProfiles: CarProfile[] = [
  {
    name: 'Amberly Garcia',
    age: 14,
    riskFactors: 'Neglect, Poverty',
    programs: 'Counseling',
    status: 'At Risk',
    statusColor: '#FFD600', // yellow
  },
  {
    name: 'Jastine Joy Togñi',
    age: 10,
    riskFactors: 'Abuse, Neglect',
    programs: 'Counseling, Family Support',
    status: 'High Risk',
    statusColor: '#FF5252', // red
  },
  {
    name: 'Chris Angelo Bozar',
    age: 16,
    riskFactors: 'Poverty',
    programs: 'Vocational Training',
    status: 'Improving',
    statusColor: '#43A047', // green
  },
];