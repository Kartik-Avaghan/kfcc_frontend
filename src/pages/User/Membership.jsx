import { Plus } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import MembershipCard from "../../components/User/MembershipCard";

function Membership() {
  const [activefilter, setActiveFilter] = useState("All");

  let data = {
    date: "2025-06-11",
    applicantFirstName: "Rishab",
    applicantMiddleName: "R",
    applicantLastName: "Gupta",
    applicantAddressLine1: "Laggere",
    applicantAddressLine2: "Laggere Bridge",
    applicantDistrict: "Bengaluru",
    applicantState: "Karnataka",
    applicantPinCode: 560058,
    applicantImage: "VGhpcyBpcyBhIGR1bW15IGltYWdlIGJsb2I=",
    applicantPhNo: "9876543210",
    applicantEmail: "rishab@example.com",
    applicantMembershipCategory: "Producer",
    applicantFirmName: "thincnext",
    applicantOwnershipType: "Partnership",
    applicantGstNo: "29ABCDE1234F1Z5",

    proprietor: {
      proprietorName: "Rishab Gupta",
      proprietorAddress: "123 Main Street, Bengaluru",
      proprietorDob: "1990-05-15",
      proprietorBloodGroup: "O+",
      proprietorPanNo: "ABCDE1234F",
      proprietorPanImg: "UGFuIElNQUdFIGRhdGEgZHVtbXk=",
      proprietorAadhaarNo: "123412341234",
      proprietorAadhaarImg: "QWFkaGFhciBJTUFHRSBkYXRhIGR1bW15",
    },

    partners: [
      {
        partnerName: "Ankit Verma",
        partnerAddress: "456 Park Avenue, Mumbai",
        partnerDob: "1988-11-22",
        partnerBloodGroup: "B+",
        partnerPanNo: "WXYZ7890K",
        partnerPanImg: "UGFydG5lciBQQU4gaW1hZ2UgZHVtbXk=",
        partnerAadhaarNo: "987698769876",
        partnerAadhaarImg: "UGFydG5lciBBYWRoYWFyIGltYWdlIGR1bW15",
      },
    ],

    nominee: [
      {
        nomineeFirstName: "Priya",
        nomineeMiddleName: "P",
        nomineeLastName: "Sharma",
        nomineePhNo: "1231231235",
        nomineeEmail: "priya@example.com",
        nomineeRelationship: "Mother",
      },
      {
        nomineeFirstName: "Kiran",
        nomineeMiddleName: "S",
        nomineeLastName: "Patel",
        nomineePhNo: "9876543212",
        nomineeEmail: "kiran@example.com",
        nomineeRelationship: "son",
      },
    ],
  };

  return (
    <div className="flex-1">
      <div className="p-4 flex items-start justify-between ">
        <Link to={"apply"}>
          <button className="cursor-pointer flex items-center gap-2 bg-blue-700 font-semibold px-3 py-2 text-white rounded-lg">
            <Plus /> Apply For Membership
          </button>{" "}
        </Link>

        <div className="flex gap-8 text-base font-medium text-gray-700">
          {["All", "In Progress", "Approved", "Remarked", "Rejected"].map(
            (label, i) => (
              <button
                key={i}
                onClick={() => setActiveFilter(label)}
                className={`px-3 py-2 border-b-2 transition cursor-pointer ${
                  label === activefilter
                    ? "border-blue-600 text-blue-700 font-semibold"
                    : "border-transparent hover:text-blue-700 hover:border-blue-300"
                }`}
              >
                {label}
              </button>
            )
          )}
        </div>
      </div>

      <div className="p-6">
        <MembershipCard data={data} />
      </div>

    </div>
  );
}

export default Membership;
