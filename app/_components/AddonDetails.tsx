import React from "react";
import Image from "next/image";
import { AddonDetail } from "../constants/blueprints";
import { useAddonContext } from "./AddonContext";

const ToneData = [
  { label: "MrBeast Exaggerated", value: "MrBeastExaggerated" },
  { label: "Headshot", value: "Headshot" },
  { label: "Quote", value: "Quote" },
  { label: "Statement/Fact", value: "Statement/Fact" },
  { label: "Before & After", value: "Before&After" },
  { label: "Versus/Comparison", value: "Versus/Comparison" },
  { label: "Process Shot", value: "ProcessShot" },
  { label: "No Text", value: "NoText" },
];

const AddonDetails: React.FC<{ formData: AddonDetail; handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void }> = ({ formData, handleInputChange }) => {
  const { selectedAddons } = useAddonContext();

  const showThumbnailSection = selectedAddons.includes("Thumbnail");
  const showVerticalReformatSection = selectedAddons.includes("VerticalReformat");
  const showSquareReformatSection = selectedAddons.includes("squareReformat");
  const showHorizontalReformatSection = selectedAddons.includes("HorizontalReformat");
  const showCaptionStyleSection = selectedAddons.includes("FullVideoCaptions");
  const showPremiereProSection = selectedAddons.includes("PremiereProProject");

  return (
    <div style={{ maxHeight: "500px", overflowY: "auto" }}>
      {showThumbnailSection && (
        <>
          <p className="text-white mt-5 mb-2">What should the tone be?</p>
          <div className="grid grid-cols-4 gap-3">
            {ToneData.map((data, index) => (
              <div
                key={index}
                className="bg-white text-black flex flex-col items-center p-2 rounded-md h-30 justify-center gap-5"
              >
                <input
                  type="checkbox"
                  name="tone"
                  id={`tone-${index}`}
                  onChange={handleInputChange}
                  value={data.value}
                  checked={formData.tone.includes(data.value)}
                />
                <Image
                  src={"/horizontalvideo.png"}
                  alt="video"
                  width={60}
                  height={60}
                />
                <label htmlFor={`tone-${index}`}>{data.label}</label>
              </div>
            ))}
          </div>

          <div className="scrollable-section">
            <p>Include Your Logo?</p>
            <div>
              <input
                className="bg-white text-black flex flex-col items-center p-2 rounded-md h-30 justify-center gap-5"
                type="radio"
                name="includeLogo"
                value="Yes"
                checked={formData.includeLogo === "Yes"}
                onChange={handleInputChange}
              />
              Yes
            </div>
            <div>
              <input
                className="bg-white text-black flex flex-col items-center p-2 rounded-md h-30 justify-center gap-5"
                type="radio"
                name="includeLogo"
                value="No"
                checked={formData.includeLogo === "No"}
                onChange={handleInputChange}
              />
              No
            </div>
          </div>

          <div className="scrollable-section">
            <p>Thumbnail Description</p>
            <textarea
              name="thumbnailDescription"
              onChange={handleInputChange}
              value={formData.thumbnailDescription}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        </>
      )}

      {showVerticalReformatSection && (
        <>
          <div className="scrollable-section">
            <p>Vertical Reformat (&gt;60) Goals</p>
            <input
              name="verticalReformatGoals"
              onChange={handleInputChange}
              value={formData.verticalReformatGoals}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="scrollable-section">
            <p>Vertical Reformat (&gt;60) Example Videos</p>
            <input
              name="verticalReformatExampleVideos"
              value={formData.verticalReformatExampleVideos}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        </>
      )}

      {showSquareReformatSection && (
        <>
          <div className="scrollable-section">
            <p>Square Reformat Goals</p>
            <input
              name="squareReformatGoals"
              onChange={handleInputChange}
              value={formData.squareReformatGoals}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="scrollable-section">
            <p>Square Reformat Examples</p>
            <input
              name="squareReformatExamples"
              value={formData.squareReformatExamples}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        </>
      )}

      {showHorizontalReformatSection && (
        <>
          <div className="scrollable-section">
            <p>Horizontal Reformat Goals</p>
            <input
              name="horizontalReformatGoals"
              onChange={handleInputChange}
              value={formData.horizontalReformatGoals}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="scrollable-section">
            <p>Horizontal Reformat Example Videos</p>
            <input
              name="horizontalReformatExampleVideos"
              value={formData.horizontalReformatExampleVideos}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        </>
      )}

      {showCaptionStyleSection && (
        <div className="scrollable-section">
          <p>Caption Style</p>
          <input
            name="captionStyle"
            value={formData.captionStyle}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
      )}

      {showPremiereProSection && (
        <div className="scrollable-section">
          <p>Premiere Pro Project File</p>
          <input
            type="file"
            name="premiereProFile"
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
      )}
    </div>
  );
};

export default AddonDetails;
