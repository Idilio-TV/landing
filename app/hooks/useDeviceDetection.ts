"use client";

import { useState, useEffect } from 'react';

export type DeviceType = 'ios' | 'android' | 'desktop';

interface DeviceInfo {
  type: DeviceType;
  isMobile: boolean;
  userAgent: string;
}

export function useDeviceDetection(): DeviceInfo {
  const [deviceInfo, setDeviceInfo] = useState<DeviceInfo>({
    type: 'desktop',
    isMobile: false,
    userAgent: ''
  });

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    
    // Check for iOS devices
    const isIOS = /iphone|ipad|ipod/.test(userAgent) || 
                  (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    
    // Check for Android devices
    const isAndroid = /android/.test(userAgent);
    
    // Determine device type
    let deviceType: DeviceType = 'desktop';
    if (isIOS) {
      deviceType = 'ios';
    } else if (isAndroid) {
      deviceType = 'android';
    }
    
    // Check if it's a mobile device
    const isMobile = isIOS || isAndroid || /mobile|tablet/.test(userAgent);
    
    setDeviceInfo({
      type: deviceType,
      isMobile,
      userAgent
    });
  }, []);

  return deviceInfo;
}
