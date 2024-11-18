import React from 'react';
import {TeamsList} from	'./TeamsList'

export const Teams: React.FC = () => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Teams</h1>
        <p className="mt-1 text-gray-600">Manage and monitor team performance</p>
      </div>
      <TeamsList />
    </div>
  );
};