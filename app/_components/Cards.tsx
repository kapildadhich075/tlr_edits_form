"use client";

import { useState } from "react";
import Image from "next/image";
import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
import { ORDER_TYPES } from "../constants/OrderType";
import { ADDONS } from "../constants/Addons";
import OrderLogistics from "./OrderLogistics";
import OrderType from "./OrderTypes";
import VideoFootage from "./VideoFootage";
import Addons from "./Addons";
import StyleDetails from "./StyleDetails";
import OrderDetails from "./OrderDetails";
import FootageUpload from "./FootageUpload";
import ReviewOrder from "./ReviewOrder";
import {
  FORM_DATA,
  OrderLogisticsDetails,
  VideoFootageDetails,
} from "../constants/blueprints";
import CalendlyModal from "./CalendlyModal";
import { Loader2 } from "lucide-react";

const TLREditsForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [orderLogisticsDetails, setOrderLogisticsDetails] =
    useState<OrderLogisticsDetails>({
      videoTitle: "",
      videoCategory: "",
      videoDescription: "",
      publishDate: "",
      finalLength: 0,
    });
  const [videoFootageDetails, setVideoFootageDetails] =
    useState<VideoFootageDetails>({
      length: "",
      size: "",
    });
  const [formData, setFormData] = useState<FORM_DATA>({
    orderType: "",
    videoFootageDetails: videoFootageDetails,
    Addons: "",
    orderLogisticsDetails: orderLogisticsDetails,
    styleDetails: "",
    orderDetails: "",
    footageUpload: null,
  });

  const [openModal, setOpenModal] = useState(false);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;

    if (name === "videoFootageDetails.length" && value === "more-than-180") {
      setOpenModal(true);
    } else if (
      name === "videoFootageDetails.size" &&
      value === "more-than-60gb"
    ) {
      setOpenModal(true);
    }

    setVideoFootageDetails((prevDetails) => ({
      ...prevDetails,
      [name.split(".")[1]]: value,
    }));
    setFormData((prevFormData) => ({
      ...prevFormData,
      videoFootageDetails: {
        ...prevFormData.videoFootageDetails,
        [name.split(".")[1]]: value,
      },
    }));
  };

  const handleInputChange = (
    event: React.ChangeEvent<
      HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = event.target;

    setOrderLogisticsDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));

    setFormData((prevFormData) => ({
      ...prevFormData,
      orderLogisticsDetails: {
        ...prevFormData.orderLogisticsDetails,
        [name]: value,
      },
    }));
  };

  const handleAddonChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleOrderTypeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleFileUpload = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      setFormData({ ...formData, footageUpload: file });
    }
  };

  const nextStep = () => setCurrentStep(currentStep + 1);
  const prevStep = () => setCurrentStep(currentStep - 1);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    console.log("Form data:", formData);
    // API submission code commented out for brevity
  };

  const isCurrentStepValid = () => {
    console.log("Current Step:", currentStep);
    console.log("Order Logistics Details:", formData.orderLogisticsDetails);

    switch (currentStep) {
      case 1:
        return formData.orderType !== "";
      case 2:
        return (
          formData.videoFootageDetails.length &&
          formData.videoFootageDetails.size
        );
      case 4:
        const isValid =
          formData.orderLogisticsDetails.videoTitle &&
          formData.orderLogisticsDetails.videoDescription &&
          formData.orderLogisticsDetails.videoCategory &&
          formData.orderLogisticsDetails.publishDate &&
          formData.orderLogisticsDetails.finalLength;
        console.log("Step 4 Validity:", isValid);
        return isValid;
      case 5:
        return formData.styleDetails !== "";
      case 6:
        return formData.orderDetails !== "";
      case 7:
        return formData.footageUpload !== null;
      default:
        return true;
    }
  };

  const steps = [
    {
      title: "Order Type",
      header: "Let's get Started on your order!",
      subheader:
        "Please select one of the following options to start your order!",
      content: (
        <div>
          <OrderType
            ORDER_TYPES={ORDER_TYPES}
            formData={formData}
            handleInputChange={handleOrderTypeChange}
            setOpenModal={setOpenModal}
          />
        </div>
      ),
    },
    {
      title: "Video Footage",
      header: "Video Footage Details",
      subheader: "Please select your preferred Video Footage Details option.",
      content: (
        <div>
          <VideoFootage
            videoFootageDetails={videoFootageDetails}
            handleSelectChange={handleSelectChange}
          />
        </div>
      ),
    },
    {
      title: "Addons",
      content: (
        <div>
          <Addons
            ADDONS={ADDONS}
            formData={formData}
            handleInputChange={(e) => handleAddonChange(e)}
          />
        </div>
      ),
    },
    {
      title: "Order Logistics",
      subheader: "Tell us a bit about your order...",
      content: (
        <div>
          <OrderLogistics
            handleInputChange={handleInputChange}
            orderLogisticsDetails={orderLogisticsDetails}
          />
        </div>
      ),
    },
    {
      title: "Style Details",
      content: (
        <div>
          <StyleDetails
            formData={formData.styleDetails}
            handleInputChange={(e) => handleInputChange(e)}
          />
        </div>
      ),
    },
    {
      title: "Order Details",
      header: "Order Details",
      subheader: "Please provide any additional details about your order.",
      content: (
        <div>
          <OrderDetails
            formData={formData.orderDetails}
            handleInputChange={(e) => handleInputChange(e)}
          />
        </div>
      ),
    },
    {
      title: "Footage Upload",
      header: "Footage Upload",
      subheader: "Please upload the footage you want us to edit.",
      content: (
        <div>
          <FootageUpload handleFileUpload={handleFileUpload} />
        </div>
      ),
    },
    {
      title: "Review Order",
      header: "Review Order",
      subheader: "Please review your order details before submitting.",
      content: (
        <div>
          <ReviewOrder formData={formData} />
        </div>
      ),
    },
  ];

  const filteredSteps = steps.filter(
    (step) => step.title !== "Addons" && step.title !== "Video Footage"
  );

  return (
    <div className="container mx-auto flex items-start justify-start h-full">
      <div className="w-1/4 p-4 flex flex-col gap-5 items-center justify-between">
        <div className="sticky top-4">
          <div className="flex items-end gap-1 mb-10">
            <Image
              src="https://ik.imagekit.io/umdiwr6ma/tlr%20logo.png?updatedAt=1706964634422"
              alt="logo"
              width={100}
              height={100}
            />
            <h3>
              <span className="text-white font-thin italic text-lg">Edits</span>
            </h3>
          </div>
          <ul className="space-y-4">
            {formData.orderType == "thumbnail"
              ? filteredSteps.map((step, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div
                      className={`rounded-full h-4 w-4 ${
                        currentStep === index + 1 ? "bg-amber-500" : "bg-white"
                      }`}
                    ></div>
                    <li
                      className={`p-2 rounded ${
                        currentStep === index + 1
                          ? "text-white font-bold"
                          : "text-white/80 font-extralight"
                      }`}
                    >
                      {step.title}
                    </li>
                  </div>
                ))
              : steps.map((step, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div
                      className={`rounded-full h-4 w-4 ${
                        currentStep === index + 1 ? "bg-amber-500" : "bg-white"
                      }`}
                    ></div>
                    <li
                      className={`p-2 rounded ${
                        currentStep === index + 1
                          ? "text-white font-bold"
                          : "text-white/80 font-extralight"
                      }`}
                    >
                      {step.title}
                    </li>
                  </div>
                ))}
          </ul>
        </div>
        <div className="flex flex-col items-center gap-4">
          <ClerkLoading>
            <Loader2 size={32} className=" text-white animate-spin" />
          </ClerkLoading>
          <ClerkLoaded>
            <UserButton />
          </ClerkLoaded>
        </div>
      </div>
      <div className="relative w-3/4 p-4">
        {openModal && <CalendlyModal onClick={() => setOpenModal(false)} />}
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-6">
          <div className="text-start">
            <h1 className="text-2xl font-semibold text-white mb-2">
              {steps[currentStep - 1].header}
            </h1>
            <p className="text-white">{steps[currentStep - 1].subheader}</p>
          </div>
          {steps[currentStep - 1].content}
          <div className="flex justify-between gap-4">
            <button
              type="button"
              onClick={prevStep}
              className={`${
                currentStep === 1 ? "opacity-50 cursor-not-allowed" : ""
              } px-4 py-2 bg-gray-500 text-white rounded`}
              disabled={currentStep === 1}
            >
              Previous
            </button>
            {currentStep < steps.length ? (
              <button
                type="button"
                onClick={nextStep}
                className={`${
                  !isCurrentStepValid() ? "opacity-50 cursor-not-allowed" : ""
                } px-4 py-2 bg-blue-500 text-white rounded`}
                disabled={!isCurrentStepValid()}
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                className="px-4 py-2 bg-green-500 text-white rounded"
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

export default TLREditsForm;
