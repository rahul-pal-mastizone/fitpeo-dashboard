import React from 'react';
import Sidebar from './components/Sidebar';
import TopNavbar from './components/TopNavbar';
import HumanBodyCard from './components/HumanBodyCard';
import HealthCards from './components/HealthCards';
import RightPanel from './components/RightPanel';
import ActivityChart from './components/ActivityChart';

function App() {
  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      <Sidebar />

      <div className="flex flex-col flex-1 overflow-y-auto">
        <TopNavbar />

        <div className="px-6 pt-6 pb-0">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left 2/3: HumanBody + HealthCards + Activity */}
            <div className="col-span-1 lg:col-span-2 flex flex-col gap-6">
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Set equal height */}
                <div className="flex-1 h-full">
                  <HumanBodyCard />
                </div>
                <div className="flex-1 h-full">
                  <HealthCards />
                </div>
              </div>

              {/* Activity Chart spans left 2 cols */}
              <ActivityChart />
            </div>

            {/* Right 1/3: Calendar panel */}
            <div>
              <RightPanel />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
