import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function EditTitleRegistration({ show, detail, onClose }) {


  const [formData, setFormData] = useState({
    name: "",
    address: "",
    title: "",
    firstFilm: "",
    institution: "",
    // memberId: "",
    gst_no: "",
    producer: "",
    language: "",
    previouslyRegistered: "",
    previouslyRegisteredDetails: "",
    filmsByInstitutes: "",
    director: "",
    singer: "",
    actor: "",
    category: "",
  });

  const navigate = useNavigate();

  // Prefill when detail changes
  useEffect(() => {
    
    if (detail) {


      setFormData({
        name: detail.name || "",
        address: detail.address || "",
        title: detail.title || "",
        firstFilm: detail.firstFilm || "",
        institution: detail.institution || "",
        // memberId: detail.memberId || "",
        gst_no: detail.gst_no || "",
        producer: detail.producer || "",
        language: detail.language || "",
        previouslyRegistered: detail.previouslyRegistered || "",
        previouslyRegisteredDetails: detail.previouslyRegisteredDetails || "",
        filmsByInstitutes: detail.filmsByInstitutes || "",
        director: detail.director || "",
        singer: detail.singer || "",
        actor: detail.actor || "",
        category: detail.category || "",

      });
    }
  }, [detail]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e , applicationId,memberId) => {
    e.preventDefault();

    fetch(`http://localhost:8080/titleRegistration/${detail.id}/${detail.memberId}/resubmit`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) throw new Error("Update failed");
        return response.json();
      })
      .then((data) => {
        console.log("Updated successfully:", data);
        navigate("/producerdashboard");
        onClose();
      })
      .catch((error) => console.log("Error:", error));
  };

  if (!show || !detail) return null; // don’t render if modal closed

  return (
    <div className="fixed inset-0 flex justify-center items-start mt-10 bg-white bg-opacity-50 z-50 overflow-y-auto">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl w-full relative">
        <button
          className="absolute top-4 right-4 text-gray-600"
          onClick={onClose}
        >
          ✕
        </button>

        <form onSubmit={handleSubmit} className="space-y-4">
          <h2 className="text-2xl font-semibold text-blue-950 text-center pb-8">
            Edit Title Registration
          </h2>





        {/* Title & First Film */}
        <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 w-full">
          <div className="flex flex-col w-full md:w-1/2">
            <label className="mb-1 font-medium text-gray-700">Film Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Film Title"
              className="border rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>

          <div className="flex flex-col w-full md:w-1/2">
            <label className="mb-1 font-medium text-gray-700">
              Is this your First Film?
            </label>
            <select
              name="firstFilm"
              value={formData.firstFilm}
              onChange={handleChange}
              className="border rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300"
              required
            >
              <option value="">--Select--</option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
        </div>


          

          {/* Institution & GST */}
          <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 w-full">
            <div className="flex flex-col w-full md:w-1/2">
              <label className="mb-1 font-medium text-gray-700">
                Institution Name
              </label>
              <input
                type="text"
                name="institution"
                value={formData.institution}
                onChange={handleChange}
                placeholder="Institution"
                className="border rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300"
                required
              />
            </div>

            <div className="flex flex-col w-full md:w-1/2">
              <label className="mb-1 font-medium text-gray-700">
                GST Number
              </label>
              <input
                type="text"
                name="gst_no"
                value={formData.gst_no}
                onChange={handleChange}
                placeholder="GST Number"
                className="border rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300"
                required
              />
            </div>
          </div>

          {/* Producer & Language */}
          <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 w-full">
            <div className="flex flex-col w-full md:w-1/2">
              <label className="mb-1 font-medium text-gray-700">Producer</label>
              <input
                type="text"
                name="producer"
                value={formData.producer}
                onChange={handleChange}
                placeholder="Producer"
                className="border rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300"
                required
              />
            </div>

            <div className="flex flex-col w-full md:w-1/2">
              <label className="mb-1 font-medium text-gray-700">Language</label>
              <input
                type="text"
                name="language"
                value={formData.language}
                onChange={handleChange}
                placeholder="Language"
                className="border rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300"
                required
              />
            </div>
          </div>

          {/* Show only if NOT first film */}
          {formData.firstFilm === "false" && (
            <>
              {/* Previously Registered */}
              <div className="flex flex-col w-full">
                <label className="mb-1 font-medium text-gray-700">
                  Previously Registered?
                </label>
                <select
                  name="previouslyRegistered"
                  value={formData.previouslyRegistered}
                  onChange={handleChange}
                  className="border rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300"
                >
                  <option value="">--Select--</option>
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </select>
              </div>

              {/* Previously Registered Details */}
              <div className="flex flex-col w-full">
                <label className="mb-1 font-medium text-gray-700">
                  Previously Registered Details
                </label>
                <input
                  type="text"
                  name="previouslyRegisteredDetails"
                  value={formData.previouslyRegisteredDetails}
                  onChange={handleChange}
                  placeholder="Details if registered before"
                  className="border rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300"
                />
              </div>
            </>
          )}

          {/* Films By Institutes */}
          <div className="flex flex-col w-full">
            <label className="mb-1 font-medium text-gray-700">
              Films By Institutes
            </label>
            <input
              type="text"
              name="filmsByInstitutes"
              value={formData.filmsByInstitutes}
              onChange={handleChange}
              placeholder="Enter films produced by institutes"
              className="border rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          {/* Director, Singer, Actor */}
          <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 w-full">
            <div className="flex flex-col w-full md:w-1/3">
              <label className="mb-1 font-medium text-gray-700">Director</label>
              <input
                type="text"
                name="director"
                value={formData.director}
                onChange={handleChange}
                placeholder="Director"
                className="border rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>

            <div className="flex flex-col w-full md:w-1/3">
              <label className="mb-1 font-medium text-gray-700">
                Music Director
              </label>
              <input
                type="text"
                name="singer"
                value={formData.singer}
                onChange={handleChange}
                placeholder="Music Director"
                className="border rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>

            <div className="flex flex-col w-full md:w-1/3">
              <label className="mb-1 font-medium text-gray-700">Actor</label>
              <input
                type="text"
                name="actor"
                value={formData.actor}
                onChange={handleChange}
                placeholder="Actor"
                className="border rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
          </div>

          {/* Category */}
          <div className="flex flex-col w-full">
            <label className="mb-1 font-medium text-gray-700">Category</label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              placeholder="Social / Mythological / Historical"
              className="border rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-40 bg-blue-950 text-white rounded-lg py-2 hover:bg-white hover:text-blue-950 border border-blue-950"
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
