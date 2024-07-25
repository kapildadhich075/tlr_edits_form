"use client";

import { TextareaHTMLAttributes, useContext, useState } from "react";

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
  AddonDetail,
  FORM_DATA,
  OrderDetail,
  OrderLogisticsDetails,
  StyleDetail,
  VideoFootageDetails,
} from "../constants/blueprints";
import CalendlyModal from "./CalendlyModal";
import { Loader2 } from "lucide-react";

import { IoReload } from "react-icons/io5";

import { AddonProvider } from "./AddonContext";
import { useAddonContext } from "./AddonContext";
import AddonDetails from "./AddonDetails";
const TLREditsForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [orderDetail, setOrderDetail] = useState<OrderDetail>({
    richTextData: "",
    slug: "",
    scriptLink: "",
  });
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
  const [style, setStyle] = useState<StyleDetail>({
    pace: "",
    tone: [],
  });
  const [addonDetails, setAddonDetails] = useState<AddonDetail>({
    tone: [],
    includeLogo: "",
    followThumbnail: "",
    thumbnailDescription: "",
    verticalReformatGoals: "",
    verticalReformatExampleVideos: "",
    squareReformatGoals: "",
    squareReformatExamples: "",
    horizontalReformatGoals: "",
    horizontalReformatExampleVideos: "",
    captionStyle: "",
    editingSoftware: "",
  });
  const [formData, setFormData] = useState<FORM_DATA>({
    orderType: "",
    videoFootageDetails: videoFootageDetails,
    Addons: "",
    AddonDetails: addonDetails,
    selectedAddons: [],
    orderLogisticsDetails: orderLogisticsDetails,
    styleDetails: style,
    orderDetails: orderDetail,
    footageUpload: "",
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
  const { selectedAddons } = useAddonContext();
  const handleInputChange = (
    event: React.ChangeEvent<
      HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement
    >,
    isChecked?: boolean
  ) => {
    const { name, value, type } = event.target;
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
    const { name, value, checked } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
      selectedAddons: checked
        ? [...prevFormData.selectedAddons, value]
        : prevFormData.selectedAddons.filter((addon) => addon !== value),
    }));
  };

  const handleAddonDetail = (
    event: React.ChangeEvent<
      HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = event.target;

    if (type === "checkbox") {
      const checked = (event.target as HTMLInputElement).checked;
      setAddonDetails((prevData) => {
        if (name === "tone") {
          const newTone = checked
            ? [...prevData.tone, value]
            : prevData.tone.filter((tone) => tone !== value);
          return {
            ...prevData,
            tone: newTone,
          };
        }
        return prevData;
      });

      setFormData((prevData) => {
        if (name === "tone") {
          const updatedTone = checked
            ? [...prevData.AddonDetails.tone, value]
            : prevData.AddonDetails.tone.filter((tone) => tone !== value);
          return {
            ...prevData,
            AddonDetails: {
              ...prevData.AddonDetails,
              tone: updatedTone,
            },
          };
        }
        return prevData;
      });
    } else {
      setAddonDetails((prevData) => ({
        ...prevData,
        [name]: value,
      }));

      setFormData((prevData) => ({
        ...prevData,
        AddonDetails: {
          ...prevData.AddonDetails,
          [name]: value,
        },
      }));
    }

    console.log({ [name]: value });
  };

  const handleStyleDetail = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = event.target;

    setStyle((prevStyle) => {
      if (name === "tone") {
        const newTone = checked
          ? [...prevStyle.tone, value]
          : prevStyle.tone.filter((tone) => tone !== value);
        return { ...prevStyle, tone: newTone };
      } else {
        return { ...prevStyle, [name]: value };
      }
    });

    setFormData((prevFormData) => {
      if (name === "tone") {
        const newTone = checked
          ? [...prevFormData.styleDetails.tone, value]
          : prevFormData.styleDetails.tone.filter((tone) => tone !== value);
        return {
          ...prevFormData,
          styleDetails: { ...prevFormData.styleDetails, tone: newTone },
        };
      } else {
        return {
          ...prevFormData,
          styleDetails: { ...prevFormData.styleDetails, [name]: value },
        };
      }
    });
  };

  const handleOrderDetail = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setOrderDetail((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
    setFormData((prevFormData) => ({
      ...prevFormData,
      orderDetails: {
        ...prevFormData.orderDetails,
        [name]: value,
      },
    }));
  };

  const handleRichTextChange = (content: string) => {
    setOrderDetail((prevDetails) => ({
      ...prevDetails,
      richTextData: content,
    }));
    setFormData((prevFormData) => ({
      ...prevFormData,
      orderDetails: {
        ...prevFormData.orderDetails,
        richTextData: content,
      },
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

  const handleVideoDriveLink = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      footageUpload: value,
    }));
  };

  // const nextStep = () => setCurrentStep(currentStep + 1);
  // const prevStep = () => setCurrentStep(currentStep - 1);

  const nextStep = () => {
    setCurrentStep((prevStep) => {
      const stepsToUse =
        formData.orderType === "thumbnail" ? filteredSteps : steps;
      const currentIndex = stepsToUse.findIndex(
        (step, index) => index === prevStep - 1
      );
      return currentIndex + 1 < stepsToUse.length ? currentIndex + 2 : prevStep;
    });
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => {
      const stepsToUse =
        formData.orderType === "thumbnail" ? filteredSteps : steps;
      const currentIndex = stepsToUse.findIndex(
        (step, index) => index === prevStep - 1
      );
      return currentIndex > 0 ? currentIndex : prevStep;
    });
  };
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
        return formData.selectedAddons;
      case 5:
        const isValid =
          formData.orderLogisticsDetails.videoTitle &&
          formData.orderLogisticsDetails.videoDescription &&
          formData.orderLogisticsDetails.videoCategory &&
          formData.orderLogisticsDetails.publishDate &&
          formData.orderLogisticsDetails.finalLength;
        console.log("Step 4 Validity:", isValid);

        return isValid;

      case 6:
        return formData.styleDetails.pace && formData.styleDetails.tone;

      case 7:
        return (
          formData.orderDetails.richTextData !== "" &&
          formData.orderDetails.slug !== "" &&
          formData.orderDetails.scriptLink !== ""
        );

      case 8:
        return formData.footageUpload !== null;

      default:
        return true;
    }
  };

  const steps = [
    {
      step: 1,
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
      step: 2,
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
      step: 3,
      title: "Addons",
      content: (
        <div>
          <Addons
            ADDONS={ADDONS}
            formData={formData.AddonDetails}
            handleInputChange={(e) => handleAddonChange}
          />
        </div>
      ),
    },
    {
      step: 4,
      title: "Addon Details",
      header: "Addon Details",
      subheader: "Give more details about addons.",
      content: (
        <div>
          <AddonDetails
            formData={formData.AddonDetails}
            handleInputChange={handleAddonDetail}
          />
        </div>
      ),
    },
    {
      step: 5,
      title: "Order Logistics",
      header: "Order Logistics",
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
      step: 6,
      title: "Style Details",
      header: "Style Details",
      subheader: "Please provide any additional details about your style.",
      content: (
        <div>
          <StyleDetails
            formData={formData.styleDetails}
            handleInputChange={handleStyleDetail}
          />
        </div>
      ),
    },
    {
      step: 7,
      title: "Order Details",
      header: "Order Details",
      subheader: "Please provide any additional details about your order.",
      content: (
        <div>
          <OrderDetails
            formData={formData.orderDetails}
            handleInputChange={handleOrderDetail}
            handleRichTextChange={handleRichTextChange}
          />
        </div>
      ),
    },
    {
      step: 8,
      title: "Footage Upload",
      header: "Footage Upload",
      subheader: "Please upload the footage you want us to edit.",
      content: (
        <div>
          <FootageUpload handleVideoDriveLink={() => handleVideoDriveLink} />
        </div>
      ),
    },
    {
      step: 9,
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
  console.log(steps[3]);

  const filteredSteps = steps.filter(
    (step) =>
      step.title !== "Addons" &&
      step.title !== "Video Footage" &&
      step.title !== "Addon Details"
  );

  return (
    <>
      <div className="  m-5 shadow-md flex  flex-row max-w-7xl  rounded-lg border-2 border-orange-300">
        <div className="flex-col flex gap-5 p-10 items-center   bg-gradient-to-tl from-black to-black/50  rounded-tl-lg rounded-bl-lg">
          <div className="">
            <Image
              src="https://ik.imagekit.io/umdiwr6ma/tlr%20logo.png?updatedAt=1706964634422"
              alt="logo"
              width={100}
              height={100}
            />
          </div>
          <ul className="flex flex-col gap-2 items-start">
            {(formData.orderType == "thumbnail" ? filteredSteps : steps).map(
              (step, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 justify-center"
                >
                  <div
                    className={`rounded-full h-4 w-4 ${
                      currentStep === index + 1 ? "bg-orange-500" : "bg-white"
                    }`}
                  ></div>
                  <li
                    className={`p-2  ${
                      currentStep === index + 1
                        ? "text-white font-bold"
                        : "text-white font-extralight"
                    }`}
                  >
                    {step.title}
                  </li>
                </div>
              )
            )}
          </ul>

          <button
            className=" text-black px-4 py-2 text-xs rounded-full bg-white"
            onClick={() => setCurrentStep(1)}
          >
            <IoReload size={20} />
          </button>
        </div>

        <div className="flex flex-col gap-4 w-full min-w-[1024px] p-8 rounded-tr-lg  rounded-br-lg bg-gradient-to-bl from-pink-600 to-slate-800">
          {openModal && <CalendlyModal onClick={() => setOpenModal(false)} />}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 items-start"
          >
            <div className="text-start">
              <h1 className="text-2xl font-semibold text-white mb-2">
                {steps[currentStep - 1].header}
              </h1>
              <p className="text-white">{steps[currentStep - 1].subheader}</p>
            </div>
            {steps[currentStep - 1].content}
            <div className="flex justify-between gap-4 w-full ">
              <button
                type="button"
                onClick={prevStep}
                className={`${
                  currentStep === 1 ? "opacity-50 cursor-not-allowed" : ""
                } px-4 py-2 bg-gray-500 text-white rounded-md`}
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
                  } px-4 py-2 bg-blue-500 text-white rounded-md`}
                  disabled={!isCurrentStepValid()}
                >
                  Next
                </button>
              ) : (
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-500 text-white rounded-md"
                >
                  Submit
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default TLREditsForm;
