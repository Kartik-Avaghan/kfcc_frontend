import React, { useState } from "react";

function RegisterViewDetails({ detail, onClose }) {
  if (!detail) return null;
  // if no detail selected, don't render anything

  function approval(applicationId,approve){

    fetch(`http://localhost:8080/titleApplication/${applicationId}/approve`, {
      method: "POST",
      headers: {
        "Authorization": localStorage.getItem("token"),
        "Content-Type" : "Application/json"
      },
      body:JSON.stringify({
       "role":"COMMITTEE",
        "approved_by":"kartik",
        "approve":approve,
        "comments":"good"
      })

    })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      
    })
    .catch((error) => console.log("Fetching Error", error));
  }



  return (
    <div
      className="fixed inset-0 bg-white bg-opacity-40 flex justify-center items-center z-50 px-2"
      onClick={onClose} // close when background is clicked
    >
      <div
        className="
          bg-white shadow-md rounded-lg 
          p-4 sm:p-6 md:p-8   
          border border-gray-200 
          w-full max-w-sm sm:max-w-md md:max-w-lg 
          relative
          max-h-[90vh] overflow-y-auto 
        "
        onClick={(e) => e.stopPropagation()} // prevent close when clicking inside
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-black text-xl"
        >
          ✕
        </button>

        <h2 className="text-xl sm:text-2xl font-semibold text-blue-950 mb-4 text-center">
          Registration Details
        </h2>

        <div className="space-y-2 text-gray-800 text-sm sm:text-base">
          <p><span className="font-semibold">Name:</span> {detail.name}</p>
          <p><span className="font-semibold">Date:</span> {new Date(detail.date).toLocaleDateString("en-In")}</p>
          <p><span className="font-semibold">Address:</span> {detail.address}</p>
          <p><span className="font-semibold">Film Title:</span> {detail.title}</p>
          <p><span className="font-semibold">First Film:</span> {detail.firstFilm ? "Yes" : "No"}</p>
          <p><span className="font-semibold">Institution:</span> {detail.institution}</p>
          <p><span className="font-semibold">Member ID:</span> {detail.memberId}</p>
          <p><span className="font-semibold">Producer:</span> {detail.producer}</p>
          <p><span className="font-semibold">Language:</span> {detail.language}</p>
          <p><span className="font-semibold">Previously Registered:</span> {detail.previouslyRegistered ? "Yes" : "No"}</p>
          <p><span className="font-semibold">Previously Registered Details:</span> {detail.previouslyRegisteredDetails}</p>
          <p><span className="font-semibold">Films By Institutes:</span> {detail.filmsByInstitutes}</p>
          <p><span className="font-semibold">Director:</span> {detail.director}</p>
          <p><span className="font-semibold">Singer:</span> {detail.singer}</p>
          <p><span className="font-semibold">Actor:</span> {detail.actor}</p>
          <p><span className="font-semibold">Category:</span> {detail.category}</p>
          <p><span className="font-semibold">Accepted Date:</span> { new Date (detail.acceptedDate).toLocaleDateString("en-In")}</p>

          <div className="flex  justify-around items-center  mt-8">
            <button onClick={()=>approval(detail.id, true)} className="border border-green-500  rounded-2xl text-white bg-green-500 px-8 py-1   hover:bg-white hover:text-green-800 hover:border-green-500">Accept</button>
            <button onClick={()=>approval(detail.id, false)}  className="border border-red-500 rounded-2xl text-white bg-red-500 px-8 py-1  hover:bg-white hover:text-red-800 hover:border-red-5001">Reject</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterViewDetails;
