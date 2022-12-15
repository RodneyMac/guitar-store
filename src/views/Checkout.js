import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { paidProducts } from "../features/cartSlice";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const cart = useSelector((state) => state.cart);

  const generateId = () => {
    let generate = Math.floor(Math.random() * 10000);
    return generate;
  };

  const [clientData, setClientData] = useState([]);
  const [customer, setCustomer] = useState({});

  const handleChange = (e) => {
    setCustomer({
      ...customer,
      [e.target.name]: e.target.value,
    });
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlePaidProduct = (e) => {
    e.preventDefault();
    let newUser = { ...customer, id: generateId() };
    setClientData((state) => [...state, newUser]);
    setCustomer({});
    console.log(clientData);
    console.log(`Total compra: ${cart.cartTotalAmount}`, newUser);
    console.log("Producto/s:", cart.cartItems);

    dispatch(paidProducts());
    navigate("/purchase-confirmation");
  };

  return (
    <div className="container d-flex flex-column justify-content-center align-items-center">
      <div className="d-flex flex-column justify-content-center align-items-center mb-3">
        <div>
          <h2 className="text-warning text-center">
            Producto/s seleccinado/s:
          </h2>
          {cart.cartItems.map((item) => (
            <div
              key={item.id}
              className="d-flex justify-content-center align-items-center"
            >
              <div className="d-flex justify-content-center text-warning fs-5">
                {item.cartQuantity}
                <div className="text-info mx-3 fs-5">{item.title}</div>
                <div className="text-info mx-1 fs-5">{item.model}</div>
                <div className="text-info mx-2 fs-5 d-flex">
                  <div className="text-warning mx-2">USD</div>
                  {item.price}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="d-flex align-items-center text-info fs-4">
          Total:
          <div className="text-warning mx-2 fs-4">$ {cart.cartTotalAmount}</div>
        </div>
      </div>
      <div className="w-50">
        <div className="mb-3">
          <input
            type="text"
            placeholder="Nombre"
            id="nombre"
            name="nombre"
            className="form-control"
            autoFocus
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            placeholder="Email"
            id="email"
            name="email"
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <div className="text-center">
          <button className="btn btn-primary" onClick={handlePaidProduct}>
            Confirmar Pago
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
