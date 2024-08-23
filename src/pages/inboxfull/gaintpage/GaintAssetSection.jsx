import React from 'react';

const GaintAssetSection = () => {
  const assetData = {
    title: "Please acknowledge Latitude 7480 Dell has been returned",
    userProfile: {
      name: "Ankur Chorasiya",
      id: "#ADI146",
      company: "ADIXOO BRAND PVT LTD",
      role: "Intern",
      profileImage: "public/temp-profile.jpg"
    },
    assetDetails: [
      { label: "Product", value: "Laptop" },
      { label: "Asset Type", value: "IT Asset" },
      { label: "Serial No.", value: "771ZGM2" },
      { label: "Asset Code", value: "AB22" },
      { label: "Product Image", value: "public/laptop-image.jpg" } 
    ]
  };

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
