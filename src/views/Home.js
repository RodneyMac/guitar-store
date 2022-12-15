import React from "react";
import { Link } from "react-router-dom";
import Carousel from "../components/Carousel";

const Home = () => {
  return (
    <div>
      <Carousel />
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-12 text-center">
            <div className="card- bg-transparent border border-info rounded mt-4">
              <img
                src="https://res.cloudinary.com/de1xrxlcz/image/upload/v1666398849/guitars/g6_oiizun.png"
                className="p-4"
                alt="Stratocaster"
                width="300"
              />
              <div className="card-body m-auto mb-4">
                <Link
                  to="/stratocaster"
                  className="text-decoration-none text-warning"
                >
                  Stratocaster
                </Link>
              </div>
            </div>
          </div>
          {/* <div className="col-md-6"></div> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
