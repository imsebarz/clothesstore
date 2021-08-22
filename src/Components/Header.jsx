import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../assets/styles/components/header.scss";

const Header = () => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);

  const history = useHistory();

  const [sideDisplay, setSideDisplay] = useState("-100%");
  const [isOpen, setIsOpen] = useState("closed");

  const toggleSidebar = () => {
    if (sideDisplay === "-100%") {
      setSideDisplay("0%");
      setIsOpen("open");
    } else {
      setSideDisplay("-100%");
      setIsOpen("closed");
    }
  };

  function GoSearch(query, loading) {
    setLoading(true);
    history.push({
      pathname: "/search-results",
      state: { query, loading },
    });
  }

  return (
    <div className="header-container">
      <div className="header">
        <div className={`hamburger ${isOpen}`} onClick={toggleSidebar}>
          <svg
            width="105"
            height="90"
            viewBox="0 0 105 90"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="hamburger">
              <path
                id="bottom"
                d="M10.5875 70.3995H94.5039C95.7861 70.3995 97.0558 70.6521 98.2405 71.1428C99.4251 71.6335 100.502 72.3527 101.408 73.2594C102.315 74.1661 103.034 75.2425 103.525 76.4271C104.016 77.6118 104.268 78.8815 104.268 80.1637C104.268 81.446 104.016 82.7157 103.525 83.9003C103.034 85.085 102.315 86.1614 101.408 87.0681C100.502 87.9748 99.4251 88.694 98.2405 89.1847C97.0558 89.6754 95.7861 89.928 94.5039 89.928H10.5875C9.30528 89.928 8.03558 89.6754 6.85093 89.1847C5.66628 88.694 4.58988 87.9748 3.68318 87.0681C2.77649 86.1614 2.05726 85.085 1.56656 83.9003C1.07586 82.7157 0.823303 81.446 0.823303 80.1637C0.823303 78.8815 1.07586 77.6118 1.56656 76.4271C2.05726 75.2425 2.77649 74.1661 3.68318 73.2594C4.58988 72.3527 5.66628 71.6335 6.85093 71.1428C8.03558 70.6521 9.30528 70.3995 10.5875 70.3995V70.3995Z"
                fill="#E9E9E9"
              />
              <path
                id="middle"
                d="M10.5875 35.267H94.5039C95.7861 35.267 97.0558 35.5195 98.2405 36.0102C99.4251 36.5009 100.502 37.2201 101.408 38.1268C102.315 39.0335 103.034 40.1099 103.525 41.2946C104.016 42.4792 104.268 43.7489 104.268 45.0312C104.268 46.3134 104.016 47.5832 103.525 48.7678C103.034 49.9525 102.315 51.0289 101.408 51.9355C100.502 52.8422 99.4251 53.5615 98.2405 54.0522C97.0558 54.5429 95.7861 54.7954 94.5039 54.7954H10.5875C9.30528 54.7954 8.03558 54.5429 6.85093 54.0522C5.66628 53.5615 4.58988 52.8422 3.68318 51.9355C2.77649 51.0289 2.05726 49.9525 1.56656 48.7678C1.07586 47.5832 0.823303 46.3134 0.823303 45.0312C0.823303 43.7489 1.07586 42.4792 1.56656 41.2946C2.05726 40.1099 2.77649 39.0335 3.68318 38.1268C4.58988 37.2201 5.66628 36.5009 6.85093 36.0102C8.03558 35.5195 9.30528 35.267 10.5875 35.267V35.267Z"
                fill="#E9E9E9"
              />
              <path
                id="top"
                d="M10.5875 0.138149H94.5039C97.0935 0.138149 99.5771 1.16688 101.408 2.99803C103.239 4.82918 104.268 7.31275 104.268 9.90238C104.268 12.492 103.239 14.9756 101.408 16.8067C99.5771 18.6379 97.0935 19.6666 94.5039 19.6666H10.5875C7.9979 19.6666 5.51433 18.6379 3.68318 16.8067C1.85203 14.9756 0.823303 12.492 0.823303 9.90238C0.823303 7.31275 1.85203 4.82918 3.68318 2.99803C5.51433 1.16688 7.9979 0.138149 10.5875 0.138149V0.138149Z"
                fill="#E9E9E9"
              />
            </g>
          </svg>
        </div>
        <aside className="sidebar" style={{ left: sideDisplay }}>
          <ul className="aside-links">
            <li>
              <a href="">Hombre</a>
            </li>
            <li>
              <a href="">Mujer</a>
            </li>
            <li>
              <a href="">Niños</a>
            </li>
            <li>
              <a href="">Junior</a>
            </li>
            <li>
              <a href="">Accesorios</a>
            </li>
            <li>
              <a href="">Ofertas</a>
            </li>
          </ul>
        </aside>
        <Link to="/" className="logo">
          <h1>CLOTHESSTORE</h1>
        </Link>
        <div className="searchbar">
          <input
            type="text"
            placeholder="Buscar aqui tu producto"
            onKeyUp={(e) => setQuery(e.currentTarget.value)}
          />
          <button className="goSearch" onClick={() => GoSearch(query, loading)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="33.995"
              height="33.889"
              viewBox="0 0 33.995 33.889"
            >
              <path
                class="a"
                d="M37,35l-9.145-9.23a13.032,13.032,0,1,0-1.978,2l9.085,9.171A1.407,1.407,0,0,0,36.944,37,1.417,1.417,0,0,0,37,35ZM17.609,27.886a10.291,10.291,0,1,1,7.278-3.014A10.227,10.227,0,0,1,17.609,27.886Z"
                transform="translate(-4 -3.993)"
              />
            </svg>
          </button>
        </div>
        <div className="buttons">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="43.575"
            height="38.298"
            viewBox="0 0 43.575 38.298"
            id="cart"
          >
            <g transform="translate(0 0)">
              <g transform="translate(0 0)">
                <path
                  d="M14.039,56.533H37.192a1.277,1.277,0,0,0,1.227-.926l5.106-17.873A1.277,1.277,0,0,0,42.3,36.106H11.1L10.183,32a1.277,1.277,0,0,0-1.246-1H1.277a1.277,1.277,0,1,0,0,2.553H7.912l4.609,20.742a3.829,3.829,0,0,0,1.521,7.344H37.192a1.277,1.277,0,1,0,0-2.553H14.043a1.276,1.276,0,0,1,0-2.553ZM40.606,38.66,36.229,53.979H15.067l-3.4-15.319Z"
                  transform="translate(0 -31)"
                />
                <path
                  d="M150,394.83a3.83,3.83,0,1,0,3.83-3.83A3.834,3.834,0,0,0,150,394.83Zm3.83-1.277a1.277,1.277,0,1,1-1.277,1.277A1.278,1.278,0,0,1,153.83,393.553Z"
                  transform="translate(-137.234 -360.361)"
                />
                <path
                  d="M362,394.83a3.83,3.83,0,1,0,3.83-3.83A3.834,3.834,0,0,0,362,394.83Zm3.83-1.277a1.277,1.277,0,1,1-1.277,1.277A1.278,1.278,0,0,1,365.83,393.553Z"
                  transform="translate(-331.191 -360.361)"
                />
              </g>
            </g>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="38.11"
            height="38.128"
            viewBox="0 0 38.11 38.128"
            id="user"
          >
            <g transform="translate(0 0)">
              <g transform="translate(0 0)">
                <path
                  d="M600.575,67.984a10.267,10.267,0,1,1,12.095-.011c.118.052.218.1.321.141a18.912,18.912,0,0,1,12.451,15.052,19.287,19.287,0,0,1,.221,2.736,1.456,1.456,0,0,1-1.6,1.633q-6.185.005-12.37,0l-22.312,0c-1.32,0-1.84-.52-1.826-1.825A19.088,19.088,0,0,1,600.115,68.17C600.257,68.119,600.4,68.057,600.575,67.984Zm-9.981,16.595h32.033a16.082,16.082,0,0,0-32.033,0Zm16.067-32.237a7.331,7.331,0,1,0,7.282,7.354A7.333,7.333,0,0,0,606.661,52.342Z"
                  transform="translate(-587.556 -49.411)"
                />
              </g>
            </g>
          </svg>
          <span className="items">1</span>
          <button className="login">Iniciar Sesion</button>
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
