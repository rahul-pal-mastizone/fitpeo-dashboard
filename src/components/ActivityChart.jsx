import React from 'react';

const activityData = [
  { day: 'Mon', value: 40 },
  { day: 'Tue', value: 80 },
  { day: 'Wed', value: 25 },
  { day: 'Thu', value: 60 },
  { day: 'Fri', value: 45 },
  { day: 'Sat', value: 85 },
  { day: 'Sun', value: 50 },
];

function ActivityChart() {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 mt-0">
      <h3 className="text-lg font-semibold text-gray-700 mb-1">Activity</h3>
      <p className="text-sm text-gray-400 mb-4">3 appointments this week</p>

      <div className="flex items-end justify-between h-32">
        {activityData.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div
              className="w-3 rounded bg-indigo-500"
              style={{ height: `${item.value}px` }}
            ></div>
            <span className="text-xs text-gray-500 mt-2">{item.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ActivityChart;
