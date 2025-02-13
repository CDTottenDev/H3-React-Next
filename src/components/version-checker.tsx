'use client';

import { useEffect } from 'react';

export const VersionChecker = () => {
  useEffect(() => {
    const checkVersion = async () => {
      const currentVersion = await fetch('/version.txt?v=' + Date.now())
        .then(res => res.text());
        
      if(localStorage.getItem('appVersion') !== currentVersion) {
        localStorage.setItem('appVersion', currentVersion);
        window.location.reload();
      }
    };
    
    checkVersion();
  }, []);

  return null; // This component doesn't render anything
}; 