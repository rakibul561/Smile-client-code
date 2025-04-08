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
            <div className="mt-4 text-lg  text-black bg-white lg:text-xl max-w-3xl mx-auto">
             <div className="p-10">
             <h1 className="text-3xl"> AMAZING  <span className="text-red-900 font-bold">OUTLET</span>  </h1> 
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Reprehenderit labore  <br /> dolore maiores corrupti soluta ad animi. Eaque unde et earum!</p>
             <button className="btn bg-black text-white px-4 py-2 mt-4">shop now</button>
             </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Slide;
