import React from 'react';
import { useConflictStore } from '../../store/conflictStore';
import { AlertTriangle, CheckCircle } from 'lucide-react';

export default function ConflictList() {
  const conflicts = useConflictStore((state) => state.conflicts);
  const resolveConflict = useConflictStore((state) => state.resolveConflict);

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="text-lg font-medium text-gray-900">Active Conflicts</h2>
      </div>
      <div className="p-6">
        <div className="space-y-4">
          {conflicts.map((conflict) => (
            <div
              key={conflict.id}
              className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg"
            >
              <div className={`flex-shrink-0 ${
                conflict.type === 'critical' ? 'text-red-500' : 'text-yellow-500'
              }`}>
                <AlertTriangle className="w-6 h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-900">
                    {conflict.department}
                  </p>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    conflict.status === 'active'
                      ? 'bg-red-100 text-red-800'
                      : 'bg-green-100 text-green-800'
                  }`}>
                    {conflict.status}
                  </span>
                </div>
                <p className="text-sm text-gray-500 mt-1">{conflict.description}</p>
                <div className="mt-2 flex items-center justify-between">
                  <p className="text-xs text-gray-500">
                    Involved: {conflict.employees.join(', ')}
                  </p>
                  <button
                    onClick={() => resolveConflict(conflict.id)}
                    className="flex items-center text-sm text-green-600 hover:text-green-800"
                  >
                    <CheckCircle className="w-4 h-4 mr-1" />
                    Mark as resolved
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}