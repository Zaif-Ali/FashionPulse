import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import { BiArrowBack } from "react-icons/bi";
const HeroCarousel = () => {
  return (
    <>
      <div className="relative text-white text-[20px] w-full max-w-[1360px] mx-auto pt-10">
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          showIndicators={false}
          showStatus={false}
          renderArrowPrev={(clickHandler, hasPrev) => (
            <div
              onClick={clickHandler}
              className="absolute right-[31px] md:right-[51px] bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
            >
              <BiArrowBack className="text-sm md:text-lg" />
            </div>
          )}
          renderArrowNext={(clickHandler, hasNext) => (
            <div
              onClick={clickHandler}
              className="absolute right-0 bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
            >
              <BiArrowBack className="rotate-180 text-sm md:text-lg" />
            </div>
          )}
        >
          <div>
            <img
              src="/slide-2.png"
              className="aspect-[16/10] md:aspect-auto object-cover"
            />
          </div>
          <div>
            <img
              src="/slide-4.png"
              className="aspect-[16/10] md:aspect-auto object-cover"
            />
          </div>
          <div>
            <img
              src="/slide-6.png"
              className="aspect-[16/10] md:aspect-auto object-cover"
            />
          </div>
          <div>
            <img
              src="/slide-7.png"
              className="aspect-[16/10] md:aspect-auto object-cover"
            />
          </div>
          <div>
            <img
              src="/slide-8.png"
              className="aspect-[16/10] md:aspect-auto object-cover"
            />
          </div>
          <div>
            <img
              src="/slide-9.png"
              className="aspect-[16/10] md:aspect-auto object-cover"
            />
          </div>
          <div>
            <img
              src="/slide-10.png"
              className="aspect-[16/10] md:aspect-auto object-cover"
            />
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default HeroCarousel;