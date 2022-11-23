import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import "./Map.css"
mapboxgl.accessToken = 'pk.eyJ1IjoicHJhbmF2Y2hhdWhhbiIsImEiOiJjbDZyeTB0YTUwNGFjM2RxanNla2Nkb2V6In0.w1-WyT5Nfxi0mO2xMP63kw';
function Map() {
const mapContainer = useRef(null);
const map = useRef(null);
const [lng, setLng] = useState(-70.9);
const [lat, setLat] = useState(42.35);
const [zoom, setZoom] = useState(9);
useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
    container: mapContainer.current,
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [lng, lat],
    zoom: zoom
    });
    });
  return (
    <div>
<div ref={mapContainer} className="map-container" />
    </div>
  )
}

// AIzaSyA4sBs3w53fGWEJEm-k2fKViHjhhJbT6D0

export default Map