import React from "react";
import { X } from "lucide-react";

function TitleViewDetails({ detail, onClose }) {
  if (!detail) return null; // If no detail selected, do not render modal

  return (
    <div className="fixed inset-0 bg-black/95 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-xl p-6 relative">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-black"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          {detail.title}
        </h2>

        {/* Fields */}
        <div className="grid grid-cols-2 gap-4 text-gray-700">

          <p><strong>ID:</strong> {detail.id}</p>
          <p><strong>Language:</strong> {detail.language}</p>
          <p><strong>Category:</strong> {detail.category}</p>
          <p><strong>Date:</strong> {new Date(detail.date).toLocaleDateString()}</p>

          <p><strong>Producer:</strong> {detail.producer}</p>
          <p><strong>Director:</strong> {detail.director}</p>
          <p><strong>Lead Actor:</strong> {detail.actor}</p>
          <p><strong>Status:</strong> {detail.status}</p>
        </div>

        {/* Voting Result */}
        <div className="mt-4">
          <p className="text-gray-700">
            <strong>Voting Result:</strong>{" "}
            <span
              className={`px-3 py-1 rounded text-sm font-semibold 
              ${
                detail.votingResult === "Approved"
                  ? "bg-green-100 text-green-700"
                  : detail.votingResult === "Rejected"
                  ? "bg-red-100 text-red-700"
                  : "bg-yellow-100 text-yellow-700"
              }`}
            >
              {detail.votingResult}
            </span>
          </p>
        </div>

      </div>
    </div>
  );
}

export default TitleViewDetails;
