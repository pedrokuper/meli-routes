import React, { useEffect, useState } from "react";

function List(props) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function getData() {
      const rawData = await fetch(
        `https://api.mercadolibre.com/sites/MLA/search?q=${props.busqueda}`
      );
      const jsonData = await rawData.json();
      console.log(jsonData);
    }

    getData();
  });

  return <div>List</div>;
}

export default List;
