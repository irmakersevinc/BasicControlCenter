import React, { useState, Fragment } from "react";

import {
  useLoadScript,
  GoogleMap,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

const DeviceStatusMap = ({handleLogout}) => {

  const [mapRef, setMapRef] = useState(null);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [markerMap, setMarkerMap] = useState({});
  const [xcenter, setCenter] = useState({ lat: 39.933365, lng: 32.859741 });
  const [zoom, setZoom] = useState(5);
  const [clickedLatLng, setClickedLatLng] = useState(null);
  const [infoOpen, setInfoOpen] = useState(false);

  const loadHandler = (map) => {
    // Store a reference to the google map instance in state
    setMapRef(map);
  };

  

  // Load the Google maps scripts
  const { isLoaded } = useLoadScript({
    // Enter your own Google Maps API key
    googleMapsApiKey: "",
  });
    
  const mapContainerStyle = {
    width: "100vw",
    height: "100vh",
  };

  const options = {
    zoomControl: true,
  };

  const devices = [
    {
      lat: 39.933365,
      lng: 32.859741,
      capacity: "%50",
      name: "device1",
      error: "There is an error",
    },
    {
      lat: 41.00824,
      lng: 28.978359,
      capacity: "%30",
      name: "device2",
      error: "No error",
    },
    {
      lat: 39.766705,
      lng: 30.525631,
      capacity: "%10",
      name: "device3",
      error: "No error",
    },
  ];

  const center = {
    lat: 39.933365,
    lng: 32.859741,
  };

  const [markers, setMarkers] = React.useState(devices);
  const [selected, setSelected] = React.useState(null);

    return isLoaded ? (
      <Fragment>
        <nav class="navbar">
          <strong className="project-name">Cargom Express</strong>
          <button onClick={handleLogout} className="buttonLogout">Logout</button>
        </nav>
        <main>
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            // Do stuff on map initial laod
            onLoad={loadHandler}
            // Save the current center position in state
            onCenterChanged={() => setCenter(mapRef.getCenter().toJSON())}
            // Save the user's map click position
            onClick={(e) => setClickedLatLng(e.latLng.toJSON())}
            center={center}
            zoom={zoom}
            options={options}
            mapContainerStyle={{
              height: "calc(100vh - 70px)",
              width: "100%",
            }}
          >
            {devices.map((marker) => (
              <Marker
                position={{ lat: marker.lat, lng: marker.lng }}
                onClick={() => {
                  setSelected(marker);
                }}
              />
            ))}

            {selected ? (
              <InfoWindow
                position={{ lat: selected.lat, lng: selected.lng }}
                onCloseClick={() => {
                  setSelected(null);
                }}
              >
                <div>
                  <h2>Device Properties</h2>
                  <h2>name: {selected.name}</h2>
                  <h2>fill rate : {selected.capacity}</h2>
                  <h2>error condition : {selected.error}</h2>
                </div>
              </InfoWindow>
            ) : null}
          </GoogleMap>
        </main>
      </Fragment>
    ) : null;
}

export default DeviceStatusMap;