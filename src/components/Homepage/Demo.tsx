import React from 'react';

const Demo: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto  mt-8">
      <section className="bg-white ">
        <div className=" px-6 py-4 mx-auto">
          

          <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2 xl:grid-cols-3">
            {/* Post 1 */}
            <div>
              <div className="relative">
                <img
                  className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
                  src="https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
                  alt=""
                />
                <div className="absolute bottom-0 flex p-3 bg-white">
                  <img
                    className="object-cover object-center w-10 h-10 rounded-full"
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
                    alt=""
                  />
                  <div className="mx-4">
                    <h1 className="text-sm  text-black">Tom Hank</h1>
                    <p className="text-sm  text-black">Creative Director</p>
                  </div>
                </div>
              </div>

            
            </div>
            {/* Post 1 */}
            <div>
              <div className="relative">
                <img
                  className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
                  src="https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
                  alt=""
                />
                <div className="absolute top-0 flex p-3 bg-white">
                  <img
                    className="object-cover object-center w-10 h-10 rounded-full"
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
                    alt=""
                  />
                  <div className="mx-4">
                    <h1 className="text-sm  text-black">Tom Hank</h1>
                    <p className="text-sm  text-black">Creative Director</p>
                  </div>
                </div>
              </div>

            
            </div>
            {/* Post 1 */}
            <div>
              <div className="relative">
                <img
                  className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
                  src="https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
                  alt=""
                />
                <div className="absolute bottom-0 flex p-3 bg-white">
                  <img
                    className="object-cover object-center w-10 h-10 rounded-full"
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
                    alt=""
                  />
                  <div className="mx-4">
                    <h1 className="text-sm  text-black">Tom Hank</h1>
                    <p className="text-sm  text-black">Creative Director</p>
                  </div>
                </div>
              </div>

            
            </div>

        

          </div>
        </div>
      </section>
    </div>
  );
};

export default Demo;
