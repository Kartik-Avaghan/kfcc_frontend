import React, { useState } from "react";

function Remark({ applicationId, onClose }) {
  const [remark, setRemark] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    fetch(`http://localhost:8080/titleApplication/${applicationId}/remark`, {
      method: "POST",
      headers: {
        "Authorization": localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        role: "MEMBERS",
        approved_by: "kartik",
        remark: remark,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Response not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Remark submitted:", data);
        onClose(); // close popup after success
      })
      .catch((error) => console.log("Error:", error));
  }

  return (
    <div
      className="fixed inset-0 bg-white bg-opacity-40 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-lg p-6 w-100 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-black"
        >
          ✕
        </button>

        <h2 className="text-xl text-center text-blue-950 font-semibold mb-4">Add Remark</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <textarea
            value={remark}
            onChange={(e) => setRemark(e.target.value)}
            placeholder="Enter your remark..."
            className="w-full border border-blue-950 rounded-md p-2"
            rows={4}
            required
          />

          <button
            type="submit"
            className="border border-yellow-500 rounded-xl text-white bg-yellow-500 px-8 py-1 hover:bg-white hover:text-yellow-800 hover:border-yellow-500 w-full"
          >
            Submit Remark
          </button>
        </form>
      </div>
    </div>
  );
}

export default Remark;
