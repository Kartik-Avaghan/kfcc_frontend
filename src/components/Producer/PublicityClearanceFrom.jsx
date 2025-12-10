import React, { useState } from 'react';
import { X, Upload, FileText } from 'lucide-react';

const PublicityClearanceForm = () => {
  const [formData, setFormData] = useState({
    // Applicant Details
    applicantName: '',
    applicantAddress: '',
    
    // Film Details
    filmName: '',
    language: '',
    producerDistributor: '',
    
    // Declaration Type
    declarationType: '',
    
    // For Option C - New Film
    optionCChecked: false,
    
    // For Option D - Already Certified Film
    optionDChecked: false,
    certificationNumber: '',
    certificationDate: '',
    
    // Indemnity & Agreement Checkboxes
    indemnifyCommittee: false,
    abideDecision: false,
    agreeUnapproved: false,
    notIntervene: false,
    
    // Authorization
    authorizeRepresentative: false,
    authorizedPersonName: '',
    authorizedPersonPosition: '',
    
    // Publicity Materials Application
    materials: {
      hoardings: '',
      posterDesigns: '',
      photocards: '',
      slides: '',
      blockDesigns: '',
      artPulls: '',
      stickers: '',
      newsPaperDesigns: '',
      others: ''
    },
    
    // Final Details
    place: '',
    date: '',
    forConcernName: '',
    
    // Signature fields
    applicantSignature: '',
    authorizedSignature: ''
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (name.startsWith('materials.')) {
      const materialKey = name.split('.')[1];
      setFormData(prev => ({
        ...prev,
        materials: {
          ...prev.materials,
          [materialKey]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      }));
    }
  };

  const handleSubmit = () => {
    // Validate required fields
    if (!formData.applicantName || !formData.filmName || !formData.language) {
      alert('Please fill all required fields marked with *');
      return;
    }
    
    console.log('Form submitted:', formData);
    alert('Application submitted successfully! Your application is now pending approval.');
    
    // Reset form or redirect
    // setFormData({...initialState});
  };

  const totalMaterials = Object.values(formData.materials)
    .filter(val => val !== '')
    .reduce((sum, val) => sum + parseInt(val || 0), 0);

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg">
        {/* Header */}
        <div className="bg-blue-600 text-white px-8 py-6 rounded-t-lg">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-2">FILM PUBLICITY CLEARANCE COMMITTEE</h1>
            <h2 className="text-xl font-semibold mb-2">Karnataka Film Chamber of Commerce</h2>
            <p className="text-sm">28, 1st Main, Crescent Road, High Grounds, Bangalore - 560 001</p>
          </div>
        </div>

        <div className="p-8 space-y-8">
          {/* DECLARATION SECTION */}
          <div className="border-2 border-blue-200 rounded-lg p-6 bg-blue-50">
            <h3 className="text-xl font-bold text-blue-900 mb-6 text-center">DECLARATION</h3>
            
            {/* Section A */}
            <div className="mb-6">
              <p className="font-semibold text-gray-800 mb-3">a) Applicant Information:</p>
              <div className="grid grid-cols-1 gap-4 pl-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    I, Shri/Smt. (Proprietor/Managing Partner/Partner/Managing Director/Director) *
                  </label>
                  <input
                    type="text"
                    name="applicantName"
                    value={formData.applicantName}
                    onChange={handleInputChange}
                    placeholder="Enter full name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name and Address *
                  </label>
                  <textarea
                    name="applicantAddress"
                    value={formData.applicantAddress}
                    onChange={handleInputChange}
                    placeholder="Enter complete address"
                    rows="3"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* Film Details */}
            <div className="mb-6 pl-4">
              <p className="text-sm text-gray-700 mb-3">hereby declare that I/We/am/are the producer(s)/distributor(s) of the film:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Film Name *</label>
                  <input
                    type="text"
                    name="filmName"
                    value={formData.filmName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Language *</label>
                  <input
                    type="text"
                    name="language"
                    value={formData.language}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Producer(s)/Distributor(s) Details
                </label>
                <input
                  type="text"
                  name="producerDistributor"
                  value={formData.producerDistributor}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            {/* Section B */}
            <div className="mb-6 border-t pt-4">
              <p className="font-semibold text-gray-800 mb-3">b) Declaration:</p>
              <p className="text-sm text-gray-700 mb-3 pl-4">
                I further declare that I am a member of Karnataka Film Chamber of Commerce, and that I shall abide scrupulously by any decision taken by the Film Publicity Clearance Committee in regard to the publicity material, the designs of which are being submitted herewith, and shall not question the decision of the Committee in any forum.
              </p>
            </div>

            {/* Section C & D - OR Statement */}
            <div className="mb-6 border-t pt-4">
              <p className="font-semibold text-gray-800 mb-4">c) Publicity Material Declaration:</p>
              
              <div className="space-y-4 pl-4">
                <label className="flex items-start space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="optionCChecked"
                    checked={formData.optionCChecked}
                    onChange={(e) => {
                      handleInputChange(e);
                      if (e.target.checked) {
                        setFormData(prev => ({ ...prev, optionDChecked: false }));
                      }
                    }}
                    className="mt-1 w-5 h-5 text-blue-600"
                  />
                  <span className="text-sm text-gray-700">
                    The publicity material, designs of which are submitted herewith, relates to a film yet to be Certified by the Central Board of Film Certification. In the event that any of the publicity material approved by the Film Publicity Clearance Committee is found later to contain any visual or words that have been deleted by the Central Board of Film Certification during certification of the film by Central Board of Film Certification, I undertake to withhold/withdraw all such publicity material from circulation, under advise to the Committee. If I fail to do so, I agree that all such publicity material will be deemed AB INITIO, to be unapproved by the Committee and I will not, in any way, intervene in any action takenby the local or Central authorities.
                  </span>
                </label>

                <div className="text-center font-bold text-lg my-4">OR</div>

                <label className="flex items-start space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="optionDChecked"
                    checked={formData.optionDChecked}
                    onChange={(e) => {
                      handleInputChange(e);
                      if (e.target.checked) {
                        setFormData(prev => ({ ...prev, optionCChecked: false }));
                      }
                    }}
                    className="mt-1 w-5 h-5 text-blue-600"
                  />
                  <span className="text-sm text-gray-700">
                    The publicity material, designs of which are submitted herewith, relates to a film already certified by the Central Board of Film Certification (U/U/A) No. ........................ dated ........................, I affirm that these do not contain any visuals or words that were deleted from the film when the film was certified. In the event that any of the publicity material approved by the committee is found to contain while on display or in circulation, any visuals or words already deleted by the Central Board of Film Certification, during certification. I agree that all such publicity material be deemed to be unapproved by the Committee during certification will not, in any way, intervene in any decision taken by local or Central authorities.
                  </span>
                </label>

                {formData.optionDChecked && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ml-8 mt-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Certification Number (U/U/A) No.
                      </label>
                      <input
                        type="text"
                        name="certificationNumber"
                        value={formData.certificationNumber}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Dated
                      </label>
                      <input
                        type="date"
                        name="certificationDate"
                        value={formData.certificationDate}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Section D - Indemnity */}
            <div className="mb-6 border-t pt-4">
              <p className="font-semibold text-gray-800 mb-3">d) Indemnification:</p>
              <label className="flex items-start space-x-3 cursor-pointer pl-4">
                <input
                  type="checkbox"
                  name="indemnifyCommittee"
                  checked={formData.indemnifyCommittee}
                  onChange={handleInputChange}
                  className="mt-1 w-5 h-5 text-blue-600"
                />
                <span className="text-sm text-gray-700">
                  I hereby indemnify the Committee, and members thereof, against any legal action that may be taken by any party, arising solely from the approval of the publicity material, in the event of such material violating the rights of anyone else.
                </span>
              </label>
            </div>

            {/* Section E - Authorization */}
            <div className="mb-6 border-t pt-4">
              <p className="font-semibold text-gray-800 mb-3">e) Authorization (Cross out if not applicable):</p>
              <label className="flex items-start space-x-3 cursor-pointer pl-4 mb-4">
                <input
                  type="checkbox"
                  name="authorizeRepresentative"
                  checked={formData.authorizeRepresentative}
                  onChange={handleInputChange}
                  className="mt-1 w-5 h-5 text-blue-600"
                />
                <span className="text-sm text-gray-700">
                  I hereby authorise Sri. ........................ Working as ........................ in our concern, to sign the application and present the same before the committee with the draft designs for scrutiny and clearance. To act on my behalf during meetings of the committee, to counter sign the approved designs and to receive the Clearance Certificate on my behalf. His specimen signature is given below.
                </span>
              </label>

              {formData.authorizeRepresentative && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ml-8">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Authorized Person Name
                    </label>
                    <input
                      type="text"
                      name="authorizedPersonName"
                      value={formData.authorizedPersonName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Working As (Position)
                    </label>
                    <input
                      type="text"
                      name="authorizedPersonPosition"
                      value={formData.authorizedPersonPosition}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Section F */}
            <div className="border-t pt-4">
              <p className="font-semibold text-gray-800 mb-3">f) Supporting Documents:</p>
              <p className="text-sm text-gray-700 pl-4">
                I furnish herewith one set of copies of all designs, photocards, stills etc. in not less than "cabinet" size for your reference and record.
              </p>
            </div>
          </div>

          {/* APPLICATION SECTION */}
          <div className="border-2 border-gray-300 rounded-lg p-6 bg-gray-50">
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">APPLICATION</h3>
            
            <div className="mb-6">
              <p className="text-sm text-gray-700 mb-2">
                <strong>Sub:</strong> Scrutiny of Film Publicity materials & Issue of clearance certificate
              </p>
              <p className="text-sm text-gray-700 mb-4">
                <strong>Ref.:</strong> Chamber Circular No. KFCC/FPSC/3609/90-91 dated 20th Aug. 90
              </p>
              
              <p className="text-sm text-gray-700 mb-4">
                We submit herewith final draft designs of the following publicity materials in respect of our film ........................ in ........................ (language) for approval and issue of Clearance Certificate by the Film Publicity Clearance Committee of the Chamber.
              </p>
              
              <p className="text-sm text-gray-700 mb-4">
                We have paid the necessary service charges as prescribed.
              </p>
            </div>

            {/* Publicity Materials Table */}
            <div className="mb-6">
              <p className="font-semibold text-gray-800 mb-4">Publicity Materials Submitted:</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    i) Hoardings - No. of units
                  </label>
                  <input
                    type="number"
                    name="materials.hoardings"
                    value={formData.materials.hoardings}
                    onChange={handleInputChange}
                    min="0"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    ii) Poster designs - No. of units
                  </label>
                  <input
                    type="number"
                    name="materials.posterDesigns"
                    value={formData.materials.posterDesigns}
                    onChange={handleInputChange}
                    min="0"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    iii) Photocards - No. of units
                  </label>
                  <input
                    type="number"
                    name="materials.photocards"
                    value={formData.materials.photocards}
                    onChange={handleInputChange}
                    min="0"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    iv) Slides - No. of units
                  </label>
                  <input
                    type="number"
                    name="materials.slides"
                    value={formData.materials.slides}
                    onChange={handleInputChange}
                    min="0"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    v) Block designs - No. of units
                  </label>
                  <input
                    type="number"
                    name="materials.blockDesigns"
                    value={formData.materials.blockDesigns}
                    onChange={handleInputChange}
                    min="0"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    vi) Art pulls - No. of units
                  </label>
                  <input
                    type="number"
                    name="materials.artPulls"
                    value={formData.materials.artPulls}
                    onChange={handleInputChange}
                    min="0"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    vii) Stickers - No. of units
                  </label>
                  <input
                    type="number"
                    name="materials.stickers"
                    value={formData.materials.stickers}
                    onChange={handleInputChange}
                    min="0"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    viii) News paper publicity designs - No. of units
                  </label>
                  <input
                    type="number"
                    name="materials.newsPaperDesigns"
                    value={formData.materials.newsPaperDesigns}
                    onChange={handleInputChange}
                    min="0"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    ix) Others - No. of units
                  </label>
                  <input
                    type="number"
                    name="materials.others"
                    value={formData.materials.others}
                    onChange={handleInputChange}
                    min="0"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="mt-4 p-4 bg-white rounded border border-gray-300">
                <p className="font-semibold text-gray-800">
                  Total Units: <span className="text-blue-600">{totalMaterials}</span>
                </p>
              </div>
            </div>

            {/* Additional Information */}
            <div className="mb-6 p-4 bg-blue-50 rounded border border-blue-200">
              <p className="text-sm text-gray-700 mb-2">
                The publicity material relates to a film already certified by the Central Board of Film Certificate-tion (No. U/UA ........................ dated ........................)
              </p>
              <p className="text-center font-bold my-3">OR</p>
              <p className="text-sm text-gray-700 mb-2">
                The publicity material relates to a film yet to be certified by the Central Board of Film Certification.
              </p>
              <p className="text-sm text-gray-700">
                We request you to kindly clear the above designs.
              </p>
              <p className="text-sm text-gray-700 mt-2">
                We furnish herewith one set of copies of all designs photocards, stills, etc, in not less than "cabinet" size, for your reference and records.
              </p>
            </div>

            <p className="text-sm text-gray-700 mb-6">Thanking you,</p>
            <p className="text-sm text-gray-700 mb-6">Yours faithfully,</p>
          </div>

          {/* SIGNATURE SECTION */}
          <div className="border-2 border-gray-300 rounded-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Place *
                </label>
                <input
                  type="text"
                  name="place"
                  value={formData.place}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Date *
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  For (Name of the Concern) *
                </label>
                <input
                  type="text"
                  name="forConcernName"
                  value={formData.forConcernName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Signature of authorised representative if any
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-md p-4 h-24 flex items-center justify-center bg-gray-50">
                  <FileText className="text-gray-400" size={32} />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Proprietor/Managing Partner/Partner Managing Director/Director (Name & Designation)
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-md p-4 h-24 flex items-center justify-center bg-gray-50">
                  <FileText className="text-gray-400" size={32} />
                </div>
              </div>
            </div>

            <p className="text-xs text-gray-600 mt-4 text-center">
              (Delete whichever is not applicable) (as the case may be)
            </p>
          </div>

          {/* SUBMIT BUTTON */}
          <div className="flex gap-4 pt-6">
            <button
              onClick={handleSubmit}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-colors shadow-lg hover:shadow-xl"
            >
              Submit Application
            </button>
            <button
              onClick={() => {
                if (window.confirm('Are you sure you want to reset the form?')) {
                  window.location.reload();
                }
              }}
              className="px-8 py-4 border-2 border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-semibold"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicityClearanceForm;