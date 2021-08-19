import React from "react";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header">
        <h1>CLOTHESSTORE</h1>
        <div className="searchbar">
          <input type="text" placeholder="Buscar aqui tu producto" />
          <p>🔍</p>
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
