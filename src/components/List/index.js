import React, { useEffect, useState } from "react";
import Item from "../Item";

function List(props) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function getData() {
      const rawData = await fetch(
        `https://api.mercadolibre.com/sites/MLA/search?q=${props.busqueda}&limit=5`
      );
      const jsonData = await rawData.json();

      setItems(jsonData.results);
    }

    getData();
  }, [props.busqueda]);

  console.log(items);
  return (
    <div>
      {items.map((item, key) => {
        return <p>{item.title}</p>;
      })}
      {/* <Item /> */}
    </div>
  );
}

export default List;
