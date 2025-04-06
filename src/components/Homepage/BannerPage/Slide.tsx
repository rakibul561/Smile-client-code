import React from "react";

interface SlideProps {
  image: string; // Image path as a string
}

const Slide: React.FC<SlideProps> = ({ image }) => { 
    console.log(image);
    
  return (
    <div
      className="bg-center rounded-2xl bg-cover h-[38rem] relative"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="flex items-center justify-center w-full h-full bg-gray-900/70 px-6">
        <div className="text-center">
          
          <p className="mt-4 text-lg text-white/90 lg:text-xl max-w-3xl mx-auto">
            Embark on unforgettable journeys, explore hidden gems, and create lifelong memories.
            From majestic mountains to serene beaches, your next adventure starts here.
          </p>
         
          
        </div>
      </div>
    </div>
  );
};

export default Slide;
