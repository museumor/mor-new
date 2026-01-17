'use client';

import { useEffect } from 'react';

export default function DownloadPage() {
  
  useEffect(() => {
    // Optional: Auto-redirect after a few seconds
    const timer = setTimeout(() => {
       window.location.href = "https://store.steampowered.com/app/1053010/Museum_of_Other_Realities/";
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-screen bg-black flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Redirecting to Steam...</h1>
      <p className="text-gray-400 mb-10 max-w-lg">
        The Museum of Other Realities is available on Steam for PC VR headsets.
      </p>
      
      <div className="flex flex-col gap-4">
        <a 
          href="https://store.steampowered.com/app/1053010/Museum_of_Other_Realities/"
          className="px-8 py-4 bg-[#66c0f4] text-black font-bold text-lg rounded hover:bg-white transition-colors flex items-center justify-center gap-3"
        >
          <span>Continue to Steam</span>
        </a>
        
        <a href="/" className="text-sm text-gray-500 hover:text-white mt-4 underline">
          Return to Homepage
        </a>
      </div>
    </div>
  );
}
