import React from 'react';

const Map = () => {
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.3727457765403!2d75.87110847501972!3d22.714382927759416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd40f16f9f4b%3A0x1628300439af6dca!2sClumpCoder!5e0!3m2!1sen!2sin!4v1757060738207!5m2!1sen!2sin";
  
  const handleViewFullMap = () => {
    window.open("https://www.google.com/maps/place/ClumpCoder/@22.7143829,75.8711085,17z/data=!3m1!4b1!4m6!3m5!1s0x3962fd40f16f9f4b:0x1628300439af6dca!8m2!3d22.7143829!4d75.8711085!16s%2Fg%2F11t8k5k5k5", "_blank");
  };

  return (
    <div className="w-full h-[500px] relative mb-16">
      {/* Google Maps Embed */}
      <iframe
        src={mapEmbedUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="ClumpCoder Location Map"
        className="rounded-lg"
      ></iframe>
      
      {/* View Full Map Button */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <button
          onClick={handleViewFullMap}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-lg transition-colors duration-300 font-medium flex items-center gap-2"
        >
          <svg 
            className="w-5 h-5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
            />
          </svg>
          View Full Map
        </button>
      </div>
    </div>
  );
};

export default Map;
