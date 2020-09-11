import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";

function Item(props) {
  console.log(props);
  return (
    <>
      
        <div className="itemContainer">
          <div className="thumbnailContainer">
            <img className="thumbnail" src={props.img} />
          </div>
          <div className="textContainer">
            <p>${props.price}</p>
            <p className="title">{props.title}</p>
          </div>
        </div>
      
    </>
  );
}

export default Item;
