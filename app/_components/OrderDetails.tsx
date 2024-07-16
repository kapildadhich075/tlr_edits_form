import React from 'react';
import RichTextBox from './RichTextBox';
import { OrderDetail } from '../constants/blueprints';

interface OrderDetailsProps {
  formData: OrderDetail; 
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const OrderDetails: React.FC<OrderDetailsProps> = ({ formData, handleInputChange }) => {
  return (
    <div className='mb-10'>
      <p className=' text-white text-lg'> How do you want us to edit the video?</p>
      <RichTextBox value={formData.richTextData} onChange={()=>handleInputChange} />
      
      <div className="mt-4">
        <label className="text-white block mb-2">Example Video URLs:</label>
        <input
          type="text"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={formData.slug}
          onChange={handleInputChange}
          placeholder="Enter example video URLs"
        />
      </div>

      <div className="mt-4">
        <label className="text-white block mb-2">Example Video URLs:</label>
        <input
          type="text"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={formData.slug}
          onChange={handleInputChange}
          placeholder="Enter example video URLs"
        />
      </div>
    </div>
  );
};

export default OrderDetails;
