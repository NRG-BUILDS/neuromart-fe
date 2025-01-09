import React, { useState } from 'react';
import bg from '@/images/background/dashboard-bg.png';
import { useLocation } from 'react-router-dom';

const allowedPages = ['/dashboard'];
const BgGradient: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  const isBgPage = () => {
    for (let i in allowedPages) {
      if (location.pathname === allowedPages[i]) {
        return true;
      }
    }
    return false;
  };

  return (
    <div className="absolute top-0 left-0 w-full h-svh bg-black ">
      {isLoading && (
        <div className="absolute top-0 left-0 size-full bg-gradient-to-r from-[#3732FF26] via-[#FF61F600] to-[#FF61F600]"></div>
      )}{' '}
      {isBgPage() ? (
        <img
          src={bg}
          alt=""
          onLoad={() => setIsLoading(false)}
          className="size-full object-cover"
        />
      ) : (
        <div className="absolute top-0 left-0 size-full bg-gradient-to-r from-[#3732FF26] via-[#FF61F600] to-[#FF61F600]"></div>
      )}
    </div>
  );
};

export default BgGradient;
