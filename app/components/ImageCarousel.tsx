import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function ImageCarousel() {
  const [showThumbs, setShowThumbs] = useState(window.innerWidth > 900);

  useEffect(() => {
    const handleResize = () => {
      setShowThumbs(window.innerWidth > 768);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="max-w-4xl">
      <Carousel
        showArrows={true}
        showStatus={false}
        showIndicators={false}
        thumbWidth={200}
        dynamicHeight={true}
        showThumbs={showThumbs}
        autoPlay={true}
        infiniteLoop={true}
      >
        <div className="w-full h-full">
          <img
            src="https://impacthomes.co.in/wp-content/uploads/2023/04/luxury-home.jpg"
            alt="Luxury Home"
            className="w-full  object-cover"
          />
        </div>
        <div>
          <img
            src="https://impacthomes.co.in/wp-content/uploads/2023/04/luxury-home.jpg"
            className="w-full  object-cover"
          />
        </div>
        <div>
          <img
            src="https://impacthomes.co.in/wp-content/uploads/2023/04/luxury-home.jpg"
            className="w-full object-cover"
          />
        </div>
        <div>
          <img
            src="https://impacthomes.co.in/wp-content/uploads/2023/04/luxury-home.jpg"
            className="w-full object-cover"
          />
        </div>
        <div>
          <img
            src="https://impacthomes.co.in/wp-content/uploads/2023/04/luxury-home.jpg"
            className="w-full object-cover"
          />
        </div>
      </Carousel>
    </div>
  );
}
