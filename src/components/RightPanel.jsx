import React from 'react';

function RightPanel() {
  return (
    <div className="flex flex-col gap-6 w-full">
      {/* Calendar Header */}
      <div className="flex justify-between items-center">
        <h3 className="text-md font-semibold text-gray-700">May 2025</h3>
        <div className="flex gap-2">
          <button className="text-xl text-gray-500">◀</button>
          <button className="text-xl text-gray-500">▶</button>
        </div>
      </div>

      {/* Week Calendar */}
      <div className="grid grid-cols-7 gap-4 text-center text-xs font-semibold text-gray-600">
        {['Mon 19', 'Tue 20', 'Wed 21', 'Thu 22', 'Fri 23', 'Sat 24', 'Sun 25'].map(day => (
          <div key={day} className="p-2 rounded bg-gray-100">{day}</div>
        ))}
      </div>

      {/* Time Slots */}
      <div className="grid grid-cols-7 gap-4 text-center text-xs text-gray-500">
        {['09:30', '10:00', '11:30', '12:30', '13:30', '15:00', '16:30'].map((time, i) => (
          <div key={i} className={`p-2 rounded ${time === '10:00' || time === '11:30' ? 'bg-indigo-100 text-indigo-600 font-medium' : 'bg-gray-50'}`}>
            {time}
          </div>
        ))}
      </div>

      {/* Appointments */}
      <div className="flex flex-col gap-3">
        <div className="bg-indigo-100 text-indigo-800 px-4 py-3 rounded-xl text-sm shadow-sm">
          <strong>Dental Consultation</strong><br />
          10:00–11:30 | Dr. Nina Patel
        </div>
        <div className="bg-purple-100 text-purple-800 px-4 py-3 rounded-xl text-sm shadow-sm">
          <strong>Physio Therapy</strong><br />
          12:30–13:30 | Dr. Sameer Malik
        </div>
      </div>

      {/* Upcoming Schedule */}
      <div>
        <h4 className="text-sm font-semibold text-gray-700 mb-2">The Upcoming Schedule</h4>

        <div className="text-xs text-gray-600 mb-1 font-medium">On Thursday</div>
        <div className="grid grid-cols-2 gap-3 mb-4">
          <ScheduleCard title="General Checkup" time="09:00 AM" />
          <ScheduleCard title="Eye Examination" time="13:00 PM" />
        </div>

        <div className="text-xs text-gray-600 mb-1 font-medium">On Saturday</div>
        <div className="grid grid-cols-2 gap-3">
          <ScheduleCard title="Cardiac Review" time="11:00 AM" />
          <ScheduleCard title="Neurology Session" time="15:30 PM" />
        </div>
      </div>
    </div>
  );
}

function ScheduleCard({ title, time }) {
  return (
    <div className="bg-white p-3 rounded-xl shadow text-sm text-gray-700">
      <div className="font-medium">{title}</div>
      <div className="text-xs text-gray-400">{time}</div>
    </div>
  );
}

export default RightPanel;

