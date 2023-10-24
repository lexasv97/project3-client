import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const MapContainer = () => {
  const mapStyles = {
    height: '300px',
    width: '80%'
  };

  const defaultCenter = {
    lat: -34.397,
    lng: 150.644
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