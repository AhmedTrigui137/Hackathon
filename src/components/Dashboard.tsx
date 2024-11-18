import React from 'react';
import ConflictMetrics from './dashboard/ConflictMetrics';
import ConflictList from './dashboard/ConflictList';
import CommunicationHealth from './dashboard/CommunicationHealth';

export default function Dashboard() {
  return (
    <main className="flex-1 overflow-y-auto bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold text-gray-900">Conflict Management Dashboard</h1>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Generate Report
          </button>
        </div>
        
        <div className="grid grid-cols-1 gap-6 mb-6">
          <ConflictMetrics />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ConflictList />
          <CommunicationHealth />
        </div>
      </div>
    </main>
  );
}