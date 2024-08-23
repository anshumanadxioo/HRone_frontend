import React from 'react';
import GaintHeader from './GaintHeader';

const GaintPageContent = () => {
  // JSON data directly in the component
  const pageContentData = {
    header: "Dear Team,",
    reminders: [
      "This is a reminder regarding the process for attendance regularization for the last month."
    ],
    sections: [
      {
        title: "Attendance Review and Regularization:",
        points: [
          "Please review your attendance records for the last month.",
          "Ensure that all your attendance entries are accurate and complete."
        ]
      },
      {
        title: "Regularization Application:",
        points: [
          "If you find any discrepancies or missed entries, please apply for attendance regularization.",
          "Please get it approved by your respective managers on/before the 3rd working day of the current month."
        ]
      },
      {
        title: "Approval Process:",
        points: [
          "Submit your regularization requests by the 3rd working day of the current month.",
          "Managers will review and approve the regularization requests."
        ]
      }
    ],
    noCorrectionsText: "Kindly note that no attendance corrections will be made after the 3rd working day of the current month.",
    finalRemarks: [
      "Ensure all requests are submitted and approved within the given timeframe.",
      "We appreciate your cooperation in ensuring accurate attendance records. If you have any questions or need assistance with the process, please contact Nitya.Atre@adixoo.com."
    ],
    closing: [
      "Thank you.",
      "Best regards,",
      "Adixoo Team"
    ]
  };

  return (
    <div>
      <GaintHeader />
      <div className="container mx-auto p-3">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white shadow-md rounded-lg p-4 ml-12 mr-12">
            <p className="text-base leading-loose">{pageContentData.header}</p>
            
            {pageContentData.reminders.map((reminder, index) => (
              <p key={index} className="text-base leading-loose">{reminder}</p>
            ))}
            
            {pageContentData.sections.map((section, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold mb-2">{section.title}</h3>
                <ul className="list-disc pl-6">
                  {section.points.map((point, idx) => (
                    <li key={idx}>
                      <p className="text-base leading-loose">{point}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <h3 className="text-lg font-semibold mb-2">No Corrections Post Deadline:</h3>
            <p className="text-gray-700 text-base leading-loose">{pageContentData.noCorrectionsText}</p>
            
            {pageContentData.finalRemarks.map((remark, index) => (
              <p key={index} className="text-base leading-loose">{remark}</p>
            ))}
            
            {pageContentData.closing.map((line, index) => (
              <p key={index} className="text-base leading-loose">{line}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GaintPageContent;
