const script = document.getElementById('google')

script.src = `https://maps.googleapis.com/maps/api/js?key=${import.meta.env.VITE_GOOGLE_MAPS_PLACES_API_KEY}&libraries=places`