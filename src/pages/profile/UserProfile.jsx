import React, { useEffect, useState } from 'react';
import { useColor } from "../../pages/colorcontext/ColorContext";
import axios from 'axios';

const UserProfile = ({  }) => {
    const { color } = useColor();
    const [employee, setEmployee] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const userId =2;

    useEffect(() => {
        const fetchEmployeeData = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/new_employee/${userId}`);
                setEmployee(response.data);
            } catch (err) {
                setError('Error fetching employee data');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchEmployeeData();
    }, [userId]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="flex flex-col items-center justify-center ml-40 space-y-8">
            <div>
                <div className="bg-white shadow-2xl w-80 h-96 relative border border-gray-500 rounded-lg mt-12">
                    <div className="absolute left-1/2 transform -translate-x-1/2 bg-blue-500 rounded-full w-40 h-36 shadow-lg flex items-center justify-center mt-3">
                        <div className="text-center text-white text-4xl">{employee?.name?.charAt(0) || 'N/A'}</div>
                    </div>
                    <div className="flex flex-col items-center justify-center h-full mt-12">
                        <div className="font-bold text-2xl mt-3">{employee?.name || 'Name'}</div>
                        <div className="text-lg text-gray-600">{employee?.company || 'Company'}</div>
                        <div className="text-lg text-gray-600">{employee?.designation || 'Designation'}</div>
                        <div className="text-lg text-gray-600">{employee?.emp_code || 'Emp Code'}</div>
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
                        <p><strong>Prefix:</strong> {employee?.prefix || 'Mr.'}</p>
                        <p><strong>First name:</strong> {employee?.first_name || '-'}</p>
                        <p><strong>Middle name:</strong> {employee?.middle_name || '-'}</p>
                        <p><strong>Last name:</strong> {employee?.last_name || '-'}</p>
                        <p><strong>Employee Code:</strong> {employee?.emp_code || '-'}</p>
                        <p><strong>Date of birth:</strong> {employee?.dob ? new Date(employee.dob).toLocaleDateString() : '-'}</p>
                        <p><strong>Gender:</strong> {employee?.gender || '-'}</p>
                        <p><strong>Blood group:</strong> {employee?.blood_group || '-'}</p>
                        <p><strong>Nationality:</strong> {employee?.nationality || '-'}</p>
                        <p><strong>Work email:</strong> {employee?.work_email || '-'}</p>
                        <p><strong>Mobile number:</strong> {employee?.mobile_number || '-'}</p>
                        <p><strong>Date of joining:</strong> {employee?.date_of_joining ? new Date(employee.date_of_joining).toLocaleDateString() : '-'}</p>
                        <p><strong>Employment type:</strong> {employee?.employment_type || '-'}</p>
                        <p><strong>Employment status:</strong> {employee?.employment_status || '-'}</p>
                        <p><strong>Company:</strong> {employee?.company || '-'}</p>
                        <p><strong>Business Unit:</strong> {employee?.business_unit || '-'}</p>
                        <p><strong>Department:</strong> {employee?.department || '-'}</p>
                        <p><strong>Sub department:</strong> {employee?.sub_department || '-'}</p>
                        <p><strong>Designation:</strong> {employee?.designation || '-'}</p>
                        <p><strong>Region:</strong> {employee?.region || '-'}</p>
                        <p><strong>Branch:</strong> {employee?.branch || '-'}</p>
                        <p><strong>Sub branch:</strong> {employee?.sub_branch || '-'}</p>
                        <p><strong>Reporting manager:</strong> {employee?.reporting_manager || '-'}</p>
                        <p><strong>Functional manager:</strong> {employee?.functional_manager || '-'}</p>
                        <p><strong>Skill Type:</strong> {employee?.skill_type || '-'}</p>
                        <p><strong>Employee Other Status Id:</strong> {employee?.other_status_id || '-'}</p>
                        <p><strong>Date of Leaving:</strong> {employee?.date_of_leaving || '-'}</p>
                        <p><strong>Date of Confirmation:</strong> {employee?.date_of_confirmation ? new Date(employee.date_of_confirmation).toLocaleDateString() : '-'}</p>
                        <p><strong>Date of Resignation:</strong> {employee?.date_of_resignation || '-'}</p>
                        <p><strong>Biometric Id:</strong> {employee?.biometric_id || '-'}</p>
                        <p><strong>Date of settlement:</strong> {employee?.date_of_settlement || '-'}</p>
                        <p><strong>ISD code:</strong> {employee?.isd_code || '-'}</p>
                        <p><strong>Other Status Date:</strong> {employee?.other_status_date || '-'}</p>
                        <p><strong>Other Status Remarks:</strong> {employee?.other_status_remarks || '-'}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
