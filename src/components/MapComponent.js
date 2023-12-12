import React, { useEffect } from 'react';
import Head from 'next/head';
import L from 'leaflet';
import Script from 'next/script';

const MapComponent = () => {
  useEffect(() => {
    let map;
    if (typeof window !== 'undefined') {
      // Check if map container exists
      if (!document.getElementById('map')) {
        // If map container doesn't exist, create a new map
        map = L.map('map').setView([51.505, -0.09], 13);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: 'Map data &copy; OpenStreetMap contributors',
        }).addTo(map);
      }
    }
  }, []);

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
          crossOrigin=""
        />
        
      </Head>
      <div id="map" style={{ height: '400px', width: '100%' }}></div>

      <Script
          src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
          integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
          crossOrigin=""
        ></Script>
    </>
  );
};

export default MapComponent;
