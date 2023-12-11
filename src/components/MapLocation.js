import React from 'react';
import dynamic from 'next/dynamic';

const MapWithNoSSR = dynamic(() => import('./MapComponent'), {
  ssr: false,
});

const MapLocation = () => {
  return <MapWithNoSSR />;
};

export default MapLocation;
