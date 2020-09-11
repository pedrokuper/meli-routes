import React, { useEffect, useState } from "react";
import Item from "../Item";
import "./style.scss";

function List(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getData() {
      const rawData = await fetch(
        `https://api.mercadolibre.com/sites/MLA/search?q=${props.busqueda}&limit=15`
      );
      const jsonData = await rawData.json();

      setProducts(jsonData.results);
    }
    console.log(products);
    getData();
  }, [props.busqueda]);

  return (
    <div className="mainContainer">
      {products.map((product, key) => {
        return (
          <a href={product.permalink}>
            <Item
              key={key}
              img={product.thumbnail}
              price={product.price}
              title={product.title}
            />
          </a>
        );
      })}
    </div>
  );
}

export default List;
