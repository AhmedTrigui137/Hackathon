import React from 'react';
import { TeamCard } from './TeamCard';
import ossama from './images/ossama_Ferjani.jpg'
import mohamed from './images/med_ali_toufahi.jpg'
import ahmed from './images/ahmed_toufahi.jpg'
import arij from './images/arij.jpeg'
import m3alem from './images/ahmed.jpg'
import hoss from './images/houssem.png'
import hnana from './images/hnana.png'
import mehdi from './images/mehdi.jpg'
import mahdi from './images/mahdi.jpg'

const mockTeams = [
  {
    id: '1',
    name: 'Frontend Team',
    description: 'Responsible for user interface and experience',
    members: [
      { id: '1', name: 'Ahmed Trigui', role: 'Lead Developer', avatar: m3alem },
      { id: '2', name: 'Arij Zaidi', role: 'UI Developer', avatar: arij },
    ],
    metrics: {
      productivity: 87,
      satisfaction: 92,
    },
  },
  {
    id: '2',
    name: 'Backend Team',
    description: 'API and infrastructure development',
    members: [
      { id: '3', name: 'Mohamed Ali Toufahi', role: 'Backend Lead', avatar: mohamed },
      { id: '4', name: 'Ahmed Toufahi', role: 'Backend Lead', avatar: ahmed },
      { id: '5', name: 'Ossama Ferjani', role: 'DevOps Engineer', avatar: ossama },
    ],
    metrics: {
      productivity: 91,
      satisfaction: 88,
    },
  },
  {
    id: '3',
    name: 'Marketing Team',
    description: 'Branding, outreach, and campaigns',
    members: [
      { id: '6', name: 'Houssem Sahnoun', role: 'Marketing Lead', avatar: hoss },
      { id: '7', name: 'Mehdi Fkih', role: 'Content Strategist', avatar: mehdi },
      { id: '8', name: 'Mahdi Chaabane', role: 'SEO Specialist', avatar: mahdi },
      { id: '9', name: 'Ahmed Hnana', role: 'Sponsoring ', avatar: hnana },
    ],
    metrics: {
      productivity: 96,
      satisfaction: 99,
    },
  },
];

export const TeamsList: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {mockTeams.map((team) => (
        <TeamCard
          key={team.id}
          name={team.name}
          description={team.description}
          members={team.members}
          metrics={team.metrics}
        />
      ))}
    </div>
  );
};