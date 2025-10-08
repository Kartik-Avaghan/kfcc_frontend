import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.jpeg";
import { Send, Phone, Lock } from "lucide-react";
import { ToastContainer, toast } from 'react-toastify';

function UserLogin() {
  const [userDetails, setUserDetails] = useState({
    phone: "",
    otp: "",
  });

  const [otpSent, setOtpSent] = useState(false);

  const navigate = useNavigate();

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setUserDetails((preData) => ({
      ...preData,
      [name]: value,
    }));
  };

  const notify = (message) => { toast.error(message) };

  const handleSendOtp = () => {
    
    if (!userDetails.phone) return notify("Please enter your phone number" );
    if(userDetails.phone.length !== 10) return notify("Please enter a valid 10-digit phone number");
    setOtpSent(true);

    // TODO: integrate API call to send OTP
  };

    const handleSubmit = (e) => {
        
        navigate("/user/membership");

        e.preventDefault();

        fetch(`http://localhost:8080/auth/user`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userDetails),
        })
        .then((response) => {
            if (!response.ok) {
            throw new Error("Response was not ok");
            }
            return response.text();
        })
        .then((token) => {
            console.log("Login Success, token:", token);

            localStorage.setItem("token", token);

            // clear form
            setUserDetails({
            email: "",
            password: "",
            });
            navigate("/");
        })
        .catch((error) => console.log("Fetching error", error));
    };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-50 px-4">
        <ToastContainer />
      <div className="w-full max-w-sm bg-white/80 backdrop-blur-md border border-gray-200 shadow-lg rounded-2xl p-8 transition-all">
        {/* Header */}
        <div className="flex flex-col items-center mb-8">
          <img src={logo} alt="logo" className="w-20 h-20 mb-4 rounded-full shadow-md" />
          <h2 className="text-3xl font-bold text-blue-950">Login</h2>
          <p className="text-gray-500 text-sm mt-1"> Login securely using your mobile number </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Phone Number Field */}
          <div className="relative">
            <div className="absolute left-3 top-3 text-gray-400 flex gap-1 ">
              <Phone className="h-5 w-5" /> +91
            </div>
            <input
              type="number"
              name="phone"
              value={userDetails.phone}
              onChange={handleChanges}
              placeholder="Enter mobile number"
              className="w-full border border-gray-300 rounded-lg py-2.5 px-4 pl-17 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              required
            />
          </div>
          {!otpSent && (
            <button
              type="button"
              onClick={handleSendOtp}
              className=" w-full flex items-center justify-center gap-1 text-sm font-medium cursor-pointer bg-blue-950 text-white hover:bg-blue-900 active:scale-[0.98]w-full py-2.5 rounded-lg  shadow-md transition-transform duration-200"
            >
              <Send className="h-4 w-4" />
              Send OTP
            </button>
          )}

          {/* OTP Field */}
          {otpSent && (
            <div>
              <div className="relative animate-fadeIn">
                <Lock className="absolute left-3 top-2.5 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  name="otp"
                  value={userDetails.otp}
                  onChange={handleChanges}
                  placeholder="Enter OTP"
                  className="w-full border border-gray-300 rounded-lg py-2.5 px-4 pl-10 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  required
                />
                <button
                  type="button"
                  onClick={handleSendOtp}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-blue-600 text-sm hover:text-blue-800 cursor-pointer"
                >
                  Resend
                </button>
              </div>

              <button
                type="submit"
                className={`w-full mt-4 py-2.5 rounded-lg font-medium shadow-md cursor-pointer transition-transform duration-200 bg-blue-950 text-white hover:bg-blue-900 `}
              >
                Login
              </button>
            </div>
          )}

          {/* Login Button */}
        </form>
      </div>
    </div>
  );
}

export default UserLogin;
