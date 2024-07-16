import React from 'react';
import Image from 'next/image';
import { StyleDetail } from '../constants/blueprints';

interface StyleDetailsProps {
  formData: StyleDetail; 
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PaceData = [
  { label: 'Slow', value: 'slow' },
  { label: 'Medium', value: 'medium' },
  { label: 'Fast', value: 'fast' },
];

const ToneData = [
  { label: 'Funny', value: 'funny' },
  { label: 'Serious', value: 'serious' },
  { label: 'Professional', value: 'professional' },
  { label: 'Elegant', value: 'elegant' },
  { label: 'Casual', value: 'casual' },
  { label: 'Informational', value: 'informational' },
  { label: 'Entertaining', value: 'entertaining' },
];

const StyleDetails: React.FC<StyleDetailsProps> = ({ formData, handleInputChange }) => {
  return (
    <div>
      <p className='text-white mb-2'>What should the pacing be?</p>
      <div className='grid grid-cols-3 gap-3'>
        {PaceData.map((data, index) => (
          <div key={index} className='bg-white text-black flex flex-col items-center p-2 rounded-md h-30 justify-center gap-5'>
            <input 
              type="radio" 
              name="pace" 
              id={`pace-${index}`} 
              onChange={handleInputChange} 
              value={data.value} 
              checked={formData.pace === data.value}
            />
            <Image src={'/horizontalvideo.png'} alt="video" width={60} height={60} />
            <label htmlFor={`pace-${index}`}>{data.label}</label>
          </div>
        ))}
      </div>

      <p className='text-white mt-5 mb-2'>What should the tone be?</p>
      <div className='grid grid-cols-4 gap-3'>
        {ToneData.map((data, index) => (
          <div key={index} className='bg-white text-black flex flex-col items-center p-2 rounded-md h-30 justify-center gap-5'>
            <input 
              type="checkbox" 
              name="tone" 
              id={`tone-${index}`} 
              onChange={handleInputChange} 
              value={data.value}  
              checked={formData.tone.includes(data.value)}
            />
            <Image src={'/horizontalvideo.png'} alt="video" width={60} height={60} />
            <label htmlFor={`tone-${index}`}>{data.label}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StyleDetails;
