import React, { useEffect, useState } from "react";
import RegisterViewDetails from "./RegisterViewDetails";

function DashBoard() {
  const [registerDetails, setRegisterDetails] = useState([]);
  const [selectedDetail, setSelectedDetail] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8080/titleApplication/pending?userrole=COMMITTEE`, {
      method: "GET",
      headers: {
        "Authorization": localStorage.getItem("token"),
      },
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      // data is an array of approvals
      // if you want just the application objects:
      const applications = data.map(item => item.application);
      setRegisterDetails(applications);
    })
    .catch((error) => console.log("Fetching Error", error));
  }, [selectedDetail]);

  return (
    <div className="flex justify-center items-center h-full p-10">
      <div className="flex flex-col justify-center items-center w-full">
        <h1 className="text-2xl text-blue-950 font-semibold">
          All Registered Details
        </h1>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 gap-6 mt-6 w-full px-2 sm:px-4">
  {registerDetails.map((detail) => (
    <div
      key={detail.id}
      className="border rounded-2xl p-6 shadow-md bg-white 
                 w-full sm:max-w-3xl mx-auto"
    >
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <p className="text-base sm:text-lg font-medium">
            Film Title:{" "}
            <span className="font-normal">{detail.title}</span>
          </p>
          <p className="text-base sm:text-lg font-medium">
            Producer:{" "}
            <span className="font-normal">{detail.producer}</span>
          </p>
        </div>

       <button
  onClick={() => setSelectedDetail(detail)}
  className="
    bg-blue-950 text-white border border-blue-950 rounded-xl 
    text-sm py-2 px-6   
    sm:text-base sm:py-1 sm:px-2
    hover:bg-white hover:text-blue-950 transition
    w-full sm:w-auto 
  "
>
  View Details
</button>

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
