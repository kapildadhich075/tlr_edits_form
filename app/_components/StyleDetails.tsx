import React from 'react';

interface StyleDetailsProps {
  formData: string; 
  handleInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const StyleDetails: React.FC<StyleDetailsProps> = ({ formData, handleInputChange }) => {
  return (
    <div>
      <textarea
        id="styleDetails"
        name="styleDetails"
        value={formData} 
        onChange={(e) => handleInputChange(e)}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
  );
};

export default StyleDetails;
