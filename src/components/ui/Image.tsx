import React, { useState } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { LuUser } from 'react-icons/lu';

interface ImageWithSkeletonProps {
  src?: string | null;
  alt?: string;
  className?: string; // Additional styles for the image
}

const Image: React.FC<ImageWithSkeletonProps> = ({ src, alt, className }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="size-full flex items-center justify-center bg-neutral-700 relative">
      {!isLoaded && src && (
        <Skeleton className="absolute inset-0 w-full h-full" />
      )}
      {src ? (
        <img
          src={src}
          alt={alt || ''}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          } ${className}`}
          onLoad={() => {
            setTimeout(() => {
              setIsLoaded(true);
            }, 3000);
          }}
        />
      ) : (
        <LuUser />
      )}
    </div>
  );
};

export default Image;
