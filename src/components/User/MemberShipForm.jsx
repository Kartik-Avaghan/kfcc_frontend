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
  Droplet,
  Info,
} from "lucide-react";

const MembershipForm = () => {
  const today = new Date();
  const [formData, setFormData] = useState({
    applicantName: {
      firstName: "",
      middleName: "",
      lastName: "",
    },
    date: today.toISOString().split("T")[0],
    applicantAddress: {
      line1: "",
      line2: "",
      line3: "",
    },
    applicantImage: null,
    applicantPhNo: "",
    applicantEmail: "",
    applicantBloodGroup: "",
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
    } else if (section === "applicantName") {
      setFormData((prev) => ({
        ...prev,
        applicantName: {
          ...prev.applicantName,
          [name]: files ? files[0] : value,
        },
      }));
    } else if (section === "applicantAddress") {
      setFormData((prev) => ({
        ...prev,
        applicantAddress: {
          ...prev.applicantAddress,
          [name]: files ? files[0] : value,
        },
      }));
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
        <h2 className="text-3xl font-bold text-blue-900 mb-2">
          ಸದಸ್ಯತ್ವದ ಅರ್ಜಿಯೊಂದಿಗೆ ಲಗತ್ತಿಸಬೇಕದ ವಿವರಗಳು
        </h2>
        <h3 className="text-lg font-semibold text-gray-700">
          ANNEXURE TO APPLICATION FORM FOR MEMBERSHIP
        </h3>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Applicant Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-4 rounded-xl">
          <div className="col-span-2">
            <label className=" font-semibold text-gray-800 mb-2 flex items-center gap-2">
              <User className="size-4 text-blue-700" />
              ಸದಸ್ಯತ್ವದ ರಿಜಿಸ್ಟರ್‌ನಲ್ಲಿ ನಮೂದಿಸಬೇಕಾದ ಅರ್ಜಿದಾರರ ಅಥವಾ ಸಂಸ್ಥೆಯ ಹೆಸರು
              / Name of Applicant
            </label>

            <div className="w-full flex gap-4">
              <input
                type="text"
                name="firstName"
                value={formData.applicantName.firstName}
                onChange={(e) => handleInputChange(e, "applicantName")}
                placeholder="first name"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 transition"
              />

              <input
                type="text"
                name="middleName"
                value={formData.applicantName.middleName}
                onChange={(e) => handleInputChange(e, "applicantName")}
                placeholder="middle name"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 transition"
              />

              <input
                type="text"
                name="lastName"
                value={formData.applicantName.lastName}
                onChange={(e) => handleInputChange(e, "applicantName")}
                placeholder="last name"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 transition"
              />
            </div>
          </div>

          {/* Date */}
          {/* <div>
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
          </div> */}

          {/* Address */}
          <div className="col-span-2">
            <label className=" font-semibold text-gray-800 mb-2 flex items-center gap-2 ">
              <MapPin className="size-4 text-blue-700" />
              ಸದಸ್ಯತ್ವದ ರಿಜಿಸ್ಟರ್‌ನಲ್ಲಿ ನಮೂದಿಸಬೇಕಾದ ಅರ್ಜಿದಾರರ ಅಥವಾ ಸಂಸ್ಥೆಯ ವಿಳಾಸ
              / Address
            </label>

            <div className="w-full flex gap-4">
              <input
                type="text"
                name="line1"
                value={formData.applicantAddress.line1}
                onChange={(e) => handleInputChange(e, "applicantAddress")}
                placeholder="Address line 1"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 transition"
              />

              <input
                type="text"
                name="line2"
                value={formData.applicantAddress.line2}
                onChange={(e) => handleInputChange(e, "applicantAddress")}
                placeholder="Address line 2"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 transition"
              />

              <input
                type="text"
                name="line3"
                value={formData.applicantAddress.line3}
                onChange={(e) => handleInputChange(e, "applicantAddress")}
                placeholder="Address line 3"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 transition"
              />
            </div>
          </div>

          {/* Image */}
          <div>
            <label className=" font-semibold text-gray-800 mb-2 flex items-center gap-2">
              <ImageIcon className="w-4 h-4 text-blue-700" />
              ಅರ್ಜಿದಾರರ ಚಿತ್ರ / Applicant Image
            </label>
            <input
              type="file"
              name="applicantImage"
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-1 file:mr-3 file:py-2 file:px-3 file:rounded-lg file:border-0 file:bg-blue-600 file:text-white hover:file:bg-blue-700 transition file:text-[12px]"
            />
          </div>

          <div className="mt-1">
            <label className="font-semibold text-gray-800 mb-1 flex items-center gap-2">
              <Droplet className="w-4 h-4 text-blue-700" />
              ಅರ್ಜಿದಾರರ ರಕ್ತದ ಗುಂಪು / Applicant Blood Group
            </label>
            <select
              name="applicantBloodGroup"
              value={formData.applicantBloodGroup}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 transition"
            >
              <option value="">Select</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="special">Special</option>
            </select>
          </div>

          {/* Phone Number */}
          <div>
            <label className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
              <Phone className="w-4 h-4 text-blue-700" />
              ದೂರವಾಣಿ ಸಂಖ್ಯೆ / Mobile No.
            </label>
            <input
              type="text"
              name="applicantPhNo"
              value={formData.applicantPhNo}
              onChange={handleInputChange}
              placeholder="+91"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 transition"
            />
          </div>

          {/* Email */}
          <div>
            <label className=" font-semibold text-gray-800 mb-1 flex items-center gap-2">
              <Mail className="w-4 h-4 text-blue-700" />
              ಇ-ಮೇಲ್ ಐಡಿ / E-mail ID
            </label>
            <input
              type="email"
              name="applicantEmail"
              value={formData.applicantEmail}
              placeholder="example@mail.com"
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2  transition"
            />
          </div>

          {/* Membership Category */}
          <div>
            <label className="font-semibold text-gray-800 mb-1 flex items-center gap-2">
              <Layers className="w-4 h-4 text-blue-700" />
              ಕೋರಿರುವ ಸದಸ್ಯತ್ವದ ವರ್ಗ / Membership Category
            </label>
            <select
              name="applicantMembershipCategory"
              value={formData.applicantMembershipCategory}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 transition"
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
            <label className=" font-semibold text-gray-800 mb-1 flex items-center gap-2">
              <Building className="w-4 h-4 text-blue-700" />
              ಮಾಲೀಕತ್ವವೇ / Ownership Type
            </label>
            <select
              name="applicantOwnershipType"
              value={formData.applicantOwnershipType}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 transition"
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
          <div className="rounded-lg p-4 mt-1">
            <h2 className="text-lg font-semibold mb-3">Proprietor Details</h2>

            <div className="grid grid-cols-2 gap-4">
              {/* Proprietor Name */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Proprietor Name
                </label>
                <input
                  type="text"
                  name="proprietorName"
                  value={formData.proprietor.proprietorName}
                  onChange={(e) => handleInputChange(e, "proprietor")}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2"
                  placeholder="Enter proprietor name"
                />
              </div>

              {/* Proprietor Address */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Address
                </label>
                <input
                  type="text"
                  name="proprietorAddress"
                  value={formData.proprietor.proprietorAddress}
                  onChange={(e) => handleInputChange(e, "proprietor")}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2"
                  placeholder="Enter address"
                />
              </div>

              {/* Date of Birth */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Date of Birth
                </label>
                <input
                  type="date"
                  name="proprietorDob"
                  value={formData.proprietor.proprietorDob}
                  onChange={(e) => handleInputChange(e, "proprietor")}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2"
                />
              </div>

              {/* Blood Group */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Blood Group
                </label>
                <select
                  name="proprietorBloodGroup"
                  value={formData.proprietor.proprietorBloodGroup}
                  onChange={(e) => handleInputChange(e, "proprietor")}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 transition"
                >
                  <option value="">Select Blood Group</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                  <option value="special">Special</option>
                </select>
              </div>

              {/* PAN Number */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  PAN Number
                </label>
                <input
                  type="text"
                  name="proprietorPanNo"
                  value={formData.proprietor.proprietorPanNo}
                  onChange={(e) => handleInputChange(e, "proprietor")}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2"
                  placeholder="Enter PAN number"
                />
              </div>

              {/* Aadhaar Number */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Aadhaar Number
                </label>
                <input
                  type="number"
                  name="proprietorAadhaarNo"
                  value={formData.proprietor.proprietorAadhaarNo}
                  onChange={(e) => handleInputChange(e, "proprietor")}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2"
                  placeholder="Enter Aadhaar number"
                />
              </div>
            </div>

            {/* File Uploads */}
            <div className="grid grid-cols-3 gap-4 mt-4">
              {/* PAN Image */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  PAN Image
                </label>
                <input
                  type="file"
                  name="proprietorPanImg"
                  accept="image/*"
                  onChange={(e) => handleInputChange(e, "proprietor")}
                  className="w-full border border-gray-300 rounded-lg px-1 py-1 file:mr-3 file:py-2 file:px-3 file:rounded-lg file:border-0 file:bg-blue-600 file:text-white hover:file:bg-blue-700 transition file:text-[12px] cursor-pointer file:cursor-pointer"
                />
                {formData.proprietor.proprietorPanImg && (
                  <img
                    src={URL.createObjectURL(
                      formData.proprietor.proprietorPanImg
                    )}
                    alt="PAN Preview"
                    className="mt-2 h-24 rounded border"
                  />
                )}
              </div>

              {/* Aadhaar Image */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Aadhaar Image
                </label>
                <input
                  type="file"
                  name="proprietorAadhaarImg"
                  accept="image/*"
                  onChange={(e) => handleInputChange(e, "proprietor")}
                  className="w-full border border-gray-300 rounded-lg px-1 py-1 file:mr-3 file:py-2 file:px-3 file:rounded-lg file:border-0 file:bg-blue-600 file:text-white hover:file:bg-blue-700 transition file:text-[12px] cursor-pointer file:cursor-pointer"
                />
                {formData.proprietor.proprietorAadhaarImg && (
                  <img
                    src={URL.createObjectURL(
                      formData.proprietor.proprietorAadhaarImg
                    )}
                    alt="Aadhaar Preview"
                    className="mt-2 h-24 rounded border"
                  />
                )}
              </div>

              {/* E-Signature */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  E-Signature
                </label>

                <div className="flex items-center gap-3">
                  <input
                    type="file"
                    name="proprietorESignature"
                    accept="image/*"
                    onChange={(e) => handleInputChange(e, "proprietor")}
                    className="w-full border border-gray-300 rounded-lg px-1 py-1 file:mr-3 file:py-2 file:px-3 file:rounded-lg file:border-0 file:bg-blue-600 file:text-white hover:file:bg-blue-700 transition file:text-[12px] cursor-pointer file:cursor-pointer"
                  />
                  <Info className="cursor-pointer" />
                </div>

                {formData.proprietor.proprietorESignature && (
                  <img
                    src={URL.createObjectURL(
                      formData.proprietor.proprietorESignature
                    )}
                    alt="E-Signature Preview"
                    className="mt-2 h-24 rounded border"
                  />
                )}
              </div>
            </div>
          </div>
        )}

        {/* Partners Form */}
        {["Partnership", "Limited", "Company", "Association"].includes(
          formData.applicantOwnershipType
        ) && (
          <div className=" p-4 rounded space-y-3">
            <h3 className="font-semibold">Partners / Directors / Members</h3>
            {formData.partners.map((partner, idx) => (
              <div key={idx} className=" p-2 rounded space-y-2">
                <h4 className="text-blue-700 font-semibold">
                  Partner {idx + 1}
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.keys(partner).map((key) => (
                    <div key={key}>
                      <label className="block font-medium mb-1">{key}</label>
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
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 file:mr-3 file:py-2 file:px-3 file:rounded-lg file:border-0 file:bg-blue-600 file:text-white hover:file:bg-blue-700 transition file:text-[12px] cursor-pointer file:cursor-pointer"
                      />
                    </div>
                  ))}
                </div>
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
