"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { InputCard } from "./InputCard";
import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
import { Loader2, X } from "lucide-react";
import { InlineWidget } from "react-calendly";
import { ORDER_TYPES } from "../constants/OrderType";
import { ADDONS } from "../constants/Addons";
import { AddonCard } from "./AddonCard";
import { Content } from "next/font/google";
import OrderLogistics from "./OrderLogistics";
import OrderType from "./OrderTypes";
import VideoFootage from "./VideoFootage";
import Addons from "./Addons";
import StyleDetails from "./StyleDetails";
import OrderDetails from "./OrderDetails";
import FootageUpload from "./FootageUpload";
import ReviewOrder from "./ReviewOrder";

interface VideoFootageDetails {
  length: string;
  size: string;
}
interface OrderLogisticsDetails {
  videoTitle: String;
  videoCategory: String;
  videoDescription: String;
  publishDate: String;
  finalLength: Number;
}
interface FORM_DATA {
  orderType: string;
  videoFootageDetails: VideoFootageDetails;
  Addons: string;
  orderLogisticsDetails: OrderLogisticsDetails;
  styleDetails: string;
  orderDetails: string;
  footageUpload: File | null;
}
const TastyEditsForm = () => {
  const router = useRouter();

  const [currentStep, setCurrentStep] = useState(1);
  const [orderLogisticsDetails, setOrderLoigisticDetails] = useState({
    videoTitle: "",
    videoCategory: "",
    videoDescription: "",
    publishDate: "",
    finalLength: 0,
  });
  const [videoFootageDetails, setVideoFootageDetails] = useState({
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

    setOrderLoigisticDetails((prevDetails) => ({
      ...prevDetails,
      [name.split(".")[1]]: value,
    }));
    setFormData((prevFormData) => ({
      ...prevFormData,
      orderLogisticsDetails: {
        ...prevFormData.orderLogisticsDetails,
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

    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));

    setOrderLoigisticDetails((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    console.log(orderLogisticsDetails);
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
    switch (currentStep) {
      case 1:
        return formData.orderType !== "";
      case 2:
        return (
          formData.videoFootageDetails.length &&
          formData.videoFootageDetails.size
        );
      case 3:
        return formData.Addons !== "";
      case 4:
        const {
          videoTitle,
          videoCategory,
          videoDescription,
          publishDate,
          finalLength,
        } = formData.orderLogisticsDetails;
        return (
          videoTitle !== "" &&
          videoCategory !== "" &&
          videoDescription !== "" &&
          publishDate !== "" &&
          finalLength !== 0
        );
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
            handleInputChange={handleInputChange}
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
            handleInputChange={(e) => handleInputChange(e)}
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
            orderLogisticsDetails={orderLogisticsDetails}
            handleInputChange={handleInputChange}
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
        <div className="flex flex-row items-center justify-center gap-4">
          <div className="flex flex-col items-center justify-center gap-4">
            <ClerkLoaded>
              <UserButton afterSignOutUrl="/" />
            </ClerkLoaded>
            <ClerkLoading>
              <Loader2 className="size-8 text-slate-400 animate-spin" />
            </ClerkLoading>
          </div>
        </div>
        <p className="text-white text-xs">&copy; 2024 TLR Edits.</p>
      </div>

      <div className="w-2.5/4 flex flex-col justify-between container">
        <form onSubmit={handleSubmit} className="my-4">
          {formData.orderType == "thumbnail"
            ? filteredSteps.map((step, index) => (
                <div key={index}>
                  {currentStep === index + 1 && (
                    <>
                      <h1 className="text-3xl font-extrabold text-white mb-2">
                        {step.title}
                      </h1>
                      <p className="text-gray-200 mb-4">{step.subheader}</p>
                      <div className="step-content">{step.content}</div>
                    </>
                  )}
                </div>
              ))
            : steps.map((step, index) => (
                <div key={index}>
                  {currentStep === index + 1 && (
                    <>
                      <h1 className="text-3xl font-extrabold text-white mb-2">
                        {step.title}
                      </h1>
                      <p className="text-gray-200 mb-4">{step.subheader}</p>
                      <div className="step-content">{step.content}</div>
                    </>
                  )}
                </div>
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
                className="bg-orange-400 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus-shadow-outline"
                disabled={!isCurrentStepValid()}
              >
                Next
              </button>
            )}
            {currentStep === steps.length && (
              <button
                type="submit"
                className="bg-amber-500 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus-shadow-outline"
                disabled={!isCurrentStepValid()}
              >
                Submit
              </button>
            )}
          </div>
        </form>
      </div>

      {openModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 relative">
            <button
              onClick={() => setOpenModal(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <X />
            </button>
            <h2 className="text-xl font-bold mb-4">Custom Order Request</h2>
            <p className="text-gray-700 mb-4">
              Your order requires a custom quote. Click the button below to
              schedule a call with our team.
            </p>
            <InlineWidget url="https://calendly.com/info-thelectureroom" />
          </div>
        </div>
      )}
    </div>
  );
};

export default TastyEditsForm;
