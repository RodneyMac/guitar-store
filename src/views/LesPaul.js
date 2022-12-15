import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";
import { useNavigate } from "react-router-dom";

const LesPaul = () => {
  const data = useSelector((state) => state.cart.guitars);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    navigate("/cart");
  };

  return (
    <div>
      <h2 className="mt-4 text-info text-center">Les Paul</h2>
      <div className="mt-4">
        <div className="d-flex justify-content-center align-items-center mb-5">
          <div className="row mx-5">
            {data
              .filter((item) => item.model === "Les Paul")
              .map((item) => (
                <div key={item.id} className="col-md-6 mt-4" role="button">
                  <div className="d-flex flex-column align-items-center border rounded p-3">
                    <img
                      src={item.guitarImg}
                      alt={item.model}
                      className="w-100"
                    />
                    <div className="text-info mt-1">{item.title}</div>
                    <div className="text-info">{item.model}</div>
                    <div className="text-warning">USD {item.price}</div>
                    <button
                      className="btn btn-primary mt-2"
                      onClick={() => handleAddToCart(item)}
                    >
                      Agregar
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LesPaul;
