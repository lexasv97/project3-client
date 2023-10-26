import React from 'react';
import { GoogleMap, MarkerF, LoadScript } from '@react-google-maps/api';

const MapContainer = ({ lat, lng }) => {
    const mapStyles = {
        height: '300px',
        width: '80%'
    };

    let zoom = 14

    const serviceLocation = { lat: lat, lng: lng }

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        // This is just an example of getting and using the map instance!!! don't just blindly copy!
        // const bounds = new window.google.maps.LatLngBounds(serviceLocation);
        // map.fitBounds(bounds);

        map.setZoom(zoom)

        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    //   const defaultCenter = {
    //     lat: 25.761681,
    //     lng: -80.191788
    //   };

    return (
        // <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
        <GoogleMap
            mapContainerStyle={mapStyles}
            center={serviceLocation}
            onLoad={onLoad}
            onUnmount={onUnmount}
            zoom={zoom}
        >
            {/* Add any markers or other components here */}

            <MarkerF position={serviceLocation} title="Service location" />

        </GoogleMap>
        // </LoadScript>
    );
};

export default MapContainer;