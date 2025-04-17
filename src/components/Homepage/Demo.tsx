'use client';

import Image from 'next/image';
import React from 'react';

const Demo: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto mt-8">
      <section className="bg-white">
        <div className="px-6 py-4 mx-auto">
          <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2 xl:grid-cols-3">
            {/* Post 1 */}
            <div>
              <div className="relative">
                <Image
                  className="object-cover object-center rounded-lg"
                  src="https://i.ibb.co/BKTBmTNZ/beautiful-woman-sitting-home-with-electronic-devices-shopping-bags-credit-card-hand-23-2148101678.jpg"
                  alt="Shopping woman"
                  width={600}
                  height={320}
                  layout="responsive"
                />
                <div className="absolute bottom-0 flex p-3 bg-white">
                  <Image
                    className="object-cover object-center rounded-full"
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
                    alt="Tom Hank"
                    width={40}
                    height={40}
                  />
                  <div className="mx-4">
                    <h1 className="text-sm text-black">Tom Hank</h1>
                    <p className="text-sm text-black">Creative Director</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Post 2 */}
            <div>
              <div className="relative">
                <Image
                  className="object-cover object-center rounded-lg"
                  src="https://i.ibb.co/Fks7X9Bt/young-man-wearing-dark-shirt-jeans-carried-several-bags-go-shopping-with-credit-card-1150-27747.jpg"
                  alt="Shopping man"
                  width={600}
                  height={320}
                  layout="responsive"
                />
                <div className="absolute bottom-0 flex p-3 bg-white">
                  <Image
                    className="object-cover object-center rounded-full"
                    src="https://i.ibb.co/GQvmhmZc/social-media-marketing-concept-marketing-with-applications-23-2150063134.jpg"
                    alt="Tom Hank"
                    width={40}
                    height={40}
                  />
                  <div className="mx-4">
                    <h1 className="text-sm text-black">Tom Hank</h1>
                    <p className="text-sm text-black">Creative Director</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Post 3 */}
            <div>
              <div className="relative">
                <Image
                  className="object-cover object-center rounded-lg"
                  src="https://i.ibb.co/Fqxt3nWG/expressive-young-woman-posing-studio-176474-36192.jpg"
                  alt="Posing woman"
                  width={600}
                  height={320}
                  layout="responsive"
                />
                <div className="absolute top-0 flex p-3 bg-white">
                  <Image
                    className="object-cover object-center rounded-full"
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
                    alt="Tom Hank"
                    width={40}
                    height={40}
                  />
                  <div className="mx-4">
                    <h1 className="text-sm text-black">Tom Hank</h1>
                    <p className="text-sm text-black">Creative Director</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Post 3 ends */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Demo;
