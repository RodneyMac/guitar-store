import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearClient } from "../features/userSlice";

const Navbar = () => {
  const { cartTotalQuantity } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const handleClearClient = () => {
    dispatch(clearClient());
  };

  return (
    <div className="mb-5">
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
          <div></div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 m-auto">
              <div className="m-auto d-flex">
                <Link
                  to="/"
                  className="btn btn-primary mx-2"
                  onClick={handleClearClient}
                >
                  Inicio
                </Link>
                <Link
                  to="/cart"
                  className="btn btn-primary mx-2 d-flex"
                  onClick={handleClearClient}
                >
                  Carrito:
                  <div className="text-warning mx-1">
                    <div className="">{cartTotalQuantity}</div>
                  </div>
                </Link>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
