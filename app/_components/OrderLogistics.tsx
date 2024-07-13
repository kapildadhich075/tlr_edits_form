import React from 'react';

interface OrderLogisticsDetails {
  videoTitle: string;
  videoCategory: string;
  videoDescription: string;
  publishDate: string;
  finalLength: number;
}

interface OrderLogisticsProps {
  orderLogisticsDetails: OrderLogisticsDetails;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const OrderLogistics: React.FC<OrderLogisticsProps> = ({ orderLogisticsDetails, handleInputChange }) => {
  return (
    <div>
      <h2 className="subheader">Tell us a bit about your order...</h2>
      
      <div>
        <h1 className="text-white">Video Title*</h1>
        <input
          id="videoTitle"
          name="videoTitle"
          value={orderLogisticsDetails.videoTitle}
          onChange={handleInputChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      
      <div>
        <h1 className="text-white">Video Category*</h1>
        <input
          id="videoCategory"
          name="videoCategory"
          value={orderLogisticsDetails.videoCategory}
          onChange={handleInputChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      
      <div>
        <h1 className="text-white">Video Description*</h1>
        <textarea
          id="videoDescription"
          name="videoDescription"
          value={orderLogisticsDetails.videoDescription}
          onChange={handleInputChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      
      <div>
        <h1 className="text-white">Publish Date*</h1>
        <input
          type="date"
          id="publishDate"
          name="publishDate"
          value={orderLogisticsDetails.publishDate}
          onChange={handleInputChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      
      <div>
        <h1 className="text-white">Final Length*</h1>
        <input
          id="finalLength"
          name="finalLength"
          type="number"
          value={orderLogisticsDetails.finalLength}
          onChange={handleInputChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
    </div>
  );
};

export default OrderLogistics;
