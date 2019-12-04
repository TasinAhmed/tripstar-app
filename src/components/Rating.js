import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import app from "../config/firebase";
import { Rating as Stars } from "@material-ui/lab";

const Rating = ({ history, loc, review }) => {
  const showObject = () => {
    history.push(`/object/${loc.location_id}`);
  };

  const [image, setImage] = useState();

  useEffect(() => {
    app
      .firestore()
      .collection("images")
      .where("place_id", "==", loc.location_id)
      .get()
      .then(querySnapshot => {
        setImage(querySnapshot.docs[0].data().url);
      });
  }, []);

  return (
    <div className="card review-card" onClick={showObject}>
      <img src={image} alt="" />
      <p className="locTitle">{loc.name}</p>
      <Stars value={loc.rating} size="small" precision={0.1} readOnly />
      <div className="review">{review}</div>
    </div>
  );
};

export default withRouter(Rating);
