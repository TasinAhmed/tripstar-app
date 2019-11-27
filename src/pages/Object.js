import React from "react";
import CNTower from "../images/CN.jpeg";

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
    </div>
  );
};

export default Object;
