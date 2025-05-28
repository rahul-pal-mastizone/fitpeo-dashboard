import React from 'react';
import { FaLungs, FaTooth, FaBone } from 'react-icons/fa';

const healthData = [
  {
    icon: <FaLungs className="text-red-500 text-xl" />,
    title: 'Lungs',
    date: '26 Oct 2021',
    progress: 60,
    barColor: 'bg-red-400',
  },
  {
    icon: <FaTooth className="text-green-500 text-xl" />,
    title: 'Teeth',
    date: '26 Oct 2021',
    progress: 90,
    barColor: 'bg-green-400',
  },
  {
    icon: <FaBone className="text-orange-500 text-xl" />,
    title: 'Bone',
    date: '26 Oct 2021',
    progress: 30,
    barColor: 'bg-orange-400',
  },
];

function HealthCards() {
  return (
    <div className="flex flex-col gap-2 h-full">
  {healthData.map((item, index) => (
    <div
      key={index}
      className="bg-white rounded-xl shadow p-3 flex items-center justify-between"
    >

          {/* Icon & Info */}
          <div className="flex items-center gap-4">
            <div className="bg-gray-100 p-3 rounded-full">
              {item.icon}
            </div>
            <div>
              <h3 className="text-md font-semibold">{item.title}</h3>
              <p className="text-xs text-gray-500">Date: {item.date}</p>
              {/* Progress bar */}
              <div className="w-40 h-2 bg-gray-200 rounded mt-2">
                <div
                  className={`${item.barColor} h-2 rounded`}
                  style={{ width: `${item.progress}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Details link or placeholder */}
          <div className="text-sm text-blue-500 cursor-pointer">Details</div>
        </div>
      ))}
    </div>
  );
}

export default HealthCards;
