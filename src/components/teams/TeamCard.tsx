import React from 'react';
import { UserGroupIcon, ChartBarIcon } from '@heroicons/react/24/outline';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
}

interface TeamCardProps {
  name: string;
  description: string;
  members: TeamMember[];
  metrics: {
    productivity: number;
    satisfaction: number;
  };
}

export const TeamCard: React.FC<TeamCardProps> = ({ name, description, members, metrics }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
          <p className="text-gray-600 mt-1">{description}</p>
        </div>
        <UserGroupIcon className="w-6 h-6 text-gray-400" />
      </div>

      <div className="mt-4">
        <div className="flex flex-wrap gap-2">
          {members.map((member) => (
            <div key={member.id} className="flex items-center space-x-2">
              <img
                src={member.avatar}
                alt={member.name}
                className="w-8 h-8 rounded-full"
              />
              <div>
                <p className="text-sm font-medium text-gray-900">{member.name}</p>
                <p className="text-xs text-gray-500">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 border-t pt-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <ChartBarIcon className="w-5 h-5 text-green-500" />
            <span className="text-sm text-gray-600">Productivity</span>
            <span className="text-sm font-semibold">{metrics.productivity}%</span>
          </div>
          <div className="flex items-center space-x-2">
            <ChartBarIcon className="w-5 h-5 text-blue-500" />
            <span className="text-sm text-gray-600">Satisfaction</span>
            <span className="text-sm font-semibold">{metrics.satisfaction}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};