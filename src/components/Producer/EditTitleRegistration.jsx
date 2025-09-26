import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function EditTitleRegistration({ show, detail, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    title: "",
    firstFilm: "",
    institution: "",
    gstNo: "",
    producer: "",
    language: "",
    previouslyRegistered: "",
    previouslyRegisteredDetails: "",
    filmsByInstitutes: "",
    director: "",
    musicDirector: "",
    actor: "",
    category: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (detail) {
      setFormData({
        name: detail.name || "",
        address: detail.address || "",
        title: detail.title || "",
        firstFilm: detail.firstFilm || "",
        institution: detail.institution || "",
        gstNo: detail.gstNo || "",
        producer: detail.producer || "",
        language: detail.language || "",
        previouslyRegistered: detail.previouslyRegistered || "",
        previouslyRegisteredDetails: detail.previouslyRegisteredDetails || "",
        filmsByInstitutes: detail.filmsByInstitutes || "",
        director: detail.director || "",
        musicDirector: detail.musicDirector || "",
        actor: detail.actor || "",
        category: detail.category || "",
      });
    }
  }, [detail]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(
      `http://localhost:8080/titleRegistration/${detail.id}/${detail.memberId}/resubmit`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
        body: JSON.stringify(formData),
      }
    )
      .then((response) => {
        if (!response.ok) throw new Error("Update failed");
        return response.json();
      })
      .then(() => {
        navigate("/producerdashboard");
        onClose();
      })
      .catch((error) => console.log("Error:", error));
  };

  if (!show || !detail) return null;

  return (
    <div
  onClick={onClose}
  className="fixed inset-0 z-50 flex justify-center bg-black/40 backdrop-blur-sm p-6 overflow-y-auto"
>
  <div
    onClick={(e) => e.stopPropagation()}
    className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl p-8 animate-fadeIn max-h-screen overflow-y-auto"
  >
    {/* Close button */}
    <button
      onClick={onClose}
      className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition"
    >
      ✕
    </button>

    {/* Title */}
    <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-900 mb-8">
      Edit Title Registration
    </h2>

    {/* Form */}
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Film Title */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Film Title
        </label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Enter film title"
          className="w-full rounded-xl border border-gray-300 p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          required
        />
      </div>

      {/* First Film */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Is this your First Film?
        </label>
        <select
          name="firstFilm"
          value={formData.firstFilm}
          onChange={handleChange}
          className="w-full rounded-xl border border-gray-300 p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          required
        >
          <option value="">-- Select --</option>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
      </div>

      {/* Institution */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Institution
        </label>
        <input
          type="text"
          name="institution"
          value={formData.institution}
          onChange={handleChange}
          placeholder="Institution name"
          className="w-full rounded-xl border border-gray-300 p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          required
        />
      </div>

      {/* GST */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          GST Number
        </label>
        <input
          type="text"
          name="gstNo"
          value={formData.gstNo}
          onChange={handleChange}
          placeholder="GST number"
          className="w-full rounded-xl border border-gray-300 p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          required
        />
      </div>

      {/* Producer */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Producer
        </label>
        <input
          type="text"
          name="producer"
          value={formData.producer}
          onChange={handleChange}
          placeholder="Producer name"
          className="w-full rounded-xl border border-gray-300 p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          required
        />
      </div>

      {/* Language */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Language
        </label>
        <input
          type="text"
          name="language"
          value={formData.language}
          onChange={handleChange}
          placeholder="Language"
          className="w-full rounded-xl border border-gray-300 p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          required
        />
      </div>

      {/* Previously Registered */}
      {formData.firstFilm === "false" && (
        <div className="space-y-4 border rounded-xl p-4 bg-gray-50">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Previously Registered?
            </label>
            <select
              name="previouslyRegistered"
              value={formData.previouslyRegistered}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-300 p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              <option value="">-- Select --</option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Previously Registered Details
            </label>
            <input
              type="text"
              name="previouslyRegisteredDetails"
              value={formData.previouslyRegisteredDetails}
              onChange={handleChange}
              placeholder="Provide details"
              className="w-full rounded-xl border border-gray-300 p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
        </div>
      )}

      {/* Films By Institutes */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Films By Institutes
        </label>
        <input
          type="text"
          name="filmsByInstitutes"
          value={formData.filmsByInstitutes}
          onChange={handleChange}
          placeholder="Enter films produced by institutes"
          className="w-full rounded-xl border border-gray-300 p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>

      {/* Director */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Director
        </label>
        <input
          type="text"
          name="director"
          value={formData.director}
          onChange={handleChange}
          placeholder="Director"
          className="w-full rounded-xl border border-gray-300 p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>

      {/* Music Director */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Music Director
        </label>
        <input
          type="text"
          name="musicDirector"
          value={formData.musicDirector}
          onChange={handleChange}
          placeholder="Music Director"
          className="w-full rounded-xl border border-gray-300 p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>

      {/* Actor */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Actor
        </label>
        <input
          type="text"
          name="actor"
          value={formData.actor}
          onChange={handleChange}
          placeholder="Actor"
          className="w-full rounded-xl border border-gray-300 p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>

      {/* Category */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Category
        </label>
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          placeholder="e.g., Social / Mythological / Historical"
          className="w-full rounded-xl border border-gray-300 p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>

      {/* Actions */}
      <div className="flex justify-center gap-4 pt-4">
        <button
          type="button"
          onClick={onClose}
          className="w-32 rounded-xl border border-gray-400 py-2 text-gray-600 hover:bg-gray-100 transition"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="w-40 bg-blue-900 text-white rounded-xl py-2 font-medium shadow-md hover:bg-blue-800 hover:shadow-lg transition"
        >
          Save Changes
        </button>
      </div>
    </form>
  </div>
</div>

  );
}

export default EditTitleRegistration;
