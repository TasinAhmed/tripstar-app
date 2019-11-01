import React from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker
} from "react-google-maps";

const Map = () => {
  return (
    <div>
      <GoogleMap
        defaultZoom={13}
        defaultCenter={{ lat: 43.642567, lng: -79.387054 }}
      >
        <Marker position={{ lat: 43.642567, lng: -79.387054 }} />
      </GoogleMap>
    </div>
  );
};

export default withScriptjs(withGoogleMap(Map));
