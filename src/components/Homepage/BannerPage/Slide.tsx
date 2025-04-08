/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { ReactNode } from "react";
import { StaticImageData } from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface SlideProps {
  image: string | StaticImageData;
  children?: ReactNode;
  slideKey: string | number; // ✅ প্রতিটি স্লাইডের জন্য ইউনিক key লাগবে
}

// Parent animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    x: -100,
    transition: { duration: 0.5 },
  },
};

// Child elements animation
const itemVariants = {
  hidden: { y: -50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Slide: React.FC<SlideProps> = ({ image, children, slideKey }) => {
  const backgroundImageUrl = typeof image === "string" ? image : image.src;

  return (
    <div
      className="bg-center rounded-2xl bg-cover h-[38rem] relative"
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
      }}
    >
      <div className="flex items-center justify-center w-full h-full bg-gray-900/70 px-6">
        <div className="text-center text-white w-full">
          <AnimatePresence mode="wait"> {/* 👈 'wait' ensures exit completes before enter */}
            <motion.div
              key={slideKey} // ✅ প্রয়োজনীয় ইউনিক key
              className="mt-4 text-lg text-black bg-white lg:text-xl max-w-3xl mx-auto rounded-xl overflow-hidden"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="p-10">
                <motion.h1 className="text-3xl" variants={itemVariants}>
                  AMAZING <span className="text-red-900 font-bold">OUTLET</span>
                </motion.h1>

                <motion.p className="mt-4" variants={itemVariants}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                  Reprehenderit labore <br />
                  dolore maiores corrupti soluta ad animi. Eaque unde et earum!
                </motion.p>

                <motion.button
                  className="btn bg-black text-white px-4 py-2 mt-4"
                  variants={itemVariants}
                >
                  shop now
                </motion.button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Slide;
