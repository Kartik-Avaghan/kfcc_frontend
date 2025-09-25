import React, { useEffect, useState } from "react";
import RegisterViewDetails from "./RegisterViewDetails";
import EditTitleRegistration from "./EditTitleRegistration";
import { CheckCircle, Clock, AlertCircle, XCircle } from 'lucide-react';

function DashBoard() {
  const [registerDetails, setRegisterDetails] = useState([]);
  const [selectedDetail, setSelectedDetail] = useState(null);
  const [EditTitle, setEditTitle] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:8080/titleRegistration/member/102345`, {
      method: "GET",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // data is an array of approvals
        // if you want just the application objects:
        console.log(data);
        setRegisterDetails(data);
      })
      .catch((error) => console.log("Fetching Error", error));
  }, []);


  // Progress configuration based on status
  const getProgressConfig = (status) => {
    const configs = {
      PENDING: {
        steps: ['Submitted', 'Review', 'Approval', 'Complete'],
        currentStep: 0,
        color: 'bg-blue-500',
        bgColor: 'bg-blue-50',
        borderColor: 'border-blue-200',
        textColor: 'text-blue-700',
        icon: Clock,
        message: 'Application submitted and waiting for review'
      },
      IN_PROGRESS: {
        steps: ['Submitted', 'Review', 'Approval', 'Complete'],
        currentStep: 1,
        color: 'bg-orange-500',
        bgColor: 'bg-orange-50',
        borderColor: 'border-orange-200',
        textColor: 'text-orange-700',
        icon: Clock,
        message: 'Application is currently under review'
      },
      APPROVED: {
        steps: ['Submitted', 'Review', 'Approved', 'Complete'],
        currentStep: 3,
        color: 'bg-green-500',
        bgColor: 'bg-green-50',
        borderColor: 'border-green-200',
        textColor: 'text-green-700',
        icon: CheckCircle,
        message: 'Application has been approved successfully'
      },
      REMARKED: {
        steps: ['Submitted', 'Review', 'Remark', 'Resubmit'],
        currentStep: 2,
        color: 'bg-yellow-500',
        bgColor: 'bg-yellow-50',
        borderColor: 'border-yellow-200',
        textColor: 'text-yellow-700',
        icon: AlertCircle,
        message: 'Application needs attention - please review remarks'
      },
      REJECTED: {
        steps: ['Submitted', 'Review', 'Rejected'],
        currentStep: 2,
        color: 'bg-red-500',
        bgColor: 'bg-red-50',
        borderColor: 'border-red-200',
        textColor: 'text-red-700',
        icon: XCircle,
        message: 'Application has been rejected'
      }
    };
    return configs[status] || configs.PENDING;
  };

  const ProgressIndicator = ({ status }) => {
    const config = getProgressConfig(status);
    const IconComponent = config.icon;

    return (
      <div className="space-y-3">
        {/* Status Badge */}
        <div className="flex items-center gap-2">
          <IconComponent className={`w-5 h-5 ${config.textColor}`} />
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${config.bgColor} ${config.textColor} ${config.borderColor} border`}>
            {status.replace('_', ' ')}
          </span>
        </div>

        {/* Progress Steps */}
        <div className="relative">
          <div className="flex items-center justify-between">
            {config.steps.map((step, index) => (
              <div key={step} className="flex flex-col items-center relative z-10">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium transition-all duration-300 ${
                    index <= config.currentStep
                      ? `${config.color} text-white shadow-md`
                      : 'bg-gray-200 text-gray-500'
                  }`}
                >
                  {index < config.currentStep ? (
                    <CheckCircle className="w-4 h-4" />
                  ) : (
                    index + 1
                  )}
                </div>
                <span className={`text-xs mt-2 font-medium ${
                  index <= config.currentStep ? config.textColor : 'text-gray-400'
                }`}>
                  {step}
                </span>
              </div>
            ))}
          </div>
          
          {/* Progress Line */}
          <div className="absolute top-4 left-0 right-0 h-0.5 bg-gray-200 -z-0">
            <div
              className={`h-full ${config.color} transition-all duration-500`}
              style={{ width: `${(config.currentStep / (config.steps.length - 1)) * 100}%` }}
            />
          </div>
        </div>

        {/* Status Message */}
        <p className={`text-sm ${config.textColor} bg-white px-3 py-2 rounded-lg border ${config.borderColor}`}> 
          {config.message}
        </p>
      </div>
    );
  };

  return (
    <div className="flex justify-center items-center p-10">
      <div className="flex flex-col justify-center items-center w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Title Application Dashboard</h1>
      
         <div className="grid grid-cols-1 gap-6 w-full">
          {registerDetails.map((detail) => {
            const config = getProgressConfig(detail.status);
            
            return (
              <div
                key={detail.id}
                className={`relative overflow-hidden rounded-2xl shadow-lg bg-white border-l-4 ${config.color.replace('bg-', 'border-')} hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
              >
                {/* Card Header */}
                <div className={`${config.bgColor} px-6 py-4 border-b border-gray-100`}>
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-gray-800">{detail.title}</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-600">
                        <p>Application ID: <span className="font-mono font-medium">{detail.id}</span></p>
                        <p>Submitted Date: <span className="font-mono font-medium">{new Date(detail.date).toLocaleDateString()}</span></p>
                        <p>Director: <span className="font-medium">{detail.director}</span></p>
                

                        {detail.acceptedDate && (
                          <p>Accepted Date: <span className="font-medium">{new Date(detail.acceptedDate).toLocaleDateString()}</span></p>
                        )}
                    
                      </div>
                    </div>
                    
                    {/* Action Button */}
                    <div className="flex-shrink-0">
                      {detail.status !== "REMARKED" ? (
                        <button
                          onClick={() => setSelectedDetail(detail)}
                          className={`px-6 py-2.5 rounded-xl font-medium transition-colors duration-200 shadow-md hover:shadow-lg hover:cursor-pointer ${
                            detail.status === "APPROVED" 
                              ? "bg-green-600 text-white hover:bg-green-700"
                              : detail.status === "REJECTED"
                              ? "bg-red-600 text-white hover:bg-red-700" 
                              : "bg-blue-950 text-white hover:bg-blue-800"
                          }`}
                        >
                          View Details
                        </button>
                      ) : (
                        <button
                          onClick={() => {
                            setSelectedDetail(detail);
                            setEditTitle(true);
                          }}
                          className="bg-yellow-600 text-white px-6 py-2.5 rounded-xl font-medium hover:bg-yellow-700 transition-colors duration-200 shadow-md hover:shadow-lg hover:cursor-pointer"
                        >
                          Edit Application
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
            
                  <ProgressIndicator status={detail.status} />
                  
                  {/* Remark Note */}
                  {detail.status === "REMARKED" && detail.remarkNote && (
                    <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <div className="flex items-start gap-2">
                        <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-yellow-800 mb-1">
                            Remarked by {detail.remarked_by}
                          </h4>
                          <p className="text-yellow-700 text-sm leading-relaxed">{detail.remarkNote}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        
      </div>

      {/* ✅ Modal should be OUTSIDE map */}
      <RegisterViewDetails
        detail={selectedDetail}
        onClose={() => setSelectedDetail(null)}
      />

      <EditTitleRegistration
        show={EditTitle} // control modal open/close
        detail={selectedDetail} // pass data to prefill form
        onClose={() => setEditTitle(false)}
      />
    </div>
  );
}

export default DashBoard;
