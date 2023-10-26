import React, { useState } from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';

const LocationForm = ({ setLatitude, setLongitude, setLocation }) => {
  const [address, setAddress] = useState('');

  const handleAddressChange = (newAddress) => {
    setAddress(newAddress);
  };

  const handleSelect = async (newAddress) => {
    try {
      const results = await geocodeByAddress(newAddress);
      const latLng = await getLatLng(results[0]);
      console.log("RESULTS location ======>", results[0])
      // Update the state with the selected location's details, including latitude and longitude.
      setAddress(newAddress);
      setLocation(results[0].formatted_address);
      setLatitude(results[0].geometry.location.lat());
      setLongitude(results[0].geometry.location.lng());
    } catch (error) {
      console.error('Error selecting location:', error);
    }
  };

  return (
    //window.google.maps.places &&
    <div className='w-full'>
      <PlacesAutocomplete
        value={address}
        onChange={handleAddressChange}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div className='flex justify-center'>
            <input
              {...getInputProps({
                placeholder: 'location',
                className: 'location-search-input w-11/12 border border-slate-600 py-2 rounded-3xl px-3',
              })}
            />
            <ul className="autocomplete-dropdown-container overflow-hidden absolute w-5/12 rounded-bl-3xl rounded-br-3xl border-r border-l bg-white mt-7 mx-2 px-2">
              {loading && <div>Loading...</div>}
              {suggestions.map((suggestion) => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                return (
                  <li className='cursor-pointer border-gray-300 p-4 px-4 text-gray-700 border border-slate-600 my-1 hover:bg-indigo-200'
                    {...getSuggestionItemProps(suggestion, {
                      className,
                    })}
                  >
                    <span className='px-2 hover:bg-indigo-200 w-full'>{suggestion.description}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </PlacesAutocomplete>
    </div>
  );
};

export default LocationForm;