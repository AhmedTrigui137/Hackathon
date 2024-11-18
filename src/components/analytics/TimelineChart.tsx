import React from 'react';
import { ResponsiveLine } from '@nivo/line';

export default function TimelineChart() {
  const data = [
    {
      id: "conflicts",
      data: [
        { x: "Jan", y: 12 },
        { x: "Feb", y: 15 },
        { x: "Mar", y: 10 },
        { x: "Apr", y: 18 },
        { x: "May", y: 14 },
        { x: "Jun", y: 8 }
      ]
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="text-lg font-medium text-gray-900">Conflict Timeline</h2>
      </div>
      <div className="p-6">
        <div className="h-80">
          <ResponsiveLine
            data={data}
            margin={{ top: 20, right: 20, bottom: 50, left: 50 }}
            xScale={{ type: 'point' }}
            yScale={{ type: 'linear', min: 'auto', max: 'auto' }}
            curve="cardinal"
            axisBottom={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
            }}
            axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
            }}
            pointSize={10}
            pointColor={{ theme: 'background' }}
            pointBorderWidth={2}
            pointBorderColor={{ from: 'serieColor' }}
            enablePointLabel={true}
            pointLabel="y"
            pointLabelYOffset={-12}
            enableArea={true}
            areaOpacity={0.15}
            colors={['#3B82F6']}
          />
        </div>
      </div>
    </div>
  );
}