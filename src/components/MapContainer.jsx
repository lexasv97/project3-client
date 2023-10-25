import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const MapContainer = () => {
  const mapStyles = {
    height: '300px',
    width: '80%'
  };

  const defaultCenter = {
    lat: 25.761681,
    lng: -80.191788
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyCRTE2lYv81Hmqzw9SKKF2bRUflzjFQOTI">
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={10}
        center={defaultCenter}
      >
        {/* Add any markers or other components here */}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapContainer;