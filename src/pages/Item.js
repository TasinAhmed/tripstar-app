import React, { useEffect, useState } from "react";
import app from "../config/firebase";
import { Rating } from "@material-ui/lab";
import { GoogleMap, withGoogleMap, Marker } from "react-google-maps";
import { FaUserCircle } from "react-icons/fa";

const Item = ({ id }) => {
  const [image, setImage] = useState();
  const [place, setPlace] = useState("");

  useEffect(() => {
    app
      .firestore()
      .collection("location")
      .where("location_id", "==", id)
      .get()
      .then(querySnapshot => {
        setPlace(querySnapshot.docs[0].data());
      });
    app
      .firestore()
      .collection("images")
      .where("place_id", "==", id)
      .get()
      .then(querySnapshot => {
        setImage(querySnapshot.docs[0].data().url);
      });
  }, []);

  const Map = withGoogleMap(() => {
    return (
      <div>
        <GoogleMap
          defaultZoom={15}
          center={{
            lat: place.latitude || 0,
            lng: place.longitude || 0
          }}
        >
          <Marker position={{ lat: place.latitude, lng: place.longitude }} />
        </GoogleMap>
      </div>
    );
  });

  return (
    <div className="container item-place">
      <img className="place-img" src={image} alt="" />
      <div className="place-info">
        <div className="place-title">{place.name}</div>
        <Rating value={5} readOnly />
        <div className="description">{place.description}</div>
      </div>
      <div className="item-map">
        <Map
          googleMapURL={`https://maps.googleapis.com/maps/api/js?&v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAkPoWjQ7YoLAoE_kIr1y6w9ORSDs_RLa0`}
          loadingElement={<div style={{ height: "100%" }}></div>}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
      <div className="item-rev-cont">
        <div className="item-rev card">
          <div className="user-info">
            <FaUserCircle />
            <div className="rev-name">Tasin</div>
          </div>
          <form className="rev-right">
            <input
              type="text"
              placeholder="Title of your review"
              className="rev-title form-control"
              required
            />
            <Rating size="small" />
            <textarea
              placeholder="Your review"
              className="user-rev form-control"
              required
            />
            <button className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Item;
