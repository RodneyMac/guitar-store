import React from "react";
import { useSelector } from "react-redux";

const Stratocaster = () => {
  const data = useSelector((state) => state.cart);

  return (
    <div>
      <h2 className="mt-4 text-info text-center">Stratocaster</h2>
      <div className="mt-4">
        <div className="d-flex justify-content-center align-items-center mb-5">
          <div className="row mx-5">
            {data
              .filter((item) => item.model === "Stratocaster")
              .map((item) => (
                <div key={item.id} className="col-md-6 mt-4" role="button">
                  <div className="d-flex flex-column align-items-center border rounded p-3">
                    <img
                      src={item.guitarImg}
                      alt={item.model}
                      className="w-100"
                    />
                    <div className="text-info mt-1">{item.model}</div>
                    <div className="text-warning">USD {item.price}</div>
                    <button className="btn btn-primary mt-2">Agregar</button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stratocaster;
