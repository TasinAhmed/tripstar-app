import React, { useEffect, useState } from "react";
import app from "../config/firebase";
import { Rating } from "@material-ui/lab";
import { GoogleMap, withGoogleMap, Marker } from "react-google-maps";
import WriteReview from "../components/RevWrite";
import Review from "../components/Review";

const Item = ({ id }) => {
  const [image, setImage] = useState();
  const [place, setPlace] = useState("");
  const [review, setReview] = useState([]);

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

    let arr = [];
    app
      .firestore()
      .collection("review")
      .where("location_id", "==", id)
      .get()
      .then(querySnapshot => {
        //setReview(querySnapshot.docs[0].data().url);
        querySnapshot.docs.map(x => arr.push(x.data()));
        setReview(arr);
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
          <Marker
            position={{ lat: place.latitude || 0, lng: place.longitude || 0 }}
          />
        </GoogleMap>
      </div>
    );
  });

  return (
    <div className="container item-place">
      <img className="place-img" src={image} alt="" />
      <div className="place-info">
        <div className="place-title">{place.name}</div>
        <Rating value={place.rating} readOnly precision={0.1} />
        <div className="description">{place.description}</div>
      </div>
      <div className="item-map">
        <Map
          googleMapURL={`https://maps.googleapis.com/maps/api/js?&v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_API_KEY}`}
          loadingElement={<div style={{ height: "100%" }}></div>}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
      <div className="item-rev-cont">
        <WriteReview id={id} />
        {review.map((x, key) => (
          <Review key={key} name="rate" review={x} />
        ))}
      </div>
    </div>
  );
};

export default Item;
