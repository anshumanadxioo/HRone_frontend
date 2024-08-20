import React from 'react';
import { useColor } from "../../pages/colorcontext/ColorContext";

const UserProfile = () => {
    const { color } = useColor();
    return (
        <div className="flex flex-col items-center justify-center mt-9 p-20 space-y-8">
            {/* First Box */}
            <div className="bg-white shadow-2xl w-80 h-96 relative border border-gray-500 rounded-lg">
                <div className="absolute left-1/2 transform -translate-x-1/2 bg-blue-500 rounded-full w-40 h-36 shadow-lg flex items-center justify-center mt-3">
                    <div className="text-center text-white text-4xl">AM</div>
                </div>
                <div className="flex flex-col items-center justify-center h-full mt-12">
                    <div className="font-bold text-2xl mt-3">Anshuman Mishra</div>
                    <div className="text-lg text-gray-600">ADIXOO BRAND PVT LTD</div>
                    <div className="text-lg text-gray-600">Intern</div>
                    <div className="text-lg text-gray-600">AD1146</div>
                    <div className="text-2xl text-gray-600 cursor-pointer" style={{ color: color }}>
                        <span className='text-3xl'>+</span> Add Social Network
                    </div>
                    <div className="w-full border-b border-gray-300 mt-6"></div>
                </div>
            </div>

            {/* Second Box with more height */}
            <div className="bg-white shadow-2xl w-80 h-auto relative border border-gray-500 rounded-lg p-6 space-y-4">
                <h2 className="text-xl font-semibold mb-4">Basic Information</h2>
                <div className="space-y-2">
                    <p><strong>Signature:</strong> Draw, type or upload your signature</p>
                    <p><strong>Prefix:</strong> Mr.</p>
                    <p><strong>First name:</strong> Pravendra</p>
                    <p><strong>Middle name:</strong> -</p>
                    <p><strong>Last name:</strong> Rajput</p>
                    <p><strong>Employee Code:</strong> ADI146</p>
                    <p><strong>Date of birth:</strong> 18/09/2002</p>
                    <p><strong>Gender:</strong> Male</p>
                    <p><strong>Blood group:</strong> AB+</p>
                    <p><strong>Nationality:</strong> Indian</p>
                    <p><strong>Work email:</strong> Pravendra.Rajput@adixoo.com</p>
                    <p><strong>Mobile number:</strong> 8085416865</p>
                    <p><strong>Date of joining:</strong> 10/06/2024</p>
                    <p><strong>Employment type:</strong> Trainee</p>
                    <p><strong>Employment status:</strong> Probation</p>
                    <p><strong>Company:</strong> ADIXOO BRAND PVT LTD</p>
                    <p><strong>Business Unit:</strong> Information Technology</p>
                    <p><strong>Department:</strong> Engineering</p>
                    <p><strong>Sub department:</strong> Development Engineering</p>
                    <p><strong>Designation:</strong> Intern</p>
                    <p><strong>Region:</strong> West</p>
                    <p><strong>Branch:</strong> Indore</p>
                    <p><strong>Sub branch:</strong> Indore</p>
                    <p><strong>Reporting manager:</strong> aadi Singh</p>
                    <p><strong>Functional manager:</strong> Faizanuddin Khan</p>
                    <p><strong>Skill Type:</strong> Skilled</p>
                    <p><strong>Employee Other Status Id:</strong> -</p>
                    <p><strong>Date of Leaving:</strong> -</p>
                    <p><strong>Date of Confirmation:</strong> 09/12/2024</p>
                    <p><strong>Date of Resignation:</strong> -</p>
                    <p><strong>Biometric Id:</strong> -</p>
                    <p><strong>Date of settlement:</strong> -</p>
                    <p><strong>ISD code:</strong> 91</p>
                    <p><strong>Other Status Date:</strong> -</p>
                    <p><strong>Other Status Remarks:</strong> -</p>
                </div>
            </div>
        </div>
    );
}

export default UserProfile;
    