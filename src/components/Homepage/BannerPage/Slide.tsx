import React, { ReactNode } from "react";
import { StaticImageData } from "next/image";

interface SlideProps {
  image: string | StaticImageData;
  children?: ReactNode; // ✅ এই লাইন অ্যাড করলে children নেওয়া যাবে
}

const Slide: React.FC<SlideProps> = ({ image, children }) => { 

  
  const backgroundImageUrl =
    typeof image === "string" ? image : image.src;

  return (
    <div
      className="bg-center rounded-2xl bg-cover h-[38rem] relative"
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
      }}
    >
      <div className="flex items-center justify-center w-full h-full bg-gray-900/70 px-6">
        <div className="text-center text-white">
          {children ? (
            children
          ) : (
            <p className="mt-4 text-lg text-white/90 lg:text-xl max-w-3xl mx-auto">
              Embark on unforgettable journeys, explore hidden gems, and create lifelong memories.
              From majestic mountains to serene beaches, your next adventure starts here.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Slide;
