import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function TitleRegistration() {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    address: "",
    title: "",
    firstFilm: "",
    institution: "",
    memberId: "",
    producer: "",
    language: "",
    previouslyRegistered: "",
    previouslyRegisteredDetails: "",
    filmsByInstitutes: "",
    director: "",
    singer: "",
    actor: "",
    category: "",
    acceptedDate: "",
  });


  const navigate=useNavigate();

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
        "Authorization": localStorage.getItem("token"),

      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Response was not ok");
        }
         navigate("/producerdashboard")
        return response.json();
      })
      .then((data) => {
        console.log("Successful", data);

        // Reset form
        setFormData({
          name: "",
          date: new Date.now(),
          address: "",
          title: "",
          firstFilm: "",
          institution: "",
          memberId: "",
          producer: "",
          language: "",
          previouslyRegistered: "",
          previouslyRegisteredDetails: "",
          filmsByInstitutes: "",
          director: "",
          singer: "",
          actor: "",
          category: "",
          acceptedDate: "",
        });

       
      })
      .catch((error) => console.log("Fetching Error", error));
  };

  return (
    <div className="flex justify-center py-10 ">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-lg space-y-4"
      >
        <h2 className="text-3xl font-semibold text-center mb-6 text-blue-950">
         Title Registration Details
        </h2>

        {/* Name & Date */}
        {/* <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 w-full">
          <div className="flex flex-col w-full md:w-1/2">
            <label className="mb-1 font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="border rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>

          <div className="flex flex-col w-full md:w-1/2">
            <label className="mb-1 font-medium text-gray-700">Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="border rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>
        </div>

        {/* Address */}
        {/* <div className="flex flex-col w-full">
          <label className="mb-1 font-medium text-gray-700">Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter address"
            className="border rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
        </div>  */}

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

        {/* Institution & Member ID */}
        <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 w-full">
          <div className="flex flex-col w-full ">
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

          {/* <div className="flex flex-col w-full md:w-1/2">
            <label className="mb-1 font-medium text-gray-700">
              Membership Number
            </label>
            <input
              type="text"
              name="memberId"
              value={formData.memberId}
              onChange={handleChange}
              placeholder="Membership ID"
              className="border rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div> */}
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

        


        {
          formData.firstFilm == "false" && <div>



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
          </div>




        }

       

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
            <label className="mb-1 font-medium text-gray-700">Music Director</label>
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

        {/* Accepted Date */}
        {/* <div className="flex flex-col w-full">
          <label className="mb-1 font-medium text-gray-700">Accepted Date</label>
          <input
            type="date"
            name="acceptedDate"
            value={formData.acceptedDate}
            onChange={handleChange}
            className="border rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div> */}



        {/* <div>
          <input type="radio" className="mr-2" required />Kalayan Nidhi
        </div> */}


       
















        {/* Submit Button */}
        <div className="flex justify-center items-center">
           
          <button
            type="submit"
            className="w-80 mt-4 border border-blue-950 bg-blue-950 text-white p-3 rounded-lg hover:bg-white hover:text-blue-950 transition"
          >
           
            Submit
          </button>
         
        </div>



        
      </form>
    </div>
  );
}

export default TitleRegistration;















