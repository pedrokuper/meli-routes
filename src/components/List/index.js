import React, { useEffect, useState } from "react";
import Item from "../Item";

function List(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getData() {
      const rawData = await fetch(
        `https://api.mercadolibre.com/sites/MLA/search?q=${props.busqueda}&limit=5`
      );
      const jsonData = await rawData.json();

      setProducts(jsonData.results);
    }
    console.log(products);
    getData();
  }, [props.busqueda]);

  return (
    <div>
      {products.map((product, key) => {
        return (
          <Item
            key={key}
            img={product.thumbnail}
            price={product.price}
            title={product.title}
          />
        );
      })}
    </div>
  );
}

export default List;
