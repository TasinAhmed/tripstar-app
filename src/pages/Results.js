import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Rating from "../components/Rating";
import app from "../config/firebase";
import { GoogleMap, withGoogleMap, Marker } from "react-google-maps";

const Results = () => {
  const [places, setPlaces] = useState([]);

  const Map = withGoogleMap(() => {
    return (
      <div>
        <GoogleMap
          defaultZoom={2}
          center={{
            lat: 0,
            lng: 0
          }}
        >
          {places.map((x, key) => (
            <Marker
              key={key}
              position={{ lat: x.latitude, lng: x.longitude }}
            />
          ))}
        </GoogleMap>
      </div>
    );
  });

  useEffect(() => {
    app
      .firestore()
      .collection("location")
      .get()
      .then(querySnapshot => {
        let arr = [];
        querySnapshot.forEach(doc => {
          arr.push(doc.data());
        });
        setPlaces(arr);
      });
  }, []);
  return (
    <>
      <Helmet>
        <title>TripStar | Search Results</title>
      </Helmet>
      <div className="container results">
        <h4>Search Results</h4>
        <div className="result-map">
          <Map
            googleMapURL={`https://maps.googleapis.com/maps/api/js?&v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAkPoWjQ7YoLAoE_kIr1y6w9ORSDs_RLa0`}
            loadingElement={<div style={{ height: "100%" }}></div>}
            containerElement={<div style={{ height: `100%` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        </div>
        {places.map((place, key) => (
          <Rating key={key} loc={place} review={place.description} />
        ))}
      </div>
    </>
  );
};

export default Results;
