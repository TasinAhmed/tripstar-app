import React, { useState, useEffect, useContext } from "react";
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../config/auth";
import app from "../config/firebase";
import { Rating } from "@material-ui/lab";

export const Review = ({ review }) => {
  const { currentUser } = useContext(AuthContext);
  const [user, setUser] = useState("");

  useEffect(() => {
    app
      .firestore()
      .collection("user")
      .where("user_id", "==", currentUser.uid)
      .get()
      .then(querySnapshot => {
        setUser(querySnapshot.docs[0].data());
      });
  }, []);

  return (
    <div className="show-rev card">
      <div className="user-info">
        <FaUserCircle />
        <div className="rev-name">{user.f_name}</div>
      </div>
      <div className="rev-right">
        <div className="title-rev">{review.title}</div>
        <div className="star-cont">
          <Rating size="small" value={review.rating} readOnly />
        </div>
        <div className="description-rev">{review.review}</div>
      </div>
    </div>
  );
};

export default Review;
