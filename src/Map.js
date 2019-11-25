import React from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker
} from "react-google-maps";

const Map = ({ lat, lng }) => {
  return (
    <div>
      <GoogleMap defaultZoom={13} defaultCenter={{ lat: lat, lng: lng }}>
        <Marker position={{ lat: lat, lng: lng }} />
      </GoogleMap>
    </div>
  );
};

export default withScriptjs(withGoogleMap(Map));
