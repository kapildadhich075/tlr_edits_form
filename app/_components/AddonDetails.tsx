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

const AddonDetails: React.FC<{
  formData: AddonDetail;
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}> = ({ formData, handleInputChange }) => {
  const { selectedAddons } = useAddonContext();

  const showThumbnailSection = selectedAddons.includes("Thumbnail");
  const showVerticalReformatSection =
    selectedAddons.includes("VerticalReformat");
  const showSquareReformatSection = selectedAddons.includes("squareReformat");
  const showHorizontalReformatSection =
    selectedAddons.includes("HorizontalReformat");
  const showCaptionStyleSection = selectedAddons.includes("FullVideoCaptions");
  const showPremiereProSection = selectedAddons.includes("PremiereProProject");

  return (
    <div style={{ maxHeight: "500px", overflowY: "auto", width: "800px" }}>
      {showThumbnailSection && (
        <>
          <p className="text-white mb-2">What should the tone be?</p>
          <div className="grid grid-cols-4 gap-3">
            {ToneData.map((data, index) => (
              <div
                key={index}
                className="bg-white flex flex-col items-center p-2 rounded-md h-30 justify-center gap-5"
              >
                <input
                  type="checkbox"
                  name="tone"
                  id={`tone-${index}`}
                  onChange={handleInputChange}
                  value={data.value}
                  checked={formData.tone.includes(data.value)}
                  className="form-checkbox h-4 w-4 text-indigo-500 focus:ring-indigo-500"
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

          <div className="scrollable-section text-white my-4">
            <p>Include Your Logo?</p>
            <div className="flex flex-row gap-5">
              <div className="flex flex-row gap-2">
                <input
                  className="bg-white text-white"
                  type="radio"
                  name="includeLogo"
                  value="Yes"
                  checked={formData.includeLogo === "Yes"}
                  onChange={handleInputChange}
                />
                <label htmlFor="includeLogo" className="text-white">
                  Yes
                </label>
              </div>
              <div className="flex flex-row gap-2">
                <input
                  className="bg-white text-white"
                  type="radio"
                  name="includeLogo"
                  value="No"
                  checked={formData.includeLogo === "No"}
                  onChange={handleInputChange}
                />
                <label htmlFor="includeLogo" className="text-white">
                  No
                </label>
              </div>
            </div>
          </div>

          <div className="scrollable-section my-4">
            <p className=" text-white">Thumbnail Description</p>
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
          <div className="scrollable-section my-4">
            <p className=" text-white">Vertical Reformat (&gt;60) Goals</p>
            <input
              name="verticalReformatGoals"
              onChange={handleInputChange}
              value={formData.verticalReformatGoals}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="scrollable-section my-4">
            <p className=" text-white">
              Vertical Reformat (&gt;60) Example Videos
            </p>
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
          <div className="scrollable-section my-4">
            <p className=" text-white">Square Reformat Goals</p>
            <input
              name="squareReformatGoals"
              onChange={handleInputChange}
              value={formData.squareReformatGoals}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="scrollable-section my-4">
            <p className=" text-white">Square Reformat Examples</p>
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
          <div className="scrollable-section my-4">
            <p className=" text-white">Horizontal Reformat Goals</p>
            <input
              name="horizontalReformatGoals"
              onChange={handleInputChange}
              value={formData.horizontalReformatGoals}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="scrollable-section my-4">
            <p className=" text-white">Horizontal Reformat Example Videos</p>
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
        <div className="scrollable-section my-4">
          <p className=" text-white">Caption Style</p>
          <input
            name="captionStyle"
            value={formData.captionStyle}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
      )}

      {showPremiereProSection && (
        <div className="scrollable-section my-4">
          <p className=" text-white">Premiere Pro Project File</p>
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
