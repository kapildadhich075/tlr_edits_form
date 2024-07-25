import React from "react";
import { InputCard } from "./InputCard";

interface OrderType {
  id: string;
  value: string;
  label: string;
  para: string;
  image: string;
}
interface OrderTypeProps {
  ORDER_TYPES: OrderType[];
  formData: FormData;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setOpenModal: (open: boolean) => void;
}
interface FormData {
  orderType: string;
}
const OrderType: React.FC<OrderTypeProps> = ({
  ORDER_TYPES,
  formData,
  handleInputChange,
  setOpenModal,
}) => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-4">
        {ORDER_TYPES.map((card) => (
          <InputCard
            key={card.id}
            id={card.id}
            name="orderType"
            value={card.value}
            checked={formData.orderType === card.value}
            onChange={handleInputChange}
            label={card.label}
            para={card.para}
            image={card.image}
          />
        ))}
        <InputCard
          id="orderType-other"
          name="orderType"
          value="other"
          checked={formData.orderType === "other"}
          onChange={handleInputChange}
          label="Other"
          para="Any other type of video editing that doesn't fit the above categories."
          image="/other.png"
          onClick={() => setOpenModal(true)}
        />
      </div>
    </div>
  );
};

export default OrderType;
