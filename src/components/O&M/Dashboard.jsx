import React, { useEffect, useState } from "react";
import RegisterViewDetails from "./RegisterViewDetails";
import { Eye, Calendar, Film, User, Building, Search, Filter } from 'lucide-react';


function DashBoard() {
  const [registerDetails, setRegisterDetails] = useState([]);
  const [selectedDetail, setSelectedDetail] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8080/titleApplication/pending?userrole=COMMITTEE`, {
      method: "GET",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        const applications = data.map((item) => item.application);
        setRegisterDetails(applications);
      })
      .catch((error) => console.log("Fetching Error", error));
  }, [selectedDetail]);

  return (
    <div className="flex justify-center items-center  p-10">
      <div className="flex flex-col justify-center items-center w-full">
        <h1 className="text-2xl text-blue-950 font-semibold">
          Todays Title Registrations
        </h1>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 gap-6 mt-6 w-full px-2 sm:px-4">
          {registerDetails.map((detail) => (
            <div
                key={detail.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-blue-500 overflow-hidden"
              >
                {/* Card Header */}
                <div className="bg-blue-50 px-6 py-4 border-b border-gray-100">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-gray-800">{detail.title}</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 text-sm text-gray-600">
                        <p><span className="font-medium">ID:</span> #{detail.id}</p>
                        <p><span className="font-medium">Language:</span> {detail.language}</p>
                        <p><span className="font-medium">Category:</span> {detail.category}</p>
                        <p><span className="font-medium">Submitted Date:</span> {new Date(detail.date).toLocaleDateString()}</p>
                      </div>
                    </div>
                    
                    {/* View Details Button */}
                    <div className="flex-shrink-0">
                      <button
                        onClick={() => setSelectedDetail(detail)}
                        className="bg-blue-600 text-white px-6 py-2.5 rounded-xl font-medium hover:bg-blue-700 transition-colors duration-200 shadow-md hover:shadow-lg flex items-center gap-2 cursor-pointer"
                      >
                        <Eye className="w-4 h-4" />
                        View Details
                      </button>
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Producer Info */}
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <Building className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 font-medium">Producer</p>
                        <p className="text-gray-800 font-semibold">{detail.producer}</p>
                      </div>
                    </div>

                    {/* Director Info */}
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-green-100 rounded-lg">
                        <User className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 font-medium">Director</p>
                        <p className="text-gray-800 font-semibold">{detail.director}</p>
                      </div>
                    </div>

                    {/* Actor Info */}
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-purple-100 rounded-lg">
                        <Film className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 font-medium">Lead Actor</p>
                        <p className="text-gray-800 font-semibold">{detail.actor}</p>
                      </div>
                    </div>
                  </div>

                  {/* Status Display (Simple) */}
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-500 font-medium">Current Status:</span>
                      <span className="text-sm text-gray-800 font-semibold bg-gray-100 px-2 py-1 rounded">
                        {detail.status}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
          ))}
        </div>
      </div>

      {/* ✅ Modal should be OUTSIDE map */}
      <RegisterViewDetails
        detail={selectedDetail}
        onClose={() => setSelectedDetail(null)}
      />
    </div>
  );
}

export default DashBoard;





















// import React, { useEffect, useState } from "react";
// import RegisterViewDetails from "./RegisterViewDetails";

// function DashBoard() {
//   const [registerDetails, setRegisterDetails] = useState([]);
//   const [selectedDetail, setSelectedDetail] = useState(null);

//   useEffect(() => {
//     fetch(`http://localhost:8080/titleApplication/pending?userrole=COMMITTEE`, {
//       method: "GET",
//       headers: {
//         "Authorization": localStorage.getItem("token"),
//       },
//     })
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("Response was not ok");
//       }
//       return response.json();
//     })
//     .then((data) => {
//       // data is an array of approvals
//       // if you want just the application objects:
//       const applications = data.map(item => item.application);
//       setRegisterDetails(applications);
//     })
//     .catch((error) => console.log("Fetching Error", error));
//   }, [selectedDetail]);

//   return (
//     <div className="flex justify-center items-center p-10">
//       <div className="flex flex-col justify-center items-center w-full">
//         <h1 className="text-2xl text-blue-950 font-semibold">
//           All Registered Details
//         </h1>

//         {/* Grid of Cards */}
//         <div className="grid grid-cols-1 gap-6 mt-6 w-full px-2 sm:px-4">
//   {registerDetails.map((detail) => (
//     <div
//       key={detail.id}
//       className="border rounded-2xl p-6 shadow-md bg-white 
//                  w-full sm:max-w-3xl mx-auto"
//     >
//       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
//         <div>
//           <p className="text-base sm:text-lg font-medium">
//                     Application Id:{" "}
//                     <span className="font-normal">{detail.id}</span>
//                   </p>
//           <p className="text-base sm:text-lg font-medium">
//             Film Title:{" "}
//             <span className="font-normal">{detail.title}</span>
//           </p>
//           <p className="text-base sm:text-lg font-medium">
//             Producer:{" "}
//             <span className="font-normal">{detail.producer}</span>
//           </p>
//           {/* <p className="text-base sm:text-lg font-medium">
//                     Status:{" "}
//                     <span className="font-normal">{detail.status}</span>
//                   </p> */}
//         </div>

//        <button
//   onClick={() => setSelectedDetail(detail)}
//   className="
//     bg-blue-950 text-white border border-blue-950 rounded-xl 
//     text-sm py-2 px-6   
//     sm:text-base sm:py-1 sm:px-2
//     hover:bg-white hover:text-blue-950 transition
//     w-full sm:w-auto 
//   "
// >
//   View Details
// </button>

//       </div>
//     </div>
//   ))}
// </div>

//       </div>

//       {/* ✅ Modal should be OUTSIDE map */}
//       <RegisterViewDetails
//         detail={selectedDetail}
//         onClose={() => setSelectedDetail(null)}
//       />
//     </div>
//   );
// }

// export default DashBoard;
