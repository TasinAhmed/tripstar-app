import React, { useState, useContext, useCallback } from "react";
import { FaUserCircle } from "react-icons/fa";
import { Rating } from "@material-ui/lab";
import { AuthContext } from "../config/auth";
import app from "../config/firebase";
import { useHistory } from "react-router-dom";

const RevWrite = ({ id }) => {
  const [star, setStar] = useState(0);
  const [title, setTitle] = useState("");
  const [review, setReview] = useState("");

  const { currentUser } = useContext(AuthContext);
  let history = useHistory();

  const submitHandler = useCallback(async e => {
    e.preventDefault();

    if (star !== 0 && title !== "" && review !== "") {
      app
        .firestore()
        .collection("review")
        .add({
          user_id: currentUser.uid,
          title: title,
          review: review,
          rating: star,
          location_id: id,
          time: new Date().toLocaleString()
        })
        .then(() => {
          history.push("/");
          history.push(`/object/${id}`);
        });
    }
  });

  return (
    <div className="item-rev-cont">
      <div className="rev-write card">
        <div className="user-info">
          <FaUserCircle />
          <div className="rev-name">Tasin</div>
        </div>
        <form className="rev-right">
          <input
            type="text"
            placeholder="Title of your review"
            className="rev-title form-control"
            onChange={e => setTitle(e.target.value)}
            required
          />
          <div className="star-cont">
            <Rating
              size="small"
              value={star}
              onChange={(_, value) => setStar(value)}
            />
          </div>
          <textarea
            placeholder="Your review"
            className="user-rev form-control"
            onChange={e => setReview(e.target.value)}
            required
          />
          <button className="btn btn-primary" onClick={submitHandler}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default RevWrite;
