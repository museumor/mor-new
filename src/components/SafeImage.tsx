'use client';

import { useState } from 'react';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
}

export default function SafeImage({ src, fallbackSrc, className, ...props }: SafeImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    if (fallbackSrc) {
      return (
        <img
          src={fallbackSrc}
          className={className}
          {...props}
          // If fallback fails, prevent infinite loop by not having an onError or a simple hide
          onError={(e) => { e.currentTarget.style.display = 'none'; }} 
        />
      );
    }
    return null; // Remove from DOM if no fallback
  }

  return (
    <img
      src={src}
      className={className}
      {...props}
      onError={() => setHasError(true)}
    />
  );
}
