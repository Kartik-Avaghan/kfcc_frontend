import React from "react";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const steps = [
  "Submitted",
  "Staff Review",
  "Committee Review",
  "Members Review",
  "Secretary Review",
  "Complete",
];

function MembershipCard({ data }) {
  const [expanded, setExpanded] = useState(false);
  const currentStep = 3; // dynamically set this based on backend status later

  return (
    <div className="bg-white border border-gray-200 shadow-md rounded-xl p-6 hover:shadow-lg transition-all duration-300">
      {/* Header with Basic Info */}
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">
            {data.applicantFirstName} {data.applicantLastName}
          </h2>
          <p className="text-sm text-gray-600">
            Application Type:{" "}
            <span className="font-medium text-blue-700">
              {data.applicantMembershipCategory}
            </span>
          </p>
          <p className="text-sm text-gray-600">
            Ownership Type: {data.applicantOwnershipType}
          </p>
          <p className="text-sm text-gray-500">Applied On: {data.date}</p>
        </div>
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all"
        >
          {expanded ? "Hide Details" : "View Details"}
          {expanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </button>
      </div>

      {/* Progress Steps */}
      <div className="mt-6">
        <div className="flex items-center justify-between text-sm text-gray-600">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`flex-1 text-center ${
                i <= currentStep ? "text-blue-600 font-medium" : "text-gray-400"
              }`}
            >
              <div
                className={`h-2 rounded-full mb-2 ${
                  i <= currentStep ? "bg-blue-600" : "bg-gray-200"
                }`}
              ></div>
              {step}
            </div>
          ))}
        </div>
      </div>

      {/* Expandable Details */}
      {expanded && (
        <div className="mt-6 space-y-4 border-t pt-4 animate-fadeIn">
          {/* Applicant Info */}
          <section>
            <h3 className="font-semibold text-lg text-gray-800 mb-2">
              Applicant Details
            </h3>
            <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
              <p>
                <span className="font-medium">Address:</span>{" "}
                {data.applicantAddressLine1}, {data.applicantAddressLine2},{" "}
                {data.applicantDistrict}, {data.applicantState} -{" "}
                {data.applicantPinCode}
              </p>
              <p>
                <span className="font-medium">Phone:</span> {data.applicantPhNo}
              </p>
              <p>
                <span className="font-medium">Email:</span>{" "}
                {data.applicantEmail}
              </p>
              <p>
                <span className="font-medium">Firm:</span>{" "}
                {data.applicantFirmName}
              </p>
              <p>
                <span className="font-medium">GST:</span> {data.applicantGstNo}
              </p>
            </div>
          </section>

          {/* Proprietor or Partners */}
          {data.applicantOwnershipType === "Proprietorship" ? (
            <section>
              <h3 className="font-semibold text-lg text-gray-800 mb-2">
                Proprietor Details
              </h3>
              <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
                {Object.entries(data.proprietor).map(([key, value]) => (
                  <p key={key}>
                    <span className="font-medium">
                      {key.replace(/([A-Z])/g, " $1")}:
                    </span>{" "}
                    {String(value).includes("UGFu") ? (
                      <span className="text-gray-400 italic">[Image File]</span>
                    ) : (
                      value
                    )}
                  </p>
                ))}
              </div>
            </section>
          ) : (
            <section>
              <h3 className="font-semibold text-lg text-gray-800 mb-2">
                Partners
              </h3>
              {data.partners.map((partner, i) => (
                <div
                  key={i}
                  className="border border-gray-200 rounded-lg p-3 mb-2 bg-gray-50"
                >
                  <p className="font-medium text-blue-700 mb-1">
                    {partner.partnerName}
                  </p>
                  <div className="grid grid-cols-2 gap-3 text-sm text-gray-700">
                    <p>
                      <span className="font-medium">Address:</span>{" "}
                      {partner.partnerAddress}
                    </p>
                    <p>
                      <span className="font-medium">DOB:</span>{" "}
                      {partner.partnerDob}
                    </p>
                    <p>
                      <span className="font-medium">Blood Group:</span>{" "}
                      {partner.partnerBloodGroup}
                    </p>
                    <p>
                      <span className="font-medium">PAN:</span>{" "}
                      {partner.partnerPanNo}
                    </p>
                  </div>
                </div>
              ))}
            </section>
          )}

          {/* Nominees */}
          <section>
            <h3 className="font-semibold text-lg text-gray-800 mb-2">
              Nominees
            </h3>
            {data.nominee.map((n, i) => (
              <div
                key={i}
                className="border border-gray-200 rounded-lg p-3 mb-2 bg-gray-50"
              >
                <p className="font-medium text-blue-700 mb-1">
                  {n.nomineeFirstName} {n.nomineeLastName}
                </p>
                <div className="grid grid-cols-2 gap-3 text-sm text-gray-700">
                  <p>
                    <span className="font-medium">Phone:</span> {n.nomineePhNo}
                  </p>
                  <p>
                    <span className="font-medium">Email:</span> {n.nomineeEmail}
                  </p>
                  <p>
                    <span className="font-medium">Relationship:</span>{" "}
                    {n.nomineeRelationship}
                  </p>
                </div>
              </div>
            ))}
          </section>
        </div>
      )}
    </div>
  );
}

export default MembershipCard;
