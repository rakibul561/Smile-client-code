'use client'

const Footer:React.FC = () => {
  return (
    <footer className="bg-black mt-10 text-gray-400 py-10 px-4 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* About Store */}
        <div>
          <h3 className="text-white font-bold mb-4">ABOUT STORE</h3>
          <h2 className="text-white text-3xl font-bold mb-2">
            Smile<span className="text-red-500">.</span>
          </h2>
          <p className="text-sm leading-6">
            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus
          </p>
          <div className="flex space-x-4 mt-4 text-xl">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fas fa-rss"></i>
            <i className="fas fa-envelope"></i>
            <i className="fab fa-pinterest-p"></i>
            <i className="fab fa-instagram"></i>
          </div>
        </div>

        {/* Latest Tweets */}
        <div>
          <h3 className="text-white font-bold mb-4">LATEST TWEETS</h3>
          <p className="text-sm">No tweets available</p>
        </div>

        {/* Product Tags */}
        <div>
          <h3 className="text-white font-bold mb-4">PRODUCT TAGS</h3>
          <div className="flex flex-wrap gap-2">
            {["fashion", "sports", "business", "news", "night", "freedom", "design", "miracle", "gallery", "collection", "pen", "pants", "jeans", "photos", "oscar", "smile", "love", "sunshine", "luxury", "forever", "inlove"].map(tag => (
              <span key={tag} className="bg-gray-800 text-sm px-3 py-1 rounded cursor-pointer">{tag}</span>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-white font-bold mb-4">NEWSLETTER</h3>
          <p className="text-sm mb-2">Sign up for our newsletter and promotions</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email address here."
              className="p-2 flex-1 text-sm text-black"
            />
            <button className="bg-[#f97362] text-white px-4 py-2 ml-2 text-sm">SUBSCRIBE !</button>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-sm flex flex-col md:flex-row justify-between items-center">
        <div className="space-x-4 mb-4 md:mb-0">
          <a href="#">Site Map</a>
          <a href="#">Search Terms</a>
          <a href="#">Advanced Search</a>
          <a href="#">Orders and Returns</a>
          <a href="#">Customer Service</a>
        </div> 
        {/* 
        https://i.ibb.co.com/JW3RN64p/download-1.jpg

*/}
        <div className="text-center md:text-left">
          Copyright 2015 · Designed & Developed by <span className="text-orange-400">jThemes Studio</span>. All rights reserved
        </div>
        <div className="flex items-center text-2xl space-x-4 mt-4 md:mt-0">
          <img src="https://i.ibb.co.com/JW3RN64p/download-1.jpg" alt="American Express" className="h-6" />
          <img src="https://i.ibb.co.com/JW3RN64p/download-1.jpg" alt="American Express" className="h-6" />
          <img src="https://i.ibb.co.com/JW3RN64p/download-1.jpg" alt="American Express" className="h-6" />
          <img src="https://i.ibb.co.com/JW3RN64p/download-1.jpg" alt="American Express" className="h-6" />
          <img src="https://i.ibb.co.com/JW3RN64p/download-1.jpg" alt="American Express" className="h-6" />
     
          <img src="https://i.ibb.co.com/JW3RN64p/download-1.jpg" alt="American Express" className="h-6" />
          <img src="https://i.ibb.co.com/JW3RN64p/download-1.jpg" alt="American Express" className="h-6" />
          <img src="https://i.ibb.co.com/JW3RN64p/download-1.jpg" alt="American Express" className="h-6" />
          <img src="https://i.ibb.co.com/JW3RN64p/download-1.jpg" alt="American Express" className="h-6" />
     
        </div>
      </div>
    </footer> 
    
  );
};

export default Footer;
