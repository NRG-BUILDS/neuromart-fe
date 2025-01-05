import React, { useState } from 'react';
import bg from '@/images/background/dashboard-bg.png';

const BgGradient: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div className="absolute top-0 left-0 w-full h-svh ">
      {isLoading && (
        <div className="absolute top-0 left-0 size-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
      )}{' '}
      <img
        src={bg}
        alt=""
        onLoad={() => setIsLoading(false)}
        className="size-full object-cover"
      />
    </div>
  );
};

export default BgGradient;
