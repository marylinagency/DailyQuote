
import React from 'react';

const SplashScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-[#9b87f5] to-[#7E69AB]">
      <div className="text-center animate-scale-in">
        <h1 className="text-4xl font-bold text-white mb-4">Daily Quotes</h1>
        <p className="text-xl text-white/80">Inspire Your Day</p>
      </div>
    </div>
  );
};

export default SplashScreen;
