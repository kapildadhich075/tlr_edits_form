import React from 'react';
import { FORM_DATA } from '../constants/blueprints';

interface ReviewOrderProps {
  formData: FORM_DATA
}

const ReviewOrder: React.FC<ReviewOrderProps> = ({ formData }) => {
  return (
    <div className="text-white">
      <div className="mb-2">
        <span className="font-bold">Order Type:</span> {formData.orderType}
      </div>
      <div className="mb-2">
        <span className="font-bold">Video Footage Details:</span>{' '}
        {formData.videoFootageDetails.length} - {formData.videoFootageDetails.size}
      </div>
      <div className="mb-2">
        <span className="font-bold">Style Details:</span> {
          formData.styleDetails.pace
        } - {
          formData.styleDetails.tone
        }
      </div>
      <div className="mb-2">
        <span className="font-bold">Order Details:</span> {formData.orderDetails.richTextData} - {
          formData.orderDetails.slug
        } - {
          formData.orderDetails.scriptLink
        }
      </div>
      <div className="mb-2">
        <span className="font-bold">Footage Upload:</span>{' '}
        {formData.footageUpload ? formData.footageUpload.name : 'No file selected'}
      </div>
    </div>
  );
};

export default ReviewOrder;
