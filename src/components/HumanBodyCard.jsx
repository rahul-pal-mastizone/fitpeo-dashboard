// import React from 'react';

// function HumanBodyCard() {
//   return (
//     <div className="relative bg-white rounded-xl shadow p-4 flex justify-center items-center">
//       <img
//         src="/human-body.jpg" // Place this image in your public folder
//         alt="Human Anatomy"
//         className="w-48 sm:w-56 md:w-64"
//       />

//       {/* Healthy Heart */}
//       <div className="absolute top-40 left-2/3 -translate-x-1/2">
//         <span className="bg-purple-600 text-white text-xs px-3 py-1 rounded-full shadow font-medium">
//           Healthy Heart
//         </span>
//       </div>

//       {/* Healthy Leg */}
//       <div className="absolute bottom-56 left-14">
//         <span className="bg-cyan-600 text-white text-xs px-3 py-1 rounded-full shadow font-medium">
//           Healthy Leg
//         </span>
//       </div>
//     </div>
//   );
// }

// export default HumanBodyCard;

import React from 'react';

function HumanBodyCard() {
  return (
    <div className="relative bg-white rounded-xl shadow h-full flex justify-center items-center p-6">
      <img
        src="/human-body.jpg"
        alt="Human Anatomy"
        className="h-full object-contain"
      />

      {/* Healthy Heart */}
      <div className="absolute top-20 left-2/3 -translate-x-1/2">
        <span className="bg-purple-600 text-white text-xs px-3 py-1 rounded-full shadow font-medium">
          Healthy Heart
        </span>
      </div>

      {/* Healthy Leg */}
      <div className="absolute bottom-40 left-5">
        <span className="bg-cyan-600 text-white text-xs px-3 py-1 rounded-full shadow font-medium">
          Healthy Leg
        </span>
      </div>
    </div>
  );
}

export default HumanBodyCard;
