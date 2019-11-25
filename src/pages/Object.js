import React from "react";
import CNTower from "../images/CN.jpeg";
import Map from "../Map";

const Object = () => {
  return (
    <div className="container object">
      <img className="CN" src={CNTower} alt="" />
      <div className="object-title">CN Tower</div>
      <div className="description">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae
        temporibus omnis assumenda in corporis eius maiores id facere quam
        officia soluta dolores, voluptates, reprehenderit quidem voluptate aut
        doloremque dicta alias nesciunt, veritatis vitae quis dignissimos. Amet
        veniam, vel sit totam ipsum aliquam reiciendis unde minus animi tempore
        laborum sunt eveniet.
      </div>
      <div className="result-map">
        <Map
          googleMapURL={
            "https://maps.googleapis.com/maps/api/js?&v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAkPoWjQ7YoLAoE_kIr1y6w9ORSDs_RLa0"
          }
          loadingElement={<div style={{ height: "100%" }}></div>}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    </div>
  );
};

export default Object;
