import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { paidProducts } from "../features/cartSlice";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { addUser } from "../features/userSlice";

const Checkout = () => {
  const cart = useSelector((state) => state.cart);

  const [customer, setCustomer] = useState({
    customerName: "",
    customerEmail: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCustomer({
      ...customer,
      [e.target.name]: e.target.value,
    });
  };

  const handlePaidProduct = (e) => {
    e.preventDefault();

    dispatch(
      addUser({
        ...customer,
        id: uuid(),
      })
    );

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
            name="customerName"
            className="form-control"
            autoFocus
            onChange={handleChange}
            value={customer.customerName}
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            placeholder="Email"
            name="customerEmail"
            className="form-control"
            onChange={handleChange}
            value={customer.customerEmail}
          />
        </div>
        <div className="text-center mt-5">
          <button className="btn btn-primary" onClick={handlePaidProduct}>
            Confirmar Pago
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
