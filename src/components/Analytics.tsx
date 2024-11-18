import React from 'react';
import { Calendar, TrendingUp, Users, AlertTriangle } from 'lucide-react';
import TimelineChart from './analytics/TimelineChart';
import DepartmentDistribution from './analytics/DepartmentDistribution';
import ConflictTrends from './analytics/ConflictTrends';
import TopIssues from './analytics/TopIssues';
import { useConflictStore } from '../store/conflictStore';

export default function Analytics() {
  const conflicts = useConflictStore((state) => state.conflicts);
  const activeConflicts = useConflictStore((state) => state.getActiveConflicts());

  return (
    <main className="flex-1 overflow-y-auto bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">Analytics Overview</h1>
            <p className="mt-1 text-sm text-gray-500">Detailed insights into communication patterns and conflict trends</p>
          </div>
          <div className="flex space-x-3">
            <select className="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 3 months</option>
            </select>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Export Report
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                <TrendingUp className="h-6 w-6" />
              </div>
              <div className="ml-4">
                <h3 className="text-sm font-medium text-gray-500">Resolution Rate</h3>
                <p className="text-2xl font-semibold text-gray-900">85%</p>
                <p className="text-sm text-green-600">↑ 12% increase</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-green-100 text-green-600">
                <Calendar className="h-6 w-6" />
              </div>
              <div className="ml-4">
                <h3 className="text-sm font-medium text-gray-500">Avg Resolution Time</h3>
                <p className="text-2xl font-semibold text-gray-900">2.4 days</p>
                <p className="text-sm text-red-600">↓ 1 day slower</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-purple-100 text-purple-600">
                <Users className="h-6 w-6" />
              </div>
              <div className="ml-4">
                <h3 className="text-sm font-medium text-gray-500">Teams Affected</h3>
                <p className="text-2xl font-semibold text-gray-900">8</p>
                <p className="text-sm text-gray-600">of 12 total teams</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-yellow-100 text-yellow-600">
                <AlertTriangle className="h-6 w-6" />
              </div>
              <div className="ml-4">
                <h3 className="text-sm font-medium text-gray-500">Critical Issues</h3>
                <p className="text-2xl font-semibold text-gray-900">{activeConflicts.length}</p>
                <p className="text-sm text-yellow-600">Requires attention</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <TimelineChart />
          <DepartmentDistribution />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ConflictTrends />
          <TopIssues />
        </div>
      </div>
    </main>
  );
}