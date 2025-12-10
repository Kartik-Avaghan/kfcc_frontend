import React, { useState } from "react";
import { Eye, Building, User, Film, Search, Vote } from "lucide-react";


import TitleViewDetails from "./TitleViewDetails";
import VotingResult from "./VotingResult";

function Dashboard() {
  const [selectedDetail, setSelectedDetail] = useState(null);
  const [selectedVotingDetail, setSelectedVotingDetail] = useState(null);
  const [search, setSearch] = useState("");

  // -------- Dummy Data --------
  const dummyDetails = [
    {
      id: 101,
      title: "The Great Warrior",
      language: "Kannada",
      category: "Action",
      date: "2025-01-10",
      producer: "Ramesh Gowda",
      director: "Sanjay Shetty",
      actor: "Darshan",
      status: "Pending Voting",
      votingResult: "Not Yet Started",
    },
    {
      id: 102,
      title: "Love in Bangalore",
      language: "Kannada",
      category: "Romance",
      date: "2025-01-08",
      producer: "Vishal Kumar",
      director: "Kiran Raj",
      actor: "Yash",
      status: "Voting Completed",
      votingResult: "Approved",
    },
  ];

  // ---------- SEARCH FILTER ----------
  const filteredDetails = dummyDetails.filter((detail) =>
    detail.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center w-full px-4 mt-6">
  <div className="w-full max-w-7xl">

        <h2 className="text-3xl text-blue-700 font-bold mb-4">Tiltle Registration Request</h2>

      {/* Search Bar */}
      <div className="relative max-w-md mb-6">
        <Search
          size={22}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        />
        <input
          type="text"
          placeholder="Search title name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-10 py-2 w-full border border-gray-400 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>

      {/* ------- Cards ------- */}
      <div className="grid grid-cols-1 gap-6">
        {filteredDetails.map((detail) => (
          <div
            key={detail.id}
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-blue-500 overflow-hidden"
          >
            {/* -------- Card Header -------- */}
            <div className="bg-blue-50 px-6 py-4 border-b border-gray-100">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-gray-800">
                    {detail.title}
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 text-sm text-gray-600">
                    <p><span className="font-medium">ID:</span> #{detail.id}</p>
                    <p><span className="font-medium">Language:</span> {detail.language}</p>
                    <p><span className="font-medium">Category:</span> {detail.category}</p>
                    <p><span className="font-medium">Submitted Date:</span> {new Date(detail.date).toLocaleDateString()}</p>
                  </div>
                </div>

                {/* -------- Buttons -------- */}
                <div className="flex gap-3">
                  {/* View Details Button */}
                  <button
                    onClick={() => setSelectedDetail(detail)}
                    className="bg-blue-600 text-white px-5 py-2 rounded-xl font-medium hover:bg-blue-700 transition shadow-md flex items-center gap-2"
                  >
                    <Eye className="w-4 h-4" />
                    View Details
                  </button>

                  {/* Voting Result Button */}
                   <button
                  onClick={() => setSelectedVotingDetail(detail)}  // NEW
                  className="bg-green-600 text-white px-5 py-2 rounded-xl hover:bg-green-700 flex items-center gap-2"
                >
                  <Vote className="w-4 h-4" />
                  Voting Result
                </button>
                </div>
              </div>
            </div>

            {/* -------- Card Body -------- */}
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Producer */}
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Building className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Producer</p>
                    <p className="text-gray-800 font-semibold">{detail.producer}</p>
                  </div>
                </div>

                {/* Director */}
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <User className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Director</p>
                    <p className="text-gray-800 font-semibold">{detail.director}</p>
                  </div>
                </div>

                {/* Actor */}
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

              {/* Status */}
              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500 font-medium">Current Status:</span>
                  <span className="text-sm text-gray-800 font-semibold bg-gray-100 px-2 py-1 rounded">{detail.status}</span>
                </div>

                {/* <div className="flex items-center gap-2 mt-2">
                  <span className="text-sm text-gray-500 font-medium">Voting Result:</span>
                  <span
                    className={`text-sm font-semibold px-2 py-1 rounded ${
                      detail.votingResult === "Approved"
                        ? "bg-green-100 text-green-700"
                        : detail.votingResult === "Rejected"
                        ? "bg-red-100 text-red-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {detail.votingResult}
                  </span>
                </div> */}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Popup Modal */}
      {selectedDetail && (
        <TitleViewDetails
          detail={selectedDetail}
          onClose={() => setSelectedDetail(null)}
        />
      )}


      {/* -------- Voting Result Modal -------- */}
      {selectedVotingDetail && (
        <VotingResult
          detail={selectedVotingDetail}
          onClose={() => setSelectedVotingDetail(null)}
        />
      )}
    </div>
    </div>
  );
}

export default Dashboard;
