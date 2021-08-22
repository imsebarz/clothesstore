import React, { useEffect, useState } from "react";
import FSection from "../Components/FSection";
import "../assets/styles/containers/home.scss";
import ModaInfantil from "../assets/img/categorias-destacadas-moda-infantil.png";
import Proteccion from "../assets/img/categorias-destacadas-proteccion.png";
import Banner from "../assets/img/banner-principal-desktop.png";
import Product from "../Components/Product";
import { getProducts } from "../utils";
import Loading from "../Components/Loading";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(async () => {
    const res = await getProducts("", 30);
    setIsLoading(false);
    let randomProducts = [];
    for (let i = 0; i < 4; i++) {
      let product = res.results[Math.floor(Math.random() * 30)];
      randomProducts.push(product);
    }
    setProducts(randomProducts);
  }, []);

  return (
    <div className="home">
      <section className="banner">
        <img src={Banner} alt="" />
      </section>
      <section className="featured-sections">
        <FSection title={"Moda infantil"} img={ModaInfantil} />
        <FSection title={"Protección"} img={Proteccion} />
      </section>
      <section className="products">
        <h2>PRODUCTOS MÁS BUSCADOS</h2>
        <div className="products-container">
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
        </div>
      </section>
    </div>
  );
};

export default Home;
