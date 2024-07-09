import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { InputCard } from "./InputCard";
import { File } from "buffer";

const TastyEditsForm = () => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    orderType: "",
    logistics: "",
    styleDetails: "",
    orderDetails: "",
    footageUpload: File,
  });

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileUpload = (event: any) => {
    const file = event.target.files[0];
    setFormData({ ...formData, footageUpload: file });
  };

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    // Send form data to your backend here.
    // You can use fetch or axios to make a POST request.
    // Example using fetch:

    console.log("Form data:", formData);

    // try {
    //   const response = await fetch("/api/submit-tasty-edits", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "multipart/form-data",
    //     },
    //     body: JSON.stringify(formData),
    //   });

    //   if (response.ok) {
    //     // Form submission successful
    //     console.log("Form submitted successfully!");

    //     console.log("Form data:", formData);
    //     // Redirect to a success page or perform other actions.
    //     router.push("/success");
    //   } else {
    //     // Handle form submission error
    //     console.error("Error submitting form.");
    //   }
    // } catch (error) {
    //   console.error("Error submitting form:", error);
    // }
  };

  const steps = [
    {
      title: "Order Type",
      header: "Let's get Started on your order!",
      subheader:
        "Please select one of the following options to start your order!",
      content: (
        <div className="grid grid-cols-3 gap-4">
          <InputCard
            id="orderType-horizontal-video"
            name="orderType"
            value="horizontal-video"
            checked={formData.orderType === "horizontal-video"}
            onChange={handleInputChange}
            label="Horizontal Video"
            para="Any Horizontal 16:9 video. Usually for Youtube, Facebook, Vimeo, etc."
            image="/horizontalvideo.png"
          />
          <InputCard
            id="orderType-vertical-video"
            name="orderType"
            value="vertical-video"
            checked={formData.orderType === "vertical-video"}
            onChange={handleInputChange}
            label="Vertical Video"
            para="Any Vertical 9:16 video less than 60 seconds. Usually for Instagram Reels, TikTok, Snapchat, or Youtube Shorts."
            image="/verticalvideo.png"
          />
          <InputCard
            id="orderType-square-video"
            name="orderType"
            value="square-video"
            checked={formData.orderType === "square-video"}
            onChange={handleInputChange}
            label="Square Video"
            para="Any Square 1:1 video. Usually for Instagram, Facebook, Twitter, etc."
            image="/square.png"
          />
          <InputCard
            id="orderType-channel-assets"
            name="orderType"
            value="channel-assets"
            checked={formData.orderType === "channel-assets"}
            onChange={handleInputChange}
            label="Channel Assets"
            para="Custom Brand Intro, Endscreens, and Call to Actions that can be used in all of your Youtube videos."
            image="/channelassets.png"
          />
          <InputCard
            id="orderType-thumbnail"
            name="orderType"
            value="thumbnail"
            checked={formData.orderType === "thumbnail"}
            onChange={handleInputChange}
            label="Thumbnail"
            para="Custom Thumbnail for your Youtube videos. No Video Editing."
            image="/thumbnail.png"
          />
          <InputCard
            id="orderType-other"
            name="orderType"
            value="other"
            checked={formData.orderType === "other"}
            onChange={handleInputChange}
            label="Other"
            para="Any other type of video editing that doesn't fit the above categories."
            image="/other.png"
          />
        </div>
      ),
    },
    {
      title: "Logistics",
      header: "Logistics",
      subheader: "Please select your preferred logistics option.",
      content: (
        <div>
          <select
            id="logistics"
            name="logistics"
            value={formData.logistics}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Select Logistics</option>
            <option value="express">Express Delivery</option>
            <option value="standard">Standard Delivery</option>
          </select>
        </div>
      ),
    },
    {
      title: "Style Details",
      content: (
        <div>
          <textarea
            id="styleDetails"
            name="styleDetails"
            value={formData.styleDetails}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
      ),
    },
    {
      title: "Order Details",
      headers: "Order Details",
      subheader: "Please provide any additional details about your order.",
      content: (
        <div>
          <textarea
            id="orderDetails"
            name="orderDetails"
            value={formData.orderDetails}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
      ),
    },
    {
      title: "Footage Upload",
      headers: "Footage Upload",
      subheader: "Please upload the footage you want us to edit.",
      content: (
        <div>
          <input
            type="file"
            id="footageUpload"
            name="footageUpload"
            accept=".mp4, .mov, .avi, .jpg, .png, .jpeg"
            onChange={handleFileUpload}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
      ),
    },
    {
      title: "Review Order",
      headers: "Review Order",
      subheader: "Please review your order details before submitting.",
      content: (
        <div>
          <div className="mb-2">
            <span className="font-bold">Order Type:</span> {formData.orderType}
          </div>
          <div className="mb-2">
            <span className="font-bold">Logistics:</span> {formData.logistics}
          </div>
          <div className="mb-2">
            <span className="font-bold">Style Details:</span>{" "}
            {formData.styleDetails}
          </div>
          <div className="mb-2">
            <span className="font-bold">Order Details:</span>{" "}
            {formData.orderDetails}
          </div>
          <div className="mb-2">
            <span className="font-bold">Footage Upload:</span>{" "}
            {formData.footageUpload
              ? formData.footageUpload.name
              : "No file selected"}
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="container mx-auto  flex gap-5 ">
      <div className="w-1/4 p-4">
        <div className="sticky top-4">
          {/* <div className="flex items-end gap-1 mb-5">
            <Image
              src={`https://ik.imagekit.io/umdiwr6ma/tlr%20logo.png?updatedAt=1706964634422`}
              alt="logo"
              width={100}
              height={100}
            />

            <h3>
              <span className="text-white font-thin italic text-lg">Edits</span>
            </h3>
          </div> */}
          <ul className="space-y-4">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center gap-2">
                <div
                  className={
                    ` rounded-full h-4 w-4 items-center  ` +
                    (currentStep === index + 1 ? " bg-amber-500" : "bg-white")
                  }
                ></div>
                <li
                  key={index}
                  className={`p-2 rounded ${
                    currentStep === index + 1
                      ? " text-white font-bold"
                      : " text-white/80 font-extralight"
                  }`}
                >
                  {step.title}
                </li>
              </div>
            ))}
          </ul>
        </div>
      </div>

      <div className="w-2.5/4 flex flex-col justify-start container">
        <form onSubmit={handleSubmit} className="  my-4">
          {steps.map((step, index) => (
            <>
              <h1 className="text-xl font-extrabold text-white   mb-2">
                {
                  // Only show the title of the current step
                  currentStep === index + 1 ? step.title : ""
                }
              </h1>

              <p className="text-gray-200 mb-4">
                {currentStep === index + 1 ? step.subheader : ""}
              </p>
              <div
                key={index}
                className={`step ${currentStep === index + 1 ? "active" : ""}`}
              >
                {currentStep === index + 1 && <div>{step.content}</div>}
              </div>
            </>
          ))}

          <div className="flex justify-between mt-6">
            {currentStep > 1 && (
              <button
                type="button"
                onClick={prevStep}
                className="bg-slate-600 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus-shadow-outline"
              >
                Previous
              </button>
            )}
            {currentStep < steps.length && (
              <button
                type="button"
                onClick={nextStep}
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus-shadow-outline"
              >
                Next
              </button>
            )}
            {currentStep === steps.length && (
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus-shadow-outline"
              >
                Submit
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default TastyEditsForm;
