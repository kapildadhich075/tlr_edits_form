import React from "react";

interface FootageUploadProps {
  handleVideoDriveLink: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FootageUpload: React.FC<FootageUploadProps> = ({
  handleVideoDriveLink,
}) => {
  return (
    <div>
      <input
        type="text"
        name="footage"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        onChange={handleVideoDriveLink}
        placeholder="Google Drive Link"
      />
    </div>
  );
};

export default FootageUpload;
