import React from "react";

const MainSection = () => {
  return (
    <section className="flex flex-col justify-center items-center select-none h-full min-h-screen">
      <div className="flex flex-col justify-center items-center w-full gap-10">
        <div className="flex flex-col justify-center items-center gap-2">
          <p className="md:text-base text-sm font-normal">
            Template Information
          </p>
          <h1 className="lg:text-5xl font-bold md:text-3xl sm:text-xl text-lg">
            Licencing
          </h1>
        </div>
        <div className="flex flex-col justify-start items-start gap-10">
          <div className="flex flex-col justify-start items-start gap-4">
            <div className="flex flex-col justify-start items-start gap-2">
              <h1 className="lg:text-2xl font-bold md:text-xl sm:text-lg text-base">
                Icons & Graphics
              </h1>
              <div className="flex flex-col justify-start items-start">
                <p className="md:text-base text-sm font-normal lg:text-lg">
                  Icons and Graphics were manually designed by the VictorFlow
                  team. You may download these and edit them to fit your website
                  without asking{" "}
                </p>
                <p className="md:text-base text-sm font-normal lg:text-lg">
                  for permission or providing credit.
                </p>
              </div>
            </div>
            <h1 className="lg:text-2xl font-bold md:text-xl sm:text-lg text-base">
              Phosphor Icons: <span className="text-[#40DDB6]">License</span>
            </h1>
          </div>
          <div className="flex flex-col justify-start items-start gap-4">
            <div className="flex flex-col justify-start items-start gap-2">
              <h1 className="lg:text-2xl font-bold md:text-xl sm:text-lg text-base">
                Photography
              </h1>
              <div className="flex flex-col justify-start items-start">
                <p className="md:text-base text-sm font-normal lg:text-lg">
                  All images used in the WhiteCollar Webflow Template are
                  licensed for free personal and commercial use. If you'd like
                  to use any specific image,{" "}
                </p>
                <p className="md:text-base text-sm font-normal lg:text-lg">
                  you can check the licenses and download the images for free on
                  Unsplash, Pexels.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-start items-start gap-2">
              <h1 className="lg:text-2xl font-bold md:text-xl sm:text-lg text-base">
                Pexels: <span className="text-[#40DDB6]">License</span>
              </h1>
              <div className="flex flex-col justify-start items-start">
                <p className="md:text-base text-sm font-normal lg:text-lg text-[#40DDB6]">
                  Image 1,Image 2,Image 3,Image 4,Image 5,Image 6,Image 7,Image
                  8,Image 9,Image 10,Image 11,Image 12,Image 13,Image 14,Image
                  15,Image{" "}
                </p>
                <p className="md:text-base text-sm font-normal lg:text-lg text-[#40DDB6]">
                  16,Image 17,Image 18,Image 19,Image 20
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-start items-start gap-2">
              <h1 className="lg:text-2xl font-bold md:text-xl sm:text-lg text-base">
                Unsplash: <span className="text-[#40DDB6]">License</span>
              </h1>
              <div className="flex flex-col justify-start items-start">
                <p className="md:text-base text-sm font-normal lg:text-lg text-[#40DDB6]">
                  Image 1,Image 2,Image 3,Image 4,Image 5,Image 6,Image 7,Image
                  8,Image 9,Image 10,Image 11,Image 12,Image 13,Image 14,Image
                  15,Image{" "}
                </p>
                <p className="md:text-base text-sm font-normal lg:text-lg text-[#40DDB6]">
                  16,Image 17
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start gap-2">
            <h1 className="lg:text-2xl font-bold md:text-xl sm:text-lg text-base">
              Fonts
            </h1>
            <p className="md:text-base text-sm font-normal lg:text-lg">
              WhiteCollar template uses free licensed{" "}
              <span className="text-[#40DDB6]">Google Fonts</span>. Please check{" "}
              <span className="text-[#40DDB6]">Poppins</span> and{" "}
              <span className="text-[#40DDB6]">Inter</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
