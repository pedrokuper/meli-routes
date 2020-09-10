import React from "react";

function Item(props) {
  console.log(props);
  return (
    <>
      <div>
        <div>
          <img src={props.img} />
        </div>
        <div>
          <p>{props.price}</p>
          <p>{props.title}</p>
        </div>
      </div>
    </>
  );
}

export default Item;
