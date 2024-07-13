import React from 'react';

interface FootageUploadProps {
  handleFileUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FootageUpload: React.FC<FootageUploadProps> = ({ handleFileUpload }) => {
  return (
    <div>
      <input
        type="file"
        id="footageUpload"
        name="footageUpload"
        accept=".mp4, .mov, .avi, .jpg, .png, .jpeg"
        onChange={handleFileUpload}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
  );
};

export default FootageUpload;
