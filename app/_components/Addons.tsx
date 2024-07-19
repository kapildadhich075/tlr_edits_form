import React from "react";
import { AddonCard } from "./AddonCard";
import { useAddonContext } from "./AddonContext";
import { AddonDetail } from "../constants/blueprints";

interface Addon {
  id: string;
  value: string;
  label: string;
  para: string;
  image: string;
}

interface AddonsProps {
  ADDONS: Addon[];
  formData: AddonDetail;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement >) => void;
}

const Addons: React.FC<AddonsProps> = ({ ADDONS, formData, handleInputChange }) => {
  const { selectedAddons, setSelectedAddons } = useAddonContext();

  const handleAddonChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setSelectedAddons((prevSelectedAddons) =>
      checked
        ? [...prevSelectedAddons, value]
        : prevSelectedAddons.filter((addon) => addon !== value)
    );
  };
  console.log(selectedAddons.length+"ADDONS");
  

  return (
    <div>
      <div className="grid grid-cols-3 gap-4">
        {ADDONS.map((card, index) => (
          <AddonCard
            key={index}
            id={card.id}
            name="Addons"
            value={card.value}
            checked={selectedAddons.includes(card.value)}
            onChange={handleAddonChange}
            label={card.label}
            para={card.para}
            image={card.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Addons;
