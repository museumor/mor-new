'use client';

import { useState } from 'react';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
}

export default function SafeImage({ src, fallbackSrc, className, ...props }: SafeImageProps) {
  const [hasError, setHasError] = useState(false);
  
  // Prefix with base path if it's a local absolute path (starts with /) and not an external URL
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  let finalSrc = src;

  if (src && typeof src === 'string' && src.startsWith('/') && !src.startsWith('http')) {
      // Avoid double prefixing if it somehow already has it (though unlikely with current data)
      if (basePath && !src.startsWith(basePath)) {
          finalSrc = `${basePath}${src}`;
      }
  }

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
      src={finalSrc}
      className={className}
      {...props}
      onError={() => setHasError(true)}
    />
  );
}