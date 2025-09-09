import React from 'react';

const Preloader: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-gray-900 flex items-center justify-center z-50">
      <div className="text-center">
        <div className="flex items-end justify-center space-x-2 mb-8">
          {[0, 1, 2, 3].map((index) => (
            <div
              key={index}
              className="bg-teal-500 rounded-sm animate-pulse"
              style={{
                width: '8px',
                height: `${20 + index * 8}px`,
                animationDelay: `${index * 0.2}s`,
                animationDuration: '1.2s'
              }}
            />
          ))}
        </div>
        <div className="text-2xl font-bold text-teal-500 mb-2">QUADVIA TECHNOLOGIES</div>
        <div className="text-gray-400 text-sm">Stay Connected. Stay Secured.</div>
      </div>
    </div>
  );
};

export default Preloader;