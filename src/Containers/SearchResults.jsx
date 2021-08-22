import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Loading from "../Components/Loading";
import Product from "../Components/Product";
import { getProducts } from "../utils";

const SearchResults = () => {
  const location = useLocation();
  const query = location.state.query;
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(location.state.loading);

  useEffect(async () => {
    const res = await getProducts(query, 12);
    setProducts(res.results);
    setIsLoading(false);

    return () => {
      setIsLoading(true);
    };
  }, [query]);

  return (
    <section className="products-container">
      {isLoading ? (
        <Loading />
      ) : (
        products?.map((item) => (
          <Product
            title={item.title}
            key={item.id}
            img={item.thumbnail}
            price={item.price}
          ></Product>
        ))
      )}
    </section>
  );
};

export default SearchResults;
