import React from 'react';

interface VideoFootageDetails {
    length: string;
    size: string;
  }
  
  interface VideoFootageProps {
    videoFootageDetails: VideoFootageDetails;
    handleSelectChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  }
  

const VideoFootage: React.FC<VideoFootageProps> = ({ videoFootageDetails, handleSelectChange }) => {
  const selectData = [
    {
      label: "Select Raw Footage Length *",
      id: "videoFootageDetails.length",
      options: [
        { value: "", text: "How Long is your raw footage in minutes" },
        { value: "less-than-90", text: "Less than 90 minutes of raw footage." },
        { value: "90-to-180", text: "Between 90 and 180 minutes of raw footage." },
        { value: "more-than-180", text: "More than 180 minutes of raw footage." },
      ],
    },
    {
      label: "Select Raw Footage Size *",
      id: "videoFootageDetails.size",
      options: [
        { value: "", text: "How Long is your Raw Footage Size in GB" },
        { value: "less-than-20gb", text: "Less than 20GB of raw footage." },
        { value: "20gb-to-60gb", text: "Between 20GB and 60GB of raw footage." },
        { value: "more-than-60gb", text: "More than 60GB of raw footage." },
      ],
    },
  ];

  return (
    <div className="mb-4 flex flex-col gap-3">
      {selectData.map((selectItem, index) => (
        <div key={index}>
          <label htmlFor={selectItem.id} className="text-white">
            {selectItem.label}
          </label>
          <select
            id={selectItem.id}
            name={selectItem.id}
            value={videoFootageDetails[selectItem.id.split(".")[1] as keyof VideoFootageDetails]}
            onChange={handleSelectChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option disabled value="">
              {selectItem.options[0].text}
            </option>
            {selectItem.options.slice(1).map((option, i) => (
              <option key={i} value={option.value} className="text-gray-300">
                {option.text}
              </option>
            ))}
          </select>
        </div>
      ))}
    </div>
  );
};

export default VideoFootage;
