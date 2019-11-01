import React from "react";
import image from "../images/200.png";
import { withRouter } from "react-router-dom";

const Rating = ({ history }) => {
  const showObject = () => {
    history.push("/");
  };

  return (
    <div className="card review-card" onClick={showObject}>
      <img src={image} alt="" />
      <p className="locTitle">CN Tower</p>
      <div className="rating">⭐⭐⭐⭐⭐</div>
      <div className="review">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi a quae,
        voluptatibus possimus officia facilis repellat quo unde sit natus
        doloribus, hic ut temporibus ullam repellendus repudiandae quasi debitis
        perspiciatis esse cumque molestias numquam rem odio. Sunt, voluptate
        nemo ab similique rem saepe quod aut dolorem maiores quam obcaecati
        excepturi?
      </div>
    </div>
  );
};

export default withRouter(Rating);
