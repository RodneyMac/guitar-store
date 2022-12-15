import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { clearClient } from "../features/userSlice";

const PurchaseConfirmation = () => {
  const user = useSelector((state) => state.user.userItem);

  const dispatch = useDispatch();

  const handleClearClient = () => {
    dispatch(clearClient());
  };

  return (
    <div className="container">
      <h2 className="text-center mt-4 text-info">Confirmación de su compra</h2>
      {user.map((item) => (
        <div key={item.id} className="text-center mt-5">
          <h2 className="text-warning">
            Número de comprobante:<div className="text-info">{item.id}</div>
          </h2>
          <h1 className="text-warning mt-5">
            Muchas gracias por su compra {item.customerName}!
          </h1>
        </div>
      ))}
      <div className="text-center mt-5">
        <Link to="/" className="btn btn-primary" onClick={handleClearClient}>
          Finalizar
        </Link>
      </div>
    </div>
  );
};

export default PurchaseConfirmation;
