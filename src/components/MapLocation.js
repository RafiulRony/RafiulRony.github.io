import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const LeafletMap = () => {
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    setMapLoaded(true);
  }, []);

  const DynamicMapContainer = dynamic(() =>
    import('react-leaflet').then((mod) => mod.MapContainer),
    {
      ssr: false, // Prevents rendering on the server-side
    }
  );

  const DynamicTileLayer = dynamic(() =>
    import('react-leaflet').then((mod) => mod.TileLayer),
    {
      ssr: false,
    }
  );

  const DynamicMarker = dynamic(() =>
    import('react-leaflet').then((mod) => mod.Marker),
    {
      ssr: false,
    }
  );

  const DynamicPopup = dynamic(() =>
    import('react-leaflet').then((mod) => mod.Popup),
    {
      ssr: false,
    }
  );

  return mapLoaded ? (
    <DynamicMapContainer
      center={[51.505, -0.09]}
      zoom={13}
      style={{ height: '400px', width: '100%' }}
    >
      <DynamicTileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <DynamicMarker position={[51.505, -0.09]}>
        <DynamicPopup>A popup for your marker.</DynamicPopup>
      </DynamicMarker>
    </DynamicMapContainer>
  ) : null;
};

export default LeafletMap;
