import React, { useState } from "react";
import {
  User,
  Calendar,
  MapPin,
  Image as ImageIcon,
  Phone,
  Mail,
  Layers,
  Building, 
} from "lucide-react";

const MembershipForm = () => {
  const today = new Date();
  const [formData, setFormData] = useState({
    applicantName: "",
    date: today.toISOString().split("T")[0],
    applicantAddress: "",
    applicantImage: null,
    applicantPhNo: "",
    applicantEmail: "",
    applicantMembershipCategory: "",
    applicantOwnershipType: "",
    proprietor: {
      proprietorName: "",
      proprietorAddress: "",
      proprietorDob: "",
      proprietorBloodGroup: "",
      proprietorPanNo: "",
      proprietorPanImg: null,
      proprietorAadhaarNo: "",
      proprietorAadhaarImg: null,
      proprietorESignature: null,
    },
    partners: [],
    nominee: [{ nomineeName: "", nomineeEmail: "", nomineeRelationship: "" }],
    proposer: [
      {
        proposerReferenceId: "",
        proposerDate: today.toISOString().split("T")[0],
        proposerName: "",
        proposerAddress: "",
        proposerPhNo: "",
        proposerDesignation: "",
      },
    ],
    membershipFee: false,
    kalyanNidhi: false,
    totalAmountToPay: 0,
  });

  const [termsChecked, setTermsChecked] = useState(false);

  const handleInputChange = (e, section = null, index = null) => {
    const { name, value, files } = e.target;

    if (section === "proprietor") {
      setFormData((prev) => ({
        ...prev,
        proprietor: {
          ...prev.proprietor,
          [name]: files ? files[0] : value,
        },
      }));
    } else if (section === "partners") {
      const newPartners = [...formData.partners];
      newPartners[index][name] = files ? files[0] : value;
      setFormData((prev) => ({ ...prev, partners: newPartners }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: files ? files[0] : value,
      }));
    }
  };

  const handleNomineeChange = (idx, key, value) => {
    const newNominee = [...formData.nominee];
    newNominee[idx][key] = value;
    setFormData((prev) => ({ ...prev, nominee: newNominee }));
  };

  const handleProposerChange = (idx, key, value) => {
    const newProposer = [...formData.proposer];
    newProposer[idx][key] = value;
    setFormData((prev) => ({ ...prev, proposer: newProposer }));
  };

  const handleCheckboxChange = (key, value) => {
    setFormData((prev) => {
      let total = prev.totalAmountToPay;
      if (key === "membershipFee") total = value ? 59000 : total - 59000;
      if (key === "kalyanNidhi") total = value ? total + 22500 : total - 22500;
      return { ...prev, [key]: value, totalAmountToPay: total };
    });
  };

  const addPartner = () => {
    setFormData((prev) => ({
      ...prev,
      partners: [
        ...prev.partners,
        {
          partnerName: "",
          partnerAddress: "",
          partnerDob: "",
          partnerBloodGroup: "",
          partnerPanNo: "",
          partnerPanImg: null,
          partnerAadhaarNo: "",
          partnerAadhaarImg: null,
          partnerESignature: null,
        },
      ],
    }));
  };

  const removePartner = (idx) => {
    setFormData((prev) => ({
      ...prev,
      partners: prev.partners.filter((_, i) => i !== idx),
    }));
  };

  const addNominee = () => {
    if (formData.nominee.length < 2) {
      setFormData((prev) => ({
        ...prev,
        nominee: [
          ...prev.nominee,
          { nomineeName: "", nomineeEmail: "", nomineeRelationship: "" },
        ],
      }));
    }
  };

  const removeNominee = (idx) => {
    setFormData((prev) => ({
      ...prev,
      nominee: prev.nominee.filter((_, i) => i !== idx),
    }));
  };

  const addProposer = () => {
    if (formData.proposer.length < 2) {
      setFormData((prev) => ({
        ...prev,
        proposer: [
          ...prev.proposer,
          {
            proposerReferenceId: "",
            proposerDate: today.toISOString().split("T")[0],
            proposerName: "",
            proposerAddress: "",
            proposerPhNo: "",
            proposerDesignation: "",
          },
        ],
      }));
    }
  };

  const removeProposer = (idx) => {
    setFormData((prev) => ({
      ...prev,
      proposer: prev.proposer.filter((_, i) => i !== idx),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <div className="max-w-6xl mx-auto p-8 bg-white  rounded-lg space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-blue-900">
          ಸದಸ್ಯತ್ವದ ಅರ್ಜಿಯೊಂದಿಗೆ ಲಗತ್ತಿಸಬೇಕದ ವಿವರಗಳು
        </h2>
        <h3 className="text-lg font-semibold text-gray-700">
          ANNEXURE TO APPLICATION FORM FOR MEMBERSHIP
        </h3>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Applicant Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 rounded-xl">
          {/* Applicant Name */}
          <div>
            <label className=" font-semibold text-gray-800 mb-1 flex items-center gap-2">
              <User className="w-4 h-4 text-blue-700" />
              ಸದಸ್ಯತ್ವದ ರಿಜಿಸ್ಟರ್‌ನಲ್ಲಿ ನಮೂದಿಸಬೇಕಾದ ಅರ್ಜಿದಾರರ ಅಥವಾ ಸಂಸ್ಥೆಯ ಹೆಸರು
              / Name of Applicant
            </label>
            <input
              type="text"
              name="applicantName"
              value={formData.applicantName}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 transition"
            />
          </div>

          {/* Date */}
          <div>
            <label className=" font-semibold text-gray-800 mb-1 flex items-center gap-2">
              <Calendar className="w-4 h-4 text-blue-700" />
              ದಿನಾಂಕ / Date
            </label>
            <input
              type="text"
              value={formData.date}
              readOnly
              className="w-full border border-gray-200 rounded-lg px-3 py-2 bg-gray-100 text-gray-600 cursor-not-allowed"
            />
          </div>

          {/* Address */}
          <div>
            <label className=" font-semibold text-gray-800 mb-1 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-blue-700" />
              ಸದಸ್ಯತ್ವದ ರಿಜಿಸ್ಟರ್‌ನಲ್ಲಿ ನಮೂದಿಸಬೇಕಾದ ಅರ್ಜಿದಾರರ ಅಥವಾ ಸಂಸ್ಥೆಯ ವಿಳಾಸ
              / Address
            </label>
            <input
              type="text"
              name="applicantAddress"
              value={formData.applicantAddress}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />
          </div>

          {/* Image */}
          <div>
            <label className="block font-semibold text-gray-800 mb-1 flex items-center gap-2">
              <ImageIcon className="w-4 h-4 text-blue-700" />
              ಚಿತ್ರ / Image
            </label>
            <input
              type="file"
              name="applicantImage"
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-blue-600 file:text-white hover:file:bg-blue-700 transition file:text-sm"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block font-semibold text-gray-800 mb-1 flex items-center gap-2">
              <Phone className="w-4 h-4 text-blue-700" />
              ದೂರವಾಣಿ ಸಂಖ್ಯೆ / Telephone No.
            </label>
            <input
              type="text"
              name="applicantPhNo"
              value={formData.applicantPhNo}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block font-semibold text-gray-800 mb-1 flex items-center gap-2">
              <Mail className="w-4 h-4 text-blue-700" />
              ಇ-ಮೇಲ್ ಐಡಿ / E-mail ID
            </label>
            <input
              type="email"
              name="applicantEmail"
              value={formData.applicantEmail}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />
          </div>

          {/* Membership Category */}
          <div>
            <label className="block font-semibold text-gray-800 mb-1 flex items-center gap-2">
              <Layers className="w-4 h-4 text-blue-700" />
              ಕೋರಿರುವ ಸದಸ್ಯತ್ವದ ವರ್ಗ / Membership Category
            </label>
            <select
              name="applicantMembershipCategory"
              value={formData.applicantMembershipCategory}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            >
              <option value="">Select</option>
              <option value="Producer">Producer</option>
              <option value="Distributer">Distributer</option>
              <option value="Exhibitor">Exhibitor</option>
              <option value="SLO">Studio, Laboratory & Outdoor Unit</option>
              <option value="Associated">Associated</option>
              <option value="HM">Hony Member</option>
              <option value="TemporaryMember">Temporary Member</option>
            </select>
          </div>

          {/* Ownership Type */}
          <div>
            <label className="block font-semibold text-gray-800 mb-1 flex items-center gap-2">
              <Building className="w-4 h-4 text-blue-700" />
              ಮಾಲೀಕತ್ವವೇ / Ownership Type
            </label>
            <select
              name="applicantOwnershipType"
              value={formData.applicantOwnershipType}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            >
              <option value="">Select</option>
              <option value="Proprietor">Proprietor</option>
              <option value="Partnership">Partnership</option>
              <option value="Limited">Limited</option>
              <option value="Company">Company</option>
              <option value="Association">Association</option>
            </select>
          </div>
        </div>

        {/* Proprietor Form */}
        {formData.applicantOwnershipType === "Proprietor" && (
          <div className="border p-4 rounded space-y-3 bg-gray-50">
            <h3 className="font-semibold">Proprietor Details</h3>
            {Object.keys(formData.proprietor).map((key) => (
              <div key={key}>
                <label className="block font-medium">{key}</label>
                <input
                  type={
                    key.includes("Dob")
                      ? "date"
                      : key.includes("Img") || key.includes("ESignature")
                      ? "file"
                      : "text"
                  }
                  name={key}
                  value={formData.proprietor[key]}
                  onChange={(e) => handleInputChange(e, "proprietor")}
                  className="w-full border rounded px-3 py-2"
                />
              </div>
            ))}
          </div>
        )}

        {/* Partners Form */}
        {["Partnership", "Limited", "Company", "Association"].includes(
          formData.applicantOwnershipType
        ) && (
          <div className="border p-4 rounded space-y-3 bg-gray-50">
            <h3 className="font-semibold">Partners / Directors / Members</h3>
            {formData.partners.map((partner, idx) => (
              <div key={idx} className="border p-2 rounded space-y-2">
                <h4>Partner {idx + 1}</h4>
                {Object.keys(partner).map((key) => (
                  <div key={key}>
                    <label className="block font-medium">{key}</label>
                    <input
                      type={
                        key.includes("Dob")
                          ? "date"
                          : key.includes("Img") || key.includes("ESignature")
                          ? "file"
                          : "text"
                      }
                      name={key}
                      value={partner[key]}
                      onChange={(e) => handleInputChange(e, "partners", idx)}
                      className="w-full border rounded px-3 py-2"
                    />
                  </div>
                ))}
                {formData.partners.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removePartner(idx)}
                    className="text-red-600 underline"
                  >
                    Remove Partner
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={addPartner}
              className="bg-blue-500 text-white px-3 py-2 rounded"
            >
              Add Partner
            </button>
          </div>
        )}

        {/* Nominee Form */}
        <div className="border p-4 rounded space-y-3 bg-gray-50">
          <h3 className="font-semibold">Nominee Details</h3>
          {formData.nominee.map((nom, idx) => (
            <div key={idx} className="border p-2 rounded space-y-2">
              <h4>Nominee {idx + 1}</h4>
              {Object.keys(nom).map((key) => (
                <div key={key}>
                  <label className="block font-medium">{key}</label>
                  <input
                    type={key === "nomineeEmail" ? "email" : "text"}
                    value={nom[key]}
                    onChange={(e) =>
                      handleNomineeChange(idx, key, e.target.value)
                    }
                    className="w-full border rounded px-3 py-2"
                  />
                </div>
              ))}
              {idx > 0 && (
                <button
                  type="button"
                  onClick={() => removeNominee(idx)}
                  className="text-red-600 underline"
                >
                  Remove Nominee
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={addNominee}
            className="bg-blue-500 text-white px-3 py-2 rounded"
          >
            Add Nominee
          </button>
        </div>

        {/* Proposer Form */}
        <div className="border p-4 rounded space-y-3 bg-gray-50">
          <h3 className="font-semibold">Proposer Details</h3>
          {formData.proposer.map((prop, idx) => (
            <div key={idx} className="border p-2 rounded space-y-2">
              <h4>Proposer {idx + 1}</h4>
              {Object.keys(prop).map((key) => (
                <div key={key}>
                  <label className="block font-medium">{key}</label>
                  <input
                    type={key === "proposerDate" ? "date" : "text"}
                    value={prop[key]}
                    onChange={(e) =>
                      handleProposerChange(idx, key, e.target.value)
                    }
                    className="w-full border rounded px-3 py-2"
                  />
                </div>
              ))}
              {formData.proposer.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeProposer(idx)}
                  className="text-red-600 underline"
                >
                  Remove Proposer
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={addProposer}
            className="bg-blue-500 text-white px-3 py-2 rounded"
          >
            Add Proposer
          </button>
        </div>

        {/* Fees */}
        <div className="border p-4 rounded space-y-2 bg-gray-100">
          <label className="inline-flex items-center space-x-2">
            <input
              type="checkbox"
              checked={formData.membershipFee}
              onChange={(e) =>
                handleCheckboxChange("membershipFee", e.target.checked)
              }
              className="form-checkbox"
            />
            <span>Membership form application fee ₹50,000 + GST = ₹59,000</span>
          </label>

          <label className="inline-flex items-center space-x-2">
            <input
              type="checkbox"
              checked={formData.kalyanNidhi}
              onChange={(e) =>
                handleCheckboxChange("kalyanNidhi", e.target.checked)
              }
              className="form-checkbox"
            />
            <span>Apply for Kalyan Nidhi ₹22,500</span>
          </label>

          <div className="font-semibold">
            Total: ₹{formData.totalAmountToPay}
          </div>
        </div>

        {/* Terms & Submit */}
        <label className="inline-flex items-center space-x-2">
          <input
            type="checkbox"
            checked={termsChecked}
            onChange={(e) => setTermsChecked(e.target.checked)}
            className="form-checkbox"
          />
          <span>
            ನಾನು/ನಾವು ನೀಡಿರುವ{" "}
            <a
              href="www.grow.com"
              target="_blank"
              className="text-blue-600 underline"
            >
              ನೀತಿ, ನಿಯಮಗಳನ್ನು
            </a>{" "}
            ಓದಿ ಒಪ್ಪಿಕೊಂಡಿರುತ್ತೇನೆ
          </span>
        </label>

        <button
          type="submit"
          disabled={!termsChecked || !formData.membershipFee}
          className={`w-full py-3 rounded text-white font-semibold ${
            termsChecked && formData.membershipFee
              ? "bg-blue-500 hover:bg-blue-600"
              : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default MembershipForm;

// import React from 'react'

// function MemberShipForm() {
//   return (
//   <>
//     <div className="max-w-6xl mx-auto p-8 bg-white shadow-md rounded-lg">
//       <h2 className="text-2xl font-semibold text-gray-800 mb-2 text-center">
//         ಸದಸ್ಯತ್ವದ ಅರ್ಜಿಯೊಂದಿಗೆ ಲಗತ್ತಿಸಬೇಕದ ವಿವರಗಳು
//       </h2>
//       <h2 className="text-xl text-gray-700 mb-8 text-center">
//         ANNEXURE TO APPLICATION FORM FOR MEMBERSHIP
//       </h2>

//       <form ref="myForm" onSubmit={handleSubmit} className="space-y-6">
//         {/* Applicant Name and Date */}
//         <div className="flex flex-wrap gap-6">
//           <div className="w-full md:w-2/3">
//             <label className="block text-gray-700 font-medium mb-1">
//               ಸದಸ್ಯತ್ವದ ರಿಜಿಸ್ಟರ್‌ನಲ್ಲಿ ನಮೂದಿಸಬೇಕಾದ ಅರ್ಜಿದಾರರ ಅಥವಾ ಸಂಸ್ಥೆಯ ಹೆಸರು /
//               <span className="block text-gray-600 text-sm">
//                 Name of Applicant
//               </span>
//             </label>
//             <input
//               onChange={handleInputChange}
//               value={membershipFormData.applicantName}
//               name="applicantName"
//               type="text"
//               className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           <div className="w-full md:w-1/3">
//             <label className="block text-gray-700 font-medium mb-1">
//               ದಿನಾಂಕ / <span className="text-sm text-gray-600">Date</span>
//             </label>
//             <input
//               type="text"
//               id="dateField"
//               name="date"
//               className="w-full border rounded-md px-4 py-2 bg-gray-100 cursor-not-allowed"
//               onChange={handleInputChange}
//               value={membershipFormData.date}
//               disabled
//             />
//           </div>
//         </div>

//         {/* Address and Image */}
//         <div className="flex flex-wrap gap-6">
//           <div className="w-full md:w-2/3">
//             <label className="block text-gray-700 font-medium mb-1">
//               ಸದಸ್ಯತ್ವದ ರಿಜಿಸ್ಟರ್‌ನಲ್ಲಿ ನಮೂದಿಸಬೇಕಾದ ಅರ್ಜಿದಾರರ ಅಥವಾ ಸಂಸ್ಥೆಯ ವಿಳಾಸ /
//               <span className="block text-gray-600 text-sm">Address</span>
//             </label>
//             <input
//               onChange={handleInputChange}
//               value={membershipFormData.applicantAddress}
//               name="applicantAddress"
//               type="text"
//               className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           <div className="w-full md:w-1/3">
//             <label className="block text-gray-700 font-medium mb-1">
//               ಚಿತ್ರ / <span className="text-sm text-gray-600">Image</span>
//             </label>
//             <input
//               onChange={handleInputChange}
//               name="applicantImage"
//               type="file"
//               className="w-full border rounded-md px-4 py-2"
//             />
//           </div>
//         </div>

//         {/* Phone and Email */}
//         <div className="flex flex-wrap gap-6">
//           <div className="w-full md:w-1/2">
//             <label className="block text-gray-700 font-medium mb-1">
//               ದೂರವಾಣಿ ಸಂಖ್ಯೆ / <span className="text-sm text-gray-600">Telephone No.</span>
//             </label>
//             <input
//               onChange={handleInputChange}
//               value={membershipFormData.applicantPhNo}
//               name="applicantPhNo"
//               type="text"
//               className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           <div className="w-full md:w-1/2">
//             <label className="block text-gray-700 font-medium mb-1">
//               ಇ-ಮೇಲ್ ಐಡಿ / <span className="text-sm text-gray-600">E-mail ID</span>
//             </label>
//             <input
//               onChange={handleInputChange}
//               value={membershipFormData.applicantEmail}
//               name="applicantEmail"
//               type="email"
//               className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//         </div>

//         {/* Membership Category */}
//         <div className="w-full md:w-1/3">
//           <label className="block text-gray-700 font-medium mb-1">
//             ಕೋರಿರುವ ಸದಸ್ಯತ್ವದ ವರ್ಗ /
//             <span className="text-sm text-gray-600">
//               Category of Membership
//             </span>
//           </label>
//           <select
//             name="applicantMembershipCategory"
//             onChange={handleInputChange}
//             value={membershipFormData.applicantMembershipCategory}
//             className="w-full border rounded-md px-4 py-2 bg-white focus:ring-2 focus:ring-blue-500"
//           >
//             <option value="">Select</option>
//             <option value="Producer">Producer</option>
//             <option value="Distributer">Distributer</option>
//             <option value="Exhibitor">Exhibitor</option>
//             <option value="SLO">Studio, Laboratory & Outdoor Unit</option>
//             <option value="Associated">Associated</option>
//             <option value="HM">Hony, Member</option>
//             <option value="TemporaryMember">Temporary Member</option>
//           </select>
//         </div>

//         {/* Ownership Type */}
//         <div className="w-full md:w-2/3">
//           <label className="block text-gray-700 font-medium mb-1">
//             ಮಾಲೀಕತ್ವವೇ / ಪಾಲುದಾರಿಕೆಯೆ / ಲಿಮಿಟೆಡ್ / ಕಂಪನಿಯೆ / ಸದಸ್ಯರಿಂದ ಕೂಡಿದ ಸಂಘವೆ /
//             <span className="text-sm text-gray-600 block">
//               Whether Proprietor / Partnership / Limited / Company / Association of Member
//             </span>
//           </label>
//           <select
//             name="applicantOwnershipType"
//             value={membershipFormData.applicantOwnershipType}
//             onChange={handleInputChange}
//             className="w-full border rounded-md px-4 py-2 bg-white focus:ring-2 focus:ring-blue-500"
//           >
//             <option value="">Select Ownership Type</option>
//             <option value="Proprietor">Proprietor</option>
//             <option value="Partnership">Partnership</option>
//             <option value="Limited">Limited</option>
//             <option value="Company">Company</option>
//             <option value="Association">Association</option>
//           </select>
//           <p className="text-sm text-gray-500 mt-1">
//             ಹಾಗಿದ್ದರೆ ದಯವಿಟ್ಟು (ಯಾವುದು ಅನ್ವಯಿಸುವುದು) ನಮೂದಿಸಿ |
//             <span className="block">If so, please furnish (whichever applicable)</span>
//           </p>
//         </div>
//       </form>
//     </div>
//   </>
// );

// }

// export default MemberShipForm
