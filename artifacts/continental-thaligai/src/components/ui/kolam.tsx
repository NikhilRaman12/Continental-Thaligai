import React from 'react';

interface KolamProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  opacity?: number;
}

export function KolamDivider({ className, opacity = 0.1, ...props }: KolamProps) {
  return (
    <svg 
      width="100%" 
      height="40" 
      viewBox="0 0 1000 40" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ opacity }}
      {...props}
      preserveAspectRatio="xMidYMid slice"
    >
      <pattern id="kolam-divider" x="0" y="0" width="80" height="40" patternUnits="userSpaceOnUse">
        {/* Repeating dot pattern */}
        <circle cx="10" cy="20" r="1.5" fill="currentColor" />
        <circle cx="30" cy="20" r="1.5" fill="currentColor" />
        <circle cx="50" cy="20" r="1.5" fill="currentColor" />
        <circle cx="70" cy="20" r="1.5" fill="currentColor" />
        
        {/* Diamond motif crossing the dots */}
        <path d="M40 5 L60 20 L40 35 L20 20 Z" stroke="currentColor" strokeWidth="1" fill="none" />
        <path d="M0 20 L20 35 L40 20 L20 5 Z" stroke="currentColor" strokeWidth="1" fill="none" />
        <path d="M80 20 L60 5 L40 20 L60 35 Z" stroke="currentColor" strokeWidth="1" fill="none" />
      </pattern>
      <rect x="0" y="0" width="100%" height="40" fill="url(#kolam-divider)" />
    </svg>
  );
}

export function KolamBackground({ className, opacity = 0.04, ...props }: KolamProps) {
  return (
    <svg 
      width="100%" 
      height="100%" 
      xmlns="http://www.w3.org/2000/svg"
      className={`absolute inset-0 pointer-events-none ${className || ''}`}
      style={{ opacity }}
      {...props}
    >
      <pattern id="kolam-bg" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
        <circle cx="20" cy="20" r="1.5" fill="currentColor" />
        <circle cx="60" cy="20" r="1.5" fill="currentColor" />
        <circle cx="100" cy="20" r="1.5" fill="currentColor" />
        
        <circle cx="20" cy="60" r="1.5" fill="currentColor" />
        <circle cx="60" cy="60" r="1.5" fill="currentColor" />
        <circle cx="100" cy="60" r="1.5" fill="currentColor" />
        
        <circle cx="20" cy="100" r="1.5" fill="currentColor" />
        <circle cx="60" cy="100" r="1.5" fill="currentColor" />
        <circle cx="100" cy="100" r="1.5" fill="currentColor" />

        <path d="M60 20 C 80 20, 100 40, 100 60 C 100 80, 80 100, 60 100 C 40 100, 20 80, 20 60 C 20 40, 40 20, 60 20 Z" stroke="currentColor" strokeWidth="0.5" fill="none" />
        <path d="M60 30 L90 60 L60 90 L30 60 Z" stroke="currentColor" strokeWidth="0.5" fill="none" />
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#kolam-bg)" />
    </svg>
  );
}
