import React, { useState } from "react";
import Remark from "./Remark";
import Reject from "./Reject";
import { X, Calendar, MapPin, User, Film, Building, Award, Music, Users, Tag, CheckCircle, XCircle, Clock, AlertCircle , MessageSquare} from 'lucide-react';


function RegisterViewDetails({ detail, onClose }) {

  const [showRemarkPopup, setShowRemarkPopup] = useState(false);
  const [showRejectPopup, setShowRejectPopup] = useState(false);

  function approval(applicationId,approve){

    fetch(`http://localhost:8080/titleApplication/${applicationId}/approve`, {
      method: "POST",
      headers: {
        "Authorization": localStorage.getItem("token"),
        "Content-Type" : "Application/json"
      },
      body:JSON.stringify({
        "role":"STAFF",
        "approved_by":"kartik",
        "approve":approve,
        "comments":"good"
      })

    })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Response was not ok");
      }
      if(response.ok){
         onClose();
      }
      return response.json();
    })
    .then((data) => {
     
    })
    
    .catch((error) => console.log("Fetching Error", error));
  }



  
  if (!detail) return null;

  const getStatusConfig = (status) => {
    const configs = {
      PENDING: {
        icon: Clock,
        color: 'text-blue-600',
        bgColor: 'bg-blue-100',
        borderColor: 'border-blue-200',
        label: 'Pending Review'
      },
      IN_PROGRESS: {
        icon: Clock,
        color: 'text-orange-600',
        bgColor: 'bg-orange-100',
        borderColor: 'border-orange-200',
        label: 'Under Review'
      },
      APPROVED: {
        icon: CheckCircle,
        color: 'text-green-600',
        bgColor: 'bg-green-100',
        borderColor: 'border-green-200',
        label: 'Approved'
      },
      REJECTED: {
        icon: XCircle,
        color: 'text-red-600',
        bgColor: 'bg-red-100',
        borderColor: 'border-red-200',
        label: 'Rejected'
      },
      REMARKED: {
        icon: AlertCircle,
        color: 'text-yellow-600',
        bgColor: 'bg-yellow-100',
        borderColor: 'border-yellow-200',
        label: 'Needs Attention'
      }
    };
    return configs[status] || configs.PENDING;
  };

  const statusConfig = getStatusConfig(detail.status);
  const StatusIcon = statusConfig.icon;

  const formatDate = (dateString) => {
    if (!dateString) return 'Not specified';
    return new Date(dateString).toLocaleDateString("en-IN", {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };


  const InfoSection = ({ title, icon: Icon, children, className = "" }) => (
    <div className={`bg-gray-50 rounded-xl p-4 ${className}`}>
      <div className="flex items-center gap-2 mb-3">
        <Icon className="w-5 h-5 text-blue-600" />
        <h3 className="font-semibold text-gray-800">{title}</h3>
      </div>
      <div className="space-y-2">{children}</div>
    </div>
  );

  const InfoItem = ({ label, value, className = "" }) => (
    <div className={`flex flex-col sm:flex-row sm:justify-between gap-1 ${className}`}>
      <span className="text-sm text-gray-600 font-medium">{label}:</span>
      <span className="text-sm text-gray-800 break-words">{value || 'Not specified'}</span>
    </div>
  );

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4 "
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-950 to-blue-800 text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="pr-10">
            <h2 className="text-2xl font-bold mb-2">{detail.title}</h2>
            <p className="text-blue-100 mb-3">Application ID: {detail.id}</p>
            
            {/* Status Badge */}
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${statusConfig.bgColor} ${statusConfig.borderColor} border`}>
              <StatusIcon className={`w-4 h-4 ${statusConfig.color}`} />
              <span className={`text-sm font-medium ${statusConfig.color}`}>
                {statusConfig.label}
              </span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-140px)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* Personal Information */}
            <InfoSection title="Personal Information" icon={User}>
              <InfoItem label="Applicant Name" value={detail.name} />
              <InfoItem label="Member ID" value={detail.memberId} />
              <InfoItem label="Address" value={detail.address} />
              <InfoItem label="GST Number" value={detail.gstNo} />
            </InfoSection>

            {/* Film Details */}
            <InfoSection title="Film Information" icon={Film}>
              <InfoItem label="Film Title" value={detail.title} />
              <InfoItem label="Language" value={detail.language} />
              <InfoItem label="Category" value={detail.category} />
              <InfoItem label="First Film" value={detail.firstFilm ? "Yes" : "No"} />
            </InfoSection>

            {/* Production Team */}
            <InfoSection title="Production Team" icon={Users}>
              <InfoItem label="Director" value={detail.director} />
              <InfoItem label="Producer" value={detail.producer} />
              <InfoItem label="Music Director" value={detail.musicDirector} />
              <InfoItem label="Lead Actor" value={detail.actor} />
            </InfoSection>

            {/* Institution Details */}
            <InfoSection title="Institution & Registration" icon={Building}>
              <InfoItem label="Institution" value={detail.institution} />
              <InfoItem label="Films by Institutes" value={detail.filmsByInstitutes} />
              <InfoItem 
                label="Previously Registered" 
                value={detail.previouslyRegistered ? "Yes" : "No"} 
              />
              <InfoItem 
                label="Previous Registration Details" 
                value={detail.previouslyRegisteredDetails} 
              />
            </InfoSection>

            {/* Important Dates */}
            <InfoSection title="Important Dates" icon={Calendar} className="lg:col-span-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <InfoItem 
                  label="Submission Date" 
                  value={formatDate(detail.date)} 
                />
                <InfoItem 
                  label="Accepted Date" 
                  value={formatDate(detail.acceptedDate)} 
                />
              </div>
            </InfoSection>

            {/* Remarks Section */}
            {detail.status === "REMARKED" && detail.remarkNote && (
              <div className="lg:col-span-2 bg-yellow-50 border border-yellow-200 rounded-xl p-4">
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <h3 className="font-semibold text-yellow-800 mb-1">
                      Remark from {detail.remarked_by}
                    </h3>
                    <p className="text-yellow-700 text-sm leading-relaxed">
                      {detail.remarkNote}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Action Buttons (if needed) */}


          
          
          {(detail.status === "PENDING" || detail.status === "IN_PROGRESS") && (
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-blue-600" />
                Application Actions
              </h3>
              <div className="flex flex-col sm:flex-row gap-3">
                <button 
                  onClick={() => approval(detail.id, true)}
                  className="flex-1 bg-green-600 text-white py-3 px-6 rounded-xl font-medium hover:bg-green-700 active:bg-green-800 transition-all duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 cursor-pointer"
                >
                  <CheckCircle className="w-5 h-5" />
                  Accept Application
                </button>

                <button 
                  onClick={() => setShowRemarkPopup(true)}
                  className="flex-1 bg-yellow-600 text-white py-3 px-6 rounded-xl font-medium hover:bg-yellow-700 active:bg-yellow-800 transition-all duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 cursor-pointer"
                >
                  <MessageSquare className="w-5 h-5" />
                  Add Remark
                </button>

                <button 
                  onClick={() => setShowRejectPopup(true)}
                  className="flex-1 bg-red-600 text-white py-3 px-6 rounded-xl font-medium hover:bg-red-700 active:bg-red-800 transition-all duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 cursor-pointer"
                >
                  <XCircle className="w-5 h-5" />
                  Reject Application
                </button>
                
              </div>
            </div>
          )}
         
        </div>
      </div>

      {
        showRemarkPopup && (
          <Remark applicationId={detail.id}
          onClose={()=>setShowRemarkPopup()}
          closeApplication={() => onClose()}/>
        )

      }

      

       {
        showRejectPopup && (
          <Reject applicationId={detail.id}
          onClose={()=>setShowRejectPopup()}
          closeApplication={() => onClose()}/>
        )

      }

    </div>

  );
}

export default RegisterViewDetails;
