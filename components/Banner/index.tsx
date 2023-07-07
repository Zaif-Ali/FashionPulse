import React, { useState } from "react";
const Banner = () => {
  const [DefaultData, setDefaultData] = useState(() => {
    return {
      latestInfo: [
        "24 August Sale is on , Now you get 24% on all your favourtes products",
      ],
    };
  });
  return (
    <>
      <div
        id="banner"
        className="flex gap-8 justify-center items-center  w-full bg-primary-foreground  border-primary-foreground/20 sm:items-center dark:border-primary   dark:bg-primary "
      >
        <span className="news-text text-darktextColor font-semibold py-1 px-4 md:py-2">
          {DefaultData.latestInfo}
        </span>
      </div>
    </>
  );
};

export default Banner;
