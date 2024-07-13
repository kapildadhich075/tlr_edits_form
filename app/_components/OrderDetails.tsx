import React from 'react';

interface OrderDetailsProps {
  formData: string; 
  handleInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const OrderDetails: React.FC<OrderDetailsProps> = ({ formData, handleInputChange }) => {
  return (
    <div>
      <textarea
        id="orderDetails"
        name="orderDetails"
        value={formData} 
        onChange={(e) => handleInputChange(e)}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
  );
};

export default OrderDetails;
