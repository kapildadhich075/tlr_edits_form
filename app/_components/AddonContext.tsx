import React, { createContext, useState, useContext } from "react";

interface AddonContextType {
  selectedAddons: string[];
  setSelectedAddons: React.Dispatch<React.SetStateAction<string[]>>;
}

const AddonContext = createContext<AddonContextType | undefined>(undefined);

export const AddonProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  
  return (
    <AddonContext.Provider value={{ selectedAddons, setSelectedAddons }}>
      {children}
    </AddonContext.Provider>
  );
};

export const useAddonContext = () => {
  const context = useContext(AddonContext);
  if (context === undefined) {
    throw new Error("useAddonContext must be used within an AddonProvider");
  }
  return context;
};
