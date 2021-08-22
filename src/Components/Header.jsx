import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../assets/styles/components/header.scss";

const Header = () => {
  const [query, setQuery] = useState("");
  const history = useHistory();

  function GoSearch(query) {
    history.push({
      pathname: "/search-results",
      state: { query },
    });
    console.log(query);
  }

  return (
    <div className="header-container">
      <div className="header">
        <Link to="/">
          <h1>CLOTHESSTORE</h1>
        </Link>
        <div className="searchbar">
          <input
            type="text"
            placeholder="Buscar aqui tu producto"
            onKeyUp={(e) => setQuery(e.currentTarget.value)}
          />
          <button onClick={() => GoSearch(query)}>🔍</button>
        </div>
        <div className="buttons">
          <p>🛒</p>
          <p>🙍‍♂️</p>
          <button>Iniciar Sesion</button>
        </div>
      </div>
      <div className="navbar">
        <ul>
          <li>Hombre</li>
          <li>Mujer</li>
          <li>Niños</li>
          <li>Junior</li>
          <li>Accesorios</li>
          <li>Ofertas</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
