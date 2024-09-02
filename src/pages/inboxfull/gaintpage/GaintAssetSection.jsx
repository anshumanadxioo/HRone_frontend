import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GaintAssetSection = () => {
  const [assetData, setAssetData] = useState(null);
  const userId = 1;

  useEffect(() => {
    const fetchAssetData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/user/${userId}/assets`);
        const data = response.data[0];
        
        const transformedData = {
          title: `Please acknowledge ${data.product} has been returned`,
          userProfile: {
            name: "Ankur Chorasiya",
            id: `#ADI${data.allotment_id}`,
            company: "ADIXOO BRAND PVT LTD",
            role: "Intern",
            profileImage: "public/temp-profile.jpg"
          },
          assetDetails: [
            { label: "Product", value: data.product },
            { label: "Asset Type", value: data.asset_type },
            { label: "Serial No.", value: data.serial_number },
            { label: "Asset Code", value: data.asset_code },
            { label: "Allotment Date", value: new Date(data.allotment_date).toLocaleDateString() },
            { label: "Return Date", value: data.return_date ? new Date(data.return_date).toLocaleDateString() : "Not Returned" },
            { label: "Acknowledged", value: data.acknowledge ? "Yes" : "No" },
            { label: "Overdue", value: data.overdue ? "Yes" : "No" },
            { label: "Product Image", value: "public/laptop-image.jpg" }
          ]
        };

        setAssetData(transformedData);
      } catch (error) {
        console.error("Error fetching asset data", error);
      }
    };

    fetchAssetData();
  }, [userId]);

  if (!assetData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-white h-screen ml-28 mr-28 mt-20 p-8 rounded-lg border border-gray-400">
      <h1 className="text-2xl">{assetData.title}</h1>
      
      <div className="mt-4 p-4 w-full flex items-center">
        <img 
          src={assetData.userProfile.profileImage} 
          alt="Profile" 
          className="rounded-full w-20 h-20 mr-4"
        />
        <div>
          <p className="font-semibold">{assetData.userProfile.name} ({assetData.userProfile.id})</p>
          <p className="text-sm">{assetData.userProfile.company}</p>
          <p className="text-sm">{assetData.userProfile.role}</p>
        </div>
      </div>

      <div className="bg-gray-400 h-px mt-4"></div>

      <div className="mt-6 grid grid-cols-2 gap-4 ml-5 mr-5">
        {assetData.assetDetails.map((detail, index) => (
          <div key={index}>
            <p className="text-sm font-semibold">{detail.label}</p>
            {detail.label === "Product Image" ? (
              <img src={detail.value} alt="Product" className="w-full h-auto mt-2" />
            ) : (
              <p className="text-sm">{detail.value}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GaintAssetSection;
