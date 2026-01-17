'use client';

import { useState } from 'react';
import { BASE_PATH } from '@/lib/constants';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
}

export default function SafeImage({ src, fallbackSrc, className, ...props }: SafeImageProps) {
  const [hasError, setHasError] = useState(false);
  
  let finalSrc = src;

  // Prefix with base path if it's a local absolute path (starts with /) and not an external URL
  if (src && typeof src === 'string' && src.startsWith('/') && !src.startsWith('http')) {
      // Avoid double prefixing if it somehow already has it
      if (BASE_PATH && !src.startsWith(BASE_PATH)) {
          finalSrc = `${BASE_PATH}${src}`;
      }
  }

  if (hasError) {
    if (fallbackSrc) {
      return (
        <img
          src={fallbackSrc}
          className={className}
          {...props}
          onError={(e) => { e.currentTarget.style.display = 'none'; }} 
        />
      );
    }
    return null;
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