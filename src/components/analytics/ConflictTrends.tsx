import React from 'react';
import { ResponsiveBar } from '@nivo/bar';

export default function ConflictTrends() {
  const data = [
    {
      month: 'Jan',
      Critical: 5,
      Warning: 8,
      Resolved: 10,
    },
    {
      month: 'Feb',
      Critical: 7,
      Warning: 6,
      Resolved: 12,
    },
    {
      month: 'Mar',
      Critical: 3,
      Warning: 9,
      Resolved: 15,
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="text-lg font-medium text-gray-900">Conflict Trends</h2>
      </div>
      <div className="p-6">
        <div className="h-80">
          <ResponsiveBar
            data={data}
            keys={['Critical', 'Warning', 'Resolved']}
            indexBy="month"
            margin={{ top: 20, right: 130, bottom: 50, left: 60 }}
            padding={0.3}
            valueScale={{ type: 'linear' }}
            indexScale={{ type: 'band', round: true }}
            colors={{ scheme: 'nivo' }}
            borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
            axisTop={null}
            axisRight={null}
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
            labelSkipWidth={12}
            labelSkipHeight={12}
            legends={[
              {
                dataFrom: 'keys',
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 120,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: 'left-to-right',
                itemOpacity: 0.85,
                symbolSize: 20,
                effects: [
                  {
                    on: 'hover',
                    style: {
                      itemOpacity: 1
                    }
                  }
                ]
              }
            ]}
          />
        </div>
      </div>
    </div>
  );
}