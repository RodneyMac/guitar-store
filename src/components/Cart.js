import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  removeFromCart,
  decreaseCart,
  clearCart,
  getTotals,
} from "../features/cartSlice";

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleDecreaseCart = (product) => {
    dispatch(decreaseCart(product));
  };

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="container d-flex flex-column justify-content-center align-items-center mt-2">
      <h2 className="text-center mt-4 text-info">Cart</h2>
      {cart.cartItems.length === 0 ? (
        <div>
          <h1 className="text-warning mt-5">Su carrito está vacío</h1>
        </div>
      ) : (
        <div>
          <div className="row">
            {cart.cartItems &&
              cart.cartItems.map((item) => (
                <div className="w-50 p-2 mt-3" key={item.id}>
                  <div className="d-flex flex-column align-items-center">
                    <img
                      src={item.guitarImg}
                      alt={item.model}
                      className="w-50 rounded"
                    />
                    <div className="text-info mt-1">{item.model}</div>
                    <div className="text-warning text-center">
                      USD {item.price}
                    </div>
                    <div className="text-primary mx-2 mt-4">Cantidad:</div>
                    <div className="d-flex align-items-center">
                      <button
                        className="btn btn-primary"
                        onClick={() => handleAddToCart(item)}
                      >
                        +
                      </button>
                      <div className="text-info mx-4">{item.cartQuantity}</div>
                      <button
                        className="btn btn-primary"
                        onClick={() => handleDecreaseCart(item)}
                      >
                        -
                      </button>
                    </div>
                    <div className="d-flex my-2 text-info">
                      Total:
                      <div className="text-warning mx-2">
                        $ {item.price * item.cartQuantity}
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <button
                      className="btn btn-danger my-2"
                      onClick={() => handleRemoveFromCart(item)}
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              ))}
          </div>
          <div className="d-flex justify-content-center my-4">
            <button
              className="btn btn-outline-primary mx-2"
              onClick={handleClearCart}
            >
              Vaciar carrito
            </button>
            <div className="d-flex align-items-center">
              <div className="d-flex align-items-center">
                <span className="text-info">Sub Total:</span>
                <span className="text-warning mx-2">
                  {cart.cartTotalAmount}
                </span>
              </div>
              <Link to="/checkout" className="btn btn-outline-primary mx-4">
                Verificar pago
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
