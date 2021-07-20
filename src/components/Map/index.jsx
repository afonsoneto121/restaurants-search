import React from "react";
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setRestaurants, setRestaurant } from "../../redux/actions/actionMap";


export const MapContainer = (props) => {
    const dispatch = useDispatch();
    const { restaurants } = useSelector((state) => state.restaurant);

    const [map, setMap] = useState(null)
    const { google, query, placeId } = props;
    useEffect(() => {
        if (query) {
            searchByQuery(query);
        }
    }, [query]);
    useEffect(() => {
        if (placeId) {
            getRestaurantById(placeId);
        }
    }, [placeId]);
    function searchNearBy(map, center) {
        const service = new google.maps.places.PlacesService(map);
        const request = {
            location: center,
            radius: '20000',
            type: ['restaurant']
        };
        service.nearbySearch(request, (result, status) => {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                dispatch(setRestaurants(result));
            }
        });
    }
    function onMapReady(_, map) {
        setMap(map);
        searchNearBy(map, map.center)
    }
    function searchByQuery(query) {
        const service = new google.maps.places.PlacesService(map);
        const request = {
            location: map.center,
            radius: '200',
            type: ['restaurant'],
            query,
        };
        service.textSearch(request, (result, status) => {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                dispatch(setRestaurants(result));
            }
        });
    }
    function getRestaurantById(placeId) {
        const service = new google.maps.places.PlacesService(map);
        const request = {
            placeId: placeId,
            filds: ['name', 'opening_hours', 'formatted_address', 'formatted_phone_number']
        };
        service.getDetails(request, (result, status) => {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                dispatch(setRestaurant(result));
            }
        });
    }
    return (
        <Map google={google}
            centerAroundCurrentLocation={true}
            onReady={onMapReady}
            onRecenter={onMapReady}
            {...props}
        >
            {restaurants.map((value) => (
                <Marker key={value.place_id}
                    name={value.name}
                    position={{
                        lat: value.geometry.location.lat(),
                        lng: value.geometry.location.lng()
                    }}
                />
            ))}

        </Map>
    )
}

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    language: 'pt-BR',
})(MapContainer)