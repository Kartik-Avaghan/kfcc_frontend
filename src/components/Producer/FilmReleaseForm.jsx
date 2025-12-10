import React, { useState, useEffect } from 'react';

const FilmReleaseForm = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    filmName: '',
    sandalwood: '',
    producerDetails: 'ABC Productions Pvt Ltd',
    director1: '',
    director2: '',
    releaseCalendar: '',
    releaseDate: '',
    numberOfTheaters: '',
    censorCertificatePdf: null,
    posterFile: null,
    newspaperPdf1: null,
    newspaperPdf2: null
  });

  const [fileNames, setFileNames] = useState({
    censorCertificate: '',
    poster: '',
    newspaper1: '',
    newspaper2: ''
  });

  // Simulate auto-fetching producer details
  useEffect(() => {
    // In real app, this would be an API call
    setTimeout(() => {
      setFormData(prev => ({
        ...prev,
        producerDetails: 'ABC Productions Pvt Ltd - Auto Fetched'
      }));
    }, 500);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e, fieldName, displayName) => {
    const file = e.target.files[0];
    if (file) {
      const isValidType = fieldName === 'posterFile' 
        ? file.type.startsWith('image/') 
        : file.type === 'application/pdf';
      
      if (isValidType) {
        setFormData(prev => ({
          ...prev,
          [fieldName]: file
        }));
        setFileNames(prev => ({
          ...prev,
          [displayName]: file.name
        }));
      } else {
        alert(fieldName === 'posterFile' ? 'Please upload an image file' : 'Please upload a PDF file');
        e.target.value = '';
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
  };

  const handleConfirmVerification = () => {
    console.log('Form submitted:', formData);
    setShowPopup(false);
    alert('Form sent for verification successfully!');
    // Reset form or redirect
  };

  return (
    <div className="min-h-screen  sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            H-Category Application Form
          </h1>
          <p className="text-gray-600">
            Karnataka Film Chamber of Commerce
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-4">
            <h2 className="text-xl font-semibold text-white">H-Category Application</h2>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            
            {/* Film Name */}
     

            {/* Producer Details - Auto Fetched (Read-only) */}
            <div>
              <label htmlFor="producerDetails" className="block text-sm font-medium text-gray-700 mb-2">
                Producer Details <span className="text-xs text-green-600">(Auto-fetched)</span>
              </label>
              <input
                type="text"
                id="producerDetails"
                name="producerDetails"
                readOnly
                value={formData.producerDetails}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-600 cursor-not-allowed"
              />
            </div>

          

            {/* Release Calendar & Release Date */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          

              <div>
                <label htmlFor="releaseDate" className="block text-sm font-medium text-gray-700 mb-2">
                  Release Date <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  id="releaseDate"
                  name="releaseDate"
                  required
                  value={formData.releaseDate}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                />
              </div>
            </div>

            {/* Number of Theaters */}
            <div>
              <label htmlFor="numberOfTheaters" className="block text-sm font-medium text-gray-700 mb-2">
                Number of Theaters <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                id="numberOfTheaters"
                name="numberOfTheaters"
                required
                min="1"
                value={formData.numberOfTheaters}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                placeholder="Enter number of theaters"
              />
            </div>

            {/* File Uploads Section */}
            <div className="space-y-4 pt-4 border-t border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">Upload Documents</h3>

              {/* Censor Certificate PDF */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Censor Certificate (PDF) <span className="text-red-500">*</span>
                </label>
                <label className="flex-1 cursor-pointer block">
                  <div className="flex items-center justify-center px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg hover:border-indigo-500 transition-colors">
                    <svg className="h-6 w-6 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    <span className="text-sm text-gray-600">
                      {fileNames.censorCertificate || 'Upload Censor Certificate PDF'}
                    </span>
                  </div>
                  <input
                    type="file"
                    accept=".pdf"
                    onChange={(e) => handleFileChange(e, 'censorCertificatePdf', 'censorCertificate')}
                    className="hidden"
                    required
                  />
                </label>
                {fileNames.censorCertificate && (
                  <p className="mt-2 text-sm text-green-600 flex items-center">
                    <svg className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {fileNames.censorCertificate}
                  </p>
                )}
              </div>

              {/* Poster Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Poster (Image) <span className="text-red-500">*</span>
                </label>
                <label className="flex-1 cursor-pointer block">
                  <div className="flex items-center justify-center px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg hover:border-indigo-500 transition-colors">
                    <svg className="h-6 w-6 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-sm text-gray-600">
                      {fileNames.poster || 'Upload Poster Image'}
                    </span>
                  </div>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileChange(e, 'posterFile', 'poster')}
                    className="hidden"
                    required
                  />
                </label>
                {fileNames.poster && (
                  <p className="mt-2 text-sm text-green-600 flex items-center">
                    <svg className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {fileNames.poster}
                  </p>
                )}
              </div>

              {/* Release Newspaper PDFs (2 copies) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Release Newspaper PDF 1 <span className="text-red-500">*</span>
                  </label>
                  <label className="flex-1 cursor-pointer block">
                    <div className="flex items-center justify-center px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg hover:border-indigo-500 transition-colors">
                      <svg className="h-5 w-5 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <span className="text-xs text-gray-600">
                        {fileNames.newspaper1 || 'Upload PDF 1'}
                      </span>
                    </div>
                    <input
                      type="file"
                      accept=".pdf"
                      onChange={(e) => handleFileChange(e, 'newspaperPdf1', 'newspaper1')}
                      className="hidden"
                      required
                    />
                  </label>
                  {fileNames.newspaper1 && (
                    <p className="mt-1 text-xs text-green-600 truncate">{fileNames.newspaper1}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Release Newspaper PDF 2 <span className="text-red-500">*</span>
                  </label>
                  <label className="flex-1 cursor-pointer block">
                    <div className="flex items-center justify-center px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg hover:border-indigo-500 transition-colors">
                      <svg className="h-5 w-5 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <span className="text-xs text-gray-600">
                        {fileNames.newspaper2 || 'Upload PDF 2'}
                      </span>
                    </div>
                    <input
                      type="file"
                      accept=".pdf"
                      onChange={(e) => handleFileChange(e, 'newspaperPdf2', 'newspaper2')}
                      className="hidden"
                      required
                    />
                  </label>
                  {fileNames.newspaper2 && (
                    <p className="mt-1 text-xs text-green-600 truncate">{fileNames.newspaper2}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end space-x-4 pt-4 border-t border-gray-200">
              <button
                type="button"
                onClick={() => window.location.reload()}
                className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg hover:from-indigo-700 hover:to-purple-700 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
              >
                Send for Verification
              </button>
            </div>

          </form>
        </div>

        {/* Info Footer */}
        <div className="mt-6 text-center text-sm text-gray-500">
          <p>All fields marked with <span className="text-red-500">*</span> are required</p>
        </div>

      </div>

      {/* Verification Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 transform transition-all">
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-indigo-100 mb-4">
                <svg className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Send for Verification?
              </h3>
              <p className="text-gray-600 mb-6">
                Are you sure you want to submit this form for verification? Please ensure all details are correct.
              </p>
              <div className="flex space-x-4">
                <button
                  onClick={() => setShowPopup(false)}
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleConfirmVerification}
                  className="flex-1 px-4 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-colors"
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilmReleaseForm;
