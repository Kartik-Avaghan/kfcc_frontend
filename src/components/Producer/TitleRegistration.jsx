import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function TitleRegistration() {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    title: "",
    firstFilm: "",
    institution: "",
    memberId: "102345",
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`http://localhost:8080/titleApplication`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Response was not ok");
        }
        navigate("/producerdashboard");
        return response.json();
      })
      .then((data) => {
        console.log("Successful", data);
        setFormData({
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
      })
      .catch((error) => console.log("Fetching Error", error));
  };

  return (
    <div className="flex justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-4xl bg-white p-8 rounded-2xl shadow-xl space-y-8"
      >
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-blue-950">
            Title Registration
          </h2>
          <p className="text-gray-500 mt-2 text-sm">
            Please fill out all required details carefully.
          </p>
        </div>

        {/* Film Details */}
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">
            Film Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Film Title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter film title"
                className="w-full border rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Film Title in Kannada <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="title"
                placeholder="Enter film title in Kannada"
                className="w-full border rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Is this your First Film?
              </label>
              <select
                name="firstFilm"
                value={formData.firstFilm}
                onChange={handleChange}
                className="w-full border rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              >
                <option value="">--Select--</option>
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
            </div>
          </div>
        </div>

        {/* Producer & Institution */}
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">
            Production Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Institution Name
              </label>
              <input
                type="text"
                name="institution"
                value={formData.institution}
                onChange={handleChange}
                placeholder="Institution Name"
                className="w-full border rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                GST Number
              </label>
              <input
                type="text"
                name="gstNo"
                value={formData.gstNo}
                onChange={handleChange}
                placeholder="Enter GST No."
                className="w-full border rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Producer
              </label>
              <input
                type="text"
                name="producer"
                value={formData.producer}
                onChange={handleChange}
                placeholder="Producer Name"
                className="w-full border rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Language
              </label>
              <input
                type="text"
                name="language"
                value={formData.language}
                onChange={handleChange}
                placeholder="Enter Language"
                className="w-full border rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
            </div>
          </div>
        </div>

        {/* Extra Info for non-first films */}
        {formData.firstFilm === "false" && (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">
              Previous Registrations
            </h3>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Previously Registered?
              </label>
              <select
                name="previouslyRegistered"
                value={formData.previouslyRegistered}
                onChange={handleChange}
                className="w-full border rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                <option value="">--Select--</option>
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
                placeholder="Enter details"
                className="w-full border rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
          </div>
        )}

        {/* Crew Info */}
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">
            Crew Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                className="w-full border rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
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
                className="w-full border rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Lead Actor
              </label>
              <input
                type="text"
                name="actor"
                value={formData.actor}
                onChange={handleChange}
                placeholder="Actor"
                className="w-full border rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Category & Institutes */}
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">
            Additional Info
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Category
              </label>
              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleChange}
                placeholder="Social / Mythological / Historical"
                className="w-full border rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Films By Institutes
              </label>
              <input
                type="text"
                name="filmsByInstitutes"
                value={formData.filmsByInstitutes}
                onChange={handleChange}
                placeholder="List films by institutes"
                className="w-full border rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Submit */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="w-56 py-3 bg-blue-950 text-white font-semibold rounded-xl shadow hover:bg-blue-800 hover:shadow-lg transition-all"
          >
            Submit Application
          </button>
        </div>
      </form>
    </div>
  );
}

export default TitleRegistration;
