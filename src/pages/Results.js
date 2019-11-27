import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Rating from "../components/Rating";
import app from "../config/firebase";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";

const Results = () => {
  const [places, setPlaces] = useState([]);
  const [latArr, setLatArr] = useState([]);
  const [lngArr, setLngArr] = useState([]);

  const Map = withScriptjs(
    withGoogleMap(({ lat, lng }) => {
      return (
        <div>
          <GoogleMap
            defaultZoom={2}
            defaultCenter={{ lat: lat, lng: lng }}
            center={{
              lat: (Math.max(...latArr) + Math.min(...latArr)) / 2.0,
              lng: (Math.max(...lngArr) + Math.min(...lngArr)) / 2.0
            }}
          >
            {places.map(x => (
              <Marker position={{ lat: x.latitude, lng: x.longitude }} />
            ))}
          </GoogleMap>
        </div>
      );
    })
  );

  useEffect(() => {
    app
      .firestore()
      .collection("location")
      .get()
      .then(querySnapshot => {
        let arr = [];
        let lat = [];
        let lng = [];
        querySnapshot.forEach(doc => {
          arr.push(doc.data());
          lat.push(doc.data().latitude);
          lng.push(doc.data().longitude);
        });
        setPlaces(arr);
        setLatArr(lat);
        setLngArr(lng);
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
            lat={43.642567}
            lng={-79.387054}
          />
        </div>
        {places.map(place => (
          <Rating loc={place} review={place.description} />
        ))}
      </div>
    </>
  );
};

export default Results;
