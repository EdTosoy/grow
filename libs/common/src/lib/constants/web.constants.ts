export const adminCompanyId = [
  {
    id: 1,
    name: 'Boone Copcote',
    position: 'Financial Advisor',
    gender: 'Male',
    department: 'Support',
    status: 'Done',
    signedDate: 'January 18, 2026',
  },
  {
    id: 2,
    name: 'Albie Barrington',
    position: 'Nurse Practitioner',
    gender: 'Male',
    department: 'Services',
    status: 'Pending',
    signedDate: null,
  },
];
export const touchpoints = [
  {
    id: 1,
    scheduleDate: 'July 07, 2026',
    scheduledTime: '08:00AM - 10:00AM',
    name: 'Ms. Peejay Angeles',
    position: 'Health Information Management Manager',
    department: 'Health Information Management',
    signedDate: null,
    signedTime: null,
  },
  {
    id: 2,
    scheduleDate: 'July 07, 2026',
    scheduledTime: '10:00AM - 12:00PM',
    name: 'Ms. Mina De Guzman',
    position: 'Supplies Chain Manager',
    department: 'Financial Services',
    signedDate: null,
    signedTime: null,
  },
];

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
export const uniforms = [
  {
    id: 1,
    name: 'Boone Copcote',
    position: 'Financial Advisor',
    gender: 'Male',
    department: 'Support',
    sizes: {
      top: 'L',
      bottom: 'XL',
    },
    chooseInPerson: false,
    signedDate: 'January 18, 2026',
  },
  {
    id: 2,
    name: 'Albie Barrington',
    position: 'Nurse Practitioner',
    gender: 'Male',
    department: 'Services',
    sizes: {
      top: 'M',
      bottom: 'L',
    },
    chooseInPerson: true,
    signedDate: 'January 4, 2026',
  },
];
export const organizations = [
  {
    id: 0,
    department: 'Human Resources',
    units: 3,
  },
  {
    id: 1,
    department: 'Accounting',
    units: 5,
  },
];
export const employees = [
  {
    id: 1,
    name: 'Boone Copcote',
    position: 'Financial Advisor',
    gender: 'Male',
    department: 'Support',
    status: 'Done',
    signedDate: 'January 18, 2026',
  },
  {
    id: 2,
    name: 'Albie Barrington',
    position: 'Nurse Practitioner',
    gender: 'Male',
    department: 'Services',
    status: 'Pending',
    signedDate: null,
  },
];
