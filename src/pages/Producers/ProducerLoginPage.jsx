import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ProducerLoginPage() {
 const [staffLogin, setStaffLogin] = useState({
    email: "",
    password: ""
  });

  const navigate =useNavigate();

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setStaffLogin((preData) => ({
      ...preData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`http://localhost:8080/auth/member`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(staffLogin),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Response was not ok");
        }
        return response.text(); // ✅ backend returns plain text
      })
      .then((token) => {
        console.log("Login Success, token:", token);

        // ✅ Store token in localStorage
        localStorage.setItem("token", token);

        // clear form
        setStaffLogin({
          email: "",
          password: "",
        });
        navigate("/producerdashboard")
      })
      .catch((error) => console.log("Fetching error", error));
  };

  return (
    <div className="flex justify-center items-center px-4 min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-white border shadow-md rounded-lg p-6 w-full max-w-sm"
      >
        <h2 className="text-2xl font-semibold text-center mb-6 text-blue-950">
          Staff Login
        </h2>

        <div className="flex flex-col space-y-4">
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={staffLogin.email}
            onChange={handleChanges}
            className="border rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={staffLogin.password}
            onChange={handleChanges}
            className="border rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
          <button
            type="submit"
            className="bg-blue-950 border border-blue-950 text-white p-2 rounded-lg hover:bg-white hover:text-blue-950 transition"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default ProducerLoginPage