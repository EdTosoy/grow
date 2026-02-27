export interface TrainingCategory {
  category: string;
  items: string[];
}

export const TRAININGS: TrainingCategory[] = [
  {
    category: 'Orientation',
    items: ['Company Overview', 'Code of Conduct'],
  },
  {
    category: 'Technical',
    items: ['System Access', 'Security Awareness'],
  },
];

export const trainingData = [
  {
    category: 'Registration & Attendance',
    items: [
      'Registration & Attendance Overview',
      'How to Fill Out Attendance Forms',
      'Attendance Policies & Guidelines',
      'Understanding Attendance Systems',
    ],
  },
  {
    category: 'Company Background & Policies',
    items: [
      'Company Profile, Mission, and Vision',
      'MVMC: The Brand',
      'Virtual Tour at MVMC Buildings',
      'Key Positions & Leaders in MVMC',
      'Recruitment Policies',
      'Company Policies',
      'Code of Conduct',
      'Health and Safety Regulations',
    ],
  },
];
