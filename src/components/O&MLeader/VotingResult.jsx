import React from "react";
import { X, CheckCircle, XCircle } from "lucide-react";

function VotingResult({ detail, onClose }) {
  if (!detail) return null;

  // Dummy Voting Counts (replace with real backend data)
  const yesVotes = 3;
  const noVotes = 2;
  const totalVotes = yesVotes + noVotes;

  return (
    <div className="fixed inset-0 bg-black/95 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-white w-full max-w-xl rounded-2xl shadow-xl p-6 relative">

        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-800 mb-3">
          Voting Result - {detail.title}
        </h2>

        {/* Voting Summary */}
        <div className="space-y-2 mb-4 text-gray-700">
          <p><strong>Total Members Voted:</strong> {totalVotes}</p>
          <p><strong>Tile Accepted Votes:</strong> {yesVotes}</p>
          <p><strong>Tile Rejected Votes:</strong> {noVotes}</p>
        </div>

        {/* Approve / Reject Buttons */}
        <div className="flex justify-around mt-6">

          <button
            className="bg-green-600 text-white px-6 py-2 rounded-xl flex items-center gap-2 hover:bg-green-700"
          >
            <CheckCircle className="w-5 h-5" />
            Accept 
          </button>

          <button
            className="bg-red-600 text-white px-6 py-2 rounded-xl flex items-center gap-2 hover:bg-red-700"
          >
            <XCircle className="w-5 h-5" />
            Reject 
          </button>

        </div>

      </div>
    </div>
  );
}

export default VotingResult;
