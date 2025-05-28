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


// import React, { useState } from 'react';
// import Sidebar from './components/Sidebar';
// import TopNavbar from './components/TopNavbar';
// import HumanBodyCard from './components/HumanBodyCard';
// import HealthCards from './components/HealthCards';
// import RightPanel from './components/RightPanel';
// import ActivityChart from './components/ActivityChart';
// import { Menu } from 'lucide-react';

// function App() {
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

//   return (
//     <div className="flex flex-col lg:flex-row min-h-screen bg-gray-50 overflow-x-hidden">
//       {/* Sidebar */}
// <div className={`fixed inset-y-0 left-0 z-30 w-64 bg-white shadow transform transition-transform duration-300 lg:relative lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:w-1/6`}>
//   {/* Close button for mobile */}
//   <div className="lg:hidden flex justify-end p-4">
//     <button onClick={toggleSidebar} aria-label="Close Sidebar" className="text-gray-700">
//       ✕
//     </button>
//   </div>
//   <Sidebar />
// </div>


//       {/* Main content area */}
//       <div className="flex flex-col flex-1 overflow-y-auto">
//         {/* Mobile Nav Toggle */}
//         <div className="lg:hidden p-4">
//           <button
//             className="text-gray-700 focus:outline-none"
//             onClick={toggleSidebar}
//             aria-label="Toggle Sidebar"
//           >
//             <Menu className="w-6 h-6" />
//           </button>
//           {/* <div className="text-center flex-1 -ml-6">
//             <h1 className="text-lg font-semibold text-gray-800">Fitpeo Healthcare</h1>
//           </div> */}
          
//         </div>

//         <TopNavbar toggleSidebar={toggleSidebar} />

//         <div className="px-4 sm:px-6 pt-4 sm:pt-6 pb-4 flex flex-col gap-4">
//           {/* Top Section */}
//           <div className="flex flex-col xl:flex-row gap-4">
//             {/* Left Side */}
//             <div className="flex flex-col gap-4 w-full xl:w-2/3">
//               <div className="flex flex-col md:flex-row gap-4">
//                 <div className="w-full md:w-1/2">
//                   <HumanBodyCard />
//                 </div>
//                 <div className="w-full md:w-1/2">
//                   <HealthCards />
//                 </div>
//               </div>
//               <div className="w-full">
//                 <ActivityChart />
//               </div>
//             </div>

//             {/* Right Side */}
//             <div className="w-full xl:w-1/3">
//               <RightPanel />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
