import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import List from "../../components/List";

function Shop() {
  const [searchParams, setSearchParams] = useState("");

  function handleCallback(searchParams) {
    setSearchParams(searchParams);
  }
  return (
    <>
      <Navbar handleCallback={handleCallback} />
      <List busqueda={searchParams} />
    </>
  );
}

export default Shop;
