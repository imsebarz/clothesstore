import React from "react";
import FSection from "../Components/FSection";
import "../assets/styles/containers/home.scss";
import ModaInfantil from "../assets/img/categorias-destacadas-moda-infantil.png";
import Proteccion from "../assets/img/categorias-destacadas-proteccion.png";
import Banner from "../assets/img/banner-principal-desktop.png";
import Product from "../Components/Product";

const Home = () => {
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
        <h2>Productos más buscados</h2>
        <div className="products-container">
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </section>
    </div>
  );
};

export default Home;
