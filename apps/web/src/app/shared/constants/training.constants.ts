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
