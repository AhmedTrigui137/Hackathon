import React from 'react';
import { useConflictStore } from '../../store/conflictStore';
import { ResponsivePie } from '@nivo/pie';

export default function CommunicationHealth() {
  const departmentStats = useConflictStore((state) => state.getDepartmentStats());
  
  const data = departmentStats.map(({ department, count }) => ({
    id: department,
    label: department,
    value: count,
  }));

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="text-lg font-medium text-gray-900">Department Conflict Distribution</h2>
      </div>
      <div className="p-6">
        <div className="h-64">
          <ResponsivePie
            data={data}
            margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
            innerRadius={0.5}
            padAngle={0.7}
            cornerRadius={3}
            activeOuterRadiusOffset={8}
            colors={{ scheme: 'nivo' }}
            borderWidth={1}
            borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
            arcLinkLabelsSkipAngle={10}
            arcLinkLabelsTextColor="#333333"
            arcLinkLabelsThickness={2}
            arcLinkLabelsColor={{ from: 'color' }}
            arcLabelsSkipAngle={10}
            arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 2]] }}
          />
        </div>
      </div>
    </div>
  );
}