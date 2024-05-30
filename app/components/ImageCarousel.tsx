import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function ImageCarousel() {
  const [showThumbs, setShowThumbs] = useState(window.innerWidth > 900);

  if (typeof window === "undefined") {
    return null;
  }

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
      >
        <div className="w-full h-full">
          <img
            src="https://impacthomes.co.in/wp-content/uploads/2023/04/luxury-home.jpg"
            alt="Luxury Home"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <img
            src="https://d27p8o2qkwv41j.cloudfront.net/wp-content/uploads/2016/06/dreamstime_m_4794570-e1467280605773.jpg"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <img
            src="https://images.squarespace-cdn.com/content/v1/614b8a3ca23b0a1609d011b0/1633600657482-RD46JYBH5UB94DFT8GFI/lofthouseresidences_hero_innovation2.jpg"
            className="w-full h-full object-cover"
          />
        </div>
      </Carousel>
    </div>
  );
}
