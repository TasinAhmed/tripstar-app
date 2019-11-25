import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Rating from "../components/Rating";
import Map from "../Map";

const Results = () => {
  const [selected, setSelected] = useState(null);

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
        <Rating location="CN Tower" rating="4/5" review="Loved It!" />
        <Rating location="CN Tower" rating="4/5" review="Loved It!" />
        <Rating location="CN Tower" rating="4/5" review="Loved It!" />
        <Rating location="CN Tower" rating="4/5" review="Loved It!" />
        <Rating location="CN Tower" rating="4/5" review="Loved It!" />
      </div>
    </>
  );
};

export default Results;
