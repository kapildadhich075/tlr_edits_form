// components/RichTextBox.tsx

import React from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css"; // Import the styles

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

interface RichTextBoxProps {
  value: string;
  onChange: (content: string) => void;
}

const RichTextBox: React.FC<RichTextBoxProps> = ({ value, onChange }) => {
  const handleChange = (content: string) => {
    onChange(content);
  };

  return (
    <div className="my-4">
      <ReactQuill
        value={value}
        className="text-white h-72 "
        onChange={handleChange}
        modules={{
          toolbar: [
            [{ header: "1" }, { header: "2" }, { font: [] }],
            [{ size: [] }],
            ["bold", "italic", "underline", "strike", "blockquote"],
            [
              { list: "ordered" },
              { list: "bullet" },
              { indent: "-1" },
              { indent: "+1" },
            ],
            ["link", "image", "video"],
            ["clean"],
          ],
        }}
        formats={[
          "header",
          "font",
          "size",
          "bold",
          "italic",
          "underline",
          "strike",
          "blockquote",
          "list",
          "bullet",
          "indent",
          "link",
          "image",
          "video",
        ]}
      />
    </div>
  );
};

export default RichTextBox;
