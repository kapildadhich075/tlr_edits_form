import React from "react";
import ImageCarousel from "./ImageCarousel";
import Details from "./Details";
import Details2 from "./Details2";
import Amenity from "./Amenity";
import DesktopButtons from "./DesktopButtons";
import FixedCard from "./FixedCard";

const PropertyCard = () => {
  return (
    <div className="relative bg-slate-200 p-0 md:p-5 lg:p-5 m-5 rounded-md flex flex-col md:flex-row gap-5 justify-center items-center">
      <div className="md:w-1/2 lg:w-2/3">
        <ImageCarousel />
      </div>
      <div className="flex flex-col justify-between md:w-1/2 lg:w-2/3 p-5">
        <div className="md:scrollable-content lg:scrollable-content overflow-auto md:h-auto lg:h-auto h-[400px]">
          <div className="mb-2">
            <h1 className="text-2xl font-light">Tangled Up In Green</h1>
          </div>

          <div className="mt-2">
            <h1 className="text-xl font-normal">Tangled Up In Green</h1>
            <p className="text-sm text-black text-left font-extralight">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              nec purus ac augue luctus aliquam. Integer nec semper nunc. Donec
              ultricies, nunc nec tristique fermentum, nunc libero convallis
              metus, sit amet tincidunt nunc neque id nunc. Donec ultricies,
              nunc nec tristique fermentum, nunc libero convallis metus, sit
              amet tincidunt nunc neque id nunc.
            </p>
          </div>

          <div className="border-t-2 border-stone-400 mt-3"></div>

          <div className="flex flex-col md:flex-row p-2 mt-5 items-start md:items-stretch gap-5">
            <div className="flex flex-col w-full">
              <div className="">
                <Details />
                <div className="border-t-2 border-yellow-900 mb-2 mt-2"></div>
                <Details2 />
                <div className="border-t-2 border-yellow-900 mt-2 mb-2"></div>

                <div className="hidden md:block md:w-full">
                  <Amenity />
                </div>
              </div>
            </div>
            <div className="hidden md:block md:w-full">
              <img
                src="/image.png"
                alt="Luxury Home"
                className="rounded-lg shadow-lg object-cover w-[500px] h-[430px] ml-4"
              />
            </div>
          </div>
        </div>
        <DesktopButtons />
      </div>
      <div className="block md:hidden relative bottom-0 rounded-2xl left-0 right-0 bg-white  shadow-lg z-50">
        <FixedCard />
      </div>
    </div>
  );
};

export default PropertyCard;
