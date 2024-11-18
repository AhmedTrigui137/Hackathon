import React from 'react';
import { AlertTriangle, ArrowRight } from 'lucide-react';

export default function TopIssues() {
  const issues = [
    {
      id: 1,
      title: 'Communication Breakdown',
      department: 'Engineering',
      count: 15,
      trend: '+5',
    },
    {
      id: 2,
      title: 'Project Timeline Disputes',
      department: 'Marketing',
      count: 12,
      trend: '+2',
    },
    {
      id: 3,
      title: 'Resource Allocation',
      department: 'Operations',
      count: 8,
      trend: '-1',
    },
    {
      id: 4,
      title: 'Role Clarity',
      department: 'HR',
      count: 6,
      trend: '+1',
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="text-lg font-medium text-gray-900">Top Issues</h2>
      </div>
      <div className="p-6">
        <div className="space-y-4">
          {issues.map((issue) => (
            <div key={issue.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-yellow-100 rounded-lg">
                  <AlertTriangle className="h-5 w-5 text-yellow-600" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900">{issue.title}</h3>
                  <p className="text-sm text-gray-500">{issue.department}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">{issue.count} cases</p>
                  <p className={`text-sm ${
                    issue.trend.startsWith('+') ? 'text-red-600' : 'text-green-600'
                  }`}>
                    {issue.trend} this month
                  </p>
                </div>
                <ArrowRight className="h-5 w-5 text-gray-400" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}