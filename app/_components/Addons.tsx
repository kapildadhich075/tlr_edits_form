import React from 'react';
import {AddonCard} from './AddonCard';
interface Addon {
    id: string;
    value: string;
    label: string;
    para: string;
    image: string;
  }
  
  interface AddonsProps {
    ADDONS: Addon[];
    formData: { Addons: string };
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }
  
  interface OrderTypeSectionProps {
    ORDER_TYPES: { id: string; value: string; label: string; para: string; image: string }[];
    formData: { orderType: string };
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }
  

const Addons: React.FC<AddonsProps> = ({ ADDONS, formData, handleInputChange }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {ADDONS.map((card, index) => (
        <AddonCard
          key={index}
          id={card.id}
          name="Addons"
          value={card.value}
          checked={formData.Addons === card.value}
          onChange={handleInputChange}
          label={card.label}
          para={card.para}
          image={card.image}
        />
      ))}
    </div>
  );
};

export default Addons;
