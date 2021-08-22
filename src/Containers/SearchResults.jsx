import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Product from "../Components/Product";
import { getProducts } from "../utils";

const SearchResults = () => {
  const location = useLocation();
  const query = location.state.query;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts(query).then((res) => {
      setProducts(res.results);
    });
  }, [query]);

  return (
    <section className="products-container">
      {products?.map((item) => (
        <Product
          title={item.title}
          key={item.id}
          img={item.thumbnail}
        ></Product>
      ))}
    </section>
  );
};

export default SearchResults;
