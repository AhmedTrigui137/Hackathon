import React from 'react';
import AlertItem from './AlertItem';

export default function RecentAlerts() {
  const alerts = [
    {
      id: 1,
      title: 'High Response Time',
      description: 'Average response time exceeded threshold in Team Alpha',
      type: 'warning',
      time: '2 hours ago',
    },
    {
      id: 2,
      title: 'New Team Created',
      description: 'Team Beta has been created by John Doe',
      type: 'info',
      time: '4 hours ago',
    },
    {
      id: 3,
      title: 'System Update',
      description: 'New features deployed successfully',
      type: 'success',
      time: '6 hours ago',
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="text-lg font-medium text-gray-900">Recent Alerts</h2>
      </div>
      <div className="p-6">
        <div className="space-y-4">
          {alerts.map((alert) => (
            <AlertItem key={alert.id} {...alert} />
          ))}
        </div>
      </div>
    </div>
  );
}